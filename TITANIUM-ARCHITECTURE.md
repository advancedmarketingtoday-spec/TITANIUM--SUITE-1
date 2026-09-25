# TITANIUM SUITE - COMPLETE ARCHITECTURE

**OpenClaw as Intelligence & Orchestration Layer**

*Finalized: September 22, 2026*  
*Owner: Mark Eno*  
*Version: 1.0 - Production Blueprint*

---

## Core Design Principle

> **Each product owns one part of the customer journey. OpenClaw coordinates them without becoming another duplicate CRM.**

OpenClaw observes the entire loop, decides the next appropriate action, delegates to specialist agents, verifies results, and records what happened.

---

## The Customer Journey Loop

```
Letterman (Attract)
    ↓
Page Sprout (Capture)
    ↓
Quizforma (Qualify)
    ↓
Global Control Center (Identify) ← Master Customer Spine
    ↓
MintBird (Convert)
    ↓
Course Sprout (Deliver)
    ↓
Back to Global Control
    ↓
Back to Letterman (Continue)
```

**OpenClaw sits above this loop as the orchestration intelligence.**

---

## Product Ownership Model

### Single Authoritative Responsibility

| Product | Primary Responsibility | Should Own |
|---------|----------------------|------------|
| **Letterman** | Audience and editorial content | Newsletters, articles, audience engagement |
| **Page Sprout** | Campaign entry points | PopLinks, bridge pages, lead-capture steps |
| **Quizforma** | Qualification | Answers, scores, recommendations, segmentation signals |
| **Global Control Center** | Customer identity | Contacts, consent, lifecycle stage, tags, integrations |
| **MintBird** | Revenue conversion | Products, offers, checkout, upsells, funnels |
| **Course Sprout** | Customer success | Access, courses, training progress, pods, goals |
| **OpenClaw** | Coordination | Routing, decisions, approvals, retries, reporting, audit history |

### Ownership Rule

**This prevents conflicting records.**

Example: Course Sprout reports "course completed" → OpenClaw updates the lifecycle tag in Global Control Center.

Course Sprout owns the training completion event.  
Global Control owns the customer lifecycle state.

---

## OpenClaw Agent Team

### Do NOT Create One Enormous Agent

❌ **Wrong:** One agent with every credential and permission  
✅ **Right:** Coordinator + narrowly authorized specialists

### Agent Architecture

| Agent | Access | Responsibilities |
|-------|--------|-----------------|
| **Titanium Coordinator** | Reads normalized status, routes work, limited direct write | Orchestration, decisions, approvals |
| **Audience Agent** | Letterman only | Newsletter creation, article publishing, editorial calendar |
| **Acquisition Agent** | Page Sprout + Quizforma | Bridge pages, lead capture, quiz routing |
| **CRM Agent** | Global Control Center only | Contact search/create/update, tagging, consent |
| **Revenue Agent** | MintBird only | Offer selection, funnel assembly, purchase verification |
| **Delivery Agent** | Course Sprout only | Enrollment, progress monitoring, access management |
| **Audit Agent** | Read-only across all platforms | Reporting, analytics, audit logs |

### Critical Security Notes

**From OpenClaw Documentation:**
- OpenClaw supports separate agent workspaces, authentication profiles, sessions, and skill restrictions
- ⚠️ **A workspace is NOT a hard security sandbox**
- Tool permissions and credential scopes remain essential
- Use different credentials for each specialist agent
- Store credentials via ClawLauncher secure controls or OpenClaw SecretRefs
- **Never** inside prompts, skill files, contact tags, or chat messages
- OpenClaw's secrets system supplies credentials without placing values into conversation context

---

## How OpenClaw Uses Each Product

### 1. Letterman: The Attention Engine

**OpenClaw Should:**
- ✅ Build editorial calendar from customer questions and course activity
- ✅ Draft articles and newsletters with one principal call to action
- ✅ Route drafts through human approval before sending
- ✅ Attach campaign IDs and tracking parameters to every link
- ✅ Send engaged readers into relevant Page Sprout page
- ✅ Feed click topics back into Global Control as interest signals
- ✅ Repurpose successful material into course lessons, quiz topics, funnel copy

**Important Separation:**
Keep receipts, account-access messages, and urgent support notices separate from editorial newsletters.

**Reference:** Letterman's public pages at m.letterman.ai demonstrate its newsletter/article publishing role.

---

### 2. Page Sprout: The Acquisition Layer

**OpenClaw Should:**
- ✅ Generate bridge pages from controlled templates
- ✅ Give every page: one audience, one promise, one primary action
- ✅ Preserve source, campaign, and content attribution throughout journey
- ✅ Test headlines or offers without changing several variables simultaneously
- ✅ Send form submissions to Global Control Center immediately
- ✅ Use Quizforma only when qualification changes customer's route

**Avoid:**
- ❌ Producing hundreds of almost-identical pages
- ✅ Instead: Maintain reusable blocks for benefits, proof, FAQs, consent language, CTAs

---

### 3. Quizforma: The Diagnosis Engine

**Purpose:** Determine what a person needs—not merely collect entertaining answers.

**Every Question Should Affect:**
- Qualification score
- Audience segment
- Recommended offer
- Follow-up content
- Sales or support priority

**Deterministic Scoring Rules:**
```
Problem urgency:      0-30 points
Budget readiness:     0-20 points
Implementation timing: 0-20 points
Product fit:          0-30 points
────────────────────────────────
Total score:          0-100 points
```

**OpenClaw Converts Results to Controlled Tags:**
```
interest:newsletter-growth
intent:high
fit:course-sprout
timing:within-30-days
```

**Versioning:** Version every quiz and scoring model so historical results remain explainable.

---

### 4. Global Control Center: The Customer Spine

**Authoritative Location For:**
- Canonical contact identity
- Consent and suppression status
- Lifecycle stage
- Source and attribution
- Tags and segments
- Product ownership
- Last meaningful activity

**Contact Management Rules:**

**Before Creating Contact:**
1. ✅ Search first
2. ✅ Upsert if exists
3. ✅ Normalize email addresses and phone numbers
4. ✅ Retain source-platform IDs
5. ✅ Prevent duplicates with idempotency keys

**Controlled Tag Vocabulary:**

| Category | Examples |
|----------|----------|
| **Stage** | `stage:lead`, `stage:customer` |
| **Source** | `source:letterman`, `source:partner` |
| **Interest** | `interest:email-growth` |
| **Intent** | `intent:low`, `intent:high` |
| **Ownership** | `customer:product-slug` |
| **Training** | `training:active`, `training:completed` |
| **Compliance** | `suppression:unsubscribed` |

**Critical Rule:**
> A suppression or revoked-consent state must override every sales or newsletter automation.

---

### 5. MintBird: The Conversion Engine

**OpenClaw Should:**
- ✅ Choose appropriate offer based on tags and qualification
- ✅ Assemble sales pages from approved offer components
- ✅ Prepare order bumps, upsells, downsells
- ✅ Preview every funnel before publishing
- ✅ Require approval for: prices, guarantees, coupons, public launches
- ✅ Record: checkout starts, purchases, refunds, upsell acceptance
- ✅ Stop prospect nurturing immediately after relevant purchase

**Critical Rule:**
> Never allow OpenClaw to invent prices, discounts, or guarantees from a general instruction. Those should come from an approved offer registry.

**Reference:** MintBird publicly describes funnels, sales pages, order forms, bump offers, upsells/downsells, and per-step performance tracking. (Available: October 21, 2025)

---

### 6. Course Sprout: The Delivery and Results Engine

**After MintBird Confirms Payment:**

**OpenClaw Should:**
1. ✅ Verify transaction event
2. ✅ Update customer's lifecycle stage
3. ✅ Grant correct Course Sprout entitlement
4. ✅ Send access instructions
5. ✅ Confirm enrollment succeeded
6. ✅ Stop conflicting sales sequences

**Learning Behavior Intelligence:**

| Behavior | OpenClaw Action |
|----------|----------------|
| No login | Access-help message |
| Started but stalled | Support or accountability prompt |
| Module completed | Encouragement and next step |
| Goal achieved | Testimonial request or approved next offer |
| Repeated difficulty | Support escalation |

**Golden Rule:**
> Customer success should precede another upsell.

---

## The Event System That Connects Everything

### Webhook Priority

**Use webhooks when supported.**  
**Use limited polling only as fallback.**

### Recommended Event Names

```
lead.captured
quiz.completed
contact.updated
segment.changed
checkout.started
purchase.completed
refund.completed
enrollment.created
lesson.completed
goal.achieved
newsletter.sent
newsletter.clicked
contact.unsubscribed
```

### Standard Event Schema

```json
{
  "event_id": "unique-id",
  "event_type": "purchase.completed",
  "contact_key": "canonical-contact-id",
  "source": "mintbird",
  "source_record_id": "platform-record-id",
  "campaign_id": "campaign-id",
  "occurred_at": "2026-09-22T14:30:00Z",
  "payload_version": "1",
  "idempotency_key": "stable-retry-key"
}
```

**Idempotency Key Purpose:**
Prevents duplicate contacts, duplicate enrollments, and repeated emails when a request is retried.

---

## Highest-Value Automations

### 1. Content-to-Customer
```
Letterman article
    ↓
Page Sprout bridge page
    ↓
Quizforma assessment
    ↓
Global Control tags
    ↓
Relevant MintBird funnel
```

### 2. Purchase-to-Delivery
```
MintBird paid event
    ↓
Verify transaction
    ↓
Update Global Control
    ↓
Enroll in Course Sprout
    ↓
Send access message
    ↓
Stop sales follow-up
```

### 3. Progress-to-Expansion
```
Course progress
    ↓
Update customer record
    ↓
Deliver help when stalled
    ↓
Offer approved next step after meaningful result
```

### 4. Engagement Intelligence
```
Letterman clicks
    ↓
Infer topic interest
    ↓
Update tags
    ↓
Personalize later newsletters, pages, quizzes
```

### 5. Global Suppression
```
Unsubscribe or revoked consent
    ↓
Update Global Control
    ↓
Suppress Letterman campaigns
    ↓
Suppress nonessential promotional follow-up everywhere
```

---

## Efficiency Rules for OpenClaw

### Data Management
- ✅ Use fixed schemas and lookup tables for stable mappings
- ✅ Give every campaign a permanent `campaign_id`
- ✅ Batch read operations when possible
- ✅ Keep writes small and reversible

### Preview and Approval
- ✅ Preview pages, newsletters, funnels before publishing
- ✅ Require human approval for: sends, publishing, price changes, refunds, destructive actions

### Reliability
- ✅ Use bounded retries with exponential backoff
- ✅ Send persistent failures to review queue
- ✅ Record: request, decision, tool action, result, verification

### Performance
- ✅ Use inexpensive models for classification and formatting
- ✅ Reserve stronger reasoning for strategy, copy, exception handling
- ✅ Measure automation failures as carefully as marketing results

---

## Titanium Campaign Blueprint

**Every campaign should have one configuration record:**

```json
{
  "campaign_id": "camp_2026_seo_webinar",
  "audience": "Small business owners interested in SEO",
  "promise": "Learn local SEO fundamentals in 90 minutes",
  "letterman": {
    "issue_id": "news_456",
    "sequence_ids": ["seq_789", "seq_790"]
  },
  "page_sprout": {
    "page_id": "page_123",
    "poplink": "https://coronashoutouts.com/seo-webinar"
  },
  "quizforma": {
    "quiz_id": "quiz_321",
    "version": "2.1",
    "scoring_rules": "scoring_v2.1.json"
  },
  "global_control": {
    "tag_transitions": {
      "add": ["campaign:seo-webinar", "interest:seo"],
      "remove": ["stage:cold"]
    }
  },
  "mintbird": {
    "offer_id": "offer_654",
    "funnel_id": "funnel_987"
  },
  "course_sprout": {
    "entitlement_id": "course_seo_basics"
  },
  "consent_requirements": ["email_marketing"],
  "primary_kpi": "course_enrollments",
  "approvers": ["mark@example.com"],
  "rollback_procedure": "rollback_seo_webinar.md"
}
```

**OpenClaw reads this record instead of reconstructing the campaign from scattered prompts.**

---

## Recommended Build Order

### Phase 1: Foundation (Weeks 1-4)
1. ✅ Establish canonical contact IDs, consent rules, tag taxonomy
2. ✅ Connect each product in read-only mode
3. ✅ Test authentication and basic queries

### Phase 2: First Flow (Weeks 5-8)
4. ✅ Create one verified lead flow: Page Sprout → Quizforma → Global Control
5. ✅ Test end-to-end with test contacts
6. ✅ Verify no duplicates, consent preserved

### Phase 3: Recommendations (Weeks 9-12)
7. ✅ Add MintBird recommendations (no automatic purchasing)
8. ✅ Test offer routing based on tags
9. ✅ Verify recommendations match qualification

### Phase 4: Purchase Flow (Weeks 13-16)
10. ✅ Implement verified purchase → Course Sprout enrollment
11. ✅ Test with test transactions
12. ✅ Verify idempotency (no duplicate enrollments)

### Phase 5: Content Loop (Weeks 17-20)
13. ✅ Add Letterman content and nurture workflows
14. ✅ Test newsletter → page → quiz → offer flow
15. ✅ Verify tracking parameters work

### Phase 6: Agent Separation (Weeks 21-22)
16. ✅ Separate OpenClaw into specialist agents
17. ✅ Assign scoped credentials
18. ✅ Test agent-to-agent handoffs

### Phase 7: Observability (Weeks 23-24)
19. ✅ Add dashboards, failure queues, audit reporting
20. ✅ Test failure recovery and rollback
21. ✅ Enable approved write and publishing actions

**Only then enable approved write and publishing actions.**

---

## Critical Pre-Implementation Requirement

**Before implementation:**

Ingest the authenticated API documentation for all six products.

**Public information is insufficient** to safely assume every endpoint.

**For Each Platform, OpenClaw Needs:**
- ✅ Verified authentication methods
- ✅ Required scopes
- ✅ Available objects and fields
- ✅ Webhook schemas
- ✅ Rate limits
- ✅ Idempotency behavior
- ✅ Test-mode procedures
- ✅ Error codes and retry guidance

**Platform API Documentation Required:**
1. Page Sprout API documentation
2. Quizforma API documentation
3. Global Control Center API documentation
4. Course Sprout API documentation
5. Letterman API documentation (already documented in LETTERMAN-ROADMAP.md)
6. MintBird API documentation (already have from MCP work)

---

## The Complete Vision

> **That structure turns the products into one customer operating system:**

- **Letterman attracts**
- **Page Sprout captures**
- **Quizforma diagnoses**
- **Global Control remembers**
- **MintBird converts**
- **Course Sprout delivers**
- **OpenClaw coordinates**

---

## Success Metrics

### Technical
- ✅ All 7 agents operational
- ✅ All 6 platforms integrated
- ✅ Zero critical errors in 30 days
- ✅ <3 second average routing decision
- ✅ 99.9% event processing reliability

### Business
- 📈 Campaign setup time: 4 hours → 30 minutes
- 📈 Lead-to-customer conversion: +25%
- 📈 Course completion rates: +40%
- 📈 Customer lifetime value: +50%
- 📈 Time saved per week: 20+ hours

### Customer Experience
- 🎯 Seamless journey across all 6 platforms
- 🎯 No duplicate contacts or emails
- 🎯 Personalized recommendations
- 🎯 Timely follow-up (never falls through cracks)
- 🎯 Respect for consent (100% compliance)

---

## Architecture Principles Summary

### 1. Single Source of Truth
Each product owns one responsibility. No duplication.

### 2. OpenClaw as Coordinator
Intelligence layer, not another CRM.

### 3. Event-Driven
Webhooks primary, polling fallback.

### 4. Idempotent by Design
Every action can be retried safely.

### 5. Approval Gates
Human judgment for consequential actions.

### 6. Audit Everything
Complete history for troubleshooting and compliance.

### 7. Fail Safely
Bounded retries, failure queues, rollback procedures.

### 8. Agent Specialization
Narrow credentials, explicit permissions, separate workspaces.

### 9. Schema-Driven
Fixed mappings, no prompt reconstruction.

### 10. Customer Consent First
Suppression overrides all automation.

---

## Current Status

**Phase:** Complete architecture documented ✅  
**Next:** Phase 1 - Connect platforms read-only

**Already Have:**
- ✅ Letterman MCP skill (47 tools)
- ✅ Global Control MCP skill (15 tools)
- ✅ MintBird MCP & REST (186 + 189 endpoints)
- ✅ Architecture blueprint (this document)
- ✅ Master plan (TITANIUM-SUITE-MASTER-PLAN.md)
- ✅ Workshop knowledge (140,000+ words)

**Need to Obtain:**
- ⬜ Page Sprout API documentation
- ⬜ Quizforma API documentation
- ⬜ Course Sprout API documentation
- ⬜ Letterman API documentation (for LETTERMAN-ROADMAP.md)

**Need to Build:**
- ⬜ 7 core skills
- ⬜ 7 specialist agents
- ⬜ Event processing system
- ⬜ Audit and reporting
- ⬜ Campaign configuration system

**Timeline:** 24 weeks (6 months) to full production system

---

## Files in This System

📍 **Architecture:** `/root/.openclaw/workspace/TITANIUM-ARCHITECTURE.md` (this file)  
📍 **Master Plan:** `/root/.openclaw/workspace/TITANIUM-SUITE-MASTER-PLAN.md`  
📍 **Original Suite:** `/root/.openclaw/workspace/TITANIUM-SUITE.md`  
📍 **Letterman Roadmap:** `/root/.openclaw/workspace/LETTERMAN-ROADMAP.md`  
📍 **Workshops:** `/root/.openclaw/workspace/memory-banks/openclaw-workshops/`  
📍 **Memory:** `/root/.openclaw/workspace/MEMORY.md`

---

**This is the complete architectural blueprint. Every decision principle. Every integration pattern. Every safety rule.**

**Six platforms. One operating system. OpenClaw as the orchestration intelligence.**

*Titanium Suite Architecture - September 22, 2026*
