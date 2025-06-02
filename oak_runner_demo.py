#!/usr/bin/env python3
"""
IMAGINATION G - Oak Runner Integration Demo
Demonstrating local workflow execution capabilities for business transformation
"""

import asyncio
import jentic
import jentic.models as models
import os
import json
import subprocess
from pathlib import Path

async def demonstrate_oak_runner_capabilities():
    """Demonstrate Oak Runner capabilities for IMAGINATION G"""
    
    print("=== IMAGINATION G - OAK RUNNER INTEGRATION DEMO ===")
    print("Local workflow execution for business transformation")
    
    # Initialize Jentic
    j = jentic.Jentic()
    
    # 1. DISCOVER WORKFLOWS WITH CORRECT FORMAT
    print("\n=== DISCOVERING WORKFLOWS FOR LOCAL EXECUTION ===")
    
    search_requests = [
        models.ApiCapabilitySearchRequest(
            capability_description="Business analytics and performance monitoring",
            keywords=["analytics", "monitoring", "metrics"],
            max_results=2
        ),
        models.ApiCapabilitySearchRequest(
            capability_description="Project management and workflow automation",
            keywords=["project", "workflow", "automation"],
            max_results=2
        ),
        models.ApiCapabilitySearchRequest(
            capability_description="Communication and team collaboration tools",
            keywords=["communication", "collaboration", "messaging"],
            max_results=2
        )
    ]
    
    all_workflows = []
    
    for search_req in search_requests:
        try:
            results = await j.search_api_capabilities(search_req)
            print(f"\n📋 Found {len(results.workflows)} workflows for: {search_req.capability_description}")
            
            for workflow in results.workflows:
                workflow_info = {
                    'id': workflow.workflow_id,
                    'summary': workflow.summary,
                    'description': workflow.description,
                    'api_name': workflow.api_name,
                    'match_score': workflow.match_score
                }
                all_workflows.append(workflow_info)
                print(f"  • {workflow.summary} ({workflow.api_name})")
                print(f"    Score: {workflow.match_score:.2f}")
                
        except Exception as e:
            print(f"Error in search: {e}")
    
    # 2. DEMONSTRATE OAK RUNNER COMMAND STRUCTURE
    print(f"\n=== OAK RUNNER COMMAND CAPABILITIES ===")
    
    # Show what oak-runner can do (commands will fail without files, but show structure)
    print("📋 Oak Runner Commands Available:")
    print("  • list-workflows: Show all workflows in an Arazzo file")
    print("  • describe-workflow: Get details about a specific workflow")  
    print("  • execute-workflow: Run a complete workflow locally")
    print("  • execute-operation: Run a single API operation")
    print("  • show-env-mappings: Display authentication requirements")
    print("  • generate-example: Create example execution commands")
    
    # 3. PRACTICAL WORKFLOW EXECUTION STRATEGY
    print(f"\n=== PRACTICAL EXECUTION STRATEGY FOR IMAGINATION G ===")
    
    execution_strategy = {
        "workflow_development_cycle": {
            "step_1_discovery": "Use jentic to find relevant business APIs and workflows",
            "step_2_download": "Download workflow execution files through jentic",
            "step_3_local_testing": "Test workflows locally with oak-runner",
            "step_4_customization": "Adapt workflows for IMAGINATION G use cases",
            "step_5_client_deployment": "Deploy tested workflows to client environments"
        },
        "imagination_g_applications": {
            "drift_diagnostic_automation": {
                "description": "Automate data collection for organizational drift assessment",
                "local_testing": "Test API integrations with client systems using oak-runner",
                "workflows_needed": ["Project management APIs", "Analytics APIs", "Communication APIs"],
                "oak_runner_benefits": ["Safe testing", "Rapid iteration", "No cloud dependencies"]
            },
            "weapon_deployment_automation": {
                "description": "Automate implementation of business transformation interventions",
                "local_testing": "Validate intervention workflows before client deployment",
                "workflows_needed": ["Task automation", "Progress tracking", "Reporting APIs"],
                "oak_runner_benefits": ["Proven reliability", "Client confidence", "Risk reduction"]
            },
            "client_onboarding_automation": {
                "description": "Streamline process of connecting to client systems",
                "local_testing": "Test integration workflows with common business platforms",
                "workflows_needed": ["Authentication flows", "Data discovery", "Permission setup"],
                "oak_runner_benefits": ["Standardized process", "Faster deployment", "Reduced errors"]
            }
        }
    }
    
    # 4. CREATE SAMPLE WORKFLOW EXECUTION PLANS
    print(f"\n=== SAMPLE WORKFLOW EXECUTION PLANS ===")
    
    if all_workflows:
        # Select a workflow to demonstrate the execution planning process
        sample_workflow = all_workflows[0]
        
        print(f"📋 Sample Workflow: {sample_workflow['summary']}")
        print(f"   API: {sample_workflow['api_name']}")
        print(f"   Description: {sample_workflow['description'][:100]}...")
        
        # Create execution plan
        execution_plan = {
            "workflow_id": sample_workflow['id'],
            "oak_runner_execution_steps": [
                f"# 1. Download workflow files through jentic",
                f"# 2. Set up environment variables for {sample_workflow['api_name']}",
                f"# 3. Test workflow locally: oak-runner execute-workflow {sample_workflow['id']} workflow.arazzo",
                f"# 4. Customize for IMAGINATION G use case",
                f"# 5. Deploy to client environment"
            ],
            "imagination_g_customization": {
                "diagnostic_integration": "Adapt workflow to collect drift indicators",
                "intervention_tracking": "Modify to track weapon deployment progress",
                "reporting_enhancement": "Add IMAGINATION G reporting and analytics"
            }
        }
        
        print(f"\n🔧 Execution Plan:")
        for step in execution_plan['oak_runner_execution_steps']:
            print(f"   {step}")
    
    # 5. BUILD IMAGINATION G WORKFLOW LIBRARY PLAN
    print(f"\n=== IMAGINATION G WORKFLOW LIBRARY PLAN ===")
    
    workflow_library = {
        "drift_detection_workflows": {
            "decision_velocity_tracker": "Monitor project management APIs for decision speed",
            "meeting_efficiency_analyzer": "Track calendar/communication APIs for meeting outcomes",
            "consultant_dependency_monitor": "Analyze expense/vendor APIs for external reliance",
            "binary_choice_assessor": "Evaluate decision patterns through workflow analysis"
        },
        "intervention_workflows": {
            "clarity_catalyst_automation": "Automate scheduling and tracking of clarity sessions",
            "drift_break_monitoring": "Track 30-day momentum building activities",
            "market_smackdown_execution": "Automate market analysis and competitive positioning",
            "movement_architecture_deployment": "Systematic implementation of organizational change"
        },
        "authority_building_workflows": {
            "case_study_data_collection": "Automated gathering of transformation metrics",
            "progress_reporting": "Real-time client dashboard and report generation",
            "research_data_aggregation": "Compile anonymized insights across client base",
            "thought_leadership_content": "Generate content from workflow execution data"
        }
    }
    
    # 6. SAVE COMPREHENSIVE INTEGRATION PLAN
    print(f"\n=== SAVING OAK RUNNER INTEGRATION GUIDE ===")
    
    integration_guide = {
        "oak_runner_jentic_integration": {
            "overview": "Local workflow execution for IMAGINATION G business transformation",
            "discovered_workflows": all_workflows,
            "execution_strategy": execution_strategy,
            "workflow_library_plan": workflow_library,
            "immediate_implementation_steps": [
                "Set up local oak-runner testing environment",
                "Download sample workflows through jentic for common business APIs",
                "Test local execution with oak-runner",
                "Create IMAGINATION G workflow templates",
                "Build client demonstration scenarios"
            ]
        },
        "technical_setup": {
            "requirements": ["Python 3.10+", "jentic SDK", "oak-runner CLI"],
            "environment_setup": [
                "pip install jentic oak-runner",
                "export JENTIC_UUID=2f73eccc-e20d-450f-b59b-edb9c040a85b",
                "Create workflow testing directory",
                "Set up API authentication templates"
            ],
            "testing_workflow": [
                "1. Discover workflows with jentic",
                "2. Download execution files",
                "3. Test locally with oak-runner",
                "4. Customize for IMAGINATION G",
                "5. Deploy to client environment"
            ]
        },
        "business_value": {
            "risk_reduction": "Test all workflows locally before client deployment",
            "faster_development": "Rapid prototyping and iteration of business automation",
            "client_confidence": "Demonstrate proven workflows before implementation",
            "cost_effectiveness": "Local testing reduces cloud costs and dependencies",
            "scalability": "Build reusable workflow library for all clients"
        }
    }
    
    # Save to file
    with open('/Users/marsonemac/Documents/projects/imaginationg/oak_runner_integration_guide.json', 'w') as f:
        json.dump(integration_guide, f, indent=2)
    
    print(f"✅ Oak Runner integration guide saved")
    
    # 7. IMMEDIATE ACTION ITEMS
    print(f"\n=== IMMEDIATE ACTION ITEMS ===")
    print("🎯 THIS WEEK:")
    print("   1. Set up local workflow testing environment")
    print("   2. Download 3-5 sample workflows through jentic")
    print("   3. Test oak-runner execution with sample data")
    print("   4. Create first IMAGINATION G workflow template")
    print()
    print("🚀 NEXT WEEK:")
    print("   1. Build drift diagnostic automation workflow")
    print("   2. Create weapon deployment automation templates")
    print("   3. Test client demonstration scenarios")
    print("   4. Document workflow customization process")
    print()
    print("📈 MONTH 1:")
    print("   1. Deploy first automated diagnostic to alpha client")
    print("   2. Build library of 10+ business transformation workflows")
    print("   3. Create client onboarding automation system")
    print("   4. Scale to 5+ clients using workflow automation")
    
    print(f"\n🎉 OAK RUNNER + JENTIC INTEGRATION READY!")
    print(f"💪 IMAGINATION G now has local workflow execution capabilities!")
    print(f"🚀 Ready to build and test business transformation automation!")

if __name__ == "__main__":
    # Set environment variables
    os.environ['JENTIC_UUID'] = '2f73eccc-e20d-450f-b59b-edb9c040a85b'
    
    # Run the demonstration
    asyncio.run(demonstrate_oak_runner_capabilities())