#!/usr/bin/env python3
"""
IMAGINATION G - Download Business Enterprise Workflows
Target enterprise/business platforms for organizational transformation
"""

import asyncio
import jentic
import jentic.models as models
import os
import json
from pathlib import Path
from datetime import datetime

async def download_business_enterprise_workflows():
    """Download business-focused workflows for enterprise transformation"""
    
    print("=== IMAGINATION G - BUSINESS ENTERPRISE WORKFLOWS ===")
    print("Targeting enterprise platforms for organizational transformation")
    
    # Initialize Jentic
    j = jentic.Jentic()
    
    # Create workflows directory
    workflows_dir = Path("/Users/marsonemac/Documents/projects/imaginationg/workflows")
    workflows_dir.mkdir(exist_ok=True)
    
    # 1. TARGET ENTERPRISE BUSINESS PLATFORMS
    print("\n=== TARGETING ENTERPRISE BUSINESS PLATFORMS ===")
    
    enterprise_searches = [
        {
            "name": "Salesforce CRM Automation",
            "description": "Customer relationship management and sales pipeline automation",
            "keywords": ["salesforce", "crm", "sales", "pipeline", "customers"],
            "max_results": 5
        },
        {
            "name": "Microsoft Office 365 Integration",
            "description": "Office productivity, SharePoint, and Microsoft Teams automation",
            "keywords": ["microsoft", "office", "sharepoint", "teams", "outlook"],
            "max_results": 5
        },
        {
            "name": "Slack Workspace Management",
            "description": "Team communication, channel management, and workflow automation",
            "keywords": ["slack", "workspace", "channels", "team communication"],
            "max_results": 5
        },
        {
            "name": "Asana Project Management",
            "description": "Project tracking, task management, and team collaboration",
            "keywords": ["asana", "project management", "tasks", "team collaboration"],
            "max_results": 5
        },
        {
            "name": "HubSpot Marketing Automation",
            "description": "Marketing automation, lead management, and customer engagement",
            "keywords": ["hubspot", "marketing", "automation", "leads", "engagement"],
            "max_results": 5
        },
        {
            "name": "Google Workspace Productivity",
            "description": "Google Drive, Gmail, Calendar, and productivity tool automation",
            "keywords": ["google", "workspace", "drive", "gmail", "calendar"],
            "max_results": 5
        },
        {
            "name": "Jira Issue Tracking",
            "description": "Issue tracking, project management, and development workflow automation",
            "keywords": ["jira", "issues", "tracking", "development", "agile"],
            "max_results": 5
        },
        {
            "name": "Analytics and Reporting",
            "description": "Business analytics, reporting, and performance monitoring",
            "keywords": ["analytics", "reporting", "dashboard", "metrics", "performance"],
            "max_results": 5
        }
    ]
    
    all_business_workflows = []
    
    for search_config in enterprise_searches:
        print(f"\n🔍 Searching: {search_config['name']}")
        print(f"   Focus: {search_config['description']}")
        
        try:
            search_req = models.ApiCapabilitySearchRequest(
                capability_description=search_config['description'],
                keywords=search_config['keywords'],
                max_results=search_config['max_results']
            )
            
            results = await j.search_api_capabilities(search_req)
            
            print(f"   Found {len(results.workflows)} workflows, {len(results.operations)} operations")
            
            # Score workflows based on business relevance
            for workflow in results.workflows:
                # Calculate business relevance score
                business_keywords = ['business', 'enterprise', 'organization', 'management', 'analytics', 'reporting']
                keyword_bonus = sum(1 for keyword in business_keywords if keyword in workflow.description.lower())
                
                workflow_info = {
                    'id': workflow.workflow_id,
                    'summary': workflow.summary,
                    'description': workflow.description,
                    'api_name': workflow.api_name,
                    'match_score': workflow.match_score,
                    'business_area': search_config['name'],
                    'business_relevance': workflow.match_score + (keyword_bonus * 0.1),
                    'keyword_bonus': keyword_bonus
                }
                all_business_workflows.append(workflow_info)
                
                print(f"     • {workflow.summary} ({workflow.api_name})")
                print(f"       Match: {workflow.match_score:.2f}, Business Relevance: {workflow_info['business_relevance']:.2f}")
                
        except Exception as e:
            print(f"   ❌ Error searching {search_config['name']}: {e}")
    
    # 2. SELECT TOP 5 BUSINESS WORKFLOWS
    print(f"\n=== SELECTING TOP 5 BUSINESS WORKFLOWS ===")
    
    # Sort by business relevance and select top 5
    top_business_workflows = sorted(all_business_workflows, key=lambda x: x['business_relevance'], reverse=True)[:5]
    
    print("Selected business workflows for download:")
    for i, workflow in enumerate(top_business_workflows, 1):
        print(f"  {i}. {workflow['summary']}")
        print(f"     API: {workflow['api_name']}")
        print(f"     Business Area: {workflow['business_area']}")
        print(f"     Business Relevance: {workflow['business_relevance']:.2f}")
        print(f"     Description: {workflow['description'][:100]}...")
        print()
    
    # 3. DOWNLOAD BUSINESS WORKFLOW EXECUTION FILES
    print(f"=== DOWNLOADING BUSINESS WORKFLOW EXECUTION FILES ===")
    
    workflow_ids = [w['id'] for w in top_business_workflows]
    
    try:
        print(f"📥 Downloading execution files for {len(workflow_ids)} business workflows...")
        
        execution_info = await j.load_execution_info(
            workflow_uuids=workflow_ids,
            operation_uuids=[]
        )
        
        print(f"✅ Business workflow execution files loaded successfully!")
        
        # Check what we got
        execution_details = {
            'workflows_downloaded': len(workflow_ids),
            'execution_info_type': str(type(execution_info)),
            'has_workflows': hasattr(execution_info, 'workflows'),
            'has_operations': hasattr(execution_info, 'operations'),
            'has_files': hasattr(execution_info, 'files')
        }
        
        if hasattr(execution_info, 'workflows') and execution_info.workflows:
            execution_details['workflow_files_count'] = len(execution_info.workflows)
        if hasattr(execution_info, 'operations') and execution_info.operations:
            execution_details['operation_files_count'] = len(execution_info.operations)
        if hasattr(execution_info, 'files') and execution_info.files:
            execution_details['execution_files_count'] = len(execution_info.files)
            
        print(f"   Execution details: {execution_details}")
            
    except Exception as e:
        print(f"❌ Error downloading business workflow execution files: {e}")
        execution_info = None
        execution_details = {'error': str(e)}
    
    # 4. CREATE IMAGINATION G BUSINESS WORKFLOW CATALOG
    print(f"\n=== CREATING IMAGINATION G BUSINESS WORKFLOW CATALOG ===")
    
    business_catalog = {
        "imagination_g_business_workflows": {
            "downloaded_date": datetime.now().isoformat(),
            "jentic_uuid": os.getenv('JENTIC_UUID'),
            "total_discovered": len(all_business_workflows),
            "enterprise_areas_searched": [search['name'] for search in enterprise_searches],
            "top_5_business_workflows": top_business_workflows,
            "workflow_execution_ready": execution_info is not None,
            "business_areas_covered": list(set([w['business_area'] for w in top_business_workflows])),
            "api_platforms_included": list(set([w['api_name'] for w in top_business_workflows])),
            "execution_details": execution_details
        },
        "imagination_g_applications": {
            "drift_diagnostic_automation": {
                "description": "Use business workflows to automate organizational drift detection",
                "applicable_workflows": [w for w in top_business_workflows if any(keyword in w['description'].lower() for keyword in ['analytics', 'reporting', 'performance', 'tracking'])],
                "integration_approach": "Connect diagnostic questions to real business system APIs"
            },
            "weapon_deployment_tracking": {
                "description": "Track intervention implementation through business system workflows",
                "applicable_workflows": [w for w in top_business_workflows if any(keyword in w['description'].lower() for keyword in ['project', 'task', 'management', 'tracking'])],
                "integration_approach": "Monitor weapon deployment progress through existing business systems"
            },
            "client_onboarding_automation": {
                "description": "Automate client system discovery and integration setup",
                "applicable_workflows": [w for w in top_business_workflows if any(keyword in w['description'].lower() for keyword in ['integration', 'setup', 'configuration', 'automation'])],
                "integration_approach": "Streamline connection to client business platforms"
            }
        },
        "next_steps": [
            "Test business workflows locally with oak-runner",
            "Map workflows to IMAGINATION G diagnostic questions",
            "Create business transformation workflow templates",
            "Build client demonstration scenarios with real business platforms"
        ]
    }
    
    # Save business catalog
    business_catalog_file = workflows_dir / "imagination_g_business_workflow_catalog.json"
    with open(business_catalog_file, 'w') as f:
        json.dump(business_catalog, f, indent=2)
    
    print(f"✅ Business workflow catalog saved to: {business_catalog_file}")
    
    # 5. CREATE BUSINESS WORKFLOW TESTING GUIDE
    print(f"\n=== CREATING BUSINESS WORKFLOW TESTING GUIDE ===")
    
    testing_guide = f"""
# IMAGINATION G - Business Workflow Testing Guide

## Enterprise Business Workflows Downloaded

Downloaded {len(top_business_workflows)} enterprise business workflows for organizational transformation.

### Business Areas Covered:
{', '.join(set([w['business_area'] for w in top_business_workflows]))}

### API Platforms Integrated:
{', '.join(set([w['api_name'] for w in top_business_workflows]))}

---

"""
    
    for i, workflow in enumerate(top_business_workflows, 1):
        testing_guide += f"""
### {i}. {workflow['summary']}
- **API Platform**: {workflow['api_name']}
- **Business Area**: {workflow['business_area']}
- **Workflow ID**: {workflow['id']}
- **Business Relevance**: {workflow['business_relevance']:.2f}
- **Description**: {workflow['description']}

#### Oak Runner Testing Commands:
```bash
# Show workflow details
oak-runner describe-workflow {workflow['id']} business_workflow.arazzo

# Test execution (dry run)
oak-runner execute-workflow {workflow['id']} business_workflow.arazzo --dry-run

# Show environment requirements
oak-runner show-env-mappings business_workflow.arazzo

# Generate example execution command
oak-runner generate-example --workflow-id {workflow['id']} business_workflow.arazzo
```

#### IMAGINATION G Business Integration:
- **Drift Detection**: {'✅ Applicable' if any(keyword in workflow['description'].lower() for keyword in ['analytics', 'reporting', 'performance']) else '❌ Not applicable'}
- **Weapon Deployment**: {'✅ Applicable' if any(keyword in workflow['description'].lower() for keyword in ['project', 'task', 'management']) else '❌ Not applicable'}  
- **Client Onboarding**: {'✅ Applicable' if any(keyword in workflow['description'].lower() for keyword in ['integration', 'setup', 'automation']) else '❌ Not applicable'}

#### Business Transformation Use Cases:
- Connect to client {workflow['api_name']} systems for real-time organizational data
- Automate data collection for evidence-based drift assessment
- Track intervention progress through existing business workflows
- Generate automated reports and dashboards for client transformation

---
"""
    
    # Save business testing guide
    business_guide_file = workflows_dir / "business_workflow_testing_guide.md"
    with open(business_guide_file, 'w') as f:
        f.write(testing_guide)
    
    print(f"✅ Business workflow testing guide saved to: {business_guide_file}")
    
    # 6. IMMEDIATE BUSINESS TRANSFORMATION ACTIONS
    print(f"\n=== IMMEDIATE BUSINESS TRANSFORMATION ACTIONS ===")
    print("🎯 ENTERPRISE WORKFLOW INTEGRATION:")
    print(f"   1. Review business catalog: {business_catalog_file}")
    print(f"   2. Follow business testing guide: {business_guide_file}")
    print("   3. Test workflows with oak-runner using business platform credentials")
    print("   4. Map workflows to IMAGINATION G diagnostic and intervention processes")
    print()
    print("🔧 OAK RUNNER COMMANDS FOR BUSINESS WORKFLOWS:")
    if execution_info:
        print("   # Test business workflow execution")
        print("   oak-runner list-workflows business_workflow.arazzo")
        print("   oak-runner execute-workflow <workflow-id> business_workflow.arazzo --dry-run")
        print("   oak-runner show-env-mappings business_workflow.arazzo")
    else:
        print("   # Retry downloading business workflow files")
        print("   python3 download_business_workflows.py")
    print()
    print("📈 BUSINESS TRANSFORMATION CAPABILITIES:")
    print("   • Enterprise platform integration (Salesforce, Slack, Asana, etc.)")
    print("   • Real-time organizational data collection")
    print("   • Automated business process monitoring")
    print("   • Evidence-based transformation tracking")
    print("   • Client system integration automation")
    print()
    print("💼 CLIENT VALUE PROPOSITION:")
    print("   • Connect IMAGINATION G diagnostics to existing business systems")
    print("   • Automate data collection from client's current tools")
    print("   • Track transformation progress through familiar platforms")
    print("   • Generate reports using client's existing business intelligence")
    
    print(f"\n🎉 BUSINESS ENTERPRISE WORKFLOW DOWNLOAD COMPLETE!")
    print(f"💪 IMAGINATION G now has enterprise business workflows for organizational transformation!")
    print(f"🚀 Ready to integrate with client business platforms and automate transformation tracking!")

if __name__ == "__main__":
    # Set environment variables
    os.environ['JENTIC_UUID'] = '2f73eccc-e20d-450f-b59b-edb9c040a85b'
    
    # Run the business workflow download
    asyncio.run(download_business_enterprise_workflows())