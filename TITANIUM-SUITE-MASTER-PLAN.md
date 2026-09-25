# TITANIUM SUITE - MASTER PLAN

**The Complete Six-Platform Customer Journey Automation**

*Created: September 22, 2026*  
*Owner: Mark Eno*  
*Vision: Unified automation from attract to deliver*

---

## The Big Picture

**Transform six separate platforms into one automated customer journey.**

### The Six Platforms

| Stage | Platform | Purpose |
|-------|----------|---------|
| 🎯 **Attract** | Letterman | Approved newsletters → campaigns |
| 🎣 **Capture** | Page Sprout | Bridge pages, PopLinks, lead steps |
| ✅ **Qualify** | Quizforma | Score answers, identify needs |
| 📊 **Organize** | Global Control | Contacts, tags, segments, follow-up |
| 💰 **Convert** | MintBird | Sales pages, funnels, upsells |
| 📚 **Deliver** | Course Sprout | Enroll, monitor training, goals |

---

## The Unified Customer Journey

### End-to-End Flow

```
1. Letterman publishes approved newsletter
         ↓
2. Tracked link → Page Sprout bridge page
         ↓
3. Quizforma qualifies visitor
         ↓
4. OpenClaw creates/updates Global Control contact
         ↓
5. OpenClaw applies tags based on quiz answers
         ↓
6. Person receives appropriate MintBird offer
         ↓
7. Purchase triggers Course Sprout enrollment
         ↓
8. Course progress updates Global Control
         ↓
9. OpenClaw recommends next course/offer
         ↓
10. Letterman continues relationship
```

**This is the strongest OpenClaw opportunity.**

---

## The Seven Core Skills

### 1. `/campaign-create` - Complete Campaign Builder

**Purpose:** Create entire campaign across all 6 platforms from one command.

**Creates:**
- Target audience definition
- Page Sprout pages (bridge, landing, lead capture)
- Quizforma quiz (qualification questions)
- Global Control tags (campaign tracking)
- MintBird offer (sales funnel)
- Course Sprout training (if applicable)
- Letterman newsletter sequence

**Workflow:**
1. Ask for campaign details (audience, goal, offer)
2. Generate complete campaign plan
3. **Show preview of all components**
4. **Require approval before creating anything**
5. Create drafts in each platform
6. Link components together (tracking URLs, tags, automations)
7. **Final approval before publishing anything live**

**Safety:**
- Creates drafts first
- Never publishes without approval
- Shows exact components before creation
- Rollback procedure for each platform

---

### 2. `/quiz-route` - Intelligent Lead Routing

**Purpose:** Process Quizforma results and determine next steps.

**Determines:**
- Lead score (1-100)
- Primary interest/need
- Customer stage (cold/warm/hot)
- Global Control tags to apply
- Recommended Page Sprout page
- Appropriate MintBird offer
- Recommended Course Sprout training

**Workflow:**
1. Receive Quizforma webhook or manual quiz data
2. Analyze answers against scoring rules
3. Calculate lead score
4. Identify interests and needs
5. Determine customer stage
6. **Show routing decision with reasoning**
7. **Ask approval to update contact and trigger next step**
8. Apply tags in Global Control
9. Send to appropriate offer/content

**Safety:**
- Shows scoring logic
- Explains routing decision
- Requires approval before contact updates
- Logs all routing decisions

---

### 3. `/contact-sync` - Master Contact Database Management

**Purpose:** Use Global Control as single source of truth for all contacts.

**Functions:**
- Search before creating (prevent duplicates)
- Update existing records
- Apply and remove tags
- Preserve consent and unsubscribe status
- Record source campaign
- Sync across platforms

**Workflow:**
1. Receive contact data (from Quizforma, MintBird, etc.)
2. **Search Global Control first** (email + name)
3. If exists: Update with new data
4. If new: Create contact with source
5. Apply appropriate tags
6. Preserve consent status
7. **Show what changed**
8. Record sync event

**Safety:**
- **ALWAYS search before creating**
- Never override unsubscribes
- Preserve consent preferences
- Prevent duplicate contacts
- Log every change

---

### 4. `/offer-build` - Complete Funnel Builder

**Purpose:** Create MintBird sales funnel with all components.

**Creates:**
- Sales page
- Primary offer (product details, pricing)
- Order form
- Upsell or downsell
- Confirmation page
- Course Sprout delivery mapping

**Workflow:**
1. Ask for offer details (product, price, audience)
2. Generate funnel structure
3. Create each component as draft
4. **Show complete funnel preview**
5. **Require approval for payment and pricing**
6. **Require approval before live publication**
7. Connect to Course Sprout for delivery
8. Generate tracking parameters
9. Return funnel URLs

**Safety:**
- Drafts first, never live
- Payment/pricing requires explicit approval
- Live publication requires YES
- Test mode available
- Rollback documented

---

### 5. `/customer-onboard` - Post-Purchase Automation

**Purpose:** Execute complete onboarding after verified purchase.

**Actions:**
1. Find Global Control contact (by email or order ID)
2. Apply customer and product tags
3. Create Course Sprout enrollment
4. Send access instructions
5. Remove sales reminder tags
6. Add to customer Letterman segment

**Workflow:**
1. Receive purchase webhook from MintBird
2. Verify purchase is real (not test, not duplicate)
3. **Check order ID** - prevent duplicate processing
4. Find contact in Global Control
5. Apply customer tags
6. Create course enrollment
7. Send welcome email with access
8. Update contact lifecycle stage
9. **Log complete onboarding event**

**Safety:**
- Order ID prevents duplicates
- Verify purchase before processing
- Never process test orders as real
- Preserve existing customer data
- Log all actions taken

---

### 6. `/newsletter-create` - Campaign Newsletter Builder

**Purpose:** Create Letterman newsletter with all tracking and CTAs.

**Creates:**
- Subject line options (A/B test ready)
- Newsletter content
- Page Sprout links (with tracking)
- Quizforma calls to action
- MintBird offers (inline)
- Tracking parameters
- Source and fact-check notes

**Workflow:**
1. Ask for newsletter topic and goal
2. Generate content with CTAs
3. Insert Page Sprout links (tracked)
4. Add Quizforma quiz CTAs
5. Include relevant MintBird offers
6. Add tracking parameters to all links
7. **Show final edition**
8. **Show recipient segment**
9. **Require approval before sending**

**Safety:**
- Must display final edition before send
- Must show recipient count and segment
- Requires explicit approval to send
- Respects unsubscribes
- Logs send event with stats

---

### 7. `/progress-followup` - Training Progress Automation

**Purpose:** Respond to Course Sprout activity with appropriate communications.

**Triggers:**
- New enrollment (welcome)
- No first login (gentle reminder)
- Training started (encouragement)
- Training stalled (re-engagement)
- Goal completed (celebration + next step)
- Course completed (certificate + upsell)
- Next training available (recommendation)

**Workflow:**
1. Receive Course Sprout webhook or poll for changes
2. Identify event type
3. Get contact from Global Control
4. Check consent and sending limits
5. Draft appropriate communication
6. **Show draft message**
7. **Respect consent and frequency limits**
8. Send or schedule communication
9. Update contact with engagement data

**Safety:**
- Drafts communications (doesn't auto-send)
- Respects consent preferences
- Honors sending frequency limits
- Never emails unsubscribed contacts
- Logs all communications

---

## Multi-Agent Architecture

### Coordinator Agent
**Role:** Orchestrate the customer journey

**Responsibilities:**
- Interpret user commands
- Route tasks to specialist agents
- Track campaign state
- Assemble results
- Request approvals
- Ensure handoffs complete

**Permissions:** Coordination only, no direct platform access

---

### Specialist Agents

#### 1. Campaign Coordinator Agent
**Platforms:** All (orchestration)  
**Credentials:** None (routes to other agents)  
**Commands:** `/campaign-create`

#### 2. Page and Funnel Agent
**Platforms:** Page Sprout, MintBird  
**Credentials:** Page Sprout API, MintBird API  
**Commands:** `/offer-build`, page creation, PopLink management

#### 3. Quiz and Lead Agent
**Platforms:** Quizforma  
**Credentials:** Quizforma API  
**Commands:** `/quiz-route`, lead scoring

#### 4. CRM Agent
**Platforms:** Global Control  
**Credentials:** Global Control API  
**Commands:** `/contact-sync`, tagging, segmentation

#### 5. Course Delivery Agent
**Platforms:** Course Sprout  
**Credentials:** Course Sprout API  
**Commands:** `/customer-onboard`, `/progress-followup`, enrollment management

#### 6. Newsletter Agent
**Platforms:** Letterman  
**Credentials:** Letterman API  
**Commands:** `/newsletter-create`, subscriber management

#### 7. Reporting Agent
**Platforms:** All (read-only)  
**Credentials:** Read-only access to all platforms  
**Commands:** `/business-report`, analytics, attribution

---

## Essential Safety Rules

### Credential Security
- ✅ **NEVER** store API keys in OpenClaw memory
- ✅ **NEVER** store API keys in Telegram messages
- ✅ **NEVER** include API keys in skill ZIPs
- ✅ Use SecretRef for all credentials
- ✅ Separate credentials per platform
- ✅ Separate dev/test/production credentials

### Duplicate Prevention
- ✅ Search for existing contacts before creating new ones
- ✅ Use unique event IDs for webhooks
- ✅ Use order IDs to prevent duplicate enrollments
- ✅ Check existing tags before applying

### Testing Protocol
- ✅ Use test records before working with customers
- ✅ Test mode for all payment/purchase flows
- ✅ Dry-run for all multi-platform campaigns
- ✅ Sandbox accounts for development

### Approval Gates
- ✅ Require approval before sending email
- ✅ Require approval before publishing pages
- ✅ Require approval before changing prices
- ✅ Require approval before creating paid offers
- ✅ Require approval before processing payments

### Consent and Privacy
- ✅ **NEVER** override unsubscribes
- ✅ **NEVER** ignore consent restrictions
- ✅ Respect sending frequency limits
- ✅ Honor data deletion requests
- ✅ Maintain opt-in records

### Client Isolation
- ✅ Keep each client's contacts isolated
- ✅ Keep each client's campaigns isolated
- ✅ Keep each client's credentials isolated
- ✅ Prevent cross-client data leaks
- ✅ Separate reporting per client

### Audit Trail
- ✅ Record every external change
- ✅ Log: platform, record ID, timestamp, result
- ✅ Track: who, what, when, why
- ✅ Store: before/after states
- ✅ Enable: rollback and troubleshooting

---

## Data Flow Architecture

### Master Contact Record (Global Control)

```json
{
  "id": "gc_123456",
  "email": "customer@example.com",
  "name": "John Doe",
  "source_campaign": "spring-2026-webinar",
  "created_at": "2026-03-15T10:00:00Z",
  "tags": [
    "subscriber",
    "quiz-completed",
    "interest-seo",
    "lead-score-85",
    "customer",
    "course-seo-basics-enrolled",
    "course-seo-basics-completed"
  ],
  "consent": {
    "email": true,
    "sms": false,
    "subscribed_at": "2026-03-15T10:00:00Z",
    "unsubscribed_at": null
  },
  "lifecycle_stage": "customer",
  "platform_ids": {
    "letterman": "sub_789",
    "quizforma": "lead_456",
    "mintbird": "cust_321",
    "course_sprout": "student_654"
  },
  "last_activity": "2026-09-20T14:30:00Z",
  "total_purchases": 2,
  "total_revenue": 197.00,
  "courses_completed": 1,
  "courses_enrolled": 2
}
```

### Campaign Tracking

```json
{
  "campaign_id": "camp_spring2026_webinar",
  "name": "Spring 2026 SEO Webinar Campaign",
  "created_at": "2026-03-01T00:00:00Z",
  "platforms": {
    "letterman": {
      "newsletter_id": "news_123",
      "sent": 1500,
      "opens": 450,
      "clicks": 120
    },
    "page_sprout": {
      "bridge_page": "https://page.sprout/seo-webinar",
      "visits": 120,
      "conversions": 45
    },
    "quizforma": {
      "quiz_id": "quiz_456",
      "starts": 45,
      "completions": 38
    },
    "global_control": {
      "contacts_added": 38,
      "tags_applied": ["campaign-spring2026", "interest-seo"]
    },
    "mintbird": {
      "funnel_id": "funnel_789",
      "page_views": 38,
      "checkouts": 15,
      "purchases": 8
    },
    "course_sprout": {
      "course_id": "course_321",
      "enrollments": 8,
      "completions": 3
    }
  },
  "revenue": {
    "total": 1576.00,
    "average_order": 197.00
  },
  "roi": {
    "cost": 200.00,
    "revenue": 1576.00,
    "profit": 1376.00,
    "roi_percent": 688
  }
}
```

---

## Implementation Phases

### Phase 1: Foundation (Weeks 1-4)
**Goal:** Individual platform skills working

**Build:**
1. ✅ Letterman Publishing (from LETTERMAN-ROADMAP.md)
2. ⬜ Page Sprout Integration
3. ⬜ Global Control CRM (you have this from MCP work)
4. ⬜ MintBird API (you have this from MCP work)
5. ⬜ Course Sprout Integration
6. ⬜ Quizforma Integration

**Test:** Each skill independently with test accounts

---

### Phase 2: Simple Automation (Weeks 5-8)
**Goal:** Two-platform workflows

**Build:**
1. ⬜ `/contact-sync` - Global Control as master database
2. ⬜ `/newsletter-create` - Letterman + tracking links
3. ⬜ `/customer-onboard` - MintBird → Course Sprout

**Test:** End-to-end flows with test customers

---

### Phase 3: Lead Qualification (Weeks 9-12)
**Goal:** Quiz-driven routing

**Build:**
1. ⬜ `/quiz-route` - Quizforma → Global Control → offers
2. ⬜ `/offer-build` - MintBird funnel builder
3. ⬜ Lead scoring and tagging logic

**Test:** Quiz completions through to offers

---

### Phase 4: Full Campaign (Weeks 13-16)
**Goal:** Complete campaign automation

**Build:**
1. ⬜ `/campaign-create` - Full campaign builder
2. ⬜ Multi-agent coordinator
3. ⬜ Campaign dashboard

**Test:** Complete campaigns end-to-end

---

### Phase 5: Engagement Loop (Weeks 17-20)
**Goal:** Progress-based follow-up

**Build:**
1. ⬜ `/progress-followup` - Course Sprout triggers
2. ⬜ `/business-report` - Cross-platform analytics
3. ⬜ Recommendation engine

**Test:** Full customer lifecycle

---

### Phase 6: Optimization (Weeks 21-24)
**Goal:** Refinement and scale

**Focus:**
- Performance optimization
- Error handling improvements
- Additional automations
- Client isolation for multiple businesses
- Advanced reporting

---

## Success Metrics

### Technical Metrics
- ✅ All 7 core skills operational
- ✅ All 6 platforms integrated
- ✅ Zero critical errors in 30 days
- ✅ 99% uptime for automations
- ✅ <5 second average response time

### Business Metrics
- 📈 Newsletter open rates (target: 25%+)
- 📈 Click-through rates (target: 3%+)
- 📈 Quiz completion rates (target: 60%+)
- 📈 Lead-to-customer conversion (target: 10%+)
- 📈 Course completion rates (target: 40%+)
- 📈 Customer lifetime value increase
- 📈 Time saved on manual tasks

### Automation Metrics
- ⚡ Contacts synced automatically
- ⚡ Campaigns launched per month
- ⚡ Customer onboardings automated
- ⚡ Follow-ups sent without manual work
- ⚡ Revenue attributed to automations

---

## Risk Management

### Technical Risks
- **API changes** → Monitor changelogs, maintain version docs
- **Rate limits** → Implement queuing and throttling
- **Data sync failures** → Retry logic with bounded attempts
- **Webhook failures** → Fallback to polling for critical events

### Business Risks
- **Duplicate contacts** → Search-first strategy enforced
- **Wrong audience targeting** → Approval gates before sends
- **Consent violations** → Multiple consent checks
- **Revenue errors** → Test mode for all payment flows

### Operational Risks
- **Agent downtime** → Monitoring and alerting
- **Skill bugs** → Comprehensive testing before deploy
- **Credential exposure** → SecretRef only, regular audits
- **Client data mixing** → Strict isolation per client

---

## Current Status

**Phase:** Master Plan Documented ✅  
**Next:** Phase 1 - Build foundation skills

**Already Have:**
- ✅ Letterman MCP skill (47 tools)
- ✅ Global Control MCP skill (15 tools)
- ✅ MintBird MCP & REST skills (186 + 189 endpoints)
- ✅ PopLinks/MintBird commands (`/poplink`, `/bridgepage`)

**Need to Build:**
- ⬜ Page Sprout integration
- ⬜ Course Sprout integration
- ⬜ Quizforma integration
- ⬜ The 7 core orchestration skills
- ⬜ Multi-agent coordinator

**Estimated Timeline:** 24 weeks (6 months) to full system

---

## Investment & ROI

### Time Investment
- **Phase 1:** 80 hours (4 weeks × 20 hrs/week)
- **Phase 2:** 60 hours (simple automation)
- **Phase 3:** 60 hours (lead qualification)
- **Phase 4:** 80 hours (full campaigns)
- **Phase 5:** 60 hours (engagement loop)
- **Phase 6:** 40 hours (optimization)
- **Total:** 380 hours (~2-3 hours/day for 6 months)

### Expected ROI
- **Manual time saved:** 20+ hours/week
- **Revenue increase:** Better conversion, faster follow-up
- **Customer experience:** Seamless journey across platforms
- **Scalability:** Handle 10x more customers with same effort

### Break-Even
- Time investment: 380 hours
- Time saved per week: 20 hours
- **Break-even:** 19 weeks (~4.5 months)
- **After 6 months:** Net +100 hours saved

---

## Final Notes

**This is the strongest OpenClaw opportunity** because:

1. **Unified Experience** - Customer sees one cohesive journey
2. **Cross-Platform Intelligence** - Data flows everywhere it's needed
3. **Automated Follow-Up** - No customer falls through cracks
4. **Scalable Growth** - Add customers without adding hours
5. **Complete Visibility** - One dashboard shows entire funnel
6. **Workshop-Compliant** - Built on proven safety frameworks

**Every skill follows:**
- Workshop 2: Four-layer architecture, process mapping
- Workshop 3: API safety, three-tier approvals
- Workshop 4: Multi-agent patterns, preview gates

**This is your magnum opus.** 🏆

---

**Build it right. Build it once. Transform six platforms into one unstoppable system.**

*The Titanium Suite Master Plan - September 22, 2026*
