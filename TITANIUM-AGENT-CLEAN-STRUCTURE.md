# TITANIUM SUITE - CLEAN AGENT STRUCTURE

**Recommended Lean Roster (7 Agents)**

*Updated: September 22, 2026 16:32 UTC*  
*Owner: Mark Eno*

---

## The Problem

> **You now have two management agents and three overlapping SEO agents. Cleaning up those overlaps will make OpenClaw faster, less expensive and more predictable.**

---

## Immediate Recommendations

### 1. Remove the Duplicate Management Layer

**You currently have:**
- The Manager / Orchestrator Agent (OLD)
- Titanium Manager / Orchestrator (NEW)

**Action:** 
✅ **Keep:** Titanium Manager / Orchestrator as the primary manager  
❌ **Archive:** The older Manager / Orchestrator after transferring any useful instructions or memories

**Why Two Top-Level Managers is Bad:**
- May delegate the same task twice
- Create circular handoffs
- Produce conflicting priorities
- Duplicate memory and reports
- Confuse specialists about authority

**Critical Rule:**
> **There should be exactly one top-level manager for this system.**

---

### 2. Resolve the SEO Overlap

**You currently have:**
- Metadata & Schema Optimizer
- Internal Link Architect
- SEO Architecture Agent

**This is redundant for your current scale.**

---

## Two Valid Structures

### Option A: Lean Structure (RECOMMENDED NOW)

**Keep:** SEO Architecture Agent  
**Merge into it:** Metadata & Schema Optimizer + Internal Link Architect

**The SEO Architecture Agent would handle:**
- ✅ Titles and descriptions
- ✅ Canonical recommendations
- ✅ Schema selection and validation
- ✅ Internal links
- ✅ Anchor text
- ✅ Orphan pages
- ✅ Content clusters
- ✅ Crawlability
- ✅ Technical SEO recommendations

**Action:** Archive the separate Metadata and Internal Link agents after transferring their best instructions.

**Result:** This reduces your roster to **7 agents** and is probably sufficient for your current local SEO websites.

---

### Option B: Scaled Structure (For Later)

**Keep all three, but redefine SEO Architecture Agent as their supervisor:**

```
SEO Architecture Agent (Coordinator)
    ├── Metadata & Schema Optimizer (Specialist)
    └── Internal Link Architect (Specialist)
```

**Under this design, the SEO Architecture Agent:**
- Creates the SEO plan
- Assigns the two specialists
- Reconciles their recommendations
- Produces one final SEO package
- Sends it to Publishing and Quality Control

**Choose this structure only when:**
> You are producing enough content across your pool-service, local SEO and Corona Shoutouts properties to keep both specialists consistently busy.

**Not recommended now.** Your current volume doesn't justify the overhead.

---

## Recommended Lean Roster (7 Agents)

| # | Agent | Decision | Responsibility |
|---|-------|----------|----------------|
| **1** | **Titanium Manager / Orchestrator** | ✅ Keep | Intake, planning, delegation, approvals and final reporting |
| **2** | **Local Intelligence Scout** | ✅ Keep | Local topics, sources, events and opportunity research |
| **3** | **Content Strategist and Editor** | ✅ Keep | Briefs, articles, newsletters, landing-page copy and editing |
| **4** | **SEO Architecture Agent** | ✅ Keep and expand | Metadata, schema, internal links and content architecture |
| **5** | **Outreach & Sponsor Coordinator** | ✅ Keep | Partnerships, sponsor research and approved outreach |
| **6** | **Publishing & Quality-Control Agent** | ✅ Keep | Final checks, previews, publication readiness and verification |
| **7** | **Growth Analytics Agent** | ✅ Keep | Performance analysis, attribution, experiments and reporting |
| | **Older Manager** | ❌ Archive | Duplicate |
| | **Metadata specialist** | ⚠️ Merge into SEO Architecture | Depends on workload |
| | **Internal-link specialist** | ⚠️ Merge into SEO Architecture | Depends on workload |

---

## Correct Agent Workflow

```
        Titanium Manager
               |
    ┌──────────┼──────────┬──────────┐
    |          |          |          |
Local      Outreach   Analytics   (Other specialists)
Intel                            
    |
    ↓
Content Strategist
    |
    ↓
SEO Architecture Agent
    |
    ↓
Publishing & QC
    |
    ↓
Back to Manager (verification)
```

**Detailed Flow:**

```
1. Titanium Manager receives request
         ↓
2. Manager assigns Local Intelligence Scout
         ↓
3. Scout returns research
         ↓
4. Manager assigns Content Strategist
         ↓
5. Strategist creates draft content
         ↓
6. Manager assigns SEO Architecture Agent
         ↓
7. SEO Agent optimizes (metadata + links + schema)
         ↓
8. Manager assigns Publishing & QC
         ↓
9. QC verifies everything
         ↓
10. Manager reviews approval requirements
         ↓
11. Human approves (if required)
         ↓
12. Manager confirms publication
         ↓
13. Analytics Agent measures results
         ↓
14. Manager produces final report
```

**In parallel (when needed):**
- Outreach Coordinator researches partners
- Analytics Agent tracks ongoing performance

---

## Why This Structure Works

### 1. Single Point of Control

**Titanium Manager is the only agent that:**
- Receives broad user requests
- Makes delegation decisions
- Requests approvals
- Produces final reports

**No confusion about who's in charge.**

---

### 2. Clear Specialization

**Each agent has one clear job:**

| Agent | One Job |
|-------|---------|
| Local Intel Scout | Find topics |
| Content Strategist | Write copy |
| SEO Architecture | Optimize technical |
| Outreach Coordinator | Build partnerships |
| Publishing & QC | Verify before publish |
| Analytics | Measure results |

**No overlap, no redundancy.**

---

### 3. Proper Handoffs

**Structured task envelopes** (not informal paragraphs)

**From Manager to Scout:**
```yaml
task_id: task_001
assigned_agent: local-intelligence-scout
objective: Find local business trends in Corona, CA
inputs:
  location: Corona, CA
  date_range: current-month
  audience: small-business-owners
requested_output:
  - trend_summary
  - supporting_sources
  - content_angles
```

**From Scout back to Manager:**
```yaml
task_id: task_001
status: completed
findings:
  - trend: "New co-working spaces opening in Corona"
    sources: ["city-permits", "corona-independent"]
    confidence: high
recommended_next_agent: content-strategist
```

**Clean, traceable, predictable.**

---

### 4. Scalability

**When you need more capacity:**

**Option 1:** Keep the same 7 agents, but give them better tools/knowledge

**Option 2:** Split SEO Architecture Agent:
- SEO Architecture (coordinator)
  - Metadata Specialist (subordinate)
  - Internal Link Specialist (subordinate)

**Option 3:** Add Titanium Operations agents (when platforms ready):
- CRM & Consent Agent
- Revenue & Funnel Agent
- Learning & Success Agent

**But start with 7. Add only when proven necessary.**

---

## Migration Plan

### Step 1: Transfer Knowledge (Week 1)

**From "Manager / Orchestrator" to "Titanium Manager / Orchestrator":**
- Copy any useful instructions
- Copy approved procedures
- Copy evaluation criteria
- Document what worked well

**From "Metadata & Schema Optimizer" to "SEO Architecture Agent":**
- Transfer metadata procedures
- Transfer schema templates
- Transfer validation rules

**From "Internal Link Architect" to "SEO Architecture Agent":**
- Transfer link analysis procedures
- Transfer anchor text guidelines
- Transfer cluster architecture rules

---

### Step 2: Test the Merged Agent (Week 1)

**Test SEO Architecture Agent can:**
- ✅ Generate titles and meta descriptions
- ✅ Recommend schema markup
- ✅ Validate structured data
- ✅ Analyze internal link opportunities
- ✅ Suggest anchor text
- ✅ Detect orphan pages
- ✅ Propose content clusters

**If all tests pass:** Proceed to archive

---

### Step 3: Archive Old Agents (Week 2)

**Archive (disable, don't delete):**
- The Manager / Orchestrator Agent (OLD)
- Metadata & Schema Optimizer
- Internal Link Architect

**Why archive instead of delete:**
- Preserve knowledge for reference
- Can reactivate if needed
- Audit trail of what changed

---

### Step 4: Update Documentation (Week 2)

**Update:**
- Agent roster in AGENTS.md
- Workflow diagrams
- Delegation rules
- Performance metrics

---

### Step 5: Monitor Performance (Weeks 3-4)

**Track:**
- Task completion rate
- Error frequency
- Handoff clarity
- Duplicate work (should be zero)
- Manager overload (watch for this)

**If SEO Architecture Agent is overwhelmed:**
- Consider splitting back into specialists
- Or: Give it better tools/knowledge first

---

## Operating Contracts (Examples)

### Titanium Manager / Orchestrator

```yaml
agent_id: titanium-manager
mission: Coordinate all work, delegate to specialists, verify completion, produce final reports
trigger_conditions:
  - User submits campaign request
  - User asks for content
  - User requests analysis
  - Specialist reports completion
required_inputs:
  - business_objective
  - target_audience
  - success_criteria
authoritative_sources:
  - Titanium constitution
  - Campaign registry
  - Approval policy
allowed_tools:
  - Read all platforms (summary level)
  - Task assignment
  - Approval requests
  - Report generation
prohibited_actions:
  - Never write to platforms directly
  - Never publish content
  - Never change prices
  - Never modify customer consent
approval_gates:
  - Publishing (always)
  - Outreach sends (always)
  - Price changes (always)
  - Customer data exports (always)
output_contract:
  - task_plan
  - specialist_assignments
  - approval_requests
  - final_report
verification:
  - Confirm specialist completed task
  - Verify outputs meet requirements
  - Check approval obtained if required
escalation_rules:
  - Specialist reports failure
  - Approval denied
  - Contradictory outputs from specialists
  - Unsupported request
memory_boundaries:
  - Retain: task plans, approvals, outcomes
  - Delegate: specialist execution details
performance_measures:
  - Campaign success rate
  - Task completion rate
  - Approval accuracy
  - User satisfaction
```

---

### SEO Architecture Agent

```yaml
agent_id: seo-architecture-agent
mission: Optimize content for search visibility and technical SEO health
trigger_conditions:
  - Content draft ready for optimization
  - Technical SEO audit requested
  - Internal link review requested
required_inputs:
  - content_draft
  - target_keywords
  - target_audience
  - website_context
authoritative_sources:
  - Google Search documentation
  - Schema.org specs
  - Technical SEO best practices
allowed_tools:
  - Read website content
  - Analyze site structure
  - Validate schema markup
  - Recommend metadata
prohibited_actions:
  - Never publish changes directly
  - Never modify live site without approval
  - Never invent ranking guarantees
approval_gates:
  - Major technical changes (e.g., canonical changes)
  - Schema implementation
  - Site-wide metadata changes
output_contract:
  - optimized_metadata
  - schema_recommendations
  - internal_link_suggestions
  - technical_seo_checklist
verification:
  - Validate schema markup
  - Check metadata completeness
  - Verify internal links work
escalation_rules:
  - Conflicting SEO requirements
  - Technical implementation beyond scope
  - Competitor analysis needed
memory_boundaries:
  - Retain: SEO strategies, successful patterns
  - Query live: Current site structure, rankings
performance_measures:
  - Metadata completeness
  - Schema validation pass rate
  - Internal link value
  - Organic traffic impact (long-term)
```

---

## Benefits of Clean Structure

### 1. Faster

**With 7 agents instead of 10:**
- ✅ Less coordination overhead
- ✅ Fewer handoffs
- ✅ Faster decision-making
- ✅ Clearer workflows

---

### 2. Less Expensive

**Fewer agents = fewer API calls:**
- ✅ Less duplicated research
- ✅ Less redundant analysis
- ✅ Less memory storage
- ✅ Less token usage

---

### 3. More Predictable

**Single manager + clear specialists:**
- ✅ No circular handoffs
- ✅ No conflicting priorities
- ✅ No duplicate reports
- ✅ Clear authority chain

---

### 4. Easier to Maintain

**7 agents vs 10:**
- ✅ Fewer operating contracts to update
- ✅ Fewer evaluation scenarios
- ✅ Fewer permission conflicts
- ✅ Simpler debugging

---

## When to Add More Agents

**Add agents only when:**

1. ✅ **Workload proves it necessary**
   - SEO Architecture Agent consistently overwhelmed
   - Manager spending >50% time on one function

2. ✅ **Different tools/permissions required**
   - Revenue Agent needs MintBird credentials
   - CRM Agent needs Global Control credentials
   - Can't share credentials safely

3. ✅ **Different knowledge/evaluation needed**
   - Revenue operations vs content operations
   - Fundamentally different expertise

4. ✅ **Accountability requires separation**
   - Compliance needs isolated CRM agent
   - Financial controls need isolated Revenue agent

**Don't add agents just because:**
- ❌ The task seems different (use same agent with better instructions)
- ❌ You have more work (give existing agents better tools)
- ❌ You want specialization (add to existing agent's knowledge)

---

## Success Criteria

**The clean structure is successful when:**

- ✅ Zero duplicate tasks
- ✅ Zero circular handoffs
- ✅ Every task has one clear owner
- ✅ Manager coordinates without overload
- ✅ Specialists execute within boundaries
- ✅ Handoffs are structured and traceable
- ✅ Approvals are consistently enforced
- ✅ Results are measurable
- ✅ System is fast and predictable
- ✅ Costs are controlled

---

## Final Recommendation

**Start with 7 agents:**

1. Titanium Manager / Orchestrator
2. Local Intelligence Scout
3. Content Strategist and Editor
4. SEO Architecture Agent (expanded)
5. Outreach & Sponsor Coordinator
6. Publishing & Quality-Control Agent
7. Growth Analytics Agent

**Add Titanium Operations agents (CRM, Revenue, Learning) only after:**
- ✅ Course Sprout integration complete
- ✅ MintBird workflows tested
- ✅ Global Control procedures documented
- ✅ All 7 current agents proven reliable

**This is the lean, efficient, predictable structure you need right now.**

---

*Clean Agent Structure v1.0 - September 22, 2026 16:35 UTC*
