# Tanvir Ahmed Sijan

Personal academic website for [Tanvir Ahmed Sijan](https://sijantanvir.github.io/), built with [Hugo](https://gohugo.io/) and the [Wowchemy Academic](https://wowchemy.com/) framework.

This repository contains the source for the site, including homepage sections, publications, posts, static assets, and deployment workflows.

## Stack

- Hugo Extended `0.110.0`
- Wowchemy Hugo Modules
- Go modules for theme dependencies
- GitHub Actions for CI and GitHub Pages deployment

## Repository Structure

- `content/`: homepage sections, publications, posts, author profile, and other site content
- `config/_default/`: site configuration, menus, and theme settings
- `assets/`: custom styles, icons, and processed assets
- `static/`: files copied directly to the generated site
- `layouts/`: Hugo layout overrides and custom partials
- `.github/workflows/`: CI and deployment workflows

## Local Development

Install:

- [Go](https://go.dev/)
- [Hugo Extended 0.110.0](https://github.com/gohugoio/hugo/releases/tag/v0.110.0)

Run the local server:

```powershell
hugo server
```

Then open:

```text
http://localhost:1313/
```

## Production Build

Build the site locally with:

```powershell
hugo --gc --minify
```

The generated site will be written to `public/`.

## Deployment

This repository includes GitHub Actions workflows for:

- CI builds on pushes and pull requests
- GitHub Pages deployment from `main` or `master`

To use the deployment workflow, enable GitHub Pages in the repository settings and set the source to `GitHub Actions`.

## Common Edits

- Site title and base URL: `config/_default/config.toml`
- Menu items: `config/_default/menus.toml`
- Theme and contact settings: `config/_default/params.toml`
- Author profile: `content/authors/tanvir-ahmed-sijan/_index.md`
- Homepage sections: `content/home/`
- Publications: `content/publication/`

## Notes

This site is inspired from [https://remi-theriault.com/](https://remi-theriault.com/) , but this repository is maintained as Tanvir Ahmed Sijan's personal website.
