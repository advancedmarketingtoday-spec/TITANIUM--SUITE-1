# TITANIUM SUITE - BUILD PRIORITY & ACTION PLAN

**Created:** September 22, 2026 15:00 UTC  
**Owner:** Mark Eno  
**Purpose:** Prioritized roadmap from current state to full production

---

## Current State Summary

### ✅ Production Ready (4 platforms)
1. **Letterman** - 47 MCP tools, credentials configured
2. **Global Control** - 15 MCP tools, credentials configured  
3. **MintBird** - 186 MCP tools, credentials configured
4. **PopLinks** - 189 REST endpoints, working script

### ⚠️ Needs Completion (1 platform)
5. **Course Sprout** - Basic skill exists, needs full integration (23 hours)

### ❓ Needs Clarification (1-2 platforms)
6. **Page Sprout** - Is this the same as PopLinks?
7. **Quizforma** - Do you have this? Or different quiz tool?

---

## Critical Path to Launch

### Phase 0: Clarification (30 minutes) - DO THIS FIRST

**Questions for Mark:**

1. **Page Sprout vs PopLinks**
   - Is "Page Sprout" the same platform as "PopLinks"?
   - If YES: We already have it (poplinks-mintbird-skill)
   - If NO: Need separate API documentation

2. **Quiz System**
   - Do you have Quizforma API access?
   - If NO: What quiz tool do you use?
   - If NONE: Should we build quiz logic into another skill?

3. **Course Sprout API**
   - Can you provide Course Sprout API documentation?
   - Do you have API credentials?
   - Is there a test/sandbox environment?

**Action:** Mark answers these 3 questions before we proceed.

---

## Phase 1: Verify & Test Existing Integrations (2 hours)

**Goal:** Confirm all 4 ready platforms actually work

### Task 1.1: Test Letterman (30 mins)
```bash
cd /root/.openclaw/workspace/letterman-skill
./scripts/letterman test-connection
./scripts/letterman list-publications
```

**Expected Result:**
- ✅ Connected to Letterman API
- ✅ Lists your publications
- ✅ Can retrieve newsletter drafts

**If Fails:**
- Check .env file has valid API key
- Verify API key permissions
- Check network connectivity

---

### Task 1.2: Test Global Control (30 mins)
```bash
cd /root/.openclaw/workspace/globalcontrol-skill
./scripts/globalcontrol test-connection
./scripts/globalcontrol list-contacts --limit 5
```

**Expected Result:**
- ✅ Connected to Global Control
- ✅ Lists recent contacts
- ✅ Can view contact details

**If Fails:**
- Verify API token is current (they don't expire but can be regenerated)
- Check permissions scope
- Test with curl directly

---

### Task 1.3: Test MintBird (30 mins)
```bash
cd /root/.openclaw/workspace/mintbird-skill
# Test MCP server connection
# (need to verify how MCP server is invoked)
```

**Expected Result:**
- ✅ MCP server responds
- ✅ Can list products
- ✅ Can view funnels

**If Fails:**
- Check MCP server configuration
- Verify API credentials
- Test REST API as fallback

---

### Task 1.4: Test PopLinks (30 mins)
```bash
cd /root/.openclaw/workspace/poplinks-mintbird-skill
./create-poplink.sh
# Provide test URL when prompted
```

**Expected Result:**
- ✅ Creates PopLink successfully
- ✅ Returns short URL
- ✅ Link works and redirects

**If Fails:**
- Check API key in .env
- Verify domain configuration
- Test with curl directly

---

## Phase 2: Complete Course Sprout Integration (3 days / 23 hours)

**Prerequisites:** Course Sprout API documentation obtained

### Task 2.1: API Discovery (2 hours)
- Review Course Sprout API docs
- Document endpoints
- Test authentication
- Map object schemas

**Deliverable:** `coursesprout-skill/discovery/api-endpoints.md`

---

### Task 2.2: Configure Authentication (1 hour)
```bash
cd /root/.openclaw/workspace/coursesprout-skill
echo "COURSE_SPROUT_API_KEY=your_key" > .env
chmod 600 .env
```

**Test:**
```bash
curl -H "Authorization: Bearer $COURSE_SPROUT_API_KEY" \
  https://api.coursesprout.com/v1/courses
```

**Deliverable:** Working .env file, test connection

---

### Task 2.3: Build Read-Only Operations (3 hours)

**Commands to Build:**
- `/course-sprout catalog` - List courses, pods, trainings, goals
- `/course-sprout customer-status <contact>` - View enrollment and access
- `/course-sprout progress <contact>` - View lessons and completion
- `/course-sprout goal-status <contact>` - View goal progress
- `/course-sprout completion-report` - Generate reports

**Test Each:**
```bash
./scripts/coursesprout catalog
./scripts/coursesprout customer-status test@example.com
./scripts/coursesprout progress test@example.com
```

**Deliverable:** All read commands working

---

### Task 2.4: Build Enrollment Workflow (4 hours)

**Critical Requirements:**
- Must be idempotent (check order_id before creating)
- Must verify MintBird purchase first
- Must use product mapping table
- Must verify access granted

**Command:**
```bash
/course-sprout enroll <contact> <product>
```

**Implementation:**
1. Load product mapping or reject
2. Search for existing enrollment by order_id
3. If found: return existing (don't create duplicate)
4. If not found: create enrollment
5. Verify access granted
6. Update Global Control with tags
7. Log all actions

**Test Scenarios:**
- New enrollment (should succeed)
- Duplicate enrollment (should return existing)
- Invalid product (should reject)
- Missing mapping (should reject)

**Deliverable:** Idempotent enrollment working

---

### Task 2.5: Implement Product Mappings (2 hours)

**Create Mapping File:**
```json
{
  "mappings": [
    {
      "mintbird_product_id": "prod_123",
      "course_sprout_course_id": "course_456",
      "global_control_customer_tag": "customer:seo-basics",
      "global_control_enrollment_tag": "training:seo-basics-active",
      "access_email_template": "welcome_seo_basics",
      "completion_tag": "training:seo-basics-completed",
      "approved_next_offer": "offer_advanced_seo"
    }
  ]
}
```

**Location:** `/root/.openclaw/workspace/coursesprout-skill/mappings/product-mappings.json`

**Add Validation:**
- Reject enrollment if mapping missing
- Log rejected attempts
- Provide clear error messages

**Deliverable:** Complete mapping system with validation

---

### Task 2.6: Build Progress Tracking (2 hours)

**Commands:**
- `/course-sprout stalled-learners` - Detect inactive students
- `/course-sprout progress <contact>` - Detailed progress view

**Logic:**
- Enrolled but never logged in (0 lessons, >7 days)
- Started but inactive (last activity >14 days)
- Repeated difficulty (same lesson >3 attempts)

**Deliverable:** Stalled learner detection working

---

### Task 2.7: Add Approval Gates (2 hours)

**Approval Required For:**
- Revoking access
- Moving learners between programs
- Changing goals or completion records
- Sending promotional messages
- Bulk operations

**Implementation:**
- Check operation type
- If requires approval: draft action, request human approval
- If approved: execute and log
- If rejected: cancel and log

**Deliverable:** Approval system integrated

---

### Task 2.8: Create Test Suite (3 hours)

**10 Required Tests:**
1. ✅ List catalog
2. ✅ Find existing learner (no duplicate)
3. ✅ Enroll verified purchaser
4. ✅ Retry without duplication
5. ✅ Verify access granted
6. ✅ Detect inactive learner
7. ✅ Retrieve progress and goals
8. ✅ Handle invalid mapping safely
9. ✅ Respect revoked consent
10. ✅ Produce auditable report

**Test Script:**
```bash
./scripts/coursesprout run-tests
```

**Deliverable:** All 10 tests passing

---

### Task 2.9: Documentation (2 hours)

**Files to Create/Update:**
- README.md - Installation and setup
- INSTALLATION.md - Detailed guide
- SKILL.md - Complete skill documentation
- COMPLETION-REPORT.md - Test results and verification

**Deliverable:** Complete documentation

---

### Task 2.10: Production Verification (2 hours)

**Final Checks:**
- All 10 completion tests pass
- Idempotency verified (no duplicate enrollments)
- Product mapping table complete
- Error handling for all failure modes
- Consent checking integrated
- Approval gates working
- Audit logging functional
- Documentation complete

**Deliverable:** Course Sprout marked COMPLETE ✅

---

## Phase 3: Clarify Quiz/Page Sprout (variable time)

### Scenario A: Page Sprout = PopLinks (0 hours)
**If confirmed:** Already have it, move to Phase 4

### Scenario B: Page Sprout is separate (6-8 hours)
**Need:**
- API documentation
- Credentials
- Build integration similar to PopLinks

### Scenario C: Quizforma exists (6-8 hours)
**Need:**
- Quizforma API documentation
- Credentials
- Build quiz integration with scoring logic

### Scenario D: No quiz tool (2-4 hours)
**Alternative:**
- Build quiz logic into Page Sprout skill
- Or use simple form logic in PopLinks
- Store quiz responses in Global Control custom fields

---

## Phase 4: Build Orchestration Skills (2-3 weeks)

**Once all 6 platforms are integrated:**

### Skill 1: `/contact-sync` (8 hours)
**Purpose:** Canonical contact management

**Actions:**
1. Search Global Control before creating
2. Normalize email/phone
3. Upsert contact
4. Apply tags
5. Log action

**Priority:** HIGH (foundation for all other skills)

---

### Skill 2: `/customer-onboard` (10 hours)
**Purpose:** Purchase-to-delivery automation

**Workflow:**
1. Receive MintBird purchase event
2. Verify payment and product
3. Find/update contact in Global Control
4. Check product mapping
5. Create Course Sprout enrollment (idempotent)
6. Verify access
7. Apply customer tags
8. Send welcome email via Letterman

**Priority:** HIGH (critical automation)

---

### Skill 3: `/progress-followup` (8 hours)
**Purpose:** Student success automation

**Actions:**
1. Detect stalled learners (Course Sprout)
2. Check consent status (Global Control)
3. Draft support message
4. Request approval
5. Send via Letterman
6. Log interaction

**Priority:** MEDIUM (improves outcomes)

---

### Skill 4: `/newsletter-create` (6 hours)
**Purpose:** Letterman content automation

**Actions:**
1. Build editorial calendar
2. Draft newsletter
3. Attach campaign tracking
4. Route through approval
5. Schedule send
6. Track engagement

**Priority:** MEDIUM (content efficiency)

---

### Skill 5: `/campaign-create` (12 hours)
**Purpose:** Full campaign orchestration

**Actions:**
1. Create Letterman newsletter
2. Create PopLinks bridge page
3. Set up quiz (if applicable)
4. Configure Global Control tags
5. Link MintBird offer
6. Set up Course Sprout mapping
7. Generate campaign report

**Priority:** HIGH (end-to-end automation)

---

### Skill 6: `/quiz-route` (8 hours)
**Purpose:** Intelligent lead routing

**Actions:**
1. Receive quiz completion
2. Calculate score
3. Apply qualification tags
4. Route to appropriate offer
5. Update Global Control
6. Trigger nurture sequence

**Priority:** MEDIUM (depends on quiz system)

---

### Skill 7: `/offer-build` (10 hours)
**Purpose:** MintBird funnel assembly

**Actions:**
1. Choose offer based on tags
2. Assemble sales page
3. Configure upsells/downsells
4. Link to Course Sprout
5. Preview funnel
6. Request approval
7. Publish

**Priority:** MEDIUM (sales automation)

---

## Phase 5: Multi-Agent Architecture (1-2 weeks)

**Once orchestration skills work:**

### Task 5.1: Create Specialist Agents (8 hours)

**Agents to Create:**
1. **Titanium Coordinator** - Routes and decides
2. **Audience Agent** - Letterman only
3. **Acquisition Agent** - PopLinks + Quiz
4. **CRM Agent** - Global Control only
5. **Revenue Agent** - MintBird only
6. **Delivery Agent** - Course Sprout only
7. **Audit Agent** - Read-only all platforms

**Each Agent:**
- Separate workspace
- Separate credentials
- Specific skill access
- Clear permissions

---

### Task 5.2: Implement Event System (12 hours)

**Webhook Setup:**
- MintBird purchase events
- Course Sprout progress events
- Letterman engagement events
- Global Control tag changes

**Event Processing:**
- Receive event
- Validate and parse
- Route to appropriate agent
- Execute workflow
- Log result

---

### Task 5.3: Build Audit & Reporting (8 hours)

**Dashboards:**
- Campaign performance
- Enrollment rates
- Completion rates
- Revenue tracking
- Customer journey analytics

**Audit Logs:**
- All API calls
- All approvals
- All errors
- All retries

---

## Phase 6: Production Launch (1 week)

### Task 6.1: End-to-End Testing (16 hours)

**Test Complete Customer Journey:**
1. Create newsletter in Letterman
2. Reader clicks link
3. Visits PopLinks bridge page
4. Takes quiz
5. Gets qualified
6. Sees appropriate MintBird offer
7. Purchases
8. Gets enrolled in Course Sprout
9. Receives welcome email
10. Completes training
11. Receives congratulations
12. Gets next offer recommendation

**All steps must work flawlessly.**

---

### Task 6.2: Load Testing (8 hours)
- Test with 100 concurrent contacts
- Verify no duplicate enrollments
- Check rate limits respected
- Monitor error rates

---

### Task 6.3: Security Audit (8 hours)
- Verify no credentials in logs
- Check approval gates work
- Test consent enforcement
- Validate access controls

---

### Task 6.4: Documentation & Training (8 hours)
- Complete operator guide
- Create troubleshooting docs
- Document all workflows
- Record training videos

---

## Timeline Summary

| Phase | Duration | Prerequisites |
|-------|----------|---------------|
| **Phase 0: Clarification** | 30 mins | Mark answers 3 questions |
| **Phase 1: Verify Existing** | 2 hours | None |
| **Phase 2: Course Sprout** | 3 days (23 hrs) | API docs |
| **Phase 3: Quiz/Page Sprout** | 0-8 hours | Depends on answers |
| **Phase 4: Orchestration Skills** | 2-3 weeks (62 hrs) | All platforms ready |
| **Phase 5: Multi-Agent** | 1-2 weeks (28 hrs) | Skills working |
| **Phase 6: Production Launch** | 1 week (40 hrs) | Everything tested |

**Total:** 8-10 weeks (153-161 hours)

**If Course Sprout API available today:** Could start Phase 2 immediately  
**If quiz system clarified:** Could parallelize Phase 2 & 3

---

## Critical Path

**Must Do First:**
1. ✅ Answer Phase 0 clarification questions
2. ✅ Verify existing 4 platforms work (Phase 1)
3. ✅ Get Course Sprout API documentation
4. ✅ Complete Course Sprout integration (Phase 2)

**Can't Start Until:**
- Phase 4: Need all platforms ready
- Phase 5: Need orchestration skills working
- Phase 6: Need multi-agent system working

---

## Risk Mitigation

### Risk 1: Course Sprout API Not Available
**Impact:** Blocks entire Titanium Suite  
**Mitigation:** Prioritize getting API access  
**Alternative:** Build without Course Sprout (4 of 6 platforms)

### Risk 2: Quiz System Unavailable
**Impact:** Delays qualification automation  
**Mitigation:** Use simple form logic as interim  
**Alternative:** Manual qualification initially

### Risk 3: Integration Failures
**Impact:** Delays timeline  
**Mitigation:** Test each platform thoroughly in Phase 1  
**Alternative:** Build with working platforms first

### Risk 4: Rate Limits
**Impact:** Performance issues  
**Mitigation:** Batch operations, implement backoff  
**Alternative:** Request higher limits from vendors

---

## Success Criteria

**Phase 1 Success:**
- [ ] All 4 existing platforms verified working
- [ ] Connection tests pass
- [ ] Can perform basic operations

**Phase 2 Success:**
- [ ] Course Sprout skill marked COMPLETE
- [ ] All 10 completion tests pass
- [ ] Idempotent enrollment verified
- [ ] Product mappings working

**Phase 4 Success:**
- [ ] All 7 orchestration skills working
- [ ] Can execute complete customer journey
- [ ] Approvals and audit logs working

**Phase 6 Success:**
- [ ] End-to-end journey tested
- [ ] Zero critical errors
- [ ] Documentation complete
- [ ] Ready for real customers

---

## Next Action

**Mark, please confirm:**

1. **Page Sprout = PopLinks?** (YES/NO)
2. **Have Quizforma API access?** (YES/NO)
3. **Can you provide Course Sprout API docs?** (YES/NO)

**Once you answer these 3 questions, I'll:**
- Run Phase 1 verification tests
- Start Course Sprout integration
- Build first orchestration skill

**We can start TODAY with Phase 1 (2 hours) while waiting for Course Sprout API docs.**

---

*Priority Plan Created: September 22, 2026 15:00 UTC*
