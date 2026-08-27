# RAG 原理课程 · rag-chatbot-fork

交互式 HTML 课程：以 `rag-chatbot-fork`（Cloudflare Workers 中文 RAG 聊天机器人）为案例，学习 RAG 原理。

## 内容

- `index.html` — 课程主页（入口）
- `lessons/` — 3 节交互课程（含测验）
  - `0001-rag-pipeline-overview.html` — RAG 全流程概览
  - `0002-ingestion-pipeline.html` — 摄入流水线
  - `0003-retrieval-generation.html` — 查询流水线
- `reference/001-rag-glossary.html` — RAG 速查表
- `assets/` — 共享样式与侧边栏组件
- `MISSION.md` / `RESOURCES.md` / `NOTES.md` / `learning-records/` — teach 技能工作区文件

## 部署（Cloudflare Pages）

1. 推送到 GitHub 仓库：
   ```bash
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git branch -M main
   git push -u origin main
   ```
2. Cloudflare 控制台 → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. 选择刚推送的仓库
4. 构建设置：
   - **Framework preset**: `None`
   - **Build command**: （留空）
   - **Build output directory**: `/`（根目录，因为 index.html 在根目录）
5. 点 **Save and Deploy**，几秒后拿到 `https://<project>.pages.dev` 链接

纯静态站点，无构建步骤，仓库内容即站点内容。
