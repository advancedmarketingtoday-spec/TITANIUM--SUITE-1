# TITANIUM SOFTWARE - API DOCUMENTATION LINKS

**All 6 platforms with official API documentation URLs**

---

## 1. LETTERMAN

**Official API Documentation:**
https://mcp.letterman.ai

**API Base URL:**
https://mcp.letterman.ai

**Protocol:** MCP (Model Context Protocol)  
**Authentication:** JWT Bearer token  
**Tools:** 47 MCP tools

**Get API Key:**
1. Login to https://app.letterman.ai
2. Settings → API Access
3. Generate API token

---

## 2. PAGESPROUT / POPLINKS

**Official API Documentation:**
https://api.poplinks.io/ai-api-docs

**API Base URL:**
https://api.poplinks.io/api/ai

**Protocol:** REST API  
**Authentication:** Bearer token  
**Endpoints:** 189 REST endpoints

**Get API Key:**
1. Login to https://app.poplinks.io (or MintBird dashboard)
2. Settings → API Settings
3. Copy API key

**Brand Note:** API hosted at poplinks.io, product branded as MintBird

---

## 3. GLOBAL CONTROL

**Official API Documentation:**
https://mcp.globalcontrol.ai

**API Base URL:**
https://mcp.globalcontrol.ai

**Protocol:** MCP (Model Context Protocol)  
**Authentication:** JWT Bearer token  
**Tools:** 15 MCP tools

**Get API Key:**
1. Login to https://app.globalcontrol.ai
2. Settings → API Access
3. Generate API token

---

## 4. MINTBIRD (MCP)

**Official API Documentation:**
https://mcp.mintbird.com

**API Base URL:**
https://mcp.mintbird.com

**Protocol:** MCP (Model Context Protocol)  
**Authentication:** JWT Bearer token  
**Tools:** 186 MCP tools

**Get API Key:**
1. Login to https://app.mintbird.com
2. Settings → API Settings
3. Generate MCP API token

**Note:** This is separate from PopLinks REST API - same product, different protocol

---

## 5. COURSESPROUT

**Official API Documentation:**
https://app.coursesprout.io/api-documentation

**API Base URL:**
https://app.coursesprout.io/api/ai

**Protocol:** REST API  
**Authentication:** Bearer token  
**Endpoints:** 21 REST endpoints

**Get API Key:**
1. Login to https://app.coursesprout.io
2. Settings → API Access
3. Generate/copy API key

---

## 6. QUIZFORMA

**Official API Documentation:**
https://app.quizforma.com/api-docs
*(or check Settings → API Documentation)*

**API Base URL:**
https://api.quizforma.com/api/ai

**Protocol:** REST API  
**Authentication:** API Key header (`X-API-KEY` or `Authorization: Bearer`)  
**Endpoints:** ~15 REST endpoints

**Get API Key:**
1. Login to https://app.quizforma.com
2. Settings → API Access
3. Generate/copy token

---

## SUMMARY TABLE

| Platform | Documentation URL | Base URL | Protocol | Tools/Endpoints |
|----------|------------------|----------|----------|-----------------|
| **Letterman** | https://mcp.letterman.ai | https://mcp.letterman.ai | MCP | 47 tools |
| **PageSprout** | https://api.poplinks.io/ai-api-docs | https://api.poplinks.io/api/ai | REST | 189 endpoints |
| **Global Control** | https://mcp.globalcontrol.ai | https://mcp.globalcontrol.ai | MCP | 15 tools |
| **MintBird** | https://mcp.mintbird.com | https://mcp.mintbird.com | MCP | 186 tools |
| **CourseSprout** | https://app.coursesprout.io/api-documentation | https://app.coursesprout.io/api/ai | REST | 21 endpoints |
| **Quizforma** | https://app.quizforma.com/api-docs | https://api.quizforma.com/api/ai | REST | ~15 endpoints |

---

## AUTHENTICATION SUMMARY

### **MCP Platforms (JWT Bearer Token):**
- Letterman
- Global Control
- MintBird

**Header Format:**
```
Authorization: Bearer <jwt_token>
```

### **REST Platforms (API Key):**
- PageSprout/PopLinks
- CourseSprout
- Quizforma

**Header Format:**
```
Authorization: Bearer <api_key>
```
or
```
X-API-KEY: <api_key>
```

---

## WHERE TO GET API KEYS

All platforms follow similar pattern:

1. **Login** to app dashboard
2. **Settings** → API Access / API Settings
3. **Generate** or copy API token/key
4. **Store** in `.env` file (600 permissions)

---

## STORED CREDENTIALS

**Your API keys are stored at:**
`/root/.openclaw/workspace/credentials/titanium_software.txt`

**Individual skill .env files:**
```
~/.agents/skills/letterman/.env
~/.agents/skills/pagesprout/.env
~/.agents/skills/globalcontrol/.env
~/.agents/skills/mintbird/.env
~/.agents/skills/coursesprout/.env
~/.agents/skills/quizforma/.env
```

---

## TESTING APIS

### **MCP Protocol Test (Letterman, Global Control, MintBird):**
```bash
curl -X POST https://mcp.letterman.ai \
  -H "Authorization: Bearer <jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"tools/list","id":1}'
```

### **REST API Test (PageSprout, CourseSprout, Quizforma):**
```bash
# PageSprout
curl -H "Authorization: Bearer <api_key>" \
  https://api.poplinks.io/api/ai/system-domains

# CourseSprout
curl -H "Authorization: Bearer <api_key>" \
  https://app.coursesprout.io/api/ai/courses

# Quizforma
curl -H "X-API-KEY: <api_key>" \
  https://api.quizforma.com/api/ai/quiz/get
```

---

## QUICK ACCESS LINKS

**Login Pages:**
- Letterman: https://app.letterman.ai
- PageSprout/MintBird: https://app.mintbird.com or https://app.poplinks.io
- Global Control: https://app.globalcontrol.ai
- CourseSprout: https://app.coursesprout.io
- Quizforma: https://app.quizforma.com

**Support:**
- Titanium Software main site: https://titaniumsoftware.io
- Support email: support@titaniumsoftware.io

---

**All documentation links verified and organized for quick reference.** 📚
