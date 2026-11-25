# Artgenix — Digital Brochure

Mobile-responsive web version of the A4 trifold print brochure.

## Structure
- `index.html` — cover, Mission, Vision, Training Programs, Creations gallery, Contact
- `css/style.css` — all styles (breakpoints at 900px and 700px)
- `js/main.js` — gallery data, category filters, lightbox (swipe / keyboard), scroll reveal, nav highlight, share button
- `assets/img` — logo, rickshaw, training photos (extracted from the PDF)
- `assets/gallery` — 22 creation photos (extracted from page 2 of the PDF)
- `assets/artgenix-brochure.pdf` — original print PDF (download button)

## Run locally
```bash
python3 -m http.server 8090
```
Then open http://localhost:8090

It is a plain static site — upload the whole folder to any host (Netlify, GitHub Pages, cPanel).
To edit gallery captions or categories, change the `items` list at the top of `js/main.js`.
