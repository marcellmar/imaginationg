
# IMAGINATION G - Business Workflow Testing Guide

## Enterprise Business Workflows Downloaded

Downloaded 5 enterprise business workflows for organizational transformation.

### Business Areas Covered:
Salesforce CRM Automation, Microsoft Office 365 Integration, HubSpot Marketing Automation

### API Platforms Integrated:
devopness.com, ebay.com/sell-feed, iqualify.com, appcenter.ms

---


### 1. configure-and-enable-data-export
- **API Platform**: appcenter.ms
- **Business Area**: Microsoft Office 365 Integration
- **Workflow ID**: 3275896f2e2d1ede6be5e29780f58563
- **Business Relevance**: 0.78
- **Description**: Sets up and enables continuous export of analytics or crash data to Azure Blob Storage or Application Insights.

#### Oak Runner Testing Commands:
```bash
# Show workflow details
oak-runner describe-workflow 3275896f2e2d1ede6be5e29780f58563 business_workflow.arazzo

# Test execution (dry run)
oak-runner execute-workflow 3275896f2e2d1ede6be5e29780f58563 business_workflow.arazzo --dry-run

# Show environment requirements
oak-runner show-env-mappings business_workflow.arazzo

# Generate example execution command
oak-runner generate-example --workflow-id 3275896f2e2d1ede6be5e29780f58563 business_workflow.arazzo
```

#### IMAGINATION G Business Integration:
- **Drift Detection**: ✅ Applicable
- **Weapon Deployment**: ❌ Not applicable  
- **Client Onboarding**: ❌ Not applicable

#### Business Transformation Use Cases:
- Connect to client appcenter.ms systems for real-time organizational data
- Automate data collection for evidence-based drift assessment
- Track intervention progress through existing business workflows
- Generate automated reports and dashboards for client transformation

---

### 2. manage-organization-teams
- **API Platform**: appcenter.ms
- **Business Area**: Microsoft Office 365 Integration
- **Workflow ID**: 8ed40d73391b8ac39288d80d61d0673e
- **Business Relevance**: 0.69
- **Description**: Creates a team within an organization, adds users and apps to it.

#### Oak Runner Testing Commands:
```bash
# Show workflow details
oak-runner describe-workflow 8ed40d73391b8ac39288d80d61d0673e business_workflow.arazzo

# Test execution (dry run)
oak-runner execute-workflow 8ed40d73391b8ac39288d80d61d0673e business_workflow.arazzo --dry-run

# Show environment requirements
oak-runner show-env-mappings business_workflow.arazzo

# Generate example execution command
oak-runner generate-example --workflow-id 8ed40d73391b8ac39288d80d61d0673e business_workflow.arazzo
```

#### IMAGINATION G Business Integration:
- **Drift Detection**: ❌ Not applicable
- **Weapon Deployment**: ❌ Not applicable  
- **Client Onboarding**: ❌ Not applicable

#### Business Transformation Use Cases:
- Connect to client appcenter.ms systems for real-time organizational data
- Automate data collection for evidence-based drift assessment
- Track intervention progress through existing business workflows
- Generate automated reports and dashboards for client transformation

---

### 3. analyze-learner-engagement-in-channel
- **API Platform**: iqualify.com
- **Business Area**: HubSpot Marketing Automation
- **Workflow ID**: 5b5cd18e7145d99e3034dd53362da310
- **Business Relevance**: 0.68
- **Description**: Retrieves posts, comments, and replies for a specific channel within an offering to analyze learner interaction.

#### Oak Runner Testing Commands:
```bash
# Show workflow details
oak-runner describe-workflow 5b5cd18e7145d99e3034dd53362da310 business_workflow.arazzo

# Test execution (dry run)
oak-runner execute-workflow 5b5cd18e7145d99e3034dd53362da310 business_workflow.arazzo --dry-run

# Show environment requirements
oak-runner show-env-mappings business_workflow.arazzo

# Generate example execution command
oak-runner generate-example --workflow-id 5b5cd18e7145d99e3034dd53362da310 business_workflow.arazzo
```

#### IMAGINATION G Business Integration:
- **Drift Detection**: ❌ Not applicable
- **Weapon Deployment**: ❌ Not applicable  
- **Client Onboarding**: ❌ Not applicable

#### Business Transformation Use Cases:
- Connect to client iqualify.com systems for real-time organizational data
- Automate data collection for evidence-based drift assessment
- Track intervention progress through existing business workflows
- Generate automated reports and dashboards for client transformation

---

### 4. invite-user-to-team
- **API Platform**: devopness.com
- **Business Area**: Microsoft Office 365 Integration
- **Workflow ID**: ecb4db9b4a25e72a809a415f74cfc56c
- **Business Relevance**: 0.67
- **Description**: Invites a user via email to join an existing team, and the user accepts the invitation.

#### Oak Runner Testing Commands:
```bash
# Show workflow details
oak-runner describe-workflow ecb4db9b4a25e72a809a415f74cfc56c business_workflow.arazzo

# Test execution (dry run)
oak-runner execute-workflow ecb4db9b4a25e72a809a415f74cfc56c business_workflow.arazzo --dry-run

# Show environment requirements
oak-runner show-env-mappings business_workflow.arazzo

# Generate example execution command
oak-runner generate-example --workflow-id ecb4db9b4a25e72a809a415f74cfc56c business_workflow.arazzo
```

#### IMAGINATION G Business Integration:
- **Drift Detection**: ❌ Not applicable
- **Weapon Deployment**: ❌ Not applicable  
- **Client Onboarding**: ❌ Not applicable

#### Business Transformation Use Cases:
- Connect to client devopness.com systems for real-time organizational data
- Automate data collection for evidence-based drift assessment
- Track intervention progress through existing business workflows
- Generate automated reports and dashboards for client transformation

---

### 5. generate-and-download-customer-service-metrics-report
- **API Platform**: ebay.com/sell-feed
- **Business Area**: Salesforce CRM Automation
- **Workflow ID**: c29e886c57f4d8d1b9628f3c4ad6c336
- **Business Relevance**: 0.66
- **Description**: Creates a task to generate a customer service metrics report based on specified filters (metric type, marketplace, etc.), monitors task status, and downloads the report file upon completion. Helps sellers analyze their performance.

#### Oak Runner Testing Commands:
```bash
# Show workflow details
oak-runner describe-workflow c29e886c57f4d8d1b9628f3c4ad6c336 business_workflow.arazzo

# Test execution (dry run)
oak-runner execute-workflow c29e886c57f4d8d1b9628f3c4ad6c336 business_workflow.arazzo --dry-run

# Show environment requirements
oak-runner show-env-mappings business_workflow.arazzo

# Generate example execution command
oak-runner generate-example --workflow-id c29e886c57f4d8d1b9628f3c4ad6c336 business_workflow.arazzo
```

#### IMAGINATION G Business Integration:
- **Drift Detection**: ✅ Applicable
- **Weapon Deployment**: ✅ Applicable  
- **Client Onboarding**: ❌ Not applicable

#### Business Transformation Use Cases:
- Connect to client ebay.com/sell-feed systems for real-time organizational data
- Automate data collection for evidence-based drift assessment
- Track intervention progress through existing business workflows
- Generate automated reports and dashboards for client transformation

---
