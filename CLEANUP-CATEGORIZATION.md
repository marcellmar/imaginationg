# Website Cleanup Categorization

Based on live navigation: HOME, COMPANIES, DEALS, INSIGHTS, FRAMEWORK, DIAGNOSTIC

---

## KEEP - Live Navigation Pages (Core Website)

### Pages
```
/pages/_app.tsx
/pages/_document.tsx
/pages/index.tsx (HOME)
/pages/companies.tsx (COMPANIES list)
/pages/companies/[slug].tsx (Individual company pages)
/pages/deals/index.tsx (DEALS list)
/pages/deals/[slug].tsx (Individual deal pages)
/pages/insights/index.tsx (INSIGHTS hub)
/pages/insights/gpi-analyses.tsx (GPI analyses list)
/pages/insights/gpi-analyses/[slug].tsx (Dynamic article pages)
/pages/insights/friction-is-margin.tsx
/pages/insights/invested-in-the-waste.tsx
/pages/insights/latent-capabilities.tsx
/pages/insights/metabolic-rate.tsx
/pages/insights/organizational-antibodies.tsx
/pages/insights/the-acquisition-trap.tsx
/pages/insights/the-spiral-model.tsx
/pages/insights/why-success-creates-rigidity.tsx
/pages/gpi-framework.tsx (FRAMEWORK hub)
/pages/gpi-framework/capital-intensity.tsx
/pages/gpi-framework/decision-latency.tsx
/pages/gpi-framework/error-correction.tsx
/pages/gpi-framework/field-state.tsx
/pages/gpi-framework/knowledge-location.tsx
/pages/gpi-framework/knowledge-velocity.tsx
/pages/gpi-framework/particle-state.tsx
/pages/gpi-framework/structural-lock-in.tsx
/pages/gpi-framework/talent-flow.tsx
/pages/gpi-framework/transition-state.tsx
/pages/diagnostic.tsx (DIAGNOSTIC tool)
```

### API Routes
```
/pages/api/gpi-content.ts (Notion content fetching)
/pages/api/gpi-content/[slug].ts (Article fetching)
/pages/api/diagnostic-submit.ts (Diagnostic submission)
/pages/api/chapters.ts (Book chapters - may be used)
/pages/api/chapters/[slug].ts (Individual chapters)
/pages/api/charts/generate.ts (Chart generation)
```

### Components (will identify which are used by KEEP pages)
- Navigation.tsx
- SEOHead.tsx
- All GPI components (/components/gpi/*)
- Components imported by KEEP pages

### Lib & Infrastructure
- /lib/gpi-*.ts (all GPI utilities)
- /lib/snapshots*.ts (company data)
- /lib/deals-content.ts (deals data)
- /lib/charts/ (if used)
- /styles/globals.css
- Config files (tsconfig.json, next.config.js, etc.)

---

## BRAIN PROCESSING - Not in Navigation

### Actions (8 files - dimension-specific action guides)
```
/pages/actions/index.tsx
/pages/actions/capital-efficiency.tsx
/pages/actions/decision-speed.tsx
/pages/actions/error-loops.tsx
/pages/actions/knowledge-flow.tsx
/pages/actions/talent-mobility.tsx
/pages/actions/unlock-structure.tsx
/pages/actions/velocity-boost.tsx
```

### Answers/Glossary (60+ files - friction patterns knowledge base)
```
/pages/answers/ (entire directory - 45+ glossary terms, guides, comparisons)
/pages/answers 2/ (DUPLICATE - delete immediately)
```

### Interventions (8 files - GPI-targeted solutions)
```
/pages/interventions/index.tsx
/pages/interventions/first-blood-build.tsx
/pages/interventions/the-build.tsx
/pages/interventions/the-map.tsx
/pages/interventions/the-market-smackdown.tsx
/pages/interventions/the-naming.tsx
/pages/interventions/the-override.tsx
/pages/interventions/thirty-day-drift-break.tsx
```

### Tools (12 files - interactive assessments)
```
/pages/tools/index.tsx
/pages/tools/block-flip.tsx
/pages/tools/career-positioning.tsx
/pages/tools/energy-audit.tsx
/pages/tools/five-questions.tsx
/pages/tools/micro-interventions.tsx
/pages/tools/nexel-audit.tsx
/pages/tools/override-protocol.tsx
/pages/tools/signal-vs-structure.tsx
/pages/tools/team-composition-map.tsx
/pages/tools/team-nexel-map.tsx
/pages/tools/work-style-audit.tsx
```

### Book Pages (2 files)
```
/pages/book/index.tsx
/pages/book/[slug].tsx
```

### Single Pages (5 files)
```
/pages/about.tsx (Marcus bio)
/pages/case-studies.tsx (Case studies)
/pages/dashboard.tsx (Health dashboard)
/pages/ig-complete-flow.tsx (Problem selector flow)
/pages/start.tsx (Alternative entry point)
```

### Old Remnants - Momentum/Cheatsheet (5 files - pre-GPI concepts)
```
/pages/momentum-hub.tsx (OLD - "momentum tracking" concept)
/pages/momentum-tracker.tsx (OLD - weekly momentum scoring)
/pages/cheatsheet.tsx (OLD - "drift movement playbook")
/pages/not-ready.tsx (Dev artifact)
/pages/read-only.tsx (Dev artifact)
```

### Old API Routes (8 files - unclear/deprecated)
```
/pages/api/capture-flow-lead.ts
/pages/api/generate-pdf.ts
/pages/api/ig/demo-generator.ts
/pages/api/ig/interventions.ts
/pages/api/ig/metrics.ts
/pages/api/ig/patterns.ts
/pages/api/send-cheatsheet.ts
/pages/api/subscribe.ts
```

### Components to Move (will identify after checking imports)
```
/components/MomentumTracker.tsx (tied to momentum-tracker.tsx)
/components/DriftCheatSheet.tsx (tied to cheatsheet.tsx)
/components/CheatsheetPDF.tsx (tied to cheatsheet.tsx)
/components/ServiceLayout.tsx (orphaned)
/components/ServiceContent.tsx (orphaned)
/components/WeaponLayout.tsx (may be used by interventions)
/components/WeaponContent.tsx (may be used by interventions)
/components/InterventionLayout.tsx (used by interventions)
/components/InterventionContent.tsx (used by interventions)
/components/IGCompleteFlow.tsx (used by ig-complete-flow.tsx)
/components/ImaginationGLanding.tsx (old landing component)
```

### Assets to Move
```
/public/IMAGINATION_G_Drift_Movement_Playbook.pdf
/public/IMAGINATION_G_5_Signals_Cheatsheet.pdf
/public/charts/demo/ (if exists)
```

---

## SUMMARY

**KEEP:** ~35 page files + infrastructure + components they use
**BRAIN PROCESSING:** ~110 page files + old components + old assets

**Immediate Delete (duplicates):**
- `/pages/answers 2/` - exact duplicate

**Next Steps:**
1. Create `/brain-processing/` folder
2. Move all BRAIN PROCESSING files there (organized by category)
3. Verify no broken imports in KEEP files
4. Test build
5. Commit cleanup
