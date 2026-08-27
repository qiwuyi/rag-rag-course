# Mission: RAG 原理 —— 以 rag-chatbot-fork 为案例

## Why
用户想真正理解 RAG（检索增强生成）的原理，而不是停留在"听说过概念"的层面。他已经会 JS/TS，也了解 RAG / 向量数据库的基本概念（embedding、向量检索），现在要借助一个**真实、可运行的实现**（本工作区克隆的 `rag-chatbot-fork`，一个 Cloudflare Workers 上的中文 RAG 聊天机器人）把概念和代码一一对应起来。学完之后，他应该能看懂任意一个 RAG 项目的结构，并能动手修改这个项目。

## Success looks like
- 能不看资料，从头到尾讲出这个项目的两条流水线：**摄入（ingestion）** 和 **查询（query）**，每步对应的代码文件、数据结构、为什么这样设计
- 能解释 `chunk.ts` 的中文友好切分逻辑、`retriever.ts` 的语言过滤与回退、`prompt.ts` 的提示组装
- 能答对每节课末尾的 5 道测验（中等难度，需要真正理解，不是靠猜）
- 能自己说清楚：如果要把知识库换成别的主题/语言，需要改哪几个文件

## Constraints
- 学习节奏自定，课程为单文件 HTML，短小精悍，一次只讲一个点
- 讲解用中文，代码和术语保留英文
- 不要求在本机部署 Cloudflare Worker（无账号/密钥），重点是读代码理解原理

## Out of scope
- Cloudflare Workers / Vectorize 的部署运维细节（wrangler 命令、计费、索引配置）
- 前端 widget.js 的 UI 细节（拖拽、深色模式、移动端适配）
- 其他 RAG 框架（LangChain、LlamaIndex）的对比（可留作后续）
- 微调 / 精调 embedding 模型
