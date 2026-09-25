# TITANIUM SUITE

**Mark's Custom OpenClaw Skill Collection**

*Created: September 22, 2026*  
*Framework: OpenClaw Workshops 1-4 Principles*

## What Is The Titanium Suite?

The **Titanium Suite** is Mark's production-ready collection of OpenClaw skills designed for:
- Corona Shoutouts newsletter automation
- Local SEO client management
- Content pipeline optimization
- Business automation workflows

Built following Workshop 2-4 safety principles, tested patterns, and proven architectures.

## Suite Philosophy

### Core Principles
1. **Production-Grade Only** - No shortcuts, full safety layers
2. **Workshop-Compliant** - Follows Workshops 2-4 frameworks
3. **Client-Focused** - Solves real business problems
4. **Maintainable** - Clear structure, documentation, rollback procedures

### Quality Standards
- ✅ All skills score 85+ on Workshop 2 quality framework
- ✅ Complete YAML frontmatter (AgentSkills spec compliant)
- ✅ Comprehensive error handling
- ✅ Approval gates for consequential actions
- ✅ README.md with installation and safety notes
- ✅ Testing matrix completed before deployment

## Planned Skills

### Phase 1: Corona Shoutouts Foundation

#### 1. Corona Shoutouts Story Intake ⬜
**Type:** Logic Skill  
**Priority:** High  
**Status:** Planned

**Purpose:**
Structured intake and verification workflow for Corona, CA community news stories.

**Features:**
- Source URL or contact required
- Category assignment (news, events, restaurants, schools, sports, business)
- Verification status tracking
- Approval workflow (prevents publishing unverified content)
- Search by date/category/status
- Duplicate detection

**Commands:**
- `/story-submit` - Submit new story with source
- `/story-verify` - Mark story as verified
- `/story-approve` - Approve for publication
- `/story-list` - List pending stories
- `/story-search` - Search by criteria

**Framework:**
- Workshop 2: 12-element process map, four-layer architecture
- Guardrails: Source required, verification before approval, no duplicates
- Storage: `~/.openclaw-corona/stories.json`

**Estimated Build Time:** 3-4 hours (using Skill Creator wizard)

---

#### 2. Letterman Publishing Integration ⬜
**Type:** Software Skill (API Integration)  
**Priority:** High  
**Status:** Planned

**Purpose:**
Safe, approved publishing to Corona Shoutouts newsletter via Letterman API.

**Features:**
- Read-only mode: List drafted articles
- Reversible writes: Create draft articles (requires approval)
- Consequential actions: Publish live (requires explicit YES + exact content review)
- Read-back verification after all writes
- Error handling for auth failures, rate limits, network issues

**API Operations:**
- List articles (filtered by status: draft/published)
- Get article by ID
- Create draft article
- Update article
- Publish article (approval gate)
- Unpublish article (approval gate)

**Framework:**
- Workshop 3: 10-step API documentation workflow
- Three-tier approval model (read-only, reversible, consequential)
- Credentials: `LETTERMAN_API_KEY` via SecretRef
- Template: WordPress REST API skill (96/100 reference)

**Estimated Build Time:** 4-6 hours (using `/skill-from-url` + safety review)

---

#### 3. Corona Content Pipeline Coordinator ⬜
**Type:** Composite Skill (Multi-Agent)  
**Priority:** Medium  
**Status:** Planned (requires Skills 1-2 complete)

**Purpose:**
Orchestrate content research → drafting → approval → publishing workflow.

**Architecture:**
```
Content Research Agent (no publish permission)
    ↓
Drafting Agent (workspace-only)
    ↓
Approval Queue (Mark reviews exact content + destination)
    ↓
Publishing Agent (Letterman API with approval gates)
```

**Features:**
- Separate workspaces per agent
- Explicit handoff contracts
- Approval gates between stages
- Rollback procedures at each stage
- Audit trail (what was published when)

**Framework:**
- Workshop 4: Multi-agent coordinator pattern
- Content approval pipeline (9 states: discovered → licensed → drafted → review-needed → approved → scheduled → published → failed → withdrawn)
- Approval binds to exact content version + destination

**Estimated Build Time:** 6-8 hours (after agents 1-2 proven)

---

### Phase 2: Local SEO Client Management

#### 4. Local SEO Client Bank ⬜
**Type:** Logic Skill (Strict Isolation)  
**Priority:** High  
**Status:** Planned

**Purpose:**
Manage client information with strict separation between clients.

**Features:**
- Client profiles (business name, services, locations, contacts)
- Keyword tracking per client
- Content calendar per client
- Evidence and verification notes
- Access controls (can only work with one client at a time)
- Retention policy enforcement

**Storage:**
```
~/.openclaw-seo-clients/
├── client-a/
│   ├── profile.json
│   ├── keywords.json
│   ├── content-calendar.json
│   └── notes.md
├── client-b/
│   ├── ...
```

**Guardrails:**
- Never mix client data
- Explicit client selection required
- Clear "working with [Client Name]" indicator
- Separate credentials per client site
- Client data never in shared memory

**Framework:**
- Workshop 4: Client-bank pattern with strict separation
- Workshop 2: Organization and retrieval layers

**Estimated Build Time:** 4-5 hours

---

#### 5. WordPress Client Publishing ⬜
**Type:** Software Skill (API Integration)  
**Priority:** Medium  
**Status:** Planned (requires Client Bank complete)

**Purpose:**
Programmatic content updates to client WordPress sites with client isolation.

**Features:**
- Per-client credentials (`WP_API_URL_CLIENT_A`, etc.)
- Create draft posts (default, safe)
- Publish posts (requires approval + client confirmation)
- Read-back verification
- Audit log per client

**Configuration:**
```
# Client A
WP_API_URL_CLIENT_A=https://clienta.com/wp-json
WP_USERNAME_CLIENT_A=automation
WP_APP_PASSWORD_CLIENT_A=xxxx

# Client B
WP_API_URL_CLIENT_B=https://clientb.com/wp-json
WP_USERNAME_CLIENT_B=automation
WP_APP_PASSWORD_CLIENT_B=xxxx
```

**Framework:**
- Based on WordPress REST API skill (96/100 template)
- Workshop 3: API safety, three-tier approvals
- Workshop 4: Client isolation

**Estimated Build Time:** 3-4 hours (clone WordPress skill + add client switching)

---

### Phase 3: Content & Marketing Automation

#### 6. Social Media Publisher ⬜
**Type:** Software Skill (API Integration)  
**Priority:** Low  
**Status:** Future

**Purpose:**
Distribute Corona Shoutouts content to social platforms (approval required).

**Platforms:**
- PostStream API (if available)
- Twitter/X API
- Facebook Pages API
- Instagram (via official API)

**Features:**
- Draft social posts
- Preview before publishing
- Approval gate (exact post + platform)
- Schedule posts
- Track engagement (read-only)

**Framework:**
- Workshop 3: API integration with approval gates
- Workshop 4: Content approval pipeline

**Estimated Build Time:** 6-8 hours per platform

---

#### 7. Affiliate Launch Finder (Safe Version) ⬜
**Type:** Composite Skill  
**Priority:** Low  
**Status:** Future (requires Launch Finder review fixes applied)

**Purpose:**
Find upcoming affiliate launches with SAFE automation (preview before deploy).

**Key Differences from Workshop Example:**
- ✅ Shows preview before deployment
- ✅ Requires YES to deploy to production
- ✅ Documents credentials (VERCEL_TOKEN, etc.)
- ✅ Comprehensive error handling
- ✅ Rate-limited web scraping
- ✅ Dry-run mode for testing

**Framework:**
- Workshop 3: API safety, approval gates
- Workshop 4: Preview → approve → production
- Fixed version of workshop example

**Estimated Build Time:** 8-10 hours (applying workshop corrections)

---

## Suite Development Roadmap

### Immediate (Next 2 Weeks)
1. ✅ Complete Workshop knowledge bank (DONE - Sept 22)
2. ⬜ Install Skill Creator tools
3. ⬜ Build Corona Shoutouts Story Intake (Skill #1)
4. ⬜ Build Letterman Publishing Integration (Skill #2)

### Short-Term (Next Month)
5. ⬜ Test Story Intake + Letterman integration end-to-end
6. ⬜ Build Local SEO Client Bank (Skill #4)
7. ⬜ Build Content Pipeline Coordinator (Skill #3)

### Medium-Term (Next Quarter)
8. ⬜ Build WordPress Client Publishing (Skill #5)
9. ⬜ Expand to social media publishing (Skill #6)
10. ⬜ Consider affiliate automation (Skill #7)

## Quality Assurance Process

Every Titanium Suite skill must pass:

### Phase 1: Design Review
- ✅ 12-element process map complete (Workshop 2)
- ✅ Four-layer architecture defined (build, safety, organization, retrieval)
- ✅ Approval gates identified
- ✅ Error scenarios documented

### Phase 2: Build Review
- ✅ YAML frontmatter complete (slug, author, source, version)
- ✅ README.md created
- ✅ Guardrails explicit (not "add guardrails")
- ✅ Failure handling for every scenario
- ✅ No hardcoded secrets

### Phase 3: Testing
- ✅ Happy path test
- ✅ Missing input test
- ✅ Invalid input test
- ✅ Duplicate handling test
- ✅ Failure recovery test
- ✅ Approval gate test

### Phase 4: Security Audit
- ✅ No eval/exec with user input
- ✅ No shell injection vectors
- ✅ Secrets in SecretRef only
- ✅ Rate limiting where applicable
- ✅ Bounded retries and timeouts

### Phase 5: Production Deploy
- ✅ Dry-run test successful
- ✅ Documentation complete
- ✅ Rollback procedure documented
- ✅ Monitoring plan defined

**Minimum score: 85/100 on Workshop 2 quality framework**

## Suite Principles (Detailed)

### 1. Safety First
- **Preview before production** - Always show what will happen
- **Approval gates** - Consequential actions require explicit YES
- **Graceful failure** - Never crash, always provide recovery path
- **Bounded operations** - Timeouts, retry limits, rate limiting

### 2. Client Isolation
- **Separate workspaces** - Each client's data isolated
- **Separate credentials** - Per-client API keys
- **Never mix** - Explicit checks prevent cross-contamination
- **Audit trails** - Who did what when for which client

### 3. Progressive Disclosure
- **Main skill concise** - SKILL.md under 500 lines
- **References separate** - Detailed docs in references/
- **Scripts executable** - Can run without loading to context
- **Assets for output** - Templates, images not in context

### 4. Maintainability
- **Clear versioning** - Semantic versioning (1.0.0, 1.1.0, etc.)
- **Change logs** - What changed and why
- **Rollback docs** - How to undo if something breaks
- **Test coverage** - All scenarios documented and tested

### 5. Documentation
- **README.md** - Installation, configuration, usage, safety
- **Example workflows** - Show typical use cases
- **Troubleshooting** - Common issues and fixes
- **API references** - Links to official docs with dates

## Success Metrics

### Skill Quality
- **Target:** All skills 85+ on Workshop 2 scorecard
- **Current:** 0 skills built (knowledge phase complete)
- **Tracking:** Quality score documented in each skill README

### Production Readiness
- **Target:** Zero critical safety issues
- **Criteria:** Passes all 5 QA phases
- **Tracking:** Checklist in each skill development

### Business Impact
- **Corona Shoutouts:** Reduced manual posting time
- **Local SEO:** Scalable client content management
- **Content Quality:** Consistent verification workflow

## Current Status

**Phase:** Knowledge Foundation Complete ✅  
**Next:** Skill Creation Phase (Starting Soon)

**Knowledge Assets:**
- ✅ Workshop 1-4 complete (140,000+ words)
- ✅ Skill Creator tools documented
- ✅ WordPress skill as API template (96/100)
- ✅ Safety frameworks internalized
- ✅ Action plans ready

**Ready to Build:**
- Skill #1: Corona Shoutouts Story Intake
- Skill #2: Letterman Publishing Integration

**Tools Available:**
- Godfather Skill Creator (12-phase wizard)
- Official Skill Creator (spec validation)
- Workshop knowledge bank (always-on reference)

---

## Contact & Support

**Owner:** Mark Eno  
**Started:** September 22, 2026  
**Framework:** OpenClaw Workshops 1-4

**Documentation Location:**  
`/root/.openclaw/workspace/memory-banks/openclaw-workshops/`

**Titanium Suite Location:**  
`/root/.openclaw/workspace/TITANIUM-SUITE.md` (this file)

---

*The Titanium Suite represents production-ready skill development following proven OpenClaw Workshop principles. Every skill is built to last, tested thoroughly, and documented completely.*

**Build once. Build right. Build with titanium strength.** 💎
