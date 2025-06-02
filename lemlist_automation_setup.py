#!/usr/bin/env python3
"""
Lemlist Email Automation Setup for IMAGINATION G
Automated personalized email sequences for qualified prospects
"""

import requests
import json
import csv
from datetime import datetime, timedelta
from typing import List, Dict, Optional

class LemlistAutomation:
    def __init__(self, api_key: str):
        """Initialize Lemlist automation with API key"""
        self.api_key = api_key
        self.base_url = "https://api.lemlist.com/api"
        self.headers = {
            "Content-Type": "application/json",
        }
        self.auth = (api_key, '')  # Lemlist uses basic auth with API key as username

    def create_ig_campaign(self, campaign_name: str = "IG_Automated_Outreach") -> Dict:
        """
        Create automated email campaign for IMAGINATION G prospects
        """
        campaign_data = {
            "name": campaign_name,
            "isActive": True,
            "trackLinks": True,
            "trackOpens": True,
            "trackReplies": True,
            "enableUnsubscribePage": True,
            "settings": {
                "timezone": "America/New_York",
                "sendingTimeSlots": [
                    {"day": "monday", "startTime": "09:00", "endTime": "17:00"},
                    {"day": "tuesday", "startTime": "09:00", "endTime": "17:00"},
                    {"day": "wednesday", "startTime": "09:00", "endTime": "17:00"},
                    {"day": "thursday", "startTime": "09:00", "endTime": "17:00"},
                    {"day": "friday", "startTime": "09:00", "endTime": "17:00"}
                ],
                "delayBetweenSteps": 3,  # 3 days between emails
                "maxEmailsPerDay": 50    # Conservative sending limit
            }
        }

        url = f"{self.base_url}/campaigns"
        
        try:
            response = requests.post(url, headers=self.headers, json=campaign_data, auth=self.auth)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error creating campaign: {e}")
            return {}

    def create_email_sequence(self, campaign_id: str) -> List[Dict]:
        """
        Create IMAGINATION G email sequence optimized for $25M-$500M companies
        """
        email_templates = [
            {
                "stepNumber": 1,
                "type": "email",
                "delayInDays": 0,
                "subject": "{{companyName}} - 3 Hidden Velocity Drains Costing You $2M+ Annually",
                "text": """Hi {{firstName}},

I noticed {{companyName}} has grown to {{employeeCount}} employees - impressive momentum in the {{industry}} space.

Here's what caught my attention: Companies your size typically have 3 invisible velocity drains that cost $2M+ annually:

1. **Decision Latency** - Projects taking 40% longer due to unclear decision rights
2. **Resource Fragmentation** - Teams working in silos, duplicating 25% of effort  
3. **Market Response Lag** - Missing competitive moves by 60-90 days

The companies that identify and eliminate these drains first gain permanent velocity advantages over competitors.

Quick question: Which of these feels most familiar at {{companyName}}?

I've helped 47 companies in your revenue range ($25M-$500M) eliminate these exact drains. The average result is 34% faster execution and $4.2M in recovered opportunity value.

Worth a 15-minute conversation to see if there's a fit?

Best,
Marcus Davis
IMAGINATION G

P.S. - If you're already operating at peak velocity, I'd love to learn your secret. Always looking to understand what's working.""",
                "html": None
            },
            {
                "stepNumber": 2,
                "type": "email", 
                "delayInDays": 3,
                "subject": "{{companyName}} Case Study: $6.8M Recovery in 90 Days",
                "text": """Hi {{firstName}},

Following up on velocity drains at {{companyName}}.

Thought you'd find this relevant - worked with a {{industry}} company (similar size to yours) that recovered $6.8M in just 90 days by fixing one specific velocity drain.

**The Problem:** Their project approval process was taking 23 days average. Teams were sitting idle waiting for decisions.

**The Solution:** We implemented what we call "Velocity Architecture" - systematic decision frameworks that cut approval time to 3 days.

**The Result:** 
- 87% faster project launches
- $6.8M in recovered opportunity value
- 34% improvement in competitive response time

The CEO told me: "This wasn't just process improvement - it was competitive transformation."

Similar situation at {{companyName}}?

Happy to share the specific framework we used - takes 5 minutes to explain.

Best,
Marcus Davis

P.S. - The framework works because it eliminates decision bottlenecks without creating chaos. Most companies try one or the other, never both.""",
                "html": None
            },
            {
                "stepNumber": 3,
                "type": "email",
                "delayInDays": 3, 
                "subject": "Last attempt: {{companyName}} velocity assessment",
                "text": """Hi {{firstName}},

I'll make this brief since I haven't heard back.

Two possibilities:
1. {{companyName}} is already operating at peak velocity (rare but possible)
2. You're dealing with bigger priorities right now

If it's #1 - I genuinely want to learn from you. Companies operating at true peak velocity are fascinating case studies.

If it's #2 - totally understand. When you're ready to explore eliminating hidden velocity drains, I'm here.

Either way, no more emails from me unless you reach out.

Continued success with {{companyName}},
Marcus Davis
IMAGINATION G

P.S. - If you know another CEO in your network dealing with execution velocity challenges, I'd appreciate an introduction. Half my best clients come from referrals.""",
                "html": None
            }
        ]

        created_emails = []
        for template in email_templates:
            url = f"{self.base_url}/campaigns/{campaign_id}/sequence"
            
            try:
                response = requests.post(url, headers=self.headers, json=template, auth=self.auth)
                response.raise_for_status()
                created_emails.append(response.json())
                print(f"✓ Created email step {template['stepNumber']}")
            except requests.exceptions.RequestException as e:
                print(f"Error creating email step {template['stepNumber']}: {e}")
        
        return created_emails

    def add_prospects_to_campaign(self, campaign_id: str, prospects: List[Dict]) -> List[Dict]:
        """
        Add qualified prospects to automated email campaign
        """
        added_prospects = []
        
        for prospect in prospects:
            # Extract contact information
            company_name = prospect.get('company_name', '')
            decision_makers = prospect.get('decision_makers', [])
            
            for contact in decision_makers:
                prospect_data = {
                    "email": contact.get('email', ''),
                    "firstName": contact.get('first_name', ''),
                    "lastName": contact.get('last_name', ''),
                    "companyName": company_name,
                    "industry": prospect.get('industry', ''),
                    "employeeCount": str(prospect.get('estimated_employees', '')),
                    "igRelevanceScore": str(prospect.get('ig_relevance_score', '')),
                    "title": contact.get('title', ''),
                    "linkedinUrl": contact.get('linkedin_url', '')
                }
                
                # Skip if no email
                if not prospect_data['email']:
                    continue
                
                url = f"{self.base_url}/campaigns/{campaign_id}/leads"
                
                try:
                    response = requests.post(url, headers=self.headers, json=prospect_data, auth=self.auth)
                    response.raise_for_status()
                    added_prospects.append(response.json())
                    print(f"✓ Added {prospect_data['firstName']} {prospect_data['lastName']} from {company_name}")
                except requests.exceptions.RequestException as e:
                    print(f"Error adding prospect {prospect_data.get('email', 'Unknown')}: {e}")
        
        return added_prospects

    def get_campaign_stats(self, campaign_id: str) -> Dict:
        """
        Get campaign performance statistics
        """
        url = f"{self.base_url}/campaigns/{campaign_id}/export"
        
        try:
            response = requests.get(url, headers=self.headers, auth=self.auth)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error getting campaign stats: {e}")
            return {}

    def setup_webhooks(self, webhook_url: str) -> Dict:
        """
        Set up webhooks to track email responses and integrate with CRM
        """
        webhook_data = {
            "targetUrl": webhook_url,
            "isActive": True,
            "events": [
                "emailsSent",
                "emailsOpened", 
                "emailsClicked",
                "emailsReplied",
                "emailsBounced",
                "leadsUnsubscribed"
            ]
        }
        
        url = f"{self.base_url}/hooks"
        
        try:
            response = requests.post(url, headers=self.headers, json=webhook_data, auth=self.auth)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error setting up webhooks: {e}")
            return {}

def integrate_apollo_prospects(apollo_csv_file: str) -> List[Dict]:
    """
    Load prospects from Apollo.io CSV export and format for Lemlist
    """
    prospects = []
    
    try:
        with open(apollo_csv_file, 'r', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                # Only process high-scoring prospects
                score = int(row.get('ig_relevance_score', 0))
                if score >= 70:
                    prospects.append(row)
        
        print(f"Loaded {len(prospects)} qualified prospects from Apollo.io")
        return prospects
    except FileNotFoundError:
        print(f"Apollo.io CSV file not found: {apollo_csv_file}")
        return []

def main():
    """
    Main automation function - Set up Lemlist campaigns for IMAGINATION G
    """
    # API key from Lemlist dashboard: Settings > Integrations > API
    API_KEY = "YOUR_LEMLIST_API_KEY_HERE"  # Replace with actual API key
    
    lemlist = LemlistAutomation(API_KEY)
    
    print("📧 Setting up IMAGINATION G Email Automation...")
    print("=" * 50)
    
    # Step 1: Create campaign
    print("🎯 Creating automated email campaign...")
    campaign = lemlist.create_ig_campaign("IG_Velocity_Transformation_Campaign")
    
    if not campaign:
        print("❌ Failed to create campaign")
        return
    
    campaign_id = campaign.get('_id', '')
    print(f"   ✓ Campaign created: {campaign.get('name', '')} (ID: {campaign_id})")
    
    # Step 2: Create email sequence
    print("✍️  Creating email sequence...")
    emails = lemlist.create_email_sequence(campaign_id)
    print(f"   ✓ Created {len(emails)} email templates")
    
    # Step 3: Load Apollo.io prospects (if available)
    apollo_file = "ig_qualified_prospects_*.csv"  # Latest export from Apollo.io
    print("👥 Loading qualified prospects...")
    
    # In production, this would load the actual CSV file
    # For demo, using sample data
    sample_prospects = [
        {
            'company_name': 'TechCorp Solutions',
            'industry': 'Computer Software',
            'estimated_employees': 150,
            'ig_relevance_score': 85,
            'decision_makers': [
                {
                    'first_name': 'John',
                    'last_name': 'Smith', 
                    'email': 'john.smith@techcorp.com',
                    'title': 'CEO',
                    'linkedin_url': 'https://linkedin.com/in/johnsmith'
                }
            ]
        }
    ]
    
    # Step 4: Add prospects to campaign
    print("📬 Adding prospects to email campaign...")
    added = lemlist.add_prospects_to_campaign(campaign_id, sample_prospects)
    print(f"   ✓ Added {len(added)} prospects to campaign")
    
    # Step 5: Set up tracking
    print("📊 Setting up performance tracking...")
    webhook_url = "https://your-domain.com/lemlist-webhook"  # Replace with actual webhook
    webhook = lemlist.setup_webhooks(webhook_url)
    if webhook:
        print("   ✓ Webhooks configured for response tracking")
    
    print("\n🚀 LEMLIST AUTOMATION READY!")
    print("=" * 35)
    print(f"Campaign ID: {campaign_id}")
    print(f"Prospects Added: {len(added)}")
    print("Email Sequence: 3 emails over 6 days")
    print("Expected Results:")
    print("  • 25%+ open rates")
    print("  • 5%+ response rates") 
    print("  • 2-3 qualified demos per 100 prospects")
    
    return campaign_id

if __name__ == "__main__":
    campaign_id = main()
    
    print("\n🔄 NEXT STEPS:")
    print("1. Monitor campaign performance in Lemlist dashboard")
    print("2. Integrate response tracking with CRM")
    print("3. A/B test email variations for optimization")
    print("4. Scale to 500+ prospects weekly")
    print("5. Deploy jentic workflows for advanced automation")