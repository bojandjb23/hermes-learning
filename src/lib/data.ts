export const agentMemory = {
  title: "Agent Architecture & Setup",
  content: `Hermes (GLM 5.1 via Nous $10/mo) = coordinator/boss in Telegram.
Kimi K2.6 (GoPlan $10/mo) = main coding workhorse.
Codex (GPT-5.3-codex xhigh, local Mac Mini) = QA reviewer — reviews plans BEFORE execution, reviews code AFTER each stage.
Claude Code (Opus 4.7 with 1M context, local Mac Mini) = strategic planning advisor / deep coding fallback.
Mac Mini = dedicated Hermes machine (LaunchAgent, survives terminal close). MacBook Pro = personal/work.

Setup checklist:
✅ GitHub (bojandjb23)
✅ Git identity (bojandjb / bojan@blynked.io)
✅ GoPlan API key
✅ Google Workspace OAuth (hermes-raditz-v1)
🔲 MacBook Pro org
🔲 Apple Notes integration

Cost-conscious. Nous upgraded to $20/mo.`,
};

export const userProfile = {
  title: "User Profile (Bojan)",
  content: `Preferences:
• Avoid markdown tables in Telegram — use simple lists
• Has Anthropic subscription (Claude Code Opus) and Codex (OpenAI)
• Multi-agent architecture: Hermes coord, Claude deep coding, Codex QA
• Uses macOS (Monterey on Mac Mini)
• Telegram bot running via launchd background service
• Building DPtravel- (brother's travel site: Belgrade-Montenegro luxury transfers)
• Likes modern designs (Vercel/Claude.ai grids, animated chat streaming)
• Garmin Instinct 2 Tactical for Airsoft & bike rides`,
};

export const skills = [
  { name: "multi-agent-coordination", category: "autonomous-ai-agents", description: "Orchestrate Hermes + Claude + Codex team" },
  { name: "claude-code", category: "autonomous-ai-agents", description: "Delegate coding to Claude Code CLI" },
  { name: "codex", category: "autonomous-ai-agents", description: "Delegate coding to OpenAI Codex CLI" },
  { name: "hermes-agent", category: "autonomous-ai-agents", description: "Configure and extend Hermes Agent" },
  { name: "github-pr-workflow", category: "github", description: "Full PR lifecycle: branch, commit, CI, merge" },
  { name: "github-repo-management", category: "github", description: "Clone, create, fork, manage repos" },
  { name: "popular-web-designs", category: "creative", description: "54 real design systems (Stripe, Linear, Vercel)" },
  { name: "writing-plans", category: "software-development", description: "Write bite-sized implementation plans" },
  { name: "apple-notes", category: "apple", description: "Manage Apple Notes via CLI" },
  { name: "google-workspace", category: "productivity", description: "Gmail, Calendar, Drive, Sheets integration" },
  { name: "modal-serverless-gpu", category: "mlops", description: "Serverless GPU for ML workloads" },
  { name: "llama-cpp", category: "mlops", description: "Local GGUF inference" },
  { name: "stable-diffusion-image-generation", category: "mlops", description: "Text-to-image with Stable Diffusion" },
  { name: "xitter", category: "social-media", description: "X/Twitter terminal client" },
  { name: "webhook-subscriptions", category: "devops", description: "Event-driven agent runs" },
  { name: "linear", category: "productivity", description: "Manage Linear issues and projects" },
  { name: "notion", category: "productivity", description: "Notion API for pages and databases" },
  { name: "arxiv", category: "research", description: "Search and retrieve academic papers" },
  { name: "huggingface-hub", category: "mlops", description: "Search, download, upload HF models" },
  { name: "mongodb", category: "infrastructure", description: "MongoDB developer docs style" },
];

export const sessions = [
  { id: "20260422_174220", title: "CLI Agents Setup", summary: "Loaded claude-code, codex, hermes-agent skills. Verified local CLI auth." },
  { id: "20260422_162314", title: "Hermes Updates & Doctor", summary: "Ran hermes doctor, fixed npm audits, installed ripgrep, updated submodules." },
  { id: "20260424_155539", title: "LinkedIn Manager", summary: "Proposed AI social media manager workflow for LinkedIn content automation." },
  { id: "20260422_082456", title: "DPtravel Deploy + Multi-Agent", summary: "Deployed DPtravel to Vercel, initiated multi-agent workflow for chat animation feature." },
  { id: "20260422_190557", title: "DPtravel PR Review", summary: "Reviewed PRs, monitored Vercel deployments, coordinated Claude + Codex for code review." },
  { id: "20260429_124409", title: "Hermes UI Dashboards", summary: "Discussed Hermes UI dashboards and Warp open source terminal." },
  { id: "20260430_200859", title: "Tool Comparison", summary: "Compared differences between tools/workflows." },
];

export const multiAgent = {
  title: "Multi-Agent Team",
  content: `Workflow 1 (Feature Implementation):
1. User requests feature
2. Hermes (GLM-5.1) plans and breaks into tasks
3. Codex reviews plan — is it perfect?
4. If issues found → Hermes revises → Codex re-reviews
5. Once approved → delegate coding to Kimi K2.6
6. Kimi finishes → Codex reviews output
7. If issues → Codex writes improvement plan → Kimi re-works
8. Repeat until clean → report back

Workflow 2 (Complex Task):
Same as Workflow 1, but if beyond Kimi → delegate to Claude Code (Opus)

Workflow 3 (Strategic Decision):
Hermes researches + forms plan → asks Claude (Opus max) to critique → synthesizes both → presents to user`,
};

export const tools = [
  "terminal", "browser_navigate", "browser_click", "browser_type", "browser_snapshot",
  "web_search", "web_extract", "execute_code", "delegate_task", "memory",
  "session_search", "skills_list", "skill_view", "read_file", "write_file",
  "patch", "search_files", "process", "cronjob", "send_message",
  "text_to_speech", "image_generate", "vision_analyze",
];

export const quizzes = [
  {
    q: "What model powers the Hermes coordinator?",
    options: ["Claude Opus", "GPT-4", "GLM 5.1 (via Nous)", "Kimi K2.6"],
    correct: 2,
    explain: "Hermes uses GLM 5.1 via Nous Portal ($20/mo) for coordination.",
  },
  {
    q: "Which agent is the QA reviewer?",
    options: ["Claude Code", "Codex", "Kimi K2.6", "Hermes"],
    correct: 1,
    explain: "Codex (GPT-5.3-codex) reviews plans and code output.",
  },
  {
    q: "What is the primary coding workhorse?",
    options: ["Claude Code", "Codex", "Kimi K2.6", "GLM 5.1"],
    correct: 2,
    explain: "Kimi K2.6 via OpenCode GoPlan handles most implementation.",
  },
  {
    q: "Which machine runs the Hermes agent as a background service?",
    options: ["MacBook Pro", "Mac Mini", "Vercel", "AWS"],
    correct: 1,
    explain: "Mac Mini (Monterey) runs Hermes via LaunchAgent.",
  },
  {
    q: "What is Bojan's brother's website?",
    options: ["Blynked", "DPtravel", "Noticehub", "Envative"],
    correct: 1,
    explain: "DPtravel is the Belgrade-Montenegro luxury transfer site.",
  },
];
