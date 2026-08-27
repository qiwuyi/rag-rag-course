# RAG 学习资源

## Knowledge

- [Cloudflare Vectorize 文档 — Get started](https://developers.cloudflare.com/vectorize/get-started/)
  Vectorize 是该项目用的向量数据库（`VECTORIZE` 绑定）。官方文档讲清了 index 维度、query/upsert API、metadata filter。用这个项目时必读。
- [Cloudflare Workers — Runtime API](https://developers.cloudflare.com/workers/runtime-apis/)
  这个项目运行在 Worker 上。`fetch` handler、`Env` bindings、`ExecutionCtx` 都来自这里。
- [Cloudflare Vectorize — metadata filtering](https://developers.cloudflare.com/vectorize/reference/metadata-filtering/)
  `retriever.ts` 里 `filter: { metadata: { language } }` 的官方依据。讲清楚什么时候应该用 metadata filter 而不是事后过滤。
- [Gemini API — text-embedding-004](https://ai.google.dev/gemini-api/docs/models#text-embedding)
  `embeddings.ts` 里 gemini 分支调的模型。注意它不支持批量、要按条调用，这正是 ingest 脚本里 `EMBEDDING_BATCH_SIZE = 1` 的原因。
- [阿里云百炼 DashScope — 文本向量化](https://help.aliyun.com/zh/model-studio/developer-reference/text-embedding)
  `embeddings.ts` 里 qwen 分支（`text-embedding-v2/v4`）的文档。Qwen 支持批量，这是 ingest 脚本并发优化的关键差异。
- [Hugging Face — sentence-transformers embeddings 科普](https://huggingface.co/blog/mteb)
  了解"embedding 是什么、向量空间里相似度意味着什么"的好起点，与项目里的 toy data 例子配套理解。
- [What Is Retrieval-Augmented Generation? (NVIDIA Blog)](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)
  RAG 概念的权威入门，把"为什么需要 RAG、检索怎么增强生成"讲得很清楚。

## Wisdom (Communities)

- [Cloudflare Developers Discord](https://discord.com/invite/cloudflaredev)
  Worker + Vectorize 的问题在这类社区问能得到一手答复。
- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/)
  讨论 embedding 模型选择、中文 embedding、RAG 实践的活跃社区（英文为主）。
- [Hugging Face Forums — RAG 讨论区](https://discuss.huggingface.co/)
  中文 embedding 模型评测（如 bge、gte）和 chunking 策略的讨论常出现。

## Gaps

- 缺少一篇专门讲"中文文本如何切分 chunk"的高质量资源（这个项目用 `。！？` 等标点做边界，值得单独找资料）。当前以项目源码本身为准。
