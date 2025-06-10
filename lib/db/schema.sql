-- IG Behavioral Physics Database Schema
-- PostgreSQL/TimescaleDB schema for time-series behavioral metrics

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "timescaledb";

-- Organizations table
CREATE TABLE organizations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    domain VARCHAR(255) UNIQUE,
    industry VARCHAR(100),
    size VARCHAR(50), -- startup, smb, enterprise
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    settings JSONB DEFAULT '{}',
    subscription_tier VARCHAR(50) DEFAULT 'free', -- free, starter, pro, enterprise
    subscription_expires_at TIMESTAMP WITH TIME ZONE
);

-- Users table
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'viewer', -- viewer, analyst, admin
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE,
    settings JSONB DEFAULT '{}'
);

-- IG Metrics time-series table
CREATE TABLE ig_metrics (
    time TIMESTAMP WITH TIME ZONE NOT NULL,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    metric_type VARCHAR(50) NOT NULL, -- nexel, morrin, strune, pilor, kithara, soreth, voxel, quorr, threnn, zelith
    value DECIMAL(10, 4) NOT NULL,
    dimensions JSONB DEFAULT '{}', -- Additional dimensions for the metric
    confidence DECIMAL(3, 2) DEFAULT 1.0, -- Confidence score 0-1
    data_source VARCHAR(100), -- internal, api, scraping, manual
    metadata JSONB DEFAULT '{}'
);

-- Convert to hypertable for time-series optimization
SELECT create_hypertable('ig_metrics', 'time');

-- Create indexes for performance
CREATE INDEX idx_ig_metrics_org_type ON ig_metrics(organization_id, metric_type, time DESC);
CREATE INDEX idx_ig_metrics_dimensions ON ig_metrics USING GIN(dimensions);

-- Behavioral patterns table
CREATE TABLE behavioral_patterns (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    pattern_type VARCHAR(100) NOT NULL,
    severity VARCHAR(20) NOT NULL, -- low, medium, high, critical
    detected_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    confidence DECIMAL(3, 2) NOT NULL,
    evidence JSONB NOT NULL, -- Supporting data points
    recommendations JSONB DEFAULT '[]', -- Array of recommended interventions
    acknowledged BOOLEAN DEFAULT FALSE,
    acknowledged_by UUID REFERENCES users(id),
    acknowledged_at TIMESTAMP WITH TIME ZONE,
    resolved BOOLEAN DEFAULT FALSE,
    resolved_at TIMESTAMP WITH TIME ZONE
);

-- Interventions table
CREATE TABLE interventions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    pattern_id UUID REFERENCES behavioral_patterns(id),
    intervention_type VARCHAR(100) NOT NULL, -- the_naming, first_blood_build, drift_break, etc
    status VARCHAR(50) DEFAULT 'proposed', -- proposed, scheduled, in_progress, completed, cancelled
    scheduled_for TIMESTAMP WITH TIME ZONE,
    started_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE,
    outcome JSONB DEFAULT '{}',
    created_by UUID REFERENCES users(id),
    assigned_to UUID REFERENCES users(id)
);

-- Data sources configuration
CREATE TABLE data_sources (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    source_type VARCHAR(100) NOT NULL, -- slack, teams, jira, github, salesforce, etc
    connection_status VARCHAR(50) DEFAULT 'pending', -- pending, connected, error, disconnected
    credentials JSONB DEFAULT '{}', -- Encrypted credentials
    settings JSONB DEFAULT '{}',
    last_sync TIMESTAMP WITH TIME ZONE,
    sync_frequency_minutes INTEGER DEFAULT 60,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    error_message TEXT
);

-- Alerts configuration
CREATE TABLE alert_rules (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    metric_type VARCHAR(50) NOT NULL,
    condition JSONB NOT NULL, -- e.g., {"operator": ">", "value": 0.7, "duration_minutes": 60}
    severity VARCHAR(20) NOT NULL,
    enabled BOOLEAN DEFAULT TRUE,
    notification_channels JSONB DEFAULT '[]', -- email, slack, webhook
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_triggered TIMESTAMP WITH TIME ZONE
);

-- Alert history
CREATE TABLE alert_history (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    alert_rule_id UUID NOT NULL REFERENCES alert_rules(id) ON DELETE CASCADE,
    triggered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    metric_value DECIMAL(10, 4) NOT NULL,
    context JSONB DEFAULT '{}',
    notifications_sent JSONB DEFAULT '[]',
    acknowledged BOOLEAN DEFAULT FALSE,
    acknowledged_by UUID REFERENCES users(id),
    acknowledged_at TIMESTAMP WITH TIME ZONE
);

-- Audit log for compliance
CREATE TABLE audit_log (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(100),
    resource_id UUID,
    details JSONB DEFAULT '{}',
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Demo organizations for testing
CREATE TABLE demo_organizations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    scenario VARCHAR(100) NOT NULL, -- startup_strune, enterprise_pilor, growth_zelith
    base_metrics JSONB NOT NULL,
    timeline JSONB NOT NULL, -- Array of metric changes over time
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create materialized views for performance
CREATE MATERIALIZED VIEW current_ig_scores AS
SELECT 
    o.id as organization_id,
    o.name as organization_name,
    m.metric_type,
    m.value as current_value,
    m.time as last_updated,
    CASE 
        WHEN m.value > 0.8 THEN 'critical'
        WHEN m.value > 0.6 THEN 'high'
        WHEN m.value > 0.4 THEN 'medium'
        ELSE 'low'
    END as severity
FROM organizations o
CROSS JOIN LATERAL (
    SELECT DISTINCT ON (metric_type) 
        metric_type, value, time
    FROM ig_metrics
    WHERE organization_id = o.id
    ORDER BY metric_type, time DESC
) m;

-- Create refresh function for materialized view
CREATE OR REPLACE FUNCTION refresh_current_scores()
RETURNS void AS $$
BEGIN
    REFRESH MATERIALIZED VIEW CONCURRENTLY current_ig_scores;
END;
$$ LANGUAGE plpgsql;

-- Create indexes on materialized view
CREATE UNIQUE INDEX idx_current_scores_org_metric 
ON current_ig_scores(organization_id, metric_type);

-- Helper functions
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply update trigger to organizations
CREATE TRIGGER update_organizations_updated_at
BEFORE UPDATE ON organizations
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Function to calculate IG health score
CREATE OR REPLACE FUNCTION calculate_ig_health_score(org_id UUID)
RETURNS TABLE(
    health_score DECIMAL,
    nexel_score DECIMAL,
    morrin_score DECIMAL,
    strune_score DECIMAL,
    pilor_score DECIMAL,
    kithara_score DECIMAL,
    soreth_score DECIMAL,
    voxel_score DECIMAL,
    quorr_score DECIMAL,
    threnn_score DECIMAL,
    zelith_score DECIMAL
) AS $$
BEGIN
    RETURN QUERY
    WITH latest_metrics AS (
        SELECT DISTINCT ON (metric_type)
            metric_type,
            value
        FROM ig_metrics
        WHERE organization_id = org_id
        ORDER BY metric_type, time DESC
    ),
    scores AS (
        SELECT
            COALESCE(MAX(CASE WHEN metric_type = 'nexel' THEN value END), 0.5) as nexel,
            COALESCE(MAX(CASE WHEN metric_type = 'morrin' THEN value END), 0.5) as morrin,
            COALESCE(MAX(CASE WHEN metric_type = 'strune' THEN value END), 0) as strune,
            COALESCE(MAX(CASE WHEN metric_type = 'pilor' THEN value END), 0) as pilor,
            COALESCE(MAX(CASE WHEN metric_type = 'kithara' THEN value END), 0) as kithara,
            COALESCE(MAX(CASE WHEN metric_type = 'soreth' THEN value END), 0) as soreth,
            COALESCE(MAX(CASE WHEN metric_type = 'voxel' THEN value END), 0) as voxel,
            COALESCE(MAX(CASE WHEN metric_type = 'quorr' THEN value END), 0) as quorr,
            COALESCE(MAX(CASE WHEN metric_type = 'threnn' THEN value END), 0.5) as threnn,
            COALESCE(MAX(CASE WHEN metric_type = 'zelith' THEN value END), 0) as zelith
        FROM latest_metrics
    )
    SELECT
        -- Health score: inverse of dysfunction metrics
        ROUND(1 - (
            (strune + pilor + kithara + soreth + voxel + quorr + zelith) / 7 * 0.7 +
            (1 - threnn) * 0.3
        ), 2) as health_score,
        nexel,
        morrin,
        strune,
        pilor,
        kithara,
        soreth,
        voxel,
        quorr,
        threnn,
        zelith
    FROM scores;
END;
$$ LANGUAGE plpgsql;

-- Sample data insertion for demo
INSERT INTO organizations (id, name, domain, industry, size, subscription_tier)
VALUES 
    ('550e8400-e29b-41d4-a716-446655440001', 'Demo Startup', 'demo-startup.com', 'Technology', 'startup', 'demo'),
    ('550e8400-e29b-41d4-a716-446655440002', 'Demo Enterprise', 'demo-enterprise.com', 'Finance', 'enterprise', 'demo');

-- Grant appropriate permissions (adjust as needed)
-- GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO ig_api_user;
-- GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO ig_api_user;