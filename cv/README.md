# Curriculum Vitae

Two-page CV for Abdul Razak.

- `cv.tex` is the source, written for XeTeX and set in TeX Gyre Pagella (`newpxtext`).
- `Abdul-Razak-CV.pdf` is the compiled, distributable file.

Contact details, publications and patents live in the source; publications and patents are ordered
by year rather than by reference key. Web references are named hyperlinks (Portfolio, Google
Scholar, DBLP, ORCID, Justia, Google Patents) and the email address is a `mailto:` link, so nothing
is printed as a bare URL.

## Colour

The palette is defined in one block near the top of `cv.tex`:

| Name | Value | Used for |
| --- | --- | --- |
| `paper` | `FAF8F4` | page background |
| `band` | `15304E` | masthead block |
| `accent` | `1D4E79` | headings, links, list marks |
| `panel` | `F2EEE6` | research-interests panel |

Changing those four values restyles the whole document.

## Building

The document compiles with [Tectonic](https://tectonic-typesetting.github.io/), which fetches the
packages it needs and requires no local TeX installation:

```bash
tectonic -X compile cv.tex --outdir .
mv cv.pdf Abdul-Razak-CV.pdf
```

It also compiles unchanged with a full TeX Live installation:

```bash
xelatex cv.tex   # or: latexmk -xelatex cv.tex
```

The layout is tuned to fill exactly two pages, so after editing check the page count; the footer
prints it on every page.
