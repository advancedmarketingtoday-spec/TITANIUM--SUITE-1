# TITANIUM SUITE - EXPERT PLAYBOOK

**Complete Operating Guide for the Titanium Customer Operating System**

*Compiled: September 22, 2026*  
*Owner: Mark Eno*  
*Version: 1.0 - Production Guide*

---

## The Titanium Customer Operating System

The Titanium products become much more valuable when treated as one customer operating system:

| Customer Stage | Titanium Product | Principal Job |
|----------------|------------------|---------------|
| **Attention** | Letterman | Publish and nurture |
| **Acquisition** | Page Sprout | Convert attention into identifiable leads |
| **Diagnosis** | Quizforma | Understand needs, intent and fit |
| **Customer Intelligence** | Global Control Center | Maintain the authoritative customer record |
| **Revenue** | MintBird | Present offers and complete transactions |
| **Delivery** | Course Sprout | Create customer results |
| **Coordination** | OpenClaw | Orchestrate, verify and optimize the complete system |

---

## Important Implementation Note

Some implementation details—especially API endpoints and webhooks—must be verified against authenticated product documentation. 

**The recommendations below describe the best operating model and should not be interpreted as confirmation that every proposed API action is currently available.**

Always verify against actual API documentation before implementing.

---

## 1. LETTERMAN - The Attention & Relationship Engine

### Strategic Role

Letterman is the suite's **attention and relationship engine**. It should consistently:
- Educate the audience
- Establish authority
- Direct qualified readers toward the appropriate next step

**Reference:** Public Letterman pages demonstrate its newsletter and article-publishing function. ([m.letterman.ai](https://m.letterman.ai/a/6a63a23f79f87d966b1b3b64))

---

### What Letterman Should Own

**Authoritative For:**
- Newsletter publications
- Articles and editorial content
- Publication categories
- Subscriber engagement
- Editorial calendar
- Content-to-campaign attribution
- Approved calls to action

**Should NOT Own:**
- ❌ Master customer database (that's Global Control)
- ❌ Transaction system (that's MintBird)

---

### Expert Operating Model

#### Four Content Categories

Use this framework for every newsletter:

| Category | Purpose | Audience Stage |
|----------|---------|----------------|
| **Discovery** | Explain problems the audience may not recognize | Early awareness |
| **Education** | Teach frameworks, methods and practical solutions | Learning |
| **Proof** | Demonstrate results, examples and case studies | Evaluation |
| **Conversion** | Introduce an assessment, resource or appropriate offer | Decision |

**Critical Insight:**
> A healthy publication should not make every issue a direct sales message. Most issues should create trust or reveal useful customer intent.

---

### OpenClaw Workflow for Letterman

```
1. Collect audience questions
         ↓
2. Research and source claims
         ↓
3. Select one audience segment
         ↓
4. Draft one focused issue
         ↓
5. Add one measurable CTA
         ↓
6. Human approval ← REQUIRED
         ↓
7. Publish
         ↓
8. Measure engagement
         ↓
9. Send resulting signals to Global Control Center
```

**OpenClaw Capabilities:**
- ✅ Produce the draft
- ✅ Generate subject-line variations
- ✅ Create excerpts
- ✅ Add campaign links with tracking

**Human Responsibilities:**
- ⚠️ Approve sensitive claims
- ⚠️ Approve final send
- ⚠️ Verify factual accuracy

---

### Best Practices

1. ✅ **Give every issue one primary purpose**
   - Not three CTAs competing for attention
   - One clear next step

2. ✅ **Place the main CTA early enough to be discovered**
   - Above the fold or within first 2-3 paragraphs
   - Repeat at bottom for those who scroll

3. ✅ **Add campaign_id and tracking parameters to links**
   ```
   https://example.com/page?campaign_id=news_2026_09_seo&source=letterman&content=issue_456
   ```

4. ✅ **Maintain a source ledger for factual claims**
   - Track sources for every statistic
   - Link to studies and reports
   - Date-stamp claims that may expire

5. ✅ **Tag clicked topics as interests, not proven purchasing intent**
   - Click = interest
   - Purchase = intent
   - Don't confuse the two

6. ✅ **Repurpose strong issues into Page Sprout pages and Course Sprout lessons**
   - High-engagement article → Bridge page
   - Educational series → Course modules
   - Proof content → Sales page testimonials

7. ✅ **Separate editorial newsletters from receipts, access notices and support messages**
   - Editorial: Growth, engagement, trust
   - Transactional: Receipts, access, urgent support
   - Never mix them

8. ✅ **Use a consistent publishing cadence the team can sustain**
   - Weekly is sustainable
   - Daily is ambitious
   - Monthly risks being forgotten
   - Choose what you can maintain

---

### Key Metrics

**Essential Metrics:**
- **Delivery rate** - Are emails reaching inboxes?
- **Open rate** - Interpret cautiously (privacy protection affects this)
- **Click-through rate** - True engagement signal
- **Click-to-conversion rate** - Quality of traffic sent
- **Subscriber growth** - Net new subscribers
- **Unsubscribe rate** - Should be <0.5% per send
- **Revenue or leads attributed per issue** - ROI measurement
- **Percentage of engaged readers who take a next step** - Progression rate

**Most Important:**
> Percentage of engaged readers who take a next step

This measures how well Letterman moves people through the customer journey.

---

### Common Mistakes

❌ **Multiple competing calls to action**
- Confuses the reader
- Dilutes every CTA's effectiveness
- Solution: One primary CTA per issue

❌ **Sending identical content to every segment**
- Wastes relevance opportunity
- Lower engagement across all segments
- Solution: Segment by interest or stage

❌ **Treating opens as definitive engagement**
- Apple Mail Privacy skews opens
- Open ≠ read
- Solution: Focus on clicks and conversions

❌ **Allowing AI-generated claims to publish without verification**
- AI can hallucinate statistics
- Risk to credibility
- Solution: Human verifies every fact

❌ **Measuring audience size without measuring progression**
- 10,000 subscribers who never buy = 0 revenue
- 1,000 subscribers with 10% conversion = revenue
- Solution: Track subscriber → lead → customer rate

---

## 2. PAGE SPROUT - The Conversion Bridge

### Strategic Role

Page Sprout is the **conversion bridge between attention and identification**. It turns anonymous visitors into measurable actions through:
- PopLinks
- Bridge pages
- Lead steps

---

### What Page Sprout Should Own

**Authoritative For:**
- Campaign landing experiences
- Bridge pages
- PopLinks (short URLs with tracking)
- Lead-capture forms
- Campaign attribution
- Page-level experiments
- Conversion events

**Should NOT Own:**
- ❌ Final customer lifecycle stage (that's Global Control)
- ❌ Second CRM (that's also Global Control)

---

### Expert Operating Model

#### Bridge Page Purpose

> **A bridge page should reduce uncertainty between the originating content and the requested action. It should not simply repeat a sales page.**

**Bridge Page Structure:**

```
1. Audience-specific problem
   "If you're struggling to rank your local business..."

2. Clear promise
   "Here's a proven framework that got 47 businesses to page 1..."

3. Brief explanation
   "This works because..."

4. Credibility or evidence
   Proof elements, testimonials, case study

5. One principal CTA
   "Get the free SEO audit →"

6. Objection handling
   FAQs, guarantees, social proof

7. Final CTA
   Repeat the main CTA at bottom
```

**Key Principle:**
> One page, one audience, one conversion objective

---

### OpenClaw Workflow for Page Sprout

**OpenClaw should:**

```
1. Select an approved page template
         ↓
2. Populate the offer, proof and CTA
         ↓
3. Preserve traffic-source information
         ↓
4. Check mobile layout, broken links and required fields
         ↓
5. Generate a preview
         ↓
6. Request approval before publication
         ↓
7. Publish
         ↓
8. Monitor conversion
         ↓
9. Alert on significant degradation
         ↓
10. Route captured contacts to Global Control Center immediately
```

**Page Components (Reusable Blocks):**
- Hero sections
- Benefit lists
- Proof elements (testimonials, case studies)
- FAQ sections
- Privacy and consent language
- CTAs

**Don't Generate:**
- ❌ Hundreds of almost-identical pages
- ✅ Maintain reusable, tested components instead

---

### Best Practices

1. ✅ **One page, one audience and one conversion objective**
   - Narrow focus = higher conversion
   - Broad focus = confused visitors

2. ✅ **Keep message continuity between the originating link and landing page**
   - Newsletter talks about SEO → Landing page about SEO (not generic)
   - Reduce cognitive dissonance
   - Build trust through consistency

3. ✅ **Ask for only the information needed at that stage**
   - Cold traffic: Name + email only
   - Warm traffic: Can ask for more
   - Progressive profiling: Ask more later

4. ✅ **Preserve UTM parameters and campaign identifiers**
   - Don't lose attribution on redirects
   - Pass through entire journey
   - Track: source, medium, campaign, content

5. ✅ **Use reusable sections instead of rebuilding pages from scratch**
   - Proven hero sections
   - Tested proof elements
   - Effective CTAs
   - Maintain library of high-converting components

6. ✅ **Test one meaningful variable at a time**
   - A/B test: Headline A vs Headline B (same page)
   - Don't test: Different headline + different CTA + different layout
   - Scientific method: One variable at a time

7. ✅ **Establish minimum sample sizes before declaring a winner**
   - Don't call winner at 10 conversions
   - Statistical significance matters
   - Typical minimum: 100-200 conversions per variant

8. ✅ **Include clear privacy and consent language**
   - GDPR/CCPA compliance
   - Clear opt-in checkbox
   - Link to privacy policy

9. ✅ **Route captured contacts to Global Control Center immediately**
   - Real-time, not batched
   - Enables instant follow-up
   - Better customer experience

---

### Key Metrics

- **Unique visitors**
- **CTA click rate** (% who click primary call-to-action)
- **Opt-in conversion rate** (% who submit form)
- **Form abandonment** (% who start but don't finish)
- **Mobile versus desktop conversion** (are they different?)
- **Qualified-lead rate** (% who become real opportunities)
- **Downstream purchase rate** (% who eventually buy)
- **Cost per qualified lead**

**Most Important:**
> Qualified-lead rate and downstream purchase rate - not just opt-ins, but quality

---

### Common Mistakes

❌ **Sending every traffic source to the same generic page**
- Newsletter, social, ads → One generic page
- Loses context and continuity
- Solution: Match page to traffic source

❌ **Too many links or navigation exits**
- Header navigation, footer links, social icons
- Gives visitors easy escape routes
- Solution: Minimal distractions, one primary action

❌ **Asking for excessive information**
- Cold traffic → 20-field form = abandonment
- Solution: Ask only what's needed now

❌ **Optimizing opt-ins that never become qualified customers**
- 1000 opt-ins, 0 buyers = wasted effort
- Solution: Track downstream conversion, not just opt-ins

❌ **Launching AI-generated pages without visual review**
- AI can create broken layouts
- AI misses mobile issues
- Solution: Always preview before publishing

❌ **Losing campaign attribution during redirects**
- UTM parameters stripped on redirect
- Can't track what works
- Solution: Preserve parameters through entire journey

---

## 3. QUIZFORMA - The Diagnosis Engine

### Strategic Role

Quizforma is the **diagnosis and recommendation engine**. Its purpose is to understand the visitor well enough to improve routing, personalization and offers.

> **A quiz is valuable only when its answers change what happens next.**

---

### What Quizforma Should Own

**Authoritative For:**
- Quiz and survey definitions
- Question versions
- Raw answers
- Scoring calculations
- Result profiles
- Completion and abandonment data

**Should NOT Own:**
- ❌ Contact records (that's Global Control)
- ❌ Final offer presentation (that's MintBird)

**Important:**
> Global Control Center should receive the meaningful conclusions—not necessarily every raw answer.

---

### Expert Questionnaire Design

#### Every Question Should Influence At Least One Of These:

1. **Qualification** - Is this person a good fit?
2. **Segmentation** - Which audience group do they belong to?
3. **Recommended content** - What should they read/watch next?
4. **Offer selection** - Which product should they see?
5. **Support priority** - How urgently do they need help?
6. **Follow-up timing** - When should we contact them?

**Critical Rule:**
> **If a question changes nothing, remove it.**

**Bad Quiz Question:**
"What's your favorite color?"
- Doesn't affect anything
- Just entertainment
- Wastes visitor's time

**Good Quiz Question:**
"How many customers do you currently serve per month?"
- 0-10 = beginner offer + foundational content
- 11-50 = intermediate offer + scaling content
- 51+ = advanced offer + optimization content
- Affects: segment, offer, content, priority

---

### Deterministic Scoring Model

**A useful model might include:**

| Dimension | Example Weight |
|-----------|----------------|
| **Problem severity** | 25% |
| **Urgency** | 20% |
| **Product fit** | 25% |
| **Readiness** | 20% |
| **Available support/resources** | 10% |

**Example Scoring:**

```
Problem severity:     0-25 points
  Critical business problem = 25 points
  Minor inconvenience = 5 points

Urgency:              0-20 points
  "Need solution NOW" = 20 points
  "Eventually..." = 5 points

Product fit:          0-25 points
  "Perfect match" = 25 points
  "Partial match" = 12 points
  "Wrong fit" = 0 points

Readiness:            0-20 points
  "Have budget approved" = 20 points
  "Need to get approval" = 10 points
  "Just researching" = 0 points

Support/Resources:    0-10 points
  "Have team ready" = 10 points
  "Just me" = 3 points

────────────────────────────────
Total score:          0-100 points
```

**Qualification Bands:**
- 0-30 points = Low intent (nurture with education)
- 31-60 points = Medium intent (qualification conversation)
- 61-100 points = High intent (present offer)

**Critical Requirement:**
> Keep scoring deterministic and documented. OpenClaw may explain a result, but it should not silently alter the underlying score.

---

### OpenClaw Workflow

**Complete Workflow:**

```
Quiz completed
         ↓
Validate required answers
         ↓
Calculate approved score
         ↓
Assign result profile
         ↓
Update controlled tags in Global Control
         ↓
Select educational recommendation
         ↓
Select approved offer when appropriate
         ↓
Record quiz version and rationale
```

**Example Result:**

```json
{
  "contact_id": "gc_123",
  "quiz_id": "quiz_seo_assessment",
  "quiz_version": "2.1",
  "completed_at": "2026-09-22T15:00:00Z",
  "score": 75,
  "score_breakdown": {
    "problem_severity": 20,
    "urgency": 18,
    "product_fit": 22,
    "readiness": 15,
    "support_resources": 0
  },
  "result_profile": "high-intent-seo",
  "tags_to_apply": [
    "interest:seo",
    "intent:high",
    "fit:seo-course",
    "timing:within-30-days",
    "segment:small-business",
    "problem:low-organic-traffic"
  ],
  "recommended_content": "article_seo_foundations",
  "recommended_offer": "offer_seo_basics_course",
  "rationale": "High urgency + good fit + budget ready = present offer"
}
```

**Send to Global Control immediately.**

---

### Versioning Requirement

> Version every quiz and its scoring model so historical results remain explainable.

**Why:**
- If you change scoring in v2.0, v1.0 results should still make sense
- Audit trail for compliance
- A/B testing different qualification models

**Example:**
```
quiz_seo_assessment_v1.0.json
quiz_seo_assessment_v2.0.json
quiz_seo_assessment_v2.1.json
```

Store scoring rules with version number.

---

### Best Practices

1. ✅ **Explain the benefit before asking the first question**
   - "Take this 3-minute assessment to get your personalized SEO roadmap"
   - Sets expectations
   - Increases completion

2. ✅ **Start with easy, non-sensitive questions**
   - Not: "What's your annual revenue?" (question 1)
   - Instead: "What's your biggest SEO challenge?" (question 1)
   - Build momentum before asking sensitive info

3. ✅ **Keep the assessment as short as the decision permits**
   - 5-7 questions ideal
   - Only ask what changes the outcome
   - Every additional question = more abandonment

4. ✅ **Use branching to avoid irrelevant questions**
   - If Q2 answer = "Beginner" → Skip advanced questions
   - If Q3 answer = "No budget" → Route to free resources
   - Personalized experience, shorter quiz

5. ✅ **Give useful results before pushing a sale**
   - Not: "You scored 75 points! Buy our course →"
   - Instead: "Here's your personalized roadmap... [value] ...Ready to dive deeper? [offer]"
   - Value first, offer second

6. ✅ **Version questions and scoring rules**
   - `quiz_seo_v1.0.json`, `quiz_seo_v2.0.json`
   - Historical results remain explainable
   - A/B test different models

7. ✅ **Store sensitive information only when necessary**
   - Don't ask for revenue if it doesn't affect routing
   - GDPR/privacy compliance
   - Only collect what you'll use

8. ✅ **Separate "interest" from "readiness to buy"**
   - Interest: "I want to learn about SEO"
   - Readiness: "I have budget approved and need to start in 30 days"
   - Tag separately: `interest:seo` vs `intent:high`

9. ✅ **Validate that score bands correspond to real customer outcomes**
   - Do 60-80 point scorers actually convert better?
   - Adjust bands based on real data
   - Don't just guess

---

### Key Metrics

- **Quiz start rate** (visitors → started quiz)
- **Completion rate** (started → finished)
- **Abandonment by question** (which question loses people?)
- **Distribution of result profiles** (are most people high/medium/low?)
- **Qualified-lead rate** (quiz takers → qualified leads)
- **Recommendation click rate** (% who click recommended content/offer)
- **Conversion by result profile** (do high-intent scorers convert better?)
- **Refund or satisfaction rate by profile** (quality check)

**Most Important:**
> Conversion by result profile - validates scoring actually predicts customer success

---

### Common Mistakes

❌ **Creating a quiz purely for engagement**
- "Which Hogwarts house are you?" ≠ qualification
- Fun ≠ useful
- Solution: Every question must affect routing or offer

❌ **Asking questions that do not affect routing**
- Question has no impact on next step
- Wastes visitor's time
- Solution: If it doesn't change anything, remove it

❌ **Using opaque AI scoring**
- AI decides score, can't explain why
- Black box = no trust
- Solution: Deterministic, documented scoring rules

❌ **Making every result recommend the same product**
- Low intent → Course
- Medium intent → Course
- High intent → Course
- Solution: Different results should route differently

❌ **Treating self-reported intent as confirmed behavior**
- They said "ready to buy" ≠ actually buys
- Self-report is directional, not truth
- Solution: Tag as `intent:self-reported-high`, validate with behavior

❌ **Changing scoring without versioning it**
- Change scoring model → can't explain historical results
- Compliance and audit risk
- Solution: Version every change (`v1.0`, `v1.1`, `v2.0`)

---

## 4. GLOBAL CONTROL CENTER - The Customer Intelligence Spine

### Strategic Role

Global Control Center is the **identity, consent and lifecycle spine** of the Titanium Suite.

> **When two platforms disagree about a person's status, Global Control Center should ordinarily decide the operational answer.**

---

### What It Should Own

**Authoritative For:**
- Canonical contact ID
- Identity and normalized contact information
- Consent and suppression
- Lifecycle stage
- Controlled tags
- Acquisition source
- Product ownership
- Integration mappings (platform-specific IDs)
- Last meaningful activity

**All Other Systems Should:**
- ✅ Search Global Control before creating contacts
- ✅ Update Global Control after transactions
- ✅ Check Global Control for consent before messaging
- ✅ Sync customer status to Global Control
- ✅ Defer to Global Control when status conflicts arise

---

### Expert Operating Model

#### Before Creating Contact: Search and Upsert

**Workflow:**
```
1. Receive new lead from Page Sprout
         ↓
2. Normalize email (lowercase, trim whitespace)
         ↓
3. Search Global Control by email
         ↓
4. Contact exists?
         ↓
   YES → Update existing record (upsert)
   NO  → Create new record
         ↓
5. Retain source-platform IDs
         ↓
6. Prevent duplicates with idempotency keys
         ↓
7. Log action
```

**Normalization Rules:**
```javascript
// Email normalization
email = email.toLowerCase().trim();

// Phone normalization  
phone = phone.replace(/[^0-9]/g, ''); // Remove formatting
if (phone.length === 10) phone = '+1' + phone; // Add US country code
```

---

### Recommended Contact Model

**Core Fields:**

```json
{
  "contact_id": "gc_456789",
  "email_normalized": "mark@example.com",
  "phone_normalized": "+15555551234",
  "consent_status": "active",
  "lifecycle_stage": "stage:customer",
  "source_first": "letterman",
  "source_latest": "page-sprout",
  "campaign_first": "camp_2026_seo_basics",
  "campaign_latest": "camp_2026_advanced",
  "interest_tags": ["interest:seo", "interest:email-marketing"],
  "intent_tags": ["intent:high"],
  "product_tags": ["customer:seo-basics"],
  "training_status": "training:active",
  "external_platform_ids": {
    "letterman_subscriber_id": "let_123",
    "mintbird_customer_id": "mb_456",
    "course_sprout_student_id": "cs_789"
  },
  "last_meaningful_activity": "2026-09-22T14:30:00Z"
}
```

---

### Tag Architecture

**Use namespaced tags:**

| Namespace | Pattern | Examples |
|-----------|---------|----------|
| **Stage** | `stage:*` | `stage:lead`, `stage:customer` |
| **Source** | `source:*` | `source:letterman` |
| **Interest** | `interest:*` | `interest:newsletter-growth` |
| **Intent** | `intent:*` | `intent:high` |
| **Customer** | `customer:*` | `customer:course-name` |
| **Training** | `training:*` | `training:active` |
| **Goal** | `goal:*` | `goal:completed` |
| **Suppression** | `suppression:*` | `suppression:unsubscribed` |

**Tag Ownership:**
> Define which agent owns each namespace. Do not allow every integration to create arbitrary tags.

**Example Ownership:**
- `stage:*` → CRM Agent only
- `source:*` → CRM Agent only
- `interest:*` → Acquisition Agent, Audience Agent
- `intent:*` → Acquisition Agent (from quizzes)
- `customer:*` → Revenue Agent (after purchase)
- `training:*` → Delivery Agent (course progress)
- `suppression:*` → CRM Agent only

**Tag Naming Rules:**
- Use lowercase
- Use hyphens (not spaces or underscores)
- Use category prefixes (namespace:value)
- Be specific but not overly granular

---

### Lifecycle Stages

**A controlled lifecycle might be:**

```
Visitor
    ↓
Subscriber
    ↓
Engaged Lead
    ↓
Qualified Lead
    ↓
Opportunity
    ↓
Customer
    ↓
Active Learner
    ↓
Successful Customer
    ↓
Repeat Customer
    ↓
Inactive
```

**Stage Definitions:**

| Stage | Definition | Tags |
|-------|------------|------|
| **Visitor** | Anonymous, no contact info | _(none)_ |
| **Subscriber** | Opted into newsletter | `stage:subscriber` |
| **Engaged Lead** | Clicked newsletter 2+ times | `stage:engaged-lead` |
| **Qualified Lead** | Completed quiz, meets criteria | `stage:qualified-lead`, `intent:medium/high` |
| **Opportunity** | Sales conversation started | `stage:opportunity` |
| **Customer** | Made first purchase | `stage:customer`, `customer:product-slug` |
| **Active Learner** | Enrolled and progressing | `stage:customer`, `training:active` |
| **Successful Customer** | Achieved stated goal | `stage:customer`, `goal:completed` |
| **Repeat Customer** | Purchased 2+ products | `stage:repeat-customer` |
| **Inactive** | No activity >90 days | `stage:inactive` |

**Stage Transitions:**

> **Transitions should be based on observable events, not intuition.**

**Event-Driven Examples:**
- Email opt-in event → `stage:subscriber`
- Quiz completion + score ≥61 → `stage:qualified-lead`
- Purchase event → `stage:customer`
- Course enrollment → `training:active`
- Goal completion event → `goal:completed`
- 90 days no activity → `stage:inactive`

**Rules:**
- Always move forward through stages (based on events)
- Can skip stages (e.g., Subscriber → Customer directly if purchase event occurs)
- `Inactive` is special: can return to previous active stage when activity resumes

---

### Critical Rule: Suppression Overrides Everything

> A suppression or revoked-consent state must override every sales or newsletter automation.

**Implementation:**
```javascript
// Before sending ANY message
if (contact.tags.includes('suppression:unsubscribed')) {
  return skipMessage('Contact has unsubscribed');
}

if (contact.tags.includes('suppression:complained')) {
  return skipMessage('Contact filed spam complaint');
}

if (contact.consent_status === 'revoked') {
  return skipMessage('Contact revoked consent');
}

// Only proceed if consent is valid
proceedWithMessage();
```

**Suppression Types:**
- `suppression:unsubscribed` - Clicked unsubscribe link
- `suppression:bounced` - Email address invalid
- `suppression:complained` - Filed spam complaint
- `suppression:manual` - Manually suppressed by support

---

### OpenClaw Workflow

**Before creating or updating a contact, OpenClaw should:**

```
1. Normalize the email and phone number
         ↓
2. Search for an existing canonical contact
         ↓
3. Check suppression and consent
         ↓
4. Merge only according to approved identity rules
         ↓
5. Apply controlled tag transitions
         ↓
6. Retain external platform IDs
         ↓
7. Verify the final state
         ↓
8. Record the action in an audit log
```

**Normalization:**
```javascript
// Email
email = email.toLowerCase().trim();

// Phone
phone = phone.replace(/[^0-9]/g, ''); // Remove formatting
if (phone.length === 10) phone = '+1' + phone; // Add country code
```

---

### Best Practices

1. ✅ **Search before creating**
   - Always query by normalized email first
   - Prevent duplicate contacts
   - Use upsert operations when supported

2. ✅ **Use upsert operations when supported**
   - Single operation: search + create/update
   - Atomic, prevents race conditions
   - Safer than separate search + create

3. ✅ **Treat consent and suppression as first-class fields**
   - Not buried in tags
   - Top-level fields: `consent_status`, `suppression_status`
   - Checked before every message

4. ✅ **Make suppression override marketing automations globally**
   - One unsubscribe → stops ALL promotional messages
   - Across all campaigns, all sequences
   - Transactional messages (receipts, access) still OK

5. ✅ **Separate attributes from behavior and lifecycle status**
   - Attributes: name, company, industry (relatively static)
   - Behavior: clicks, opens, purchases (event-driven)
   - Lifecycle: stage, intent, training status (state machine)

6. ✅ **Prevent mutually exclusive tags**
   - Can't be both `stage:lead` AND `stage:customer`
   - Remove old tag when adding new
   - Validate tag combinations

7. ✅ **Reconcile duplicates regularly**
   - Weekly: Search for duplicate emails
   - Merge using approved rules
   - Log all merges for audit

8. ✅ **Record why and when important fields changed**
   ```json
   {
     "field": "lifecycle_stage",
     "old_value": "stage:lead",
     "new_value": "stage:customer",
     "changed_at": "2026-09-22T15:00:00Z",
     "changed_by": "revenue-agent",
     "reason": "purchase_completed",
     "event_id": "evt_purchase_123"
   }
   ```

9. ✅ **Minimize personally identifiable information sent to AI models**
   - Use contact_id, not full name/email in prompts
   - Summarize data, don't send raw PII
   - Privacy and compliance

---

### Key Metrics

- **Duplicate-contact rate** (should be <1%)
- **Contacts with unknown consent** (should be 0%)
- **Integration sync failures** (platform ID missing or stale)
- **Invalid or conflicting tags** (mutually exclusive tags)
- **Lifecycle progression** (% moving through stages)
- **Source completeness** (% with source_first and source_latest)
- **Unsubscribe processing latency** (time from click to suppression)
- **Percentage of contacts with valid external IDs** (cross-platform lookup health)

---

### Common Mistakes

❌ **Using tags as an ungoverned database**
- Everyone creates arbitrary tags
- No consistency: `SEO`, `seo`, `interest-seo`, `topic:seo`
- Solution: Controlled vocabulary, namespace ownership

❌ **Creating a new contact after every form completion**
- Same person fills form 3 times → 3 contact records
- Solution: Search before create, upsert on email match

❌ **Overwriting first-touch attribution**
- Latest source overwrites original source
- Can't measure true acquisition channel
- Solution: Preserve `source_first`, update `source_latest`

❌ **Treating unsubscribe as specific to only one campaign**
- Unsubscribed from Campaign A, still gets Campaign B
- Legal risk
- Solution: Global suppression overrides all promotional messaging

❌ **Storing secrets or sensitive notes in contact fields**
- API keys, passwords, sensitive medical info in notes
- Security and compliance risk
- Solution: Store only necessary contact data, use secure vaults for secrets

❌ **Letting OpenClaw merge uncertain identities automatically**
- Two "John Smith" contacts → AI merges wrong ones
- Data loss
- Solution: Human approval for uncertain merges, strict identity rules

---

## 5. MINTBIRD - The Revenue Engine

### Strategic Role

MintBird is the **offer, funnel and transaction engine**. It converts qualified demand into revenue.

**Reference:** MintBird publicly describes functionality involving funnels, sales pages, order forms, bump offers, upsells, downsells and per-step performance tracking. ([mintbird.com](https://mintbird.com))

---

### What MintBird Should Own

**Authoritative For:**
- Products and commercial offers
- Prices and approved discounts
- Sales pages
- Checkout flows
- Order bumps
- Upsells and downsells
- Transaction and funnel events
- Step-level conversion performance

**Should NOT Own:**
- ❌ Customer lifecycle status (that's Global Control)
- ❌ Course access (that's Course Sprout)

---

### Expert Operating Model

### Funnel Design

**A well-designed funnel answers one question at each stage:**

| Stage | Question |
|-------|----------|
| **Sales page** | Why should this person act? |
| **Checkout** | How can they purchase with minimal friction? |
| **Order bump** | What small addition improves the main outcome? |
| **Upsell** | What complementary next step creates more value? |
| **Downsell** | Is there a smaller appropriate option? |
| **Confirmation** | What happens now? |

**Each stage has one clear purpose. Don't mix them.**

---

### OpenClaw Workflow

```
Qualified contact
         ↓
Check eligibility and suppression
         ↓
Select approved offer (from registry)
         ↓
Generate or personalize funnel draft
         ↓
Validate links, pricing and claims
         ↓
Human approval ← REQUIRED
         ↓
Publish
         ↓
Monitor each funnel step
         ↓
Send verified purchase to fulfillment
```

**Critical at Each Step:**

1. **Check eligibility and suppression**
   - Does contact meet offer eligibility rules?
   - Is contact suppressed? (If yes, skip)

2. **Select approved offer**
   - Query offer registry
   - Match contact tags/quiz score to eligibility_rules
   - Never select archived or draft offers

3. **Validate links, pricing and claims**
   - All links work (no 404s)
   - Price matches approved_price exactly
   - Guarantee text matches approved guarantee
   - No unapproved claims

4. **Monitor each funnel step**
   - Sales page views
   - Checkout starts
   - Bump accepts/declines
   - Purchase completions
   - Upsell/downsell results

5. **Send verified purchase to fulfillment**
   - Confirm payment processed
   - Update Global Control: `stage:customer`, `customer:product-slug`
   - Trigger Course Sprout enrollment
   - Stop all prospect sequences

---

### Build an Approved Offer Registry

> **OpenClaw must never invent a price, guarantee, coupon or product entitlement.**

**Offer Registry Schema:**

| Field | Purpose |
|-------|---------|
| `offer_id` | Unique offer identifier |
| `product_id` | MintBird product ID |
| `audience` | Target segment (e.g., "small-business-owners") |
| `eligibility_rules` | Who qualifies (tags, quiz score, etc.) |
| `approved_price` | Exact price (cannot be changed by AI) |
| `guarantee` | Approved guarantee text |
| `primary_funnel_id` | Main funnel template |
| `order_bump_id` | Optional order bump offer |
| `upsell_id` | Optional upsell offer |
| `downsell_id` | Optional downsell offer |
| `course_entitlement_id` | Course Sprout course to grant |
| `approval_status` | approved, draft, archived |
| `effective_dates` | When this offer is valid |

**Example:**

```json
{
  "offer_id": "offer_seo_basics_2026",
  "product_id": "prod_123",
  "audience": "small-business-owners",
  "eligibility_rules": {
    "required_tags": ["intent:medium", "intent:high"],
    "min_quiz_score": 40
  },
  "approved_price": 297,
  "currency": "USD",
  "guarantee": "30-day money-back guarantee",
  "primary_funnel_id": "funnel_seo_basics_vsl",
  "order_bump_id": "bump_seo_checklist",
  "upsell_id": "upsell_seo_advanced",
  "downsell_id": "downsell_seo_mini",
  "course_entitlement_id": "course_seo_basics",
  "approval_status": "approved",
  "approved_by": "mark@example.com",
  "approved_date": "2026-09-15",
  "effective_dates": {
    "start": "2026-09-15",
    "end": null
  }
}
```

**OpenClaw Actions:**
- ✅ Can: Select from approved offers based on eligibility rules
- ✅ Can: Apply allowed coupons (if defined in offer)
- ❌ Cannot: Change approved_price
- ❌ Cannot: Create new guarantees
- ❌ Cannot: Add unapproved upsells/bumps
- ❌ Cannot: Modify course entitlements

---

### Best Practices

1. ✅ **Keep product and offer IDs stable**
   - Don't recreate products for every campaign
   - Reuse product IDs, vary offers
   - Track performance by offer, not just product

2. ✅ **Separate the product from the promotional offer**
   - Product: "SEO Basics Course" (stable)
   - Offer: "SEO Basics - Launch 2026" (price, guarantee, funnel)
   - Same product, different offers for different audiences

3. ✅ **Match offers to demonstrated needs**
   - Quiz said "need SEO help" → SEO offer
   - Don't show email marketing offer to SEO quiz takers
   - Use eligibility rules in offer registry

4. ✅ **Ensure bumps and upsells are genuinely complementary**
   - Good bump: "SEO Checklist" with "SEO Course"
   - Bad bump: "Email Course" with "SEO Course" (unrelated)
   - Complementary = helps achieve same goal faster/better

5. ✅ **Preview the complete mobile checkout journey**
   - 60%+ purchases happen on mobile
   - Test every step on phone
   - Check payment forms work on mobile

6. ✅ **Verify paid status before fulfillment**
   - Don't trust checkout started event
   - Wait for payment_completed or purchase_completed
   - Confirm payment actually processed

7. ✅ **Use idempotency keys for transaction events**
   - `order_id` as idempotency key
   - Prevents duplicate fulfillment on webhook retries
   - Critical for course enrollment

8. ✅ **Stop prospect sequences after purchase**
   - Immediately remove from sales nurture
   - Add to customer onboarding
   - Don't send "Buy now!" to someone who just bought

9. ✅ **Propagate refunds and cancellations to the other systems**
   - MintBird refund → revoke Course Sprout access
   - MintBird refund → remove `customer:product` tag
   - Update lifecycle: `stage:customer` → `stage:refunded`

10. ✅ **Evaluate profitability, not only conversion**
    - 10% conversion at $100 profit = $10 per visitor
    - 5% conversion at $300 profit = $15 per visitor
    - Lower conversion can be more profitable

---

### Key Metrics

- **Checkout start rate** (traffic → checkout)
- **Checkout completion rate** (checkout → purchase)
- **Order bump acceptance rate**
- **Upsell acceptance rate**
- **Downsell acceptance rate**
- **Revenue per visitor**
- **Average order value (AOV)**
- **Refund rate**
- **Customer acquisition cost (CAC)**
- **Customer lifetime value (LTV)**

**Most Important:**
> LTV:CAC ratio - Should be 3:1 or better (make $3 for every $1 spent acquiring customer)

---

### Common Mistakes

❌ **Too many upsells**
- Frustrates buyers
- Feels manipulative
- Solution: 1-2 relevant upsells max

❌ **OpenClaw inventing prices**
- No authorization
- Compliance risk
- Solution: Approved offer registry only

❌ **Not stopping prospect sequences after purchase**
- Customer gets "Buy now!" email after buying
- Looks unprofessional
- Solution: Webhook → instant tag update

❌ **Complex pricing experiments without approval**
- Changes revenue model
- Requires human decision
- Solution: Pricing changes require approval gate

❌ **Not tracking full funnel performance**
- Only know purchase rate
- Don't know where drop-off happens
- Solution: Track every funnel step

---

## 6. COURSE SPROUT - The Delivery & Results Engine

### Strategic Role

Course Sprout is the **delivery and customer success engine**. It manages training access, tracks progress, monitors engagement, and creates customer results.

---

### What Course Sprout Should Own

**Authoritative For:**
- Course catalog
- Student enrollments
- Access management
- Lesson progress
- Course completions
- Goal tracking
- Training pods
- Learning achievements

**Should NOT Own:**
- ❌ Transaction records (that's MintBird)
- ❌ Customer lifecycle stage (that's Global Control)

---

### Expert Operating Model

#### After MintBird Confirms Payment

**Critical Workflow:**
```
1. MintBird webhook: purchase.completed
         ↓
2. Verify payment and product
         ↓
3. Find canonical contact in Global Control
         ↓
4. Check product mapping (MintBird product → Course Sprout course)
         ↓
5. Check: Already enrolled? (idempotency)
         ↓
   NO  → Create Course Sprout enrollment
   YES → Return existing enrollment
         ↓
6. Verify access actually granted
         ↓
7. Update Global Control with customer tags
         ↓
8. Send welcome email via Letterman
         ↓
9. Stop conflicting sales sequences
```

**Idempotency Requirement:**
> Retrying the same transaction must never create duplicate enrollment or send duplicate access messages.

Use `mintbird_order_id` as idempotency key.

---

### Learning Behavior Intelligence

**OpenClaw should intelligently respond to learning patterns:**

| Student Behavior | OpenClaw Action | Approval Needed |
|------------------|----------------|-----------------|
| **No login** | Draft access-help message | ✅ Approve before sending |
| **Started but stalled** | Draft supportive continuation prompt | ✅ Approve before sending |
| **Module completed** | Draft encouragement and next step | ✅ Approve before sending |
| **Goal achieved** | Update Global Control + draft testimonial request | ✅ Approve testimonial request |
| **Repeated difficulty** | Route to human support | ❌ Auto-route OK |
| **Course completed** | Draft congratulations + recommend next step | ✅ Approve recommendation |

**Golden Rule:**
> Customer success should precede another upsell.

**Bad Flow:**
```
Complete Lesson 1 → "Buy our advanced course!" ❌
```

**Good Flow:**
```
Complete entire course
  ↓
Achieve stated goal
  ↓
Receive congratulations
  ↓
Request testimonial
  ↓
(Optional) Suggest relevant next step
```

---

### Customer-Success Automations

**Detect and Act:**

1. **Purchased but not enrolled**
   - ⚠️ Flag immediately for repair
   - System failure, needs human investigation

2. **Enrolled but never logged in** (>7 days)
   - Draft: "Having trouble accessing? Here's help..."
   - Include: Login link, support contact

3. **Started but inactive** (>14 days, incomplete)
   - Draft: "We noticed you started Module 2. Ready to continue?"
   - Include: Direct link to where they left off

4. **Repeated lesson difficulty** (same lesson >3 attempts)
   - Route to human support
   - Draft: "Looks like [Lesson X] is tricky. Our team can help..."

5. **Milestone completed** (25%, 50%, 75% done)
   - Draft: "You're [X]% through! Keep going..."
   - Encouragement, not sales

6. **Goal achieved** (completed course objective)
   - Update Global Control: Add `training:completed` tag
   - Draft testimonial request: "Would you share your success?"

7. **Course completed**
   - Draft congratulations
   - Recommend approved next step (not auto-enroll or auto-charge)
   - Optional: Certificate generation

---

### Best Practices

1. ✅ **Verify purchase before enrollment**
   - Don't enroll someone who hasn't paid
   - Cross-check with MintBird

2. ✅ **Use idempotency keys**
   ```json
   {
     "course_id": "course_456",
     "student_id": "gc_789",
     "mintbird_order_id": "order_abc123",
     "idempotency_key": "order_abc123"
   }
   ```
   - Retry-safe
   - No duplicate enrollments

3. ✅ **Verify access was actually granted**
   - Don't assume API success = access granted
   - Test: Can student actually log in?

4. ✅ **Respect revoked consent**
   - Check Global Control suppression status
   - No promotional messages to suppressed contacts
   - Transactional access emails still OK

5. ✅ **Draft messages, don't auto-send**
   - AI can draft
   - Human approves
   - Especially for supportive or promotional messages

---

### Key Metrics

- **Enrollment activation rate** (enrolled → first login)
- **Lesson completion rate** (% of lessons completed)
- **Course completion rate** (enrolled → completed)
- **Time to completion** (average days)
- **Goal achievement rate** (% who achieve stated goal)
- **Inactive student rate** (% stalled >14 days)
- **Support intervention rate** (% needing help)
- **Testimonial collection rate**
- **Next-step conversion rate** (completed → next purchase)

**Most Important:**
> Goal achievement rate - Did customers get the result they paid for?

---

### Common Mistakes

❌ **Auto-enrolling without verifying payment**
- Gives away paid access
- Revenue loss
- Solution: Always verify MintBird purchase first

❌ **Duplicate enrollments on webhook retries**
- Same person enrolled twice
- Confusing experience
- Solution: Idempotency keys

❌ **Not detecting stalled learners**
- Customer paid, never completed
- Lost opportunity
- Solution: Automated inactivity detection

❌ **Auto-sending promotional upsells before success**
- Customer halfway through course
- Gets "Buy advanced course!" email
- Feels pushy
- Solution: Success first, upsell later (with approval)

❌ **Not verifying access actually works**
- API says "enrolled"
- Student can't actually log in
- Support nightmare
- Solution: Verify access as part of enrollment workflow

---

## 7. OPENCLAW - The Coordination Intelligence

### Strategic Role

OpenClaw is the **orchestration and optimization layer** that connects all 6 platforms into one cohesive customer operating system.

**OpenClaw's Job:**
- Observe the entire customer journey
- Decide the next appropriate action
- Delegate to specialist agents
- Verify results
- Record what happened
- Optimize over time

---

### What OpenClaw Should Own

**Authoritative For:**
- Routing decisions
- Cross-platform workflows
- Approval gates
- Retry logic
- Failure queues
- Audit logs
- Performance analytics
- System optimization

**Should NOT Own:**
- ❌ Duplicate copies of customer data
- ❌ Platform-specific business logic
- ❌ Another CRM database

---

### Expert Operating Model

#### Multi-Agent Architecture

**Do NOT create one enormous agent with every credential.**

**Instead: Coordinator + Specialist Agents**

| Agent | Platform Access | Permissions | Workspace |
|-------|----------------|-------------|-----------|
| **Titanium Coordinator** | None directly | Routing only | Shared |
| **Audience Agent** | Letterman | Read/write newsletters | Isolated |
| **Acquisition Agent** | Page Sprout + Quizforma | Read/write pages & quizzes | Isolated |
| **CRM Agent** | Global Control | Read/write contacts | Isolated |
| **Revenue Agent** | MintBird | Read/write offers & funnels | Isolated |
| **Delivery Agent** | Course Sprout | Read/write enrollments | Isolated |
| **Audit Agent** | All platforms | Read-only | Isolated |

**Each Agent:**
- ✅ Separate workspace
- ✅ Separate credentials
- ✅ Specific skill access
- ✅ Clear permission boundaries

---

### Coordination Workflow

**Example: Purchase-to-Delivery**

```
1. MintBird webhook: purchase.completed
         ↓
2. Titanium Coordinator receives event
         ↓
3. Coordinator delegates:
   - Revenue Agent: Verify payment
   - CRM Agent: Find/update contact
   - Delivery Agent: Create enrollment
   - Audience Agent: Send welcome email
         ↓
4. Each agent executes independently
         ↓
5. Each agent reports result to Coordinator
         ↓
6. Coordinator verifies all steps succeeded
         ↓
7. If any step failed: Add to failure queue
         ↓
8. Coordinator records complete workflow in audit log
```

**No single agent has access to everything.**

---

### Event-Driven Architecture

**Use webhooks as primary mechanism:**

**Available Events (verify against actual APIs):**

| Platform | Event | When to Use |
|----------|-------|-------------|
| **Letterman** | `newsletter.sent` | Track send time |
| **Letterman** | `newsletter.clicked` | Capture interest signals |
| **Letterman** | `contact.unsubscribed` | Update suppression |
| **Page Sprout** | `lead.captured` | New lead from form |
| **Quizforma** | `quiz.completed` | Qualification done |
| **Global Control** | `contact.updated` | Sync changes |
| **Global Control** | `tag.applied` | Trigger automations |
| **MintBird** | `checkout.started` | Track funnel entry |
| **MintBird** | `purchase.completed` | Trigger fulfillment |
| **MintBird** | `refund.completed` | Revoke access |
| **Course Sprout** | `enrollment.created` | Confirm access |
| **Course Sprout** | `lesson.completed` | Track progress |
| **Course Sprout** | `goal.achieved` | Recognize success |
| **Course Sprout** | `course.completed` | Trigger next step |

**Polling as Fallback:**
- Use only when webhooks unavailable
- Bounded frequency (not every 10 seconds)
- Exponential backoff on errors

---

### Idempotency Pattern

**Every workflow must be retry-safe:**

```json
{
  "event_id": "evt_123",
  "event_type": "purchase.completed",
  "contact_key": "gc_456",
  "source": "mintbird",
  "source_record_id": "order_789",
  "occurred_at": "2026-09-22T15:30:00Z",
  "idempotency_key": "mintbird_order_789",
  "payload_version": "1"
}
```

**Idempotency Key Purpose:**
- Prevents duplicate contacts when webhook retries
- Prevents duplicate enrollments when webhook retries
- Prevents duplicate emails when webhook retries

**Implementation:**
```javascript
// Before processing event
const alreadyProcessed = await checkIdempotencyKey(event.idempotency_key);
if (alreadyProcessed) {
  return { status: 'duplicate', message: 'Event already processed' };
}

// Process event
const result = await processEvent(event);

// Record idempotency key
await storeIdempotencyKey(event.idempotency_key, result);

return result;
```

---

### Approval Gates

**OpenClaw May Automatically:**
- ✅ Read catalogs and progress
- ✅ Verify enrollments
- ✅ Detect inactivity
- ✅ Generate reports
- ✅ Draft messages
- ✅ Search and upsert contacts
- ✅ Apply tags
- ✅ Track metrics

**OpenClaw Should Require Approval Before:**
- ⚠️ Publishing newsletters
- ⚠️ Sending promotional messages
- ⚠️ Publishing new pages/funnels
- ⚠️ Changing prices or guarantees
- ⚠️ Revoking access
- ⚠️ Issuing refunds
- ⚠️ Bulk operations (>10 contacts)
- ⚠️ Modifying purchase records
- ⚠️ Deleting contacts

**Approval Workflow:**
```
1. OpenClaw drafts action
         ↓
2. Show preview to human
         ↓
3. Human reviews and approves/rejects
         ↓
4. If approved: Execute and log
         ↓
5. If rejected: Cancel and log reason
```

---

### Efficiency Rules

**Data Operations:**
1. ✅ Use fixed schemas and lookup tables
2. ✅ Give every campaign a permanent `campaign_id`
3. ✅ Batch read operations when possible
4. ✅ Keep writes small and reversible

**Performance:**
5. ✅ Use inexpensive models for classification/formatting
6. ✅ Reserve stronger reasoning for strategy/copy/exceptions
7. ✅ Cache product mappings
8. ✅ Cache tag taxonomies

**Reliability:**
9. ✅ Use bounded retries with exponential backoff
10. ✅ Send persistent failures to review queue
11. ✅ Record request, decision, action, result, verification
12. ✅ Measure automation failures as carefully as successes

---

### Best Practices

1. ✅ **Preview pages, newsletters, funnels before publishing**
   - Always show human what will go live
   - Catch errors before they're public

2. ✅ **Record everything in audit log**
   ```json
   {
     "timestamp": "2026-09-22T15:30:00Z",
     "workflow": "purchase-to-delivery",
     "trigger": "mintbird_purchase.completed",
     "order_id": "order_789",
     "contact_id": "gc_456",
     "steps": [
       {
         "agent": "revenue-agent",
         "action": "verify_payment",
         "result": "success",
         "duration_ms": 234
       },
       {
         "agent": "crm-agent",
         "action": "update_contact",
         "result": "success",
         "duration_ms": 156
       },
       {
         "agent": "delivery-agent",
         "action": "create_enrollment",
         "result": "success",
         "duration_ms": 892
       }
     ],
     "overall_result": "success",
     "total_duration_ms": 1282
   }
   ```

3. ✅ **Handle failures gracefully**
   - Bounded retries (3 attempts max)
   - Exponential backoff (1s, 2s, 4s)
   - Failure queue for human review
   - Never lose an event

4. ✅ **Respect rate limits**
   - Batch when possible
   - Spread requests over time
   - Back off on 429 errors
   - Never hammer APIs

5. ✅ **Campaign configuration over scattered prompts**
   - Store campaign config in one place
   - Don't reconstruct from chat history
   - Version control campaign configs

---

### Key Metrics

**System Health:**
- Event processing latency (seconds)
- Success rate (% workflows completed)
- Failure rate (% workflows failed)
- Retry rate (% workflows retried)
- Approval response time (human delay)

**Business Impact:**
- Time saved per workflow
- Error reduction (vs manual)
- Customer journey completion rate
- Revenue automation rate

**Most Important:**
> Customer journey completion rate - % who go from lead → customer → success

---

### Common Mistakes

❌ **One giant agent with all credentials**
- Security risk
- Hard to debug
- Hard to scale
- Solution: Specialist agents

❌ **Not handling webhook retries (duplicate processing)**
- Same event processed 3 times
- Duplicate enrollments, emails, etc.
- Solution: Idempotency keys

❌ **No failure queue (silent failures)**
- Event fails, disappears
- Customer never enrolled
- Solution: Failure queue with human review

❌ **Assuming API success = actual success**
- API says "enrolled"
- Didn't actually work
- Solution: Verify results

❌ **Not measuring automation quality**
- Only measure speed
- Ignore error rates
- Solution: Track failures as carefully as successes

---

## Integration Best Practices

### Cross-Platform Workflows

**Content-to-Customer (Full Journey):**
```
1. Letterman publishes article
         ↓
2. Reader clicks link
         ↓
3. Page Sprout captures as lead
         ↓
4. Global Control stores contact
         ↓
5. Quizforma qualifies intent
         ↓
6. Global Control applies tags
         ↓
7. MintBird shows appropriate offer
         ↓
8. Purchase completed
         ↓
9. Course Sprout enrolls student
         ↓
10. Global Control updates to customer
         ↓
11. Letterman stops prospect emails
         ↓
12. Course Sprout tracks progress
         ↓
13. Goal achieved
         ↓
14. Global Control records success
         ↓
15. Letterman requests testimonial
```

**Every step should:**
- ✅ Use idempotency keys
- ✅ Check suppression status
- ✅ Log to audit trail
- ✅ Handle failures gracefully

---

### Data Flow Architecture

**Master Contact Record (Global Control):**
```json
{
  "global_control_id": "gc_456",
  "email": "mark@example.com",
  "created_at": "2026-09-01T10:00:00Z",
  "source": "letterman",
  "source_record_id": "let_789",
  "lifecycle_stage": "stage:customer",
  "consent_status": "active",
  "tags": [
    "source:letterman",
    "interest:seo",
    "intent:high",
    "customer:seo-basics",
    "training:active"
  ],
  "platform_ids": {
    "letterman_subscriber_id": "let_789",
    "page_sprout_lead_id": "ps_012",
    "quizforma_respondent_id": "qz_345",
    "mintbird_customer_id": "mb_678",
    "course_sprout_student_id": "cs_901"
  },
  "last_activity": "2026-09-22T14:30:00Z",
  "last_activity_type": "lesson_completed"
}
```

**All platforms sync to this master record.**

---

### Product Mapping Architecture

**Central Mapping Table:**

Location: `/root/.openclaw/workspace/product-mappings.json`

```json
{
  "version": "1.0",
  "last_updated": "2026-09-22",
  "mappings": [
    {
      "mintbird_product_id": "prod_123",
      "mintbird_product_name": "SEO Basics Course",
      "course_sprout_course_id": "course_456",
      "course_sprout_course_name": "SEO Fundamentals",
      "global_control_customer_tag": "customer:seo-basics",
      "global_control_enrollment_tag": "training:seo-basics-active",
      "global_control_completion_tag": "training:seo-basics-completed",
      "letterman_welcome_template": "welcome_seo_basics",
      "letterman_completion_template": "congrats_seo_basics",
      "approved_next_offer": "offer_seo_advanced",
      "approved_by": "mark@example.com",
      "approved_date": "2026-09-15"
    }
  ]
}
```

**All agents reference this single source of truth.**

---

## Campaign Blueprint

**Every campaign should have one configuration record:**

Location: `/root/.openclaw/workspace/campaigns/[campaign-id].json`

```json
{
  "campaign_id": "camp_2026_09_seo_webinar",
  "campaign_name": "SEO Webinar September 2026",
  "created_date": "2026-09-15",
  "status": "active",
  
  "audience": {
    "description": "Small business owners interested in SEO",
    "target_size": 500,
    "segments": ["interest:seo", "stage:lead"]
  },
  
  "promise": "Learn local SEO fundamentals in 90 minutes",
  
  "letterman": {
    "publication_id": "pub_123",
    "issue_ids": ["issue_456", "issue_457"],
    "sequence_ids": ["seq_789"]
  },
  
  "page_sprout": {
    "landing_page_id": "page_012",
    "poplink": "https://coronashoutouts.com/seo-webinar",
    "thank_you_page_id": "page_013"
  },
  
  "quizforma": {
    "quiz_id": "quiz_345",
    "quiz_version": "2.1",
    "scoring_model": "scoring_v2.1.json"
  },
  
  "global_control": {
    "tag_on_signup": ["campaign:seo-webinar", "interest:seo"],
    "tag_on_attendance": ["attended:seo-webinar"],
    "tag_on_purchase": ["customer:seo-basics"]
  },
  
  "mintbird": {
    "offer_id": "offer_678",
    "funnel_id": "funnel_901",
    "checkout_page_id": "checkout_234"
  },
  
  "course_sprout": {
    "entitlement_id": "course_456"
  },
  
  "tracking": {
    "utm_source": "letterman",
    "utm_medium": "email",
    "utm_campaign": "seo-webinar-2026-09",
    "utm_content": "issue-456"
  },
  
  "consent_requirements": ["email_marketing"],
  "primary_kpi": "course_enrollments",
  "target_kpi_value": 50,
  
  "approvers": ["mark@example.com"],
  "approved_date": "2026-09-15",
  
  "rollback_procedure": "rollback_seo_webinar.md"
}
```

**OpenClaw reads this instead of reconstructing from scattered prompts.**

---

## Security & Compliance

### Credential Management

**Critical Rules:**

1. ✅ **Use OpenClaw SecretRefs or ClawLauncher secure controls**
   - Never in prompts
   - Never in skill files
   - Never in contact tags
   - Never in chat messages
   - Never in logs

2. ✅ **Separate credentials per specialist agent**
   ```
   Audience Agent:  LETTERMAN_API_KEY
   CRM Agent:       GLOBAL_CONTROL_API_KEY
   Revenue Agent:   MINTBIRD_API_KEY
   Delivery Agent:  COURSE_SPROUT_API_KEY
   ```

3. ✅ **Minimum necessary permissions**
   - Audit Agent: Read-only everywhere
   - Don't give every agent write access to everything

4. ✅ **File permissions on .env files**
   ```bash
   chmod 600 .env
   # Owner read/write only
   ```

---

### Consent & Suppression

**Must check before every message:**

```javascript
async function canSendMessage(contactId, messageType) {
  const contact = await globalControl.getContact(contactId);
  
  // Check suppression
  if (contact.tags.includes('suppression:unsubscribed')) {
    return { allowed: false, reason: 'Contact unsubscribed' };
  }
  
  if (contact.tags.includes('suppression:complained')) {
    return { allowed: false, reason: 'Contact filed complaint' };
  }
  
  if (contact.tags.includes('suppression:bounced')) {
    return { allowed: false, reason: 'Email address invalid' };
  }
  
  // Check consent
  if (contact.consent_status !== 'active') {
    return { allowed: false, reason: 'Consent not active' };
  }
  
  // Transactional messages OK even if promotional consent revoked
  if (messageType === 'transactional') {
    return { allowed: true, reason: 'Transactional message' };
  }
  
  // Promotional requires active consent
  if (messageType === 'promotional' && contact.consent_status !== 'active') {
    return { allowed: false, reason: 'No promotional consent' };
  }
  
  return { allowed: true, reason: 'All checks passed' };
}
```

**Message Type Classification:**

| Type | Examples | Requires Consent |
|------|----------|------------------|
| **Transactional** | Purchase receipt, access credentials, password reset | No (can send even if unsubscribed from marketing) |
| **Relationship** | Course progress, support responses, account updates | Yes (but less strict) |
| **Promotional** | Newsletter, upsell offers, marketing campaigns | Yes (strict enforcement) |

---

### Audit Requirements

**Log every significant action:**

```json
{
  "timestamp": "2026-09-22T15:30:00Z",
  "agent": "crm-agent",
  "action": "contact_updated",
  "contact_id": "gc_456",
  "changes": {
    "tags_added": ["customer:seo-basics"],
    "tags_removed": ["stage:lead"],
    "lifecycle_stage": "stage:customer"
  },
  "trigger": "mintbird_purchase_completed",
  "order_id": "order_789",
  "idempotency_key": "mintbird_order_789",
  "result": "success",
  "duration_ms": 156
}
```

**Audit Trail Should Include:**
- ✅ Who (which agent)
- ✅ What (action taken)
- ✅ When (timestamp)
- ✅ Why (trigger/reason)
- ✅ Where (which platform)
- ✅ Result (success/failure)
- ✅ Details (what changed)

---

## Recommended Build Order

### Phase 1: Foundation (Weeks 1-4)
1. ✅ Connect all 6 platforms read-only
2. ✅ Test authentication
3. ✅ Establish Global Control as master database
4. ✅ Define tag taxonomy
5. ✅ Create product mapping table

### Phase 2: First Flow (Weeks 5-8)
6. ✅ Build: Page Sprout → Global Control
7. ✅ Test: Lead capture workflow
8. ✅ Verify: No duplicates
9. ✅ Add: Consent checking

### Phase 3: Add Intelligence (Weeks 9-12)
10. ✅ Build: Quizforma → Global Control tagging
11. ✅ Test: Quiz scoring and tag application
12. ✅ Add: MintBird offer recommendations (no auto-purchase)

### Phase 4: Revenue Flow (Weeks 13-16)
13. ✅ Build: MintBird purchase → Course Sprout enrollment
14. ✅ Test: Idempotent enrollment
15. ✅ Verify: Access actually works
16. ✅ Add: Global Control customer tag updates

### Phase 5: Content Loop (Weeks 17-20)
17. ✅ Build: Letterman → Page Sprout → Quiz → Offer
18. ✅ Test: Full content-to-customer journey
19. ✅ Add: Campaign tracking
20. ✅ Verify: Attribution works

### Phase 6: Agent Specialization (Weeks 21-22)
21. ✅ Separate into 7 specialist agents
22. ✅ Assign scoped credentials
23. ✅ Test agent-to-agent handoffs
24. ✅ Verify isolation

### Phase 7: Observability (Weeks 23-24)
25. ✅ Build dashboards
26. ✅ Add failure queues
27. ✅ Implement audit logging
28. ✅ Test rollback procedures
29. ✅ Enable write/publish actions (with approval)

---

## Success Metrics

### Technical Excellence
- ✅ All 7 agents operational
- ✅ All 6 platforms integrated
- ✅ Zero critical errors in 30 days
- ✅ <3 second routing decisions
- ✅ 99.9% event processing reliability

### Business Impact
- 📈 Campaign setup: 4 hours → 30 minutes (-87%)
- 📈 Lead-to-customer conversion: +25%
- 📈 Course completion rates: +40%
- 📈 Customer lifetime value: +50%
- 📈 Time saved per week: 20+ hours

### Customer Experience
- 🎯 Seamless journey (6 platforms feel like 1)
- 🎯 Zero duplicate contacts or emails
- 🎯 Personalized recommendations
- 🎯 Timely follow-up (no one falls through cracks)
- 🎯 100% consent compliance

---

## Common Anti-Patterns to Avoid

### ❌ The "Smart" CRM That Owns Everything
**Wrong:** OpenClaw becomes another CRM with duplicate contact data

**Right:** OpenClaw coordinates, Global Control owns contacts

---

### ❌ The Auto-Everything Bot
**Wrong:** AI makes all decisions, publishes without approval

**Right:** AI drafts, human approves consequential actions

---

### ❌ The Prompt-Driven System
**Wrong:** Reconstruct campaign from scattered prompts and chat history

**Right:** Store campaign config in versioned JSON files

---

### ❌ The One Giant Agent
**Wrong:** Single agent with all credentials and permissions

**Right:** Specialist agents with scoped credentials

---

### ❌ The Fire-and-Forget Integration
**Wrong:** Call API, assume it worked, move on

**Right:** Call API, verify result, log outcome, handle failures

---

### ❌ The "Good Enough" Approval Gate
**Wrong:** AI decides when approval is "probably" needed

**Right:** Explicit approval rules for all consequential actions

---

## Expert Operating Principles Summary

### 1. Single Source of Truth
Each product owns one responsibility. No duplication.

### 2. OpenClaw as Coordinator
Intelligence and orchestration, not another database.

### 3. Event-Driven
Webhooks primary, polling fallback only.

### 4. Idempotent by Design
Every action can be retried safely without duplication.

### 5. Approval Gates
Human judgment for consequential actions (publish, price, access, bulk).

### 6. Audit Everything
Complete history for troubleshooting and compliance.

### 7. Fail Safely
Bounded retries, failure queues, rollback procedures.

### 8. Agent Specialization
Narrow credentials, explicit permissions, separate workspaces.

### 9. Schema-Driven
Fixed mappings and config files, not prompt reconstruction.

### 10. Consent First
Suppression status overrides all automation.

---

## Conclusion

The Titanium Suite becomes exponentially more valuable when operated as one customer operating system:

**Letterman** attracts attention and builds relationships.  
**Page Sprout** converts attention into identifiable leads.  
**Quizforma** understands needs, intent, and fit.  
**Global Control Center** maintains the authoritative customer record.  
**MintBird** presents offers and completes transactions.  
**Course Sprout** creates customer results.  
**OpenClaw** orchestrates, verifies, and optimizes the complete system.

**The result:** A seamless customer journey that feels like one experience, not six disconnected tools.

---

*Expert Playbook Version 1.0*  
*Compiled: September 22, 2026*  
*For: Mark Eno's Titanium Suite Implementation*

