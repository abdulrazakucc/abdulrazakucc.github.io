# profile

Personal portfolio of **Dr. Abdul Razak** — Senior Data Scientist (AI / ML Research).
A single-page, static site built with vanilla HTML, CSS and a small JS file. No build step.

> Live site: <https://abdulrazakucc.github.io/profile/>

---

## Structure

```
.
├── index.html            # Single page with all sections
├── assets/
│   ├── css/style.css     # Theme tokens (light/dark), layout, typography
│   └── js/main.js        # Theme toggle, scroll-reveal, footer year
├── cv/
│   └── Dr.Abdul_Razak_Data_Scientist_updated.pdf
├── .nojekyll             # Tells GitHub Pages to serve files as-is
└── README.md
```

## Local preview

Any static server works. Easiest:

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080/
```

Or open `index.html` directly in a browser.

## Deploy to GitHub Pages

1. Create the repo on GitHub (must be **public** for free Pages):
   - Web UI → New repository → owner `abdulrazakucc`, name `profile`, public, no README.
2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial profile site"
   git branch -M main
   git remote add origin https://github.com/abdulrazakucc/profile.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source** = "Deploy from a branch" · **Branch** = `main` · **Folder** = `/ (root)` · Save.
4. Wait ~1 minute. Site goes live at <https://abdulrazakucc.github.io/profile/>.

### Alternative: deploy at the root URL (recommended)

Rename the repo to `abdulrazakucc.github.io` and the site will be served at the root:
<https://abdulrazakucc.github.io/>. No code changes needed — all paths in this site are relative.

## Customising

- **Copy edits** — open `index.html`, all content is plain HTML in sections marked with `<section id="...">`.
- **Colours / typography** — open `assets/css/style.css`, change the CSS custom properties at the top (`:root` for light theme, `html[data-theme="dark"]` for dark).
- **Add a section** — duplicate any `<section class="section">` block; add a link in the `<nav>` at the top.
- **Add a project / publication card** — copy any `<article class="card">` element inside `#patents` or `#publications`.

## Licence

Content (CV, biography) © Dr. Abdul Razak — all rights reserved.
Site source (HTML, CSS, JS scaffold) is free to reuse under MIT.
