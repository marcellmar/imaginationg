#!/usr/bin/env python3
"""
IMAGINATION G - Jentic Integration Demo
Practical demonstration of integrating jentic with IMAGINATION G's business transformation tools
"""

import asyncio
import jentic
import jentic.models as models
import os
import json

async def demonstrate_jentic_integration():
    """Demonstrate practical jentic integration for IMAGINATION G"""
    
    print("=== IMAGINATION G - JENTIC INTEGRATION DEMO ===")
    print("Connecting business transformation diagnostics with real API workflows")
    
    # Initialize Jentic
    j = jentic.Jentic()
    
    # 1. ORGANIZATIONAL DRIFT DETECTION APIs
    print("\n=== SEARCHING FOR DRIFT DETECTION APIS ===")
    drift_search = models.ApiCapabilitySearchRequest(
        capability_description="Organizational performance monitoring and analytics",
        keywords=["analytics", "performance", "monitoring", "dashboard"],
        max_results=3
    )
    
    try:
        drift_apis = await j.search_api_capabilities(drift_search)
        print("APIs for monitoring organizational performance:")
        for workflow in drift_apis.workflows:
            print(f"  • {workflow.summary} - {workflow.description[:100]}...")
        for operation in drift_apis.operations:
            print(f"  • {operation.summary} - {operation.description[:100]}...")
    except Exception as e:
        print(f"Error: {e}")
    
    # 2. DECISION VELOCITY TRACKING
    print("\n=== SEARCHING FOR DECISION TRACKING APIS ===")
    decision_search = models.ApiCapabilitySearchRequest(
        capability_description="Project management and decision tracking workflows",
        keywords=["decisions", "project", "tracking", "management"],
        max_results=3
    )
    
    try:
        decision_apis = await j.search_api_capabilities(decision_search)
        print("APIs for tracking decision velocity:")
        for workflow in decision_apis.workflows:
            print(f"  • {workflow.summary} - {workflow.description[:100]}...")
    except Exception as e:
        print(f"Error: {e}")
    
    # 3. BUSINESS INTELLIGENCE & REPORTING
    print("\n=== SEARCHING FOR BUSINESS INTELLIGENCE APIS ===")
    bi_search = models.ApiCapabilitySearchRequest(
        capability_description="Business intelligence reporting and data visualization",
        keywords=["reporting", "dashboard", "business intelligence", "metrics"],
        max_results=3
    )
    
    try:
        bi_apis = await j.search_api_capabilities(bi_search)
        print("APIs for business intelligence:")
        for workflow in bi_apis.workflows:
            print(f"  • {workflow.summary} - {workflow.description[:100]}...")
    except Exception as e:
        print(f"Error: {e}")
    
    # 4. INTEGRATION STRATEGY FOR IMAGINATION G
    print("\n=== IMAGINATION G INTEGRATION STRATEGY ===")
    print("Based on jentic API discovery, here's how to enhance IMAGINATION G:")
    print()
    print("🎯 DRIFT DIAGNOSTIC ENHANCEMENT:")
    print("   • Connect diagnostic results to real organizational data APIs")
    print("   • Automatically pull performance metrics from client systems")
    print("   • Generate evidence-based drift scores from actual data")
    print()
    print("⚡ DECISION VELOCITY MEASUREMENT:")
    print("   • Integrate with project management APIs (Asana, Jira, etc.)")
    print("   • Track actual decision implementation timelines")
    print("   • Measure binary vs conditional decision ratios automatically")
    print()
    print("📊 REAL-TIME MOMENTUM TRACKING:")
    print("   • Connect to business intelligence platforms")
    print("   • Monitor organizational health metrics in real-time")
    print("   • Generate automated drift alerts and recommendations")
    print()
    print("🛠️ WEAPON DEPLOYMENT AUTOMATION:")
    print("   • Use APIs to implement interventions directly in client systems")
    print("   • Automate clarity ritual scheduling and tracking")
    print("   • Deploy movement architecture through integrated workflows")
    
    # 5. PRACTICAL NEXT STEPS
    print("\n=== PRACTICAL IMPLEMENTATION STEPS ===")
    print("1. CREATE JENTIC-POWERED DIAGNOSTIC:")
    print("   • Enhance the drift diagnostic to pull real data from client APIs")
    print("   • Use jentic workflows to validate drift indicators automatically")
    print()
    print("2. BUILD INTERVENTION TRACKING:")
    print("   • Connect weapon deployments to measurable API-driven outcomes")
    print("   • Track progress through integrated business intelligence workflows")
    print()
    print("3. DEVELOP CLIENT ONBOARDING AUTOMATION:")
    print("   • Use jentic to automate the process of connecting to client systems")
    print("   • Create standardized data collection workflows for drift assessment")
    print()
    print("4. ENHANCE AUTHORITY BUILDING:")
    print("   • Generate case studies with real API-driven data")
    print("   • Provide clients with automated reporting on transformation progress")
    
    # 6. SAVE INTEGRATION PLAN
    integration_plan = {
        "jentic_uuid": os.getenv('JENTIC_UUID'),
        "integration_opportunities": {
            "drift_detection": "Use organizational analytics APIs for real-time drift monitoring",
            "decision_tracking": "Integrate with project management APIs for velocity measurement", 
            "business_intelligence": "Connect to BI platforms for automated reporting",
            "weapon_deployment": "Automate intervention implementation through API workflows"
        },
        "immediate_actions": [
            "Identify most common client systems (Slack, Asana, HubSpot, etc.)",
            "Map IMAGINATION G diagnostic questions to available API data points",
            "Create jentic workflow templates for standard interventions",
            "Build API integration guides for client onboarding"
        ],
        "success_metrics": [
            "Reduce diagnostic time from manual to automated data collection",
            "Increase intervention success rate through real-time tracking", 
            "Generate case studies with quantified API-driven results",
            "Scale client engagements through workflow automation"
        ]
    }
    
    with open('/Users/marsonemac/Documents/projects/imaginationg/jentic_integration_plan.json', 'w') as f:
        json.dump(integration_plan, f, indent=2)
    
    print(f"\n✅ Integration plan saved to jentic_integration_plan.json")
    print(f"🚀 Ready to transform IMAGINATION G into an API-powered business transformation platform!")

if __name__ == "__main__":
    # Set the environment variable
    os.environ['JENTIC_UUID'] = '2f73eccc-e20d-450f-b59b-edb9c040a85b'
    
    # Run the integration demo
    asyncio.run(demonstrate_jentic_integration())