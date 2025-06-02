#!/usr/bin/env python3
"""
IMAGINATION G - Oak Runner + Jentic Integration
Local workflow execution for business transformation automation
"""

import asyncio
import jentic
import jentic.models as models
import os
import json
import subprocess
from pathlib import Path

async def explore_oak_runner_integration():
    """Explore Oak Runner + Jentic integration for business transformation"""
    
    print("=== IMAGINATION G - OAK RUNNER + JENTIC INTEGRATION ===")
    print("Local workflow execution for business transformation automation")
    
    # Initialize Jentic
    j = jentic.Jentic()
    
    # 1. DISCOVER BUSINESS TRANSFORMATION WORKFLOWS
    print("\n=== DISCOVERING EXECUTABLE WORKFLOWS ===")
    
    # Search for workflows we can execute locally
    search_terms = [
        {
            "description": "Business analytics and reporting workflows",
            "keywords": ["analytics", "reporting", "metrics", "dashboard"],
            "max_results": 3
        },
        {
            "description": "Project management and task automation", 
            "keywords": ["project", "task", "management", "automation"],
            "max_results": 3
        },
        {
            "description": "Communication and collaboration workflows",
            "keywords": ["communication", "collaboration", "messaging", "notifications"],
            "max_results": 3
        }
    ]
    
    discovered_workflows = []
    
    for search_config in search_terms:
        try:
            search_req = models.ApiCapabilitySearchRequest(**search_config)
            results = await j.search_api_capabilities(search_req)
            
            print(f"\n🔍 Search: {search_config['description']}")
            print(f"Found {len(results.workflows)} workflows, {len(results.operations)} operations")
            
            for workflow in results.workflows:
                discovered_workflows.append({
                    'id': workflow.workflow_id,
                    'summary': workflow.summary,
                    'description': workflow.description,
                    'api_name': workflow.api_name,
                    'match_score': workflow.match_score
                })
                print(f"  📋 {workflow.summary} (Score: {workflow.match_score:.2f})")
                print(f"     {workflow.description[:100]}...")
                
        except Exception as e:
            print(f"Error searching for {search_config['description']}: {e}")
    
    # 2. PREPARE WORKFLOWS FOR LOCAL EXECUTION
    print(f"\n=== PREPARING WORKFLOWS FOR LOCAL EXECUTION ===")
    
    if discovered_workflows:
        # Select top workflows for local execution testing
        top_workflows = sorted(discovered_workflows, key=lambda x: x['match_score'], reverse=True)[:3]
        
        print(f"Selected top {len(top_workflows)} workflows for execution testing:")
        for i, workflow in enumerate(top_workflows, 1):
            print(f"  {i}. {workflow['summary']} - {workflow['api_name']}")
        
        # 3. DOWNLOAD WORKFLOW EXECUTION FILES
        print(f"\n=== DOWNLOADING WORKFLOW EXECUTION FILES ===")
        
        workflow_ids = [w['id'] for w in top_workflows]
        
        try:
            execution_info = await j.load_execution_info(
                workflow_uuids=workflow_ids,
                operation_uuids=[]
            )
            print(f"✅ Execution files loaded for {len(workflow_ids)} workflows")
            
            # Save workflow information for oak-runner
            workflow_data = {
                'jentic_uuid': os.getenv('JENTIC_UUID'),
                'workflows': top_workflows,
                'execution_ready': True,
                'local_execution_guide': {
                    'oak_runner_commands': [],
                    'environment_setup': [],
                    'authentication_requirements': []
                }
            }
            
        except Exception as e:
            print(f"Error loading execution info: {e}")
            workflow_data = {
                'jentic_uuid': os.getenv('JENTIC_UUID'),
                'workflows': top_workflows,
                'execution_ready': False,
                'error': str(e)
            }
    
    # 4. DEMONSTRATE OAK-RUNNER CAPABILITIES
    print(f"\n=== DEMONSTRATING OAK-RUNNER CAPABILITIES ===")
    
    # Test oak-runner commands (these will show us what's possible)
    oak_commands = [
        "oak-runner list-workflows",
        "oak-runner show-env-mappings", 
        "oak-runner generate-example"
    ]
    
    for cmd in oak_commands:
        try:
            print(f"\n💻 Testing: {cmd}")
            result = subprocess.run(cmd.split(), capture_output=True, text=True, timeout=10)
            if result.returncode == 0:
                print(f"✅ Success: {result.stdout[:200]}...")
            else:
                print(f"ℹ️  Expected error (no workflow file): {result.stderr[:100]}...")
        except Exception as e:
            print(f"⚠️  Command error: {e}")
    
    # 5. CREATE BUSINESS TRANSFORMATION EXECUTION STRATEGY
    print(f"\n=== BUSINESS TRANSFORMATION EXECUTION STRATEGY ===")
    
    strategy = {
        "oak_runner_integration": {
            "local_execution_benefits": [
                "Test workflows without cloud dependencies",
                "Rapid prototyping of business automation",
                "Secure execution within client environments",
                "Cost-effective workflow development and testing"
            ],
            "imagination_g_use_cases": [
                "Client onboarding automation testing",
                "Drift diagnostic API integration validation",
                "Weapon deployment workflow prototyping",
                "Real-time monitoring system development"
            ],
            "implementation_approach": [
                "Use jentic for workflow discovery and download",
                "Use oak-runner for local testing and validation",
                "Deploy tested workflows to client environments",
                "Monitor and optimize through jentic analytics"
            ]
        },
        "practical_applications": {
            "diagnostic_enhancement": {
                "description": "Use oak-runner to test API integrations locally before client deployment",
                "workflow_types": ["Analytics APIs", "Project Management APIs", "Communication APIs"],
                "benefits": ["Risk reduction", "Faster development", "Client confidence"]
            },
            "weapon_automation": {
                "description": "Prototype intervention workflows locally before scaling",
                "workflow_types": ["Clarity Catalyst automation", "Progress tracking", "Results reporting"], 
                "benefits": ["Proven reliability", "Customizable execution", "Rapid iteration"]
            },
            "client_demonstrations": {
                "description": "Show clients exactly how API automation will work in their environment",
                "workflow_types": ["Demo workflows", "Proof of concept", "Value demonstration"],
                "benefits": ["Increased buy-in", "Reduced implementation risk", "Clear value proposition"]
            }
        }
    }
    
    # 6. SAVE INTEGRATION PLAN
    print(f"\n=== SAVING OAK-RUNNER INTEGRATION PLAN ===")
    
    integration_plan = {
        "oak_runner_jentic_integration": {
            "discovered_workflows": discovered_workflows,
            "execution_strategy": strategy,
            "immediate_actions": [
                "Download workflow files for top business transformation use cases",
                "Test local execution with oak-runner for common scenarios",
                "Create workflow templates for IMAGINATION G standard interventions",
                "Build client demonstration workflows for sales process"
            ],
            "technical_implementation": {
                "phase_1": "Local workflow testing and validation",
                "phase_2": "Client environment workflow deployment",
                "phase_3": "Automated execution and monitoring",
                "phase_4": "Scale and optimization through jentic analytics"
            }
        },
        "next_steps": [
            "Create workflow execution environment for common business APIs",
            "Build IMAGINATION G workflow templates using discovered APIs",
            "Test local execution of diagnostic and intervention workflows",
            "Prepare client demonstration scenarios with oak-runner"
        ]
    }
    
    # Save to file
    with open('/Users/marsonemac/Documents/projects/imaginationg/oak_runner_integration_plan.json', 'w') as f:
        json.dump(integration_plan, f, indent=2)
    
    print(f"✅ Oak Runner integration plan saved")
    
    # 7. PRACTICAL NEXT STEPS
    print(f"\n=== IMMEDIATE PRACTICAL STEPS ===")
    print("1. 🔧 WORKFLOW PREPARATION:")
    print("   • Download workflow files for discovered business APIs") 
    print("   • Create local testing environment with oak-runner")
    print("   • Validate workflow execution before client deployment")
    print()
    print("2. 🎯 IMAGINATION G INTEGRATION:")
    print("   • Build diagnostic workflow templates")
    print("   • Create weapon deployment automation scripts") 
    print("   • Develop client demonstration workflows")
    print()
    print("3. 🚀 CLIENT DEPLOYMENT:")
    print("   • Test workflows locally with oak-runner")
    print("   • Deploy proven workflows to client environments")
    print("   • Monitor execution through jentic analytics")
    print()
    print("4. 📈 SCALE AND OPTIMIZE:")
    print("   • Collect execution data and optimize workflows")
    print("   • Build library of proven business transformation workflows")
    print("   • Create automated deployment and monitoring systems")
    
    print(f"\n🎉 OAK-RUNNER + JENTIC INTEGRATION COMPLETE!")
    print(f"Ready to execute business transformation workflows locally and at scale!")

if __name__ == "__main__":
    # Set environment variables
    os.environ['JENTIC_UUID'] = '2f73eccc-e20d-450f-b59b-edb9c040a85b'
    
    # Run the integration exploration
    asyncio.run(explore_oak_runner_integration())