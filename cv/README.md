# Curriculum Vitae

Two-page academic CV for Abdul Razak.

- `cv.tex` — the source, written for XeTeX and typeset in TeX Gyre Pagella (`newpxtext`).
- `Abdul-Razak-CV.pdf` — the compiled, distributable PDF.

External references are set as named hyperlinks (Portfolio, Google Scholar, DBLP, ORCID, Justia,
Google Patents) rather than printed URLs, so the page stays clean while every reference stays
clickable.

## Building

The document compiles with [Tectonic](https://tectonic-typesetting.github.io/), which fetches the
packages it needs on first run and requires no local TeX installation:

```bash
tectonic -X compile cv.tex --outdir .
mv cv.pdf Abdul-Razak-CV.pdf
```

It also compiles unchanged with a standard TeX Live installation:

```bash
xelatex cv.tex   # or: latexmk -xelatex cv.tex
```

After editing, check that the document still ends at two pages — the layout is tuned to fill them,
and an added paragraph will push a third page.
