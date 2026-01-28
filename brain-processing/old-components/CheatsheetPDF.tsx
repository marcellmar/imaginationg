import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, PDFDownloadLink } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2', fontWeight: 700 }
  ]
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#1a1a1a', // dark background
    color: '#fff',
    padding: 30,
    fontFamily: 'Inter'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#a3a3a3'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 10,
    marginTop: 20,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 5
  },
  signalTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 5,
    color: '#fff'
  },
  signalText: {
    fontSize: 12,
    marginBottom: 5,
    color: '#d4d4d4'
  },
  redText: {
    color: '#ef4444', // red
    fontWeight: 700,
    marginBottom: 15
  },
  rule: {
    fontSize: 14,
    marginBottom: 5,
    color: '#d4d4d4'
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#333',
    marginTop: 20
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tableHeaderCell: {
    fontSize: 12,
    fontWeight: 700,
    padding: 5,
    color: '#fff',
    backgroundColor: '#333',
    width: '33.33%'
  },
  tableCell: {
    fontSize: 10,
    padding: 5,
    color: '#d4d4d4',
    width: '33.33%'
  },
  redCell: {
    fontSize: 10,
    padding: 5,
    color: '#ef4444',
    width: '33.33%'
  },
  greenCell: {
    fontSize: 10,
    padding: 5,
    color: '#10b981',
    width: '33.33%'
  },
  footer: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 30,
    color: '#a3a3a3'
  }
});

// Create Document Component
const CheatsheetPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>🚀 5 Signals You're Drifting Instead of Moving</Text>
        <Text style={styles.subtitle}>A quick diagnostic to spot momentum killers in your project, business, or team.</Text>
        
        <View>
          <Text style={styles.signalTitle}>1. Meetings Multiply, Outcomes Disappear</Text>
          <Text style={styles.signalText}>If your calendar is full but your checklist is empty...</Text>
          <Text style={styles.redText}>→ You're drifting.</Text>
        </View>
        
        <View>
          <Text style={styles.signalTitle}>2. You're Collecting Insights, Not Decisions</Text>
          <Text style={styles.signalText}>Endless reports, no clear next steps?</Text>
          <Text style={styles.redText}>→ You're in data fog, not movement.</Text>
        </View>
        
        <View>
          <Text style={styles.signalTitle}>3. Everything Feels 'Almost Ready'... Forever</Text>
          <Text style={styles.signalText}>Perfection is the enemy of momentum.</Text>
          <Text style={styles.redText}>→ You're polishing, not pushing.</Text>
        </View>
        
        <View>
          <Text style={styles.signalTitle}>4. Your Team Asks for Permission, Not Accountability</Text>
          <Text style={styles.signalText}>When people wait for directives instead of making moves...</Text>
          <Text style={styles.redText}>→ You're managing, not mobilizing.</Text>
        </View>
        
        <View>
          <Text style={styles.signalTitle}>5. Your Energy is Scattered Across Too Many 'Nice to Haves'</Text>
          <Text style={styles.signalText}>Busyness ≠ progress.</Text>
          <Text style={styles.redText}>→ You're stuck in noise, not clarity.</Text>
        </View>
        
        <Text style={styles.sectionTitle}>✅ IMAGINATION G's Rule of Thumb:</Text>
        <Text style={styles.rule}>• Movement beats management.</Text>
        <Text style={styles.rule}>• Clarity kills drift.</Text>
        <Text style={styles.rule}>• Build rhythm, not rigidity.</Text>
        
        <Text style={styles.sectionTitle}>🎯 Quick Self-Check:</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeaderCell}>Signal</Text>
            <Text style={styles.tableHeaderCell}>Impact</Text>
            <Text style={styles.tableHeaderCell}>Shift</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Meetings with no decisions</Text>
            <Text style={styles.redCell}>Stalled energy</Text>
            <Text style={styles.greenCell}>Anchor every meeting to action</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Endless 'research'</Text>
            <Text style={styles.redCell}>Paralysis</Text>
            <Text style={styles.greenCell}>Set a decision date and ship</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Over-polishing MVP</Text>
            <Text style={styles.redCell}>Missed market windows</Text>
            <Text style={styles.greenCell}>Launch ugly, learn fast</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Waiting for approval</Text>
            <Text style={styles.redCell}>Friction buildup</Text>
            <Text style={styles.greenCell}>Design systems that empower moves</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Scattered energy</Text>
            <Text style={styles.redCell}>Burnout risk</Text>
            <Text style={styles.greenCell}>Pick 1-3 signals that matter most now</Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.footer}>© IMAGINATION G - Marcus Davis, Founder</Text>
    </Page>
  </Document>
);

export default CheatsheetPDF;

export const CheatsheetDownloadButton = () => (
  <a
    href="/IMAGINATION_G_Drift_Movement_Playbook.pdf"
    download="IMAGINATION_G_Drift_Movement_Playbook.pdf"
    className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-all rounded inline-flex items-center gap-2"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
    Download Movement Playbook
  </a>
);