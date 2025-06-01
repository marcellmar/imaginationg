# IMAGINATION G - Site Consistency Guide

## Design System

### Colors
- **Background**: `bg-black` (pure black)
- **Primary Text**: `text-white`
- **Secondary Text**: `text-zinc-400` or `text-zinc-500`
- **Accent**: `text-red-500` / `bg-red-500`
- **Borders**: `border-zinc-800`
- **Hover States**: `hover:text-zinc-400` for links, `hover:bg-zinc-200` for white buttons

### Typography
- **Logo/Brand**: `font-black` (NOT font-bold)
- **Main Headings**: `font-black`
- **Subheadings**: `font-black` or `font-bold`
- **Body Text**: Regular weight
- **Button Text**: `font-black` for primary CTAs, `font-bold` for secondary

### Navigation Structure
All pages except homepage should have:
```
IMAGINATION G    ← Home   Weapons   About   [Book a Call]
```

- Logo: `text-base font-black`
- Links: `text-sm hover:text-zinc-400`
- Book a Call: `bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200`

### Page Layout
1. Navigation (fixed top)
2. Main content with `pt-24` to account for fixed nav
3. Consistent max-width containers (`max-w-6xl` or `max-w-4xl`)
4. Footer (where applicable)

### Button Styles
- **Primary CTA**: `bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-black`
- **Secondary CTA**: `bg-white text-black px-6 py-2 font-bold hover:bg-zinc-200`
- **Outline Button**: `border-2 border-white text-white hover:bg-white hover:text-black`

## Pages That Need Updates

### ✅ Consistent Pages
- Homepage (intentionally minimal, no nav)
- Weapons index
- Diagnostic
- IG Complete Flow

### ⚠️ Pages Needing Updates
1. **About Page**
   - Remove backdrop-blur and shadow from nav
   - Update nav to match standard structure
   - Change font weights to match system

2. **Case Studies**
   - Add standard navigation
   - Update typography to use font-black consistently

3. **Weapon Detail Pages**
   - Verify all use consistent navigation
   - Check button styling matches system

## Implementation Checklist
- [ ] Update About page navigation
- [ ] Update Case Studies navigation
- [ ] Verify all weapon pages have consistent nav
- [ ] Update all CTAs to use font-black
- [ ] Remove any gray-xxx classes, use zinc-xxx instead
- [ ] Ensure all "Book a Call" buttons link to Outlook booking