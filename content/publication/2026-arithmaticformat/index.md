---
title: "Are Arithmetic Heuristic Neurons Form-Invariant? A Mechanistic Analysis of Symbols, Text, and Code in LLMs"

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: "arXiv preprint arXiv:2607.16693, July 2026" # This appears in citation styled cards
venue: "Preprint"

authors:
- Sharath Naganna
- Tanvir Ahmed Sijan
- Uddipta Kalita

equal_contributors:
- 0
- 1

publication_types:
- "3"

featured: false

date: "2026-07-18T00:00:00Z"

doi: ""
doi_text: ""

url_preprint: "https://arxiv.org/abs/2607.16693"
url_preprint_text: "arXiv"
external_link: "https://github.com/SharathHN/format-invariant-arithmetic"
external_link_text: "Code"
url_pdf: "https://arxiv.org/pdf/2607.16693"
url_pdf_text: "PDF"
url_video: ""
video_preview: false
video_text: ""
video_disabled: false
video_disabled_text: ""

summary: 'Large language models often succeed on one formulation of a problem while failing on an equivalent formulation. Whether these failures arise from distinct internal circuits or different activation states of a shared circuit remains unknown. Recent mechanistic interpretability studies suggest that arithmetic in LLMs emerges from a "bag of heuristics," encoded by a sparse set of MLP neurons that represent distinct arithmetic strategies. We investigate whether arithmetic heuristic neurons are form-invariant across symbolic arithmetic, natural language word problems, and Python code in three Llama-3 models. In each format, we identify arithmetic heuristic neurons using a two-stage pipeline combining attribution patching and activation patching. A compact set of neurons is shared across all three formats, and targeted interventions show this shared circuit is both necessary and sufficient for late-layer arithmetic computation. Transferring the shared neurons'' activations from a successful execution in one format to a failed execution in another recovers most incorrect predictions, exceeding 97% for addition and subtraction, indicating that cross-format failures arise from activation states rather than distinct circuits. Moreover, shared neurons consistently belong to the same heuristic families across formats, demonstrating that arithmetic computation in LLMs is largely form-invariant at the neuron level'
---
