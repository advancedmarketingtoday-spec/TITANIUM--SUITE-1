# Corona Shoutouts Navigation Design
## Replicating Events Page Header Look Across All Pages

**Date:** September 25, 2026  
**Requested by:** Mark  
**Goal:** Consistent large Corona logo header across all site sections

---

## ✅ What Mark Likes (Events Page)

**Current Events Page:**
- ✅ Nice large Corona logo
- ✅ Clean professional header
- ✅ Consistent branding

**Goal:** Apply this same header design to ALL navigation pages

---

## 📋 Navigation Menu Items to Add/Update

Mark wants these sections with the Corona logo header:

### Main Navigation Sections:

1. **Newsletter**
   - Subscribe page
   - Latest issues
   - Archive

2. **Articles**
   - Latest articles
   - Categories
   - Featured content

3. **Advice**
   - Tips & guides
   - Local resources
   - How-to content

4. **Post an Event**
   - Event submission form
   - Calendar integration
   - Community events

5. **Add Your Business**
   - Business submission form
   - Premium listing info
   - Business owner quiz

6. **List Your Business**
   - Current directory
   - Search/browse
   - Categories

7. **Events**
   - Event calendar
   - Upcoming events
   - Past events

8. **Directory**
   - Complete business directory
   - Search by category
   - Search by location

9. **Hotspots**
   - Featured locations (like Dos Lagos)
   - Popular destinations
   - Hidden gems

---

## 🎨 Design Requirements

### Header Design (All Pages):

**Logo:**
- Large Corona Shoutouts logo
- Consistent placement (top center or left)
- Same size as events page

**Color Scheme:**
- Main color: #021929 (Corona Shoutouts dark blue)
- Accent color: #E5B85C (gold/yellow)
- Background: #ffffff (white)

**Typography:**
- Clean, modern font
- Consistent sizing
- Good readability

**Navigation Bar:**
- Horizontal menu
- Links to all sections
- Active page highlighted
- Mobile responsive

---

## 📐 Header Layout Structure

```
┌─────────────────────────────────────────────────────┐
│                                                       │
│              [CORONA SHOUTOUTS LOGO]                 │
│                    (Large)                           │
│                                                       │
├─────────────────────────────────────────────────────┤
│  Newsletter | Articles | Advice | Events | Directory │
│     Post Event | Add Business | Hotspots            │
└─────────────────────────────────────────────────────┘
```

**Or Alternative Layout:**

```
┌─────────────────────────────────────────────────────┐
│  [LOGO]                    Newsletter | Articles |  │
│                            Events | Directory |     │
│                            Add Business             │
└─────────────────────────────────────────────────────┘
```

---

## 🔧 Letterman Implementation

### Site Settings Available:

From Letterman API, we can control:
- `visibility.topLogo` (currently: true)
- `visibility.bottomLogo` (currently: true)
- `pageColors` for consistent branding
- Footer categories for navigation

### Current Settings:

```json
{
  "theme": {
    "mainColor": "#021929",
    "accentColor": "#E5B85C"
  },
  "pageColors": {
    "background": "#ffffff",
    "text": "#000000",
    "button": {
      "background": "#021929",
      "text": "#ffffff"
    }
  },
  "visibility": {
    "topLogo": true,
    "bottomLogo": true,
    "description": true
  }
}
```

---

## 📄 Pages to Create/Update

### 1. Newsletter Page
**URL:** coronashoutouts.com/newsletters  
**Content:**
- Large logo header
- Subscribe form (prominent)
- Latest newsletter preview
- Archive grid
- "Why Subscribe" section

### 2. Articles/Latest News
**URL:** coronashoutouts.com/articles  
**Content:**
- Large logo header
- Article grid/list
- Category filters
- Search functionality
- Featured articles

### 3. Advice Section
**URL:** coronashoutouts.com/advice  
**Content:**
- Large logo header
- Tips & guides
- Local resources
- How-to articles
- Corona life hacks

### 4. Post an Event
**URL:** coronashoutouts.com/submit-event  
**Content:**
- Large logo header
- Event submission form
- Guidelines
- Calendar preview
- Submission confirmation

### 5. Add Your Business (Owner Submission)
**URL:** coronashoutouts.com/add-business  
**Content:**
- Large logo header
- Business submission form
- Premium listing options
- Pricing/packages
- Business owner quiz invitation

### 6. List Your Business (Public Directory)
**URL:** coronashoutouts.com/directory  
**Content:**
- Large logo header
- Search bar
- Category browsing
- Featured businesses
- Map view (future)

### 7. Events Calendar
**URL:** coronashoutouts.com/events  
**Content:**
- Large logo header
- Calendar view
- List view
- Filter by category/date
- Submit event CTA

### 8. Directory (Full)
**URL:** coronashoutouts.com/business-directory  
**Content:**
- Large logo header
- All Corona businesses
- Search & filter
- By neighborhood
- By category

### 9. Hotspots
**URL:** coronashoutouts.com/hotspots  
**Content:**
- Large logo header
- Featured locations (Dos Lagos, etc.)
- Photo galleries
- Guides
- Map integration

---

## 🎯 Navigation Menu Structure

### Primary Navigation (Top):
```
NEWSLETTER | ARTICLES | EVENTS | DIRECTORY | HOTSPOTS
```

### Secondary Actions (Buttons):
```
[Subscribe] [Post Event] [Add Your Business]
```

### Footer Navigation:
```
About | Contact | Advertise | Submit Event | Add Business
Privacy | Terms | Community Guidelines
```

---

## 🖼️ Logo Specifications

**Corona Shoutouts Logo:**
- Current logo URL from Letterman: 
  `https://news-letter.s3.wasabisys.com/images/ef282d6a-38e9-4e3f-95c5-204a41ca8c47.png`
- Format: PNG (transparency)
- Colors: Matches brand (#021929)

**Header Sizes:**
- Desktop: 200-300px width
- Mobile: 150-200px width
- Retina: 2x resolution available

---

## 🔨 Implementation Steps

### Phase 1: Letterman Site Settings
- [ ] Update `update_publication_site_settings`
- [ ] Add footer categories for navigation
- [ ] Ensure consistent colors across all pages

### Phase 2: Create Core Pages
- [ ] Newsletter/Subscribe page
- [ ] Articles listing page
- [ ] Events calendar page
- [ ] Directory home page
- [ ] Hotspots page

### Phase 3: Add Submission Forms
- [ ] Post Event form
- [ ] Add Business form
- [ ] Integration with backend

### Phase 4: Navigation Menu
- [ ] Add top navigation bar
- [ ] Link all sections
- [ ] Mobile responsive menu
- [ ] Active state highlighting

### Phase 5: Content Population
- [ ] Advice section articles
- [ ] Hotspots guides (Dos Lagos, etc.)
- [ ] Business directory entries
- [ ] Event calendar integration

---

## 💡 Letterman Limitations & Workarounds

### What Letterman Provides:
✅ Logo display (top/bottom)  
✅ Color theming  
✅ Footer categories (navigation)  
✅ Custom signup pages  
✅ Article categories  

### What May Need Custom Work:
❓ Full navigation menu bar  
❓ Event calendar interface  
❓ Business submission forms  
❓ Directory search/filter  

### Potential Solutions:
1. **Use Letterman signup pages** for forms
2. **Footer categories** for main navigation
3. **Custom landing pages** via articles
4. **External integrations** for advanced features
5. **SkillBoss** to build custom pages

---

## 🚀 Quick Win: Footer Navigation

We can immediately add navigation via Letterman's footer categories:

```javascript
{
  "footerCategories": [
    {
      "name": "Newsletter",
      "links": [
        {"label": "Subscribe", "url": "/subscribe"},
        {"label": "Latest Issue", "url": "/newsletters"},
        {"label": "Archive", "url": "/archive"}
      ]
    },
    {
      "name": "Content",
      "links": [
        {"label": "Articles", "url": "/articles"},
        {"label": "Events", "url": "/events"},
        {"label": "Advice", "url": "/advice"}
      ]
    },
    {
      "name": "Directory",
      "links": [
        {"label": "Browse Businesses", "url": "/directory"},
        {"label": "Hotspots", "url": "/hotspots"},
        {"label": "Add Your Business", "url": "/add-business"}
      ]
    },
    {
      "name": "Community",
      "links": [
        {"label": "Post an Event", "url": "/submit-event"},
        {"label": "About", "url": "/about"},
        {"label": "Contact", "url": "/contact"}
      ]
    }
  ]
}
```

---

## 📱 Mobile Considerations

**Header on Mobile:**
- Hamburger menu
- Logo scales down
- Clean, minimal
- Easy touch targets

**Navigation on Mobile:**
- Full-screen menu overlay
- Large touch targets
- Clear hierarchy
- Search prominent

---

## 🎨 Brand Consistency Checklist

Every page should have:
- [ ] Large Corona Shoutouts logo
- [ ] Consistent color scheme (#021929 / #E5B85C)
- [ ] Same header layout
- [ ] Navigation menu (top or footer)
- [ ] Subscribe CTA
- [ ] Footer with links
- [ ] Mobile responsive
- [ ] Fast loading

---

## 📊 Priority Order

**Phase 1 (This Week):**
1. ✅ Update footer navigation in Letterman
2. ✅ Ensure logo displays on all pages
3. ✅ Add key page links

**Phase 2 (Next Week):**
1. Create Hotspots landing page
2. Create Directory home page
3. Create simplified "Add Business" page

**Phase 3 (Month 1):**
1. Build event submission system
2. Full business directory
3. Advanced navigation menu

---

## 🔗 Reference URLs

**Current Site:** coronashoutouts.com  
**Events Page (Reference):** [URL TBD - Mark to provide]  
**Letterman Dashboard:** letterman.ai  

---

## ✅ Action Items

**Immediate:**
1. Get screenshot/URL of events page Mark likes
2. Update Letterman footer navigation
3. Create 3-5 key landing pages
4. Ensure logo is consistent

**This Week:**
1. Build Hotspots page (Dos Lagos featured)
2. Build Directory home
3. Create simple business submission page
4. Test mobile responsiveness

**Next Week:**
1. Advanced navigation menu
2. Event calendar integration
3. Full directory functionality

---

**Status:** Design plan ready  
**Next Step:** Get events page reference, then implement  
**Timeline:** Core navigation live in 3-7 days  
**Owner:** Corona Shoutouts / Mark
