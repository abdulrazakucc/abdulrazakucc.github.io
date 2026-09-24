# Curriculum Vitae

Two-page academic CV for Abdul Razak, PhD.

- `cv.html` — the source. Plain HTML and CSS, sized for US Letter with fixed 8.5in × 11in pages.
- `Abdul-Razak-CV.pdf` — the rendered, distributable PDF.

The layout follows research-CV conventions: education before appointments, publications and
patents as numbered bibliography entries with the author's own name emphasised, and honours,
service and competencies at the end. External references are set as named hyperlinks (Portfolio,
Google Scholar, DBLP, ORCID, Justia) rather than printed URLs, so the PDF stays clean while every
reference remains clickable.

## Regenerating the PDF

The PDF is produced with headless Chrome, which honours the print CSS in `cv.html`:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --run-all-compositor-stages-before-draw --virtual-time-budget=10000 \
  --print-to-pdf="Abdul-Razak-CV.pdf" "file://$PWD/cv.html"
```

Each `<section class="page">` is a fixed-height page with `overflow: hidden`, so content that no
longer fits is clipped rather than reflowed. After any copy edit, re-render and check that both
pages still end with their footer rule, for example with `pdftoppm -png -r 110`.
