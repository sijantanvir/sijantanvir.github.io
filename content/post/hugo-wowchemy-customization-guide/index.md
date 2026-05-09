---
title: "How to Customize This Hugo/Wowchemy Site (Step by Step)"
subtitle: "A practical walkthrough with a downloadable PDF tutorial"
summary: "Customize navigation, profile, styles, and publish updates safely with this step-by-step guide."
authors: []
tags:
- Hugo
- Wowchemy
- Website
- Tutorial
categories:
- Blog
date: 2026-02-08T00:00:00Z
lastmod: 2026-02-08T00:00:00Z
featured: false
draft: false

image:
  caption: ""
  focal_point: ""
  preview_only: false

projects: []
---

{{< toc >}}

## Overview

This tutorial shows how to customize this site in the correct files and publish changes without breaking your setup.

Download the PDF version here:

[Download the full tutorial (PDF)](/files/hugo-wowchemy-customization-tutorial.pdf)

## What You Will Customize

- Global site identity (`config/_default/config.toml`, `params.toml`)
- Navbar items and order (`config/_default/menus.toml`)
- About/profile content (`content/home/bio.md`, `content/authors/.../_index.md`)
- Visual style overrides (`assets/scss/custom.scss`)
- Optional behavior tweaks (`layouts/partials/custom_js.html`)

## Step-by-Step Summary

1. Update title/theme/menu config.
2. Align bio widget author with your author folder.
3. Edit profile text, social links, and education.
4. Tune styles in `custom.scss` only.
5. Add post content and `featured.jpg`.
6. Build locally with `hugo` and verify.
7. Publish by pushing to your deployment branch.

## Recommended Workflow

Use small edits and validate after each step. This keeps regressions easy to spot and rollback.

## References

- [Hugo Configuration](https://gohugo.io/getting-started/configuration/)
- [Hugo Menus](https://gohugo.io/content-management/menus/)
- [Wowchemy Docs](https://wowchemy.com/docs/)
- [Wowchemy Customization](https://wowchemy.com/docs/getting-started/customize/)

## Notes

The PDF includes a full checklist and exact file references for each task.
