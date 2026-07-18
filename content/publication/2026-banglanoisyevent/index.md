---
title: "Beyond Clean Text: Evaluating Encoder and Decoder Robustness for Bangla Event Detection in Noisy Text"

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: "arXiv preprint arXiv:2606.30914, June 2026" # This appears in citation styled cards
venue: "Preprint"

authors:
- Tanvir Ahmed Sijan
- S. M Golam Rifat
- Nayeemul Islam
- Md. Musfique Anwar

publication_types:
- "3"

featured: false

date: "2026-06-29T00:00:00"

doi: ""
doi_text: ""

url_preprint: "https://arxiv.org/abs/2606.30914"
url_preprint_text: "arXiv"
external_link: "https://github.com/sijantanvir/Bangla-Noisy-Event-Eval"
external_link_text: "Code" # Code
url_pdf: "https://arxiv.org/pdf/2606.30914.pdf"
url_pdf_text: "PDF" # PDF
url_video: ""
video_preview: false
video_text: "Video"
video_disabled: true
video_disabled_text: ""



summary: "Event detection (ED) systems are typically evaluated on clean, curated text, leaving their robustness to real-world noise largely unexplored, particularly for low-resource languages such as Bangla. We introduce a generalized Bangla news event ontology and a benchmark comprising 9,979 annotated sentences across 40 event subtypes, spanning clean news text, real-world Automatic Speech Recognition (ASR) transcripts, and orthographically corrupted text. We systematically evaluate fine-tuned encoder-only models (BanglaBERT and XLM-R) alongside instruction-tuned decoder-only large language models (Llama 3 and Gemma 3). Our results reveal a clear architectural trade-off: encoder models achieve higher performance on clean text but degrade substantially under noise, whereas decoder-only LLMs are markedly more robust, particularly when event triggers are corrupted. We further show that embedding annotation guidelines during instruction tuning establishes a higher performance baseline on noisy text but yields inconsistent reductions in performance degradation across noisy conditions. Finally, model scaling consistently improves the robustness of decoder-only LLMs, while combined training on clean and noisy data serves as an effective regularization strategy that disproportionately benefits encoder architectures, significantly narrowing the robustness gap."

# tags: ["Event Detection", "LLM", "PLM", "Evaluation"]
---
