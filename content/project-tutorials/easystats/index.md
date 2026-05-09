---
title: "Sample Project 1: Effect Size Explorer"
summary: "Internal sample project with markdown, equations, and code blocks."
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

This is a **sample internal project post** to test blog-style writing with markdown, equations, and code rendering.

## Why this sample exists

I want a clean, reproducible workflow where the effect size is easy to compute and explain.

For two groups with means $\bar{x}_1$ and $\bar{x}_2$, the standardized mean difference is:

$$
d = \frac{\bar{x}_1 - \bar{x}_2}{s_p}
$$

where

$$
s_p = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}}
$$

## R code test

```r
# Sample data
set.seed(123)
g1 <- rnorm(40, mean = 10, sd = 2)
g2 <- rnorm(40, mean = 11.2, sd = 2.1)

# Simple Cohen's d computation
m1 <- mean(g1)
m2 <- mean(g2)
s1 <- sd(g1)
s2 <- sd(g2)
n1 <- length(g1)
n2 <- length(g2)

sp <- sqrt(((n1 - 1) * s1^2 + (n2 - 1) * s2^2) / (n1 + n2 - 2))
d  <- (m2 - m1) / sp

d
```

## Interpretation notes

- If $|d| \approx 0.2$: small effect.
- If $|d| \approx 0.5$: medium effect.
- If $|d| \approx 0.8$: large effect.

This project page is intentionally simple and internal-only.
