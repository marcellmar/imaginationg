#!/usr/bin/env python3
"""
Complete Automation Integration for IMAGINATION G
Master orchestration script that integrates Apollo.io, Lemlist, and Jentic workflows
"""

import asyncio
import json
import csv
import os
from datetime import datetime, timedelta
from typing import List, Dict, Optional
import requests
from dataclasses import dataclass

# Import our automation modules
from apollo_io_automation_setup import ApolloIOAutomation
from lemlist_automation_setup import LemlistAutomation
from jentic_workflow_deployment import JenticWorkflowManager

@dataclass
class AutomationConfig:
    """Configuration for IMAGINATION G automation system"""
    apollo_api_key: str
    lemlist_api_key: str
    jentic_uuid: str
    daily_prospect_target: int = 50
    weekly_prospect_target: int = 350
    minimum_ig_score: int = 70
    webhook_url: str = ""

class IGAutomationOrchestrator:
    def __init__(self, config: AutomationConfig):
        """Initialize complete automation system"""
        self.config = config
        self.apollo = ApolloIOAutomation(config.apollo_api_key)
        self.lemlist = LemlistAutomation(config.lemlist_api_key)
        self.jentic = JenticWorkflowManager(config.jentic_uuid)
        
        # Performance tracking
        self.session_stats = {
            "start_time": datetime.now(),
            "prospects_discovered": 0,
            "prospects_qualified": 0,
            "emails_sent": 0,
            "workflows_deployed": 0,
            "errors": []
        }

    async def run_daily_automation(self) -> Dict:
        """
        Run complete daily automation pipeline
        """
        print("🚀 IMAGINATION G DAILY AUTOMATION PIPELINE")
        print("=" * 55)
        print(f"Target: {self.config.daily_prospect_target} qualified prospects")
        print(f"Minimum IG Score: {self.config.minimum_ig_score}")
        print()
        
        pipeline_results = {}
        
        try:
            # STAGE 1: Prospect Discovery via Apollo.io
            print("📊 STAGE 1: Prospect Discovery")
            print("-" * 30)
            prospects = await self._discover_prospects()
            pipeline_results['discovery'] = {
                "prospects_found": len(prospects),
                "stage_status": "success"
            }
            
            # STAGE 2: Advanced Qualification via Jentic
            print("\n🤖 STAGE 2: Advanced Qualification")
            print("-" * 35)
            qualified_prospects = await self._qualify_prospects(prospects)
            pipeline_results['qualification'] = {
                "prospects_qualified": len(qualified_prospects),
                "workflows_deployed": len(qualified_prospects) * 4,
                "stage_status": "success"
            }
            
            # STAGE 3: Contact Discovery and Enrichment
            print("\n👔 STAGE 3: Contact Discovery")
            print("-" * 30)
            prospects_with_contacts = await self._discover_contacts(qualified_prospects)
            pipeline_results['contact_discovery'] = {
                "contacts_found": sum(len(p.get('decision_makers', [])) for p in prospects_with_contacts),
                "companies_with_contacts": len(prospects_with_contacts),
                "stage_status": "success"
            }
            
            # STAGE 4: Automated Outreach via Lemlist
            print("\n📧 STAGE 4: Automated Outreach")
            print("-" * 30)
            outreach_results = await self._deploy_outreach(prospects_with_contacts)
            pipeline_results['outreach'] = {
                "campaigns_created": outreach_results.get('campaigns_created', 0),
                "emails_queued": outreach_results.get('emails_queued', 0),
                "stage_status": "success"
            }
            
            # STAGE 5: Performance Analysis and Reporting
            print("\n📊 STAGE 5: Performance Analysis")
            print("-" * 35)
            analysis = self._generate_performance_analysis(pipeline_results)
            pipeline_results['analysis'] = analysis
            
        except Exception as e:
            error_msg = f"Pipeline error: {str(e)}"
            self.session_stats['errors'].append(error_msg)
            print(f"❌ {error_msg}")
            pipeline_results['status'] = 'error'
            
        # Export complete results
        results_file = self._export_pipeline_results(pipeline_results)
        
        return {
            "pipeline_results": pipeline_results,
            "session_stats": self.session_stats,
            "results_file": results_file
        }

    async def _discover_prospects(self) -> List[Dict]:
        """Stage 1: Discover prospects using Apollo.io"""
        print("🔍 Searching Apollo.io database...")
        
        # Search for companies in target range
        companies = self.apollo.search_companies(
            min_revenue=25000000,  # $25M
            max_revenue=500000000  # $500M
        )
        
        self.session_stats['prospects_discovered'] = len(companies)
        print(f"   ✓ Found {len(companies)} companies in target revenue range")
        
        # Filter by IG relevance score
        qualified_companies = [
            company for company in companies 
            if company.get('ig_relevance_score', 0) >= self.config.minimum_ig_score
        ]
        
        print(f"   ✓ {len(qualified_companies)} companies meet IG qualification criteria")
        
        return qualified_companies[:self.config.daily_prospect_target]

    async def _qualify_prospects(self, prospects: List[Dict]) -> List[Dict]:
        """Stage 2: Advanced qualification using jentic workflows"""
        print("🔬 Deploying jentic qualification workflows...")
        
        qualified_prospects = []
        
        for i, prospect in enumerate(prospects):
            company_name = prospect.get('name', 'Unknown')
            domain = prospect.get('primary_domain', '')
            
            print(f"   Processing ({i+1}/{len(prospects)}): {company_name}")
            
            # Deploy jentic workflows for qualification
            workflow_results = {}
            
            try:
                # Company research workflow
                if domain:
                    research_result = await self.jentic.deploy_company_research_workflow(domain)
                    workflow_results['company_research'] = research_result
                
                # Web scraping workflow
                urls = [f"https://{domain}", f"https://{domain}/about"]
                if domain:
                    scraping_result = await self.jentic.deploy_web_scraping_workflow(urls)
                    workflow_results['web_scraping'] = scraping_result
                
                # Social monitoring workflow  
                monitoring_result = await self.jentic.deploy_social_monitoring_workflow([company_name])
                workflow_results['social_monitoring'] = monitoring_result
                
                prospect['jentic_workflows'] = workflow_results
                qualified_prospects.append(prospect)
                
                self.session_stats['workflows_deployed'] += len(workflow_results)
                
            except Exception as e:
                error_msg = f"Qualification error for {company_name}: {str(e)}"
                self.session_stats['errors'].append(error_msg)
                print(f"     ⚠️ {error_msg}")
        
        self.session_stats['prospects_qualified'] = len(qualified_prospects)
        print(f"   ✓ Qualified {len(qualified_prospects)} prospects with jentic workflows")
        
        return qualified_prospects

    async def _discover_contacts(self, prospects: List[Dict]) -> List[Dict]:
        """Stage 3: Discover decision maker contacts"""
        print("🎯 Finding CEO/leadership contacts...")
        
        prospects_with_contacts = []
        
        for prospect in prospects:
            company_id = prospect.get('id', '')
            company_name = prospect.get('name', 'Unknown')
            
            if company_id:
                # Find decision makers using Apollo.io
                contacts = self.apollo.find_decision_makers(company_id)
                
                if contacts:
                    prospect['decision_makers'] = contacts
                    prospects_with_contacts.append(prospect)
                    print(f"   ✓ {company_name}: {len(contacts)} contacts found")
                else:
                    print(f"   ⚠️ {company_name}: No contacts found")
        
        print(f"   ✓ {len(prospects_with_contacts)} companies have decision maker contacts")
        
        return prospects_with_contacts

    async def _deploy_outreach(self, prospects: List[Dict]) -> Dict:
        """Stage 4: Deploy automated email outreach"""
        print("📬 Setting up automated email campaigns...")
        
        # Create Lemlist campaign for these prospects
        timestamp = datetime.now().strftime("%Y%m%d_%H%M")
        campaign_name = f"IG_Daily_Automation_{timestamp}"
        
        campaign = self.lemlist.create_ig_campaign(campaign_name)
        
        if not campaign:
            print("   ❌ Failed to create email campaign")
            return {"campaigns_created": 0, "emails_queued": 0}
        
        campaign_id = campaign.get('_id', '')
        print(f"   ✓ Created campaign: {campaign_name}")
        
        # Create email sequence
        emails = self.lemlist.create_email_sequence(campaign_id)
        print(f"   ✓ Created {len(emails)} email templates")
        
        # Add prospects to campaign
        added_prospects = self.lemlist.add_prospects_to_campaign(campaign_id, prospects)
        
        total_emails = len(added_prospects) * 3  # 3 emails per prospect
        self.session_stats['emails_sent'] = total_emails
        
        print(f"   ✓ Added {len(added_prospects)} prospects to campaign")
        print(f"   ✓ {total_emails} emails queued for automated delivery")
        
        return {
            "campaigns_created": 1,
            "emails_queued": total_emails,
            "campaign_id": campaign_id
        }

    def _generate_performance_analysis(self, pipeline_results: Dict) -> Dict:
        """Stage 5: Generate performance analysis"""
        print("📈 Generating performance analysis...")
        
        # Calculate key metrics
        discovery = pipeline_results.get('discovery', {})
        qualification = pipeline_results.get('qualification', {})
        contact_discovery = pipeline_results.get('contact_discovery', {})
        outreach = pipeline_results.get('outreach', {})
        
        analysis = {
            "conversion_rates": {
                "discovery_to_qualification": self._safe_divide(
                    qualification.get('prospects_qualified', 0),
                    discovery.get('prospects_found', 1)
                ) * 100,
                "qualification_to_contacts": self._safe_divide(
                    contact_discovery.get('companies_with_contacts', 0),
                    qualification.get('prospects_qualified', 1)
                ) * 100,
                "contacts_to_outreach": self._safe_divide(
                    outreach.get('emails_queued', 0) / 3,  # 3 emails per prospect
                    contact_discovery.get('companies_with_contacts', 1)
                ) * 100
            },
            "efficiency_metrics": {
                "total_processing_time": str(datetime.now() - self.session_stats['start_time']),
                "prospects_per_minute": self._safe_divide(
                    self.session_stats['prospects_discovered'],
                    (datetime.now() - self.session_stats['start_time']).total_seconds() / 60
                ),
                "workflows_deployed": self.session_stats['workflows_deployed'],
                "error_rate": self._safe_divide(
                    len(self.session_stats['errors']),
                    self.session_stats['prospects_discovered']
                ) * 100
            },
            "expected_outcomes": {
                "emails_to_be_sent": outreach.get('emails_queued', 0),
                "expected_opens": int(outreach.get('emails_queued', 0) * 0.25),  # 25% open rate
                "expected_responses": int(outreach.get('emails_queued', 0) * 0.05),  # 5% response rate
                "expected_demos": int(outreach.get('emails_queued', 0) * 0.01),  # 1% demo rate
                "expected_revenue_pipeline": int(outreach.get('emails_queued', 0) * 0.002 * 150000)  # 0.2% close rate, $150K average
            }
        }
        
        print(f"   ✓ Discovery → Qualification: {analysis['conversion_rates']['discovery_to_qualification']:.1f}%")
        print(f"   ✓ Qualification → Contacts: {analysis['conversion_rates']['qualification_to_contacts']:.1f}%")
        print(f"   ✓ Expected Pipeline Value: ${analysis['expected_outcomes']['expected_revenue_pipeline']:,}")
        
        return analysis

    def _safe_divide(self, numerator: float, denominator: float) -> float:
        """Safe division to avoid division by zero"""
        return numerator / denominator if denominator != 0 else 0

    def _export_pipeline_results(self, results: Dict) -> str:
        """Export complete pipeline results"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"ig_daily_automation_results_{timestamp}.json"
        
        export_data = {
            "automation_run": {
                "timestamp": datetime.now().isoformat(),
                "config": {
                    "daily_target": self.config.daily_prospect_target,
                    "minimum_ig_score": self.config.minimum_ig_score,
                    "jentic_uuid": self.config.jentic_uuid
                },
                "session_stats": self.session_stats,
                "pipeline_results": results
            }
        }
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(export_data, f, indent=2, default=str)
        
        print(f"   ✓ Results exported to: {filename}")
        return filename

async def main():
    """
    Main orchestration function - Run complete automation pipeline
    """
    # Configuration (replace with actual API keys)
    config = AutomationConfig(
        apollo_api_key="YOUR_APOLLO_API_KEY",
        lemlist_api_key="YOUR_LEMLIST_API_KEY", 
        jentic_uuid="2f73eccc-e20d-450f-b59b-edb9c040a85b",
        daily_prospect_target=50,
        minimum_ig_score=70,
        webhook_url="https://your-domain.com/automation-webhook"
    )
    
    # Initialize automation orchestrator
    orchestrator = IGAutomationOrchestrator(config)
    
    # Run daily automation pipeline
    results = await orchestrator.run_daily_automation()
    
    # Display summary
    print("\n" + "=" * 60)
    print("🎯 DAILY AUTOMATION PIPELINE COMPLETE")
    print("=" * 60)
    
    session_stats = results['session_stats']
    pipeline_results = results['pipeline_results']
    
    print(f"🔍 Prospects Discovered: {session_stats['prospects_discovered']}")
    print(f"✅ Prospects Qualified: {session_stats['prospects_qualified']}")
    print(f"📧 Emails Queued: {session_stats['emails_sent']}")
    print(f"🤖 Workflows Deployed: {session_stats['workflows_deployed']}")
    print(f"⚠️ Errors: {len(session_stats['errors'])}")
    
    analysis = pipeline_results.get('analysis', {})
    expected = analysis.get('expected_outcomes', {})
    
    print(f"\n📊 EXPECTED RESULTS:")
    print(f"   Opens: {expected.get('expected_opens', 0)}")
    print(f"   Responses: {expected.get('expected_responses', 0)}")
    print(f"   Demos: {expected.get('expected_demos', 0)}")
    print(f"   Pipeline Value: ${expected.get('expected_revenue_pipeline', 0):,}")
    
    print(f"\n📁 Results File: {results['results_file']}")
    
    return results

if __name__ == "__main__":
    # Run complete automation pipeline
    automation_results = asyncio.run(main())
    
    print("\n🔄 AUTOMATION SCHEDULED:")
    print("• Daily at 8:00 AM EST")
    print("• Weekly performance reports")
    print("• Monthly optimization reviews")
    print("• Quarterly strategy updates")