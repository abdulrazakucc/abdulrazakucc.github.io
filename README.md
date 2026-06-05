# abdulrazakucc.github.io

Personal portfolio of **Dr. Abdul Razak**, Staff Data Scientist in AI and Machine Learning Research.

Live site: <https://abdulrazakucc.github.io/>

This is a multi-page static site built with vanilla HTML, CSS and a small JavaScript file. There is no build step. GitHub Pages serves the files exactly as they appear in this repository.

## Structure

```
.
├── index.html           Home page: hero, currently, explore the site
├── about.html           Personal narrative and background
├── work.html            Four practice areas (not a CV timeline)
├── research.html        Publications, academic service, education
├── patents.html         Nine granted US patents, grouped by theme
├── contact.html         Professional networks (no email or phone)
├── assets/
│   ├── css/style.css    Theme tokens (light and dark), layout, typography
│   └── js/main.js       Theme toggle, scroll reveal, footer year
├── .nojekyll            Tells GitHub Pages to serve files as-is
└── README.md
```

## Local preview

Any static server works. The simplest option is the Python standard library:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080/>.

## Deploying changes

This repository is named `abdulrazakucc.github.io`, which is the special name GitHub Pages recognises for a "user site". As a result, any push to the `main` branch is built automatically and served at the root URL within about a minute.

```bash
git add .
git commit -m "Describe the change"
git push origin main
```

The Pages build status is available at <https://github.com/abdulrazakucc/abdulrazakucc.github.io/deployments>.

## Customising

- **Copy edits.** Open the relevant HTML file. All content is plain HTML.
- **Colours and typography.** Open `assets/css/style.css` and adjust the CSS custom properties at the top of the file. The block under `:root` controls the light theme, the block under `html[data-theme="dark"]` controls the dark theme.
- **Adding a page.** Duplicate any existing HTML file, update the `<title>`, the page hero, the `aria-current="page"` attribute on the matching nav link, and add new entries to the topbar `nav` and the footer `foot-nav` on every page.
- **Adding a publication card.** Copy any `<article class="card pub">` block in `research.html`.
- **Adding a patent card.** Copy any `<article class="card">` block inside one of the three groups in `patents.html`, or add a new group with the `patent-group` markup.

## Licence

Content (biography, descriptions, photographs) is the property of Dr. Abdul Razak. The site source (HTML, CSS, JavaScript scaffold) is free to reuse under the MIT licence.
