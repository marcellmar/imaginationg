#!/usr/bin/env python3
"""
Jentic SDK Exploration Script for IMAGINATION G
Exploring jentic capabilities for business transformation workflows
"""

import asyncio
import jentic
import jentic.models as models
import os

async def explore_jentic():
    """Explore jentic SDK capabilities"""
    
    print("=== IMAGINATION G - JENTIC EXPLORATION ===")
    print(f"Jentic UUID: {os.getenv('JENTIC_UUID', 'Not set')}")
    
    # Initialize Jentic
    j = jentic.Jentic()
    
    # 1. Search for business transformation APIs
    print("\n=== SEARCHING FOR BUSINESS TRANSFORMATION APIS ===")
    search_requests = [
        {
            "capability_description": "Business transformation and organizational change",
            "keywords": ["transformation", "business", "strategy"],
            "max_results": 5
        },
        {
            "capability_description": "Project management and workflow automation", 
            "keywords": ["project", "workflow", "management"],
            "max_results": 5
        },
        {
            "capability_description": "Data analysis and business intelligence",
            "keywords": ["analysis", "data", "intelligence"],
            "max_results": 5
        }
    ]
    
    for req_data in search_requests:
        try:
            search_req = models.ApiCapabilitySearchRequest(**req_data)
            results = await j.search_api_capabilities(search_req)
            print(f"\nSearch: {req_data['capability_description']}")
            print(f"Results: {results}")
        except Exception as e:
            print(f"Error searching for {req_data['capability_description']}: {e}")
    
    # 2. Explore tool generation
    print("\n=== EXPLORING TOOL GENERATION ===")
    tool_manager = jentic.create_llm_tool_manager()
    
    try:
        # Try to generate tools for business transformation
        llm_tools = await j.generate_llm_tool_definitions(
            operations=[],  # We'll start with empty and see what happens
            workflows=[]
        )
        print(f"Generated LLM tools: {llm_tools}")
    except Exception as e:
        print(f"Error generating tools: {e}")
    
    # 3. Explore task execution
    print("\n=== EXPLORING TASK EXECUTION ===")
    executor = jentic.TaskExecutor()
    
    print(f"Executor API client: {executor.api_hub_client}")
    
    # 4. Check available workflows for business transformation
    print("\n=== CHECKING FOR AVAILABLE WORKFLOWS ===")
    try:
        # This might help us understand what workflows are available
        workflow_info = await j.load_execution_info()
        print(f"Execution info: {workflow_info}")
    except Exception as e:
        print(f"Error loading execution info: {e}")

if __name__ == "__main__":
    # Set the environment variable
    os.environ['JENTIC_UUID'] = '2f73eccc-e20d-450f-b59b-edb9c040a85b'
    
    # Run the async exploration
    asyncio.run(explore_jentic())