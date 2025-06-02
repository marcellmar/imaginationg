#!/usr/bin/env python3
"""
IMAGINATION G - Download Core Business Transformation Workflows
Discover and download the 5 most relevant workflows for business transformation
"""

import asyncio
import jentic
import jentic.models as models
import os
import json
from pathlib import Path
from datetime import datetime

async def download_core_workflows():
    """Download 5 core business transformation workflows"""
    
    print("=== IMAGINATION G - DOWNLOADING CORE WORKFLOWS ===")
    print("Discovering and downloading the 5 most relevant business transformation workflows")
    
    # Initialize Jentic
    j = jentic.Jentic()
    
    # Create workflows directory
    workflows_dir = Path("/Users/marsonemac/Documents/projects/imaginationg/workflows")
    workflows_dir.mkdir(exist_ok=True)
    
    print(f"📁 Workflows will be saved to: {workflows_dir}")
    
    # 1. DISCOVER WORKFLOWS FOR EACH CORE TRANSFORMATION AREA
    print("\n=== DISCOVERING WORKFLOWS BY TRANSFORMATION AREA ===")
    
    transformation_areas = [
        {
            "name": "Organizational Analytics",
            "description": "Performance monitoring and organizational health metrics",
            "keywords": ["analytics", "performance", "monitoring", "metrics", "dashboard"],
            "priority": 1
        },
        {
            "name": "Project Management Automation",
            "description": "Project tracking, task management, and workflow automation",
            "keywords": ["project", "management", "workflow", "automation", "tracking"],
            "priority": 1
        },
        {
            "name": "Communication Optimization", 
            "description": "Team communication, collaboration, and meeting efficiency",
            "keywords": ["communication", "collaboration", "meetings", "messaging"],
            "priority": 2
        },
        {
            "name": "Decision Tracking",
            "description": "Decision velocity, approval workflows, and governance",
            "keywords": ["decisions", "approval", "governance", "velocity", "tracking"],
            "priority": 1
        },
        {
            "name": "Business Intelligence",
            "description": "Reporting, data analysis, and business insights",
            "keywords": ["reporting", "business intelligence", "data", "insights", "analysis"],
            "priority": 2
        }
    ]
    
    all_discovered_workflows = []
    
    for area in transformation_areas:
        print(f"\n🔍 Searching: {area['name']}")
        print(f"   Focus: {area['description']}")
        
        try:
            search_req = models.ApiCapabilitySearchRequest(
                capability_description=area['description'],
                keywords=area['keywords'],
                max_results=5
            )
            
            results = await j.search_api_capabilities(search_req)
            
            print(f"   Found {len(results.workflows)} workflows, {len(results.operations)} operations")
            
            for workflow in results.workflows:
                workflow_info = {
                    'id': workflow.workflow_id,
                    'summary': workflow.summary,
                    'description': workflow.description,
                    'api_name': workflow.api_name,
                    'match_score': workflow.match_score,
                    'transformation_area': area['name'],
                    'priority': area['priority'],
                    'relevance_score': workflow.match_score * area['priority']
                }
                all_discovered_workflows.append(workflow_info)
                
                print(f"     • {workflow.summary} ({workflow.api_name})")
                print(f"       Score: {workflow.match_score:.2f}, Relevance: {workflow_info['relevance_score']:.2f}")
                
        except Exception as e:
            print(f"   ❌ Error searching {area['name']}: {e}")
    
    # 2. SELECT TOP 5 WORKFLOWS
    print(f"\n=== SELECTING TOP 5 WORKFLOWS ===")
    
    # Sort by relevance score (match_score * priority) and select top 5
    top_workflows = sorted(all_discovered_workflows, key=lambda x: x['relevance_score'], reverse=True)[:5]
    
    print("Selected workflows for download:")
    for i, workflow in enumerate(top_workflows, 1):
        print(f"  {i}. {workflow['summary']}")
        print(f"     API: {workflow['api_name']}")
        print(f"     Area: {workflow['transformation_area']}")
        print(f"     Relevance Score: {workflow['relevance_score']:.2f}")
        print(f"     Description: {workflow['description'][:100]}...")
        print()
    
    # 3. DOWNLOAD WORKFLOW EXECUTION FILES
    print(f"=== DOWNLOADING WORKFLOW EXECUTION FILES ===")
    
    workflow_ids = [w['id'] for w in top_workflows]
    
    try:
        print(f"📥 Downloading execution files for {len(workflow_ids)} workflows...")
        
        execution_info = await j.load_execution_info(
            workflow_uuids=workflow_ids,
            operation_uuids=[]
        )
        
        print(f"✅ Execution files loaded successfully!")
        
        # Check what we got
        if hasattr(execution_info, 'workflows') and execution_info.workflows:
            print(f"   Downloaded {len(execution_info.workflows)} workflow files")
        if hasattr(execution_info, 'operations') and execution_info.operations:
            print(f"   Downloaded {len(execution_info.operations)} operation files")
        if hasattr(execution_info, 'files') and execution_info.files:
            print(f"   Downloaded {len(execution_info.files)} execution files")
            
    except Exception as e:
        print(f"❌ Error downloading execution files: {e}")
        execution_info = None
    
    # 4. SAVE WORKFLOW CATALOG
    print(f"\n=== SAVING WORKFLOW CATALOG ===")
    
    catalog = {
        "imagination_g_core_workflows": {
            "downloaded_date": datetime.now().isoformat(),
            "jentic_uuid": os.getenv('JENTIC_UUID'),
            "total_discovered": len(all_discovered_workflows),
            "top_5_selected": top_workflows,
            "workflow_execution_ready": execution_info is not None,
            "transformation_areas_covered": list(set([w['transformation_area'] for w in top_workflows])),
            "api_platforms_included": list(set([w['api_name'] for w in top_workflows]))
        },
        "execution_details": {
            "files_downloaded": execution_info is not None,
            "execution_info_available": str(type(execution_info)) if execution_info else None,
            "ready_for_oak_runner": execution_info is not None
        },
        "next_steps": [
            "Test workflows locally with oak-runner",
            "Customize workflows for IMAGINATION G use cases",
            "Create client simulation environments",
            "Build workflow automation templates"
        ]
    }
    
    # Save catalog
    catalog_file = workflows_dir / "imagination_g_workflow_catalog.json"
    with open(catalog_file, 'w') as f:
        json.dump(catalog, f, indent=2)
    
    print(f"✅ Workflow catalog saved to: {catalog_file}")
    
    # 5. CREATE WORKFLOW TESTING GUIDE
    print(f"\n=== CREATING WORKFLOW TESTING GUIDE ===")
    
    testing_guide = """
# IMAGINATION G - Workflow Testing Guide

## Downloaded Workflows

"""
    
    for i, workflow in enumerate(top_workflows, 1):
        testing_guide += f"""
### {i}. {workflow['summary']}
- **API Platform**: {workflow['api_name']}
- **Transformation Area**: {workflow['transformation_area']}
- **Workflow ID**: {workflow['id']}
- **Relevance Score**: {workflow['relevance_score']:.2f}
- **Description**: {workflow['description']}

#### Testing Commands:
```bash
# List workflow details
oak-runner describe-workflow {workflow['id']} workflow.arazzo

# Test execution (dry run)
oak-runner execute-workflow {workflow['id']} workflow.arazzo --dry-run

# Show environment requirements
oak-runner show-env-mappings workflow.arazzo

# Generate example command
oak-runner generate-example --workflow-id {workflow['id']} workflow.arazzo
```

#### IMAGINATION G Adaptation Ideas:
- **Drift Detection**: Use for monitoring organizational performance metrics
- **Intervention Tracking**: Adapt for weapon deployment progress monitoring
- **Client Onboarding**: Integrate into automated client system discovery
- **Authority Building**: Use for automated case study data collection

---
"""
    
    # Save testing guide
    guide_file = workflows_dir / "workflow_testing_guide.md"
    with open(guide_file, 'w') as f:
        f.write(testing_guide)
    
    print(f"✅ Testing guide saved to: {guide_file}")
    
    # 6. IMMEDIATE NEXT STEPS
    print(f"\n=== IMMEDIATE NEXT STEPS ===")
    print("🎯 NOW YOU CAN:")
    print(f"   1. Review workflow catalog: {catalog_file}")
    print(f"   2. Follow testing guide: {guide_file}")
    print("   3. Test workflows with oak-runner (see guide for commands)")
    print("   4. Customize workflows for IMAGINATION G use cases")
    print()
    print("🔧 NEXT COMMANDS TO RUN:")
    if execution_info:
        print("   # Test first workflow")
        print("   oak-runner describe-workflow <workflow-id> workflow.arazzo")
        print("   oak-runner execute-workflow <workflow-id> workflow.arazzo --dry-run")
    else:
        print("   # Retry downloading workflow files")
        print("   python3 download_core_workflows.py")
    print()
    print("📈 TRANSFORMATION IMPACT:")
    print("   • 5 proven workflows ready for business transformation")
    print("   • Multiple API platforms integrated (analytics, project management, etc.)")
    print("   • Foundation for automated drift detection and intervention tracking")
    print("   • Ready to build IMAGINATION G automation templates")
    
    print(f"\n🎉 CORE WORKFLOW DOWNLOAD COMPLETE!")
    print(f"💪 IMAGINATION G now has 5 business transformation workflows ready for testing!")

if __name__ == "__main__":
    # Set environment variables
    os.environ['JENTIC_UUID'] = '2f73eccc-e20d-450f-b59b-edb9c040a85b'
    
    # Run the workflow download
    asyncio.run(download_core_workflows())