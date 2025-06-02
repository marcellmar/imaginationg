#!/usr/bin/env python3
"""
IMAGINATION G - Jentic Business Transformation Tools
Creating LLM tools from jentic workflows for business transformation
"""

import asyncio
import jentic
import jentic.models as models
import os
import json

async def create_business_transformation_tools():
    """Create LLM tools for IMAGINATION G business transformation workflows"""
    
    print("=== IMAGINATION G - JENTIC BUSINESS TRANSFORMATION TOOLS ===")
    
    # Initialize Jentic
    j = jentic.Jentic()
    
    # Key workflow IDs from our search results that are relevant to business transformation
    relevant_workflows = [
        'e6f041ae544ca9f40f7788e07757f0d2',  # export-organization-data-enterprise
        '23ba57035c5b5054ab9185268914ea97',  # progress-opportunity-through-sales-pipeline  
        'c11ab52e8ac4e70c8028696dab9edc03',  # configure-project-issue-security
        '8a23378916da773038ef0608afbbaa8c',  # manage-project-brief
        'f908fc8e81ef01b9f55f1c51dfb11650',  # regional-brand-market-analysis
    ]
    
    # Key operation UUIDs for individual business operations
    relevant_operations = [
        'b517b38e4a6be0b64df2e431cbf7b2b7',  # Insert a business unit
        'eed5bdfcbbec552dde35d7b98eeb1788',  # Replace company
        '05311f183e3555d7f24ce3f1a9d81893',  # View organization change log
        '463f6c521521d5559d8073293859363d',  # Analysis categories
        'ca4aa27139716eaff787487838c5a5a6',  # Analytics data
    ]
    
    print(f"\n=== LOADING EXECUTION INFO FOR BUSINESS WORKFLOWS ===")
    try:
        execution_info = await j.load_execution_info(
            workflow_uuids=relevant_workflows[:2],  # Start with just 2 to test
            operation_uuids=relevant_operations[:2]
        )
        print(f"Execution info loaded successfully!")
        print(f"Workflows: {len(execution_info.workflows) if hasattr(execution_info, 'workflows') else 'N/A'}")
        print(f"Operations: {len(execution_info.operations) if hasattr(execution_info, 'operations') else 'N/A'}")
        
        # Print details about loaded workflows
        if hasattr(execution_info, 'workflows'):
            for workflow in execution_info.workflows:
                print(f"  - Workflow: {workflow.name if hasattr(workflow, 'name') else 'Unknown'}")
                
        if hasattr(execution_info, 'operations'):
            for operation in execution_info.operations:
                print(f"  - Operation: {operation.name if hasattr(operation, 'name') else 'Unknown'}")
                
    except Exception as e:
        print(f"Error loading execution info: {e}")
        return
    
    print(f"\n=== GENERATING LLM TOOLS FOR BUSINESS TRANSFORMATION ===")
    try:
        # Create tool manager and load with our business workflows
        tool_manager = jentic.create_llm_tool_manager()
        
        # Load workflows and operations into the tool manager
        if hasattr(execution_info, 'workflows'):
            tool_manager.load_workflows(execution_info.workflows)
        if hasattr(execution_info, 'operations'):
            tool_manager.load_operations(execution_info.operations)
            
        # Generate LLM tool specifications
        tool_specs = tool_manager.get_tool_specs()
        print(f"Generated tool specs: {tool_specs}")
        
        # Save tools for use with Claude Desktop or other LLM systems
        with open('/Users/marsonemac/Documents/projects/imaginationg/jentic_business_tools.json', 'w') as f:
            json.dump(tool_specs, f, indent=2)
        print(f"Tools saved to jentic_business_tools.json")
        
    except Exception as e:
        print(f"Error generating LLM tools: {e}")
    
    print(f"\n=== TESTING WORKFLOW EXECUTION ===")
    try:
        # Test executing one of the simpler workflows
        executor = jentic.TaskExecutor()
        
        # Try the organization export workflow (might need parameters)
        workflow_result = await executor.execute_workflow(
            workflow_uuid='e6f041ae544ca9f40f7788e07757f0d2',
            inputs={}  # We'll start with empty inputs to see what's required
        )
        print(f"Workflow execution result: {workflow_result}")
        
    except Exception as e:
        print(f"Error executing workflow (expected - likely needs parameters): {e}")
    
    print(f"\n=== BUSINESS TRANSFORMATION TOOL SUMMARY ===")
    print("Jentic provides access to:")
    print("• Organization data export workflows")
    print("• Sales pipeline management")
    print("• Project management and security configuration") 
    print("• Market analysis and business intelligence")
    print("• Company data management and change tracking")
    print("\nThese can be integrated into IMAGINATION G's diagnostic and intervention tools!")

if __name__ == "__main__":
    # Set the environment variable
    os.environ['JENTIC_UUID'] = '2f73eccc-e20d-450f-b59b-edb9c040a85b'
    
    # Run the business tool creation
    asyncio.run(create_business_transformation_tools())