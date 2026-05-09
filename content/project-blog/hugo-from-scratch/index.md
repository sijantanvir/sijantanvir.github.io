---
tags:
  - Hugo
date: 2026-02-07T17:17:30+06:00
modified: 2026-02-08T21:01:42+06:00
title: Hugo From Scratch
---

## 1. Goal of This Approach

- Build a **Hugo theme from zero**, inside a Hugo site

- Understand **what each folder and file does**

- Start minimal, then add complexity step by step

- Avoid magic, templates you do not understand, or copy-paste themes

---

## 2. Creating an Empty Hugo Site

```bash
hugo new site hugo-from-scratch
cd hugo-from-scratch
```

This generates a basic Hugo project.

### Important folders (only the ones we care about now):

```
hugo-from-scratch/
├── content/
├── layouts/
├── static/
├── config.toml (or yaml)
```

---

## 3. Folder Responsibilities

### `content/`

- Stores **Markdown content**

- Pages, blog posts, sections

- Hugo renders these using layouts
