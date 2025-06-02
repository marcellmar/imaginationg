#!/usr/bin/env python3
"""
Apollo.io Automation Setup for IMAGINATION G
Automated prospect identification and contact discovery for $25M-$500M revenue companies
"""

import requests
import json
import csv
from datetime import datetime
from typing import List, Dict, Optional

class ApolloIOAutomation:
    def __init__(self, api_key: str):
        """Initialize Apollo.io automation with API key"""
        self.api_key = api_key
        self.base_url = "https://api.apollo.io/v1"
        self.headers = {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
            "X-Api-Key": api_key
        }

    def search_companies(self, min_revenue: int = 25000000, max_revenue: int = 500000000) -> List[Dict]:
        """
        Search for companies in the $25M-$500M revenue range
        Returns list of qualified prospects for IG
        """
        search_params = {
            "q_organization_num_employees_ranges": ["51,200", "201,500", "501,1000"],
            "organization_revenue_ranges": [f"{min_revenue},{max_revenue}"],
            "organization_locations": ["United States"],
            "q_organization_industries": [
                "Computer Software",
                "Information Technology and Services", 
                "Professional Services",
                "Health, Wellness and Fitness",
                "Manufacturing",
                "Financial Services"
            ],
            "page": 1,
            "per_page": 100,
            "organization_sortby_field": "organization_last_activity_date",
            "sort_ascending": False
        }

        url = f"{self.base_url}/mixed_companies/search"
        
        try:
            response = requests.post(url, headers=self.headers, json=search_params)
            response.raise_for_status()
            
            data = response.json()
            companies = data.get('organizations', [])
            
            # Filter and score companies for IG relevance
            qualified_companies = []
            for company in companies:
                ig_score = self._calculate_ig_relevance_score(company)
                if ig_score >= 60:  # Only high-potential prospects
                    company['ig_relevance_score'] = ig_score
                    qualified_companies.append(company)
            
            return qualified_companies
            
        except requests.exceptions.RequestException as e:
            print(f"Error searching companies: {e}")
            return []

    def find_decision_makers(self, company_id: str) -> List[Dict]:
        """
        Find CEO, COO, VP-level contacts at target companies
        """
        search_params = {
            "q_organization_ids": [company_id],
            "person_titles": [
                "Chief Executive Officer",
                "CEO", 
                "Chief Operating Officer",
                "COO",
                "President",
                "VP Operations",
                "VP Strategy",
                "Head of Operations",
                "Managing Director"
            ],
            "page": 1,
            "per_page": 10
        }

        url = f"{self.base_url}/mixed_people/search"
        
        try:
            response = requests.post(url, headers=self.headers, json=search_params)
            response.raise_for_status()
            
            data = response.json()
            return data.get('people', [])
            
        except requests.exceptions.RequestException as e:
            print(f"Error finding decision makers: {e}")
            return []

    def _calculate_ig_relevance_score(self, company: Dict) -> int:
        """
        Calculate IG relevance score (0-100) based on company characteristics
        Higher scores = better fit for IMAGINATION G services
        """
        score = 0
        
        # Revenue range scoring
        revenue = company.get('estimated_num_employees', 0)
        if 50 <= revenue <= 200:
            score += 25
        elif 200 <= revenue <= 500:
            score += 30
        elif 500 <= revenue <= 1000:
            score += 20
        
        # Industry fit scoring
        industry = company.get('industry', '').lower()
        high_value_industries = [
            'computer software', 'information technology', 
            'professional services', 'financial services'
        ]
        medium_value_industries = [
            'health', 'wellness', 'manufacturing', 'consulting'
        ]
        
        if any(ind in industry for ind in high_value_industries):
            score += 25
        elif any(ind in industry for ind in medium_value_industries):
            score += 15
        
        # Growth indicators
        if company.get('founded_year'):
            company_age = 2025 - company.get('founded_year', 2025)
            if 5 <= company_age <= 20:  # Established but growing
                score += 20
            elif 20 <= company_age <= 50:  # Mature companies needing transformation
                score += 25
        
        # Technology stack (if available)
        tech_stack = company.get('technologies', [])
        if len(tech_stack) > 5:  # Technology-forward companies
            score += 15
        
        # Location scoring (US companies preferred)
        location = company.get('primary_domain', '')
        if '.com' in location:  # US-based indicator
            score += 10
        
        return min(score, 100)

    def export_prospects_to_csv(self, prospects: List[Dict], filename: str = None) -> str:
        """
        Export qualified prospects to CSV for further processing
        """
        if not filename:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"ig_qualified_prospects_{timestamp}.csv"
        
        fieldnames = [
            'company_name', 'domain', 'industry', 'estimated_revenue', 
            'estimated_employees', 'location', 'ig_relevance_score',
            'founded_year', 'description', 'linkedin_url'
        ]
        
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for prospect in prospects:
                row = {
                    'company_name': prospect.get('name', ''),
                    'domain': prospect.get('primary_domain', ''),
                    'industry': prospect.get('industry', ''),
                    'estimated_revenue': prospect.get('estimated_annual_revenue', ''),
                    'estimated_employees': prospect.get('estimated_num_employees', ''),
                    'location': prospect.get('primary_city', '') + ', ' + prospect.get('primary_state', ''),
                    'ig_relevance_score': prospect.get('ig_relevance_score', 0),
                    'founded_year': prospect.get('founded_year', ''),
                    'description': prospect.get('short_description', ''),
                    'linkedin_url': prospect.get('linkedin_url', '')
                }
                writer.writerow(row)
        
        return filename

def main():
    """
    Main automation function - Daily prospect discovery for IMAGINATION G
    """
    # API key should be set as environment variable or secure config
    # Get your API key from: https://app.apollo.io/settings/integrations
    API_KEY = "YOUR_APOLLO_API_KEY_HERE"  # Replace with actual API key
    
    apollo = ApolloIOAutomation(API_KEY)
    
    print("🚀 Starting IMAGINATION G Automated Prospect Discovery...")
    print("=" * 60)
    
    # Step 1: Find qualified companies
    print("📊 Searching for companies in $25M-$500M revenue range...")
    companies = apollo.search_companies()
    print(f"   Found {len(companies)} qualified prospects")
    
    # Step 2: Find decision makers for top prospects
    print("👔 Finding CEO/leadership contacts...")
    prospects_with_contacts = []
    
    for company in companies[:20]:  # Process top 20 companies
        contacts = apollo.find_decision_makers(company.get('id', ''))
        if contacts:
            company['decision_makers'] = contacts
            prospects_with_contacts.append(company)
            print(f"   ✓ {company.get('name', 'Unknown')} - {len(contacts)} contacts found")
    
    # Step 3: Export results
    print("📤 Exporting prospects to CSV...")
    filename = apollo.export_prospects_to_csv(prospects_with_contacts)
    print(f"   ✓ Exported to: {filename}")
    
    # Step 4: Generate summary
    total_prospects = len(prospects_with_contacts)
    avg_score = sum(p.get('ig_relevance_score', 0) for p in prospects_with_contacts) / max(total_prospects, 1)
    
    print("\n🎯 AUTOMATION SUMMARY")
    print("=" * 30)
    print(f"Total Qualified Prospects: {total_prospects}")
    print(f"Average IG Relevance Score: {avg_score:.1f}/100")
    print(f"High-Score Prospects (80+): {sum(1 for p in prospects_with_contacts if p.get('ig_relevance_score', 0) >= 80)}")
    print(f"Export File: {filename}")
    
    return prospects_with_contacts

if __name__ == "__main__":
    # Set up automation to run daily
    prospects = main()
    
    print("\n🔄 NEXT STEPS:")
    print("1. Import prospects into Lemlist for email automation")
    print("2. Deploy jentic workflows for advanced qualification")
    print("3. Set up CRM automation with HubSpot")
    print("4. Monitor response rates and optimize messaging")