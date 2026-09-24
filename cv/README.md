# Curriculum Vitae

Two-page CV for Dr. Abdul Razak, typeset to match the visual language of the portfolio site
(<https://abdulrazakucc.github.io/>).

- `cv.html` — the source. Plain HTML and CSS, sized for US Letter with fixed 8.5in × 11in pages.
- `Abdul-Razak-CV.pdf` — the rendered, distributable PDF.

## Regenerating the PDF

The PDF is produced with headless Chrome, which honours the print CSS in `cv.html`:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --run-all-compositor-stages-before-draw --virtual-time-budget=10000 \
  --print-to-pdf="Abdul-Razak-CV.pdf" "file://$PWD/cv.html"
```

Each `<section class="page">` is a fixed-height page with `overflow: hidden`, so content that no
longer fits is clipped rather than reflowed. After any copy edit, re-render and check both pages,
including the footer rule at the bottom of each.
