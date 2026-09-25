# TITANIUM SUITE - FINAL AGENT STRUCTURE

**Complete Implementation Guide**

*Finalized: September 22, 2026 16:35 UTC*  
*Owner: Mark Eno*

---

## Example: Local Article Campaign

**Complete workflow showing proper handoffs:**

### 1. Titanium Manager

**Defines:**
- Audience
- Location
- Objective
- Deadline

**Outputs:** Structured task assignment

---

### 2. Local Intelligence Scout

**Researches:**
- Topic
- Provides reliable sources

**Returns to:** Manager

---

### 3. Content Strategist

**Creates:**
- Brief
- Article

**Returns to:** Manager

---

### 4. SEO Architecture Agent

**Adds:**
- Metadata
- Schema
- Internal links

**Returns to:** Manager

---

### 5. Publishing and Quality Control

**Checks:**
- Accuracy
- Links
- Tracking
- Mobile presentation
- Approvals

**Returns to:** Manager

---

### 6. Manager Requests Publication Approval

**Human approves** (if required)

---

### 7. Outreach Coordinator

**Prepares:**
- Distribution
- Sponsor activity

**Returns to:** Manager

---

### 8. Growth Analytics

**Measures:**
- Results
- Recommends next improvement

**Returns to:** Manager

---

### Critical Principle

> **The work should return to the Manager after every major stage. Specialists should not start uncontrolled chains of additional agents.**

**Why:**
- Manager maintains control
- No circular handoffs
- Clear decision points
- Proper approval gates
- Traceable workflow

---

## Define the Manager Carefully

### The Titanium Manager SHOULD

**Responsibilities:**

1. ✅ **Receive user requests**
2. ✅ **Convert requests into structured tasks**
3. ✅ **Decide which agents are needed**
4. ✅ **Supply campaign and customer context**
5. ✅ **Prevent duplicate work**
6. ✅ **Track task status**
7. ✅ **Resolve conflicting recommendations**
8. ✅ **Request human approval**
9. ✅ **Verify final completion**
10. ✅ **Produce one consolidated report**

---

### The Manager Should NOT

**Prohibited Actions:**

1. ❌ **Publish independently**
2. ❌ **Send outreach**
3. ❌ **Change customer consent**
4. ❌ **Modify prices**
5. ❌ **Issue refunds**
6. ❌ **Store API keys**
7. ❌ **Grant itself unrestricted access**
8. ❌ **Rewrite permanent knowledge without review**

---

### Manager Authority

> **Give it broad read access but limited write access.**

**Read Access:**
- ✅ All platforms (summary level)
- ✅ All agent outputs
- ✅ Campaign performance
- ✅ Approval status

**Write Access:**
- ✅ Task assignments
- ✅ Approval requests
- ✅ Reports
- ❌ Platform data (delegates to specialists)

---

## Agent Handoff Format

**Require every agent to return the same structured response:**

```yaml
task_id: unique-task-id
campaign_id: campaign-id
agent: seo-architecture
status: completed
summary: Brief description of completed work
deliverables:
  - optimized_metadata.yaml
  - schema_recommendations.json
  - internal_links.csv
sources:
  - google-search-central-docs
  - schema-org-specifications
decisions:
  - used_article_schema_instead_of_newsarticle
  - added_breadcrumb_structured_data
  - linked_to_related_pool_service_pages
risks:
  - schema_validation_should_be_tested
  - canonical_change_may_affect_indexing
confidence: high
approval_required: true
recommended_next_agent: publishing-quality-control
memory_proposals:
  - type: procedure_update
    product: seo
    observation: Article schema works better for local content
    confidence: medium
```

**Purpose:**
> This prevents agents from passing vague paragraphs that the next agent may misinterpret.

**Benefits:**
- ✅ Structured and parsable
- ✅ Traceable decisions
- ✅ Clear next steps
- ✅ Risk transparency
- ✅ Approval clarity
- ✅ Memory governance

---

## Memory Boundaries

### Shared Knowledge

**Every agent may read:**

- Brand guidelines
- Target locations
- Approved services
- Tone and reading level
- Campaign definitions
- Approved claims
- Consent policy
- Common terminology
- Website inventory

---

### For Your Business

**Shared knowledge should include:**

**Locations:**
- Corona, Riverside, Eastvale and Glendale service areas

**Terminology:**
- Pool-service and pool-repair terminology

**Brand Positioning:**
- Local Website SEO Services brand positioning
- Corona Shoutouts editorial purpose

**Style:**
- Seventh- to eighth-grade readability preference
- E-E-A-T and local-source requirements

---

### Agent-Specific Knowledge

**Only provide knowledge relevant to each role:**

| Agent | Specific Knowledge |
|-------|-------------------|
| **Scout** | Source standards, locations and research methods |
| **Editor** | Brand voice, content templates and editorial rules |
| **SEO** | Schema rules, keyword maps and site architecture |
| **Outreach** | Approved offers, relationship history and outreach policy |
| **QA** | Publication checklist and prohibited claims |
| **Analytics** | Metric definitions and attribution rules |

**Don't give:**
- ❌ SEO agent: outreach policy
- ❌ Outreach agent: schema rules
- ❌ Analytics agent: content templates

---

### Information That Should Remain Live

**Agents should retrieve changing information rather than memorize it:**

**Query Live Platforms For:**
- ✅ Keyword rankings
- ✅ Campaign metrics
- ✅ Contact consent
- ✅ Sponsor relationship status
- ✅ Published URLs
- ✅ Funnel performance
- ✅ Customer purchases
- ✅ Course progress

**Never cache these in agent memory.**

---

## Approval Configuration

| Activity | Automatic Preparation | Human Approval |
|----------|----------------------|----------------|
| **Topic research** | Yes | No |
| **Content brief** | Yes | No |
| **Article draft** | Yes | Before publication |
| **Metadata recommendations** | Yes | Before site change initially |
| **Internal-link plan** | Yes | Before bulk changes |
| **Schema code** | Yes | Before deployment |
| **Outreach draft** | Yes | Before sending |
| **Sponsor terms** | No | Always |
| **Page publication** | Preview only | Yes |
| **Analytics report** | Yes | No |
| **Price or offer change** | No | Always |

**Pattern:**
- Research/Draft: Automatic
- Recommendations: Automatic
- Publication/Sending: Approval required
- Pricing/Consent/Refunds: Always human-only

---

## What the Roster Still Lacks

**Your screenshot now represents an excellent SEO and content pod, but not yet the complete Titanium Suite.**

### Current Roster (7 Agents) - SEO & Content Pod

**Management:**
1. Titanium Manager / Orchestrator ✅

**Content & Growth:**
2. Local Intelligence Scout ✅
3. Content Strategist and Editor ✅
4. SEO Architecture Agent ✅
5. Outreach & Sponsor Coordinator ✅
6. Publishing & Quality-Control Agent ✅
7. Growth Analytics Agent ✅

**Status:** Excellent SEO and content team

---

### Future Addition: Business Operations Pod

**Once this pod operates reliably, add four business-operation agents:**

**8. Audience and Acquisition Agent**
- **Platforms:** Letterman, Page Sprout, Quizforma
- **Purpose:** Convert editorial → campaigns, capture leads

**9. CRM and Consent Agent**
- **Platform:** Global Control Center
- **Purpose:** Contact identity, consent, tags, lifecycle

**10. Revenue and Funnel Agent**
- **Platform:** MintBird
- **Purpose:** Offers, funnels, transactions

**11. Learning and Customer-Success Agent**
- **Platform:** Course Sprout
- **Purpose:** Enrollment, progress, goals, completion

---

### Critical Rule

> **Do not add these merely to increase the agent count. Add each one only after its authenticated documentation, permissions, test procedures and approval rules are ready.**

**Prerequisites for each agent:**

**Before adding Audience & Acquisition Agent:**
- ✅ Letterman skill complete and tested
- ✅ Page Sprout integration documented
- ✅ Quizforma integration documented
- ✅ Campaign attribution working
- ✅ Approval workflows defined

**Before adding CRM & Consent Agent:**
- ✅ Global Control skill tested
- ✅ Tag taxonomy finalized
- ✅ Lifecycle stages defined
- ✅ Consent rules documented
- ✅ Duplicate prevention tested

**Before adding Revenue & Funnel Agent:**
- ✅ MintBird skill tested
- ✅ Offer registry complete
- ✅ Product mappings defined
- ✅ Purchase verification workflow tested
- ✅ Approval gates for pricing implemented

**Before adding Learning & Success Agent:**
- ✅ Course Sprout integration complete (currently incomplete)
- ✅ Enrollment workflow tested (idempotent)
- ✅ Product mapping verified
- ✅ Access verification working
- ✅ Progress monitoring functional

---

## Best Final Structure

### Phase 1: Current (7 Agents) - SEO & Content

```
                Titanium Manager
                       |
        ┌──────────────┼──────────────┬─────────────┐
        |              |              |             |
  Local Intel    Content      SEO         Outreach    
    Scout       Strategist  Architecture  Coordinator
                       |              |             
                 Publishing &    Growth
                     QA         Analytics
```

**Status:** Ready to implement now  
**Capability:** Complete content → publish → measure workflow  
**Gap:** No customer journey automation yet

---

### Phase 2: Complete (11 Agents) - Full Titanium Suite

```
                    Titanium Manager
                           |
        ┌──────────────────┼──────────────────┐
        |                  |                   |
  Content & Growth    Business Ops      Governance
        |                  |                   |
    ┌───┴───┬───────┐  ┌───┴───┬───────┐     |
    |       |       |  |       |       |     |
 Scout  Editor  SEO  Audience CRM  Revenue  Knowledge
         |       |      |       |       |    Curator
    Outreach  Pub/QA   |       |    Learning
                       |       |
                   Analytics   |
```

**Status:** Future (after platforms ready)  
**Capability:** Complete customer journey (attention → success)  
**Timeline:** 6-8 weeks after all platform integrations complete

---

## Implementation Timeline

### Week 1-2: Clean Current Structure

**Actions:**
1. ✅ Archive duplicate Manager agent
2. ✅ Merge Metadata + Internal Link → SEO Architecture
3. ✅ Define operating contracts for all 7 agents
4. ✅ Implement structured handoff format
5. ✅ Test complete workflow (topic → publish → measure)

**Deliverable:** 7-agent SEO & Content pod operational

---

### Week 3-4: Test & Refine

**Actions:**
1. ✅ Run 5+ article campaigns
2. ✅ Measure handoff clarity
3. ✅ Verify approval gates work
4. ✅ Track agent performance
5. ✅ Adjust memory boundaries

**Deliverable:** Proven, reliable content production system

---

### Week 5-8: Platform Integration Completion

**Actions:**
1. ✅ Complete Course Sprout integration (3 days with API docs)
2. ✅ Test MintBird purchase → enrollment workflow
3. ✅ Verify Global Control upsert and tagging
4. ✅ Document approval workflows for each platform
5. ✅ Build product mapping tables

**Deliverable:** All 6 platforms ready for agent automation

---

### Week 9-12: Add Business Operations Agents

**Add one at a time, test thoroughly:**

**Week 9:** Audience & Acquisition Agent
- Test: Newsletter → lead capture → Global Control

**Week 10:** CRM & Consent Agent
- Test: Contact upsert, tagging, consent enforcement

**Week 11:** Revenue & Funnel Agent
- Test: Offer selection, funnel preview, purchase verification

**Week 12:** Learning & Success Agent
- Test: Idempotent enrollment, access verification, progress monitoring

**Deliverable:** Complete 11-agent Titanium Suite operational

---

### Week 13+: Continuous Optimization

**Actions:**
1. ✅ Add Knowledge Curator agent (governance)
2. ✅ Implement continuous evaluation
3. ✅ Refine memory boundaries
4. ✅ Optimize handoff efficiency
5. ✅ Measure end-to-end customer journey

**Deliverable:** Mature, governed, autonomous business system

---

## Success Criteria

### For Current 7-Agent Pod

**The SEO & Content pod is successful when:**

- ✅ Manager coordinates without executing everything
- ✅ Specialists return structured outputs
- ✅ Zero circular handoffs
- ✅ Approval gates consistently enforced
- ✅ Content quality meets brand standards
- ✅ Publication process is predictable
- ✅ Analytics inform next decisions
- ✅ No duplicate work
- ✅ Handoffs take <2 minutes
- ✅ 95%+ task success rate

---

### For Complete 11-Agent Suite

**The Titanium Suite is successful when:**

- ✅ All 7 content pod criteria (above)
- ✅ Complete customer journey automated (attention → success)
- ✅ Purchase-to-enrollment is idempotent
- ✅ Consent is enforced globally
- ✅ Zero duplicate contacts
- ✅ Stalled learners detected automatically
- ✅ Course completion rates improve 40%+
- ✅ Revenue per lead increases 25%+
- ✅ Manual work reduced 80%+
- ✅ Audit logs complete and queryable

---

## Operating Principles Summary

### 1. Manager Controls Flow

**Always return to Manager after major stages.**

Specialists don't chain to other specialists directly.

---

### 2. Structured Handoffs

**Use YAML task envelopes, not prose paragraphs.**

Every agent returns the same structured format.

---

### 3. Memory Governance

**Shared knowledge: brand/policy**  
**Agent-specific: procedures/tools**  
**Live queries: changing state**

---

### 4. Approval Gates

**Automatic: research, drafts, recommendations**  
**Human approval: publishing, sending, pricing**

---

### 5. Incremental Growth

**Start with 7 agents (content pod)**  
**Add 4 more only when platforms ready (business pod)**  
**Total: 11 agents for complete Titanium Suite**

---

### 6. Clear Ownership

**Every responsibility has one clear agent owner.**

No overlaps, no gaps.

---

### 7. Traceable Work

**Structured tasks with IDs, statuses, and audit trails.**

Can reconstruct what happened and why.

---

### 8. Fail Safely

**Escalate to human when uncertain.**

Don't guess, don't invent, don't proceed blindly.

---

### 9. Measure Everything

**Track success rate, handoff clarity, approval accuracy.**

Continuous improvement based on data.

---

### 10. Govern Knowledge

**Agents propose, Curator approves.**

Don't automatically convert every observation into permanent knowledge.

---

## Your Next Action

**Immediate (This Week):**

1. ✅ Archive duplicate Manager agent
2. ✅ Merge Metadata + Links → SEO Architecture Agent
3. ✅ Define operating contract for Titanium Manager
4. ✅ Test structured handoff format
5. ✅ Run one complete article workflow (topic → publish)

**This Week's Goal:** 7-agent content pod operational

---

**Then (Weeks 3-12):** Add business operations agents as platforms become ready

---

**This is your complete agent architecture. Start with 7. Grow to 11 when ready. Govern always.** 🎯

---

*Final Agent Structure v1.0 - September 22, 2026 16:40 UTC*
