# RAG 瀛︿範璧勬簮

## Knowledge

- [Cloudflare Vectorize 鏂囨。 鈥?Get started](https://developers.cloudflare.com/vectorize/get-started/)
  Vectorize 鏄椤圭洰鐢ㄧ殑鍚戦噺鏁版嵁搴擄紙`VECTORIZE` 缁戝畾锛夈€傚畼鏂规枃妗ｈ娓呬簡 index 缁村害銆乹uery/upsert API銆乵etadata filter銆傜敤杩欎釜椤圭洰鏃跺繀璇汇€?- [Cloudflare Workers 鈥?Runtime API](https://developers.cloudflare.com/workers/runtime-apis/)
  杩欎釜椤圭洰杩愯鍦?Worker 涓娿€俙fetch` handler銆乣Env` bindings銆乣ExecutionCtx` 閮芥潵鑷繖閲屻€?- [Cloudflare Vectorize 鈥?metadata filtering](https://developers.cloudflare.com/vectorize/reference/metadata-filtering/)
  `retriever.ts` 閲?`filter: { metadata: { language } }` 鐨勫畼鏂逛緷鎹€傝娓呮浠€涔堟椂鍊欏簲璇ョ敤 metadata filter 鑰屼笉鏄簨鍚庤繃婊ゃ€?- [Gemini API 鈥?text-embedding-004](https://ai.google.dev/gemini-api/docs/models#text-embedding)
  `embeddings.ts` 閲?gemini 鍒嗘敮璋冪殑妯″瀷銆傛敞鎰忓畠涓嶆敮鎸佹壒閲忋€佽鎸夋潯璋冪敤锛岃繖姝ｆ槸 ingest 鑴氭湰閲?`EMBEDDING_BATCH_SIZE = 1` 鐨勫師鍥犮€?- [闃块噷浜戠櫨鐐?DashScope 鈥?鏂囨湰鍚戦噺鍖朷(https://help.aliyun.com/zh/model-studio/developer-reference/text-embedding)
  `embeddings.ts` 閲?qwen 鍒嗘敮锛坄text-embedding-v2/v4`锛夌殑鏂囨。銆俀wen 鏀寔鎵归噺锛岃繖鏄?ingest 鑴氭湰骞跺彂浼樺寲鐨勫叧閿樊寮傘€?- [Hugging Face 鈥?sentence-transformers embeddings 绉戞櫘](https://huggingface.co/blog/mteb)
  浜嗚В"embedding 鏄粈涔堛€佸悜閲忕┖闂撮噷鐩镐技搴︽剰鍛崇潃浠€涔?鐨勫ソ璧风偣锛屼笌椤圭洰閲岀殑 toy data 渚嬪瓙閰嶅鐞嗚В銆?- [What Is Retrieval-Augmented Generation? (NVIDIA Blog)](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)
  RAG 姒傚康鐨勬潈濞佸叆闂紝鎶?涓轰粈涔堥渶瑕?RAG銆佹绱㈡€庝箞澧炲己鐢熸垚"璁插緱寰堟竻妤氥€?
## Wisdom (Communities)

- [Cloudflare Developers Discord](https://discord.com/invite/cloudflaredev)
  Worker + Vectorize 鐨勯棶棰樺湪杩欑被绀惧尯闂兘寰楀埌涓€鎵嬬瓟澶嶃€?- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/)
  璁ㄨ embedding 妯″瀷閫夋嫨銆佷腑鏂?embedding銆丷AG 瀹炶返鐨勬椿璺冪ぞ鍖猴紙鑻辨枃涓轰富锛夈€?- [Hugging Face Forums 鈥?RAG 璁ㄨ鍖篯(https://discuss.huggingface.co/)
  涓枃 embedding 妯″瀷璇勬祴锛堝 bge銆乬te锛夊拰 chunking 绛栫暐鐨勮璁哄父鍑虹幇銆?
## Gaps

- 缂哄皯涓€绡囦笓闂ㄨ"涓枃鏂囨湰濡備綍鍒囧垎 chunk"鐨勯珮璐ㄩ噺璧勬簮锛堣繖涓」鐩敤 `銆傦紒锛焋 绛夋爣鐐瑰仛杈圭晫锛屽€煎緱鍗曠嫭鎵捐祫鏂欙級銆傚綋鍓嶄互椤圭洰婧愮爜鏈韩涓哄噯銆?