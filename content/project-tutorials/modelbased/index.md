---
title: "Sample Project 2: Model Prediction Playground"
summary: "Internal sample project with markdown equations and code blocks for rendering checks."
tags:
- Statistics
- Demo
date: "2026-02-01T00:00:00Z"
external_link: ""

image:
  caption: ""
  focal_point: ""

url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
slides: ""
math: true
---

This second sample is a blog-style internal post focused on model predictions.

## Logistic model idea

For binary outcomes, we often use:

$$
\Pr(Y=1\mid X) = \frac{1}{1 + e^{-(\beta_0 + \beta_1X)}}
$$

The log-odds form is:

$$
\log\left(\frac{p}{1-p}\right) = \beta_0 + \beta_1X
$$

## Python code test

```python
import numpy as np

beta0 = -1.0
beta1 = 0.8
x = np.array([-2, -1, 0, 1, 2])

logit = beta0 + beta1 * x
p = 1 / (1 + np.exp(-logit))
print(p)
```

## Bash snippet test

```bash
hugo server -D
```

## Quick checklist

1. Equations should render with MathJax.
2. Code fences should render with syntax highlighting.
3. The card should open this internal page, not an external website.
