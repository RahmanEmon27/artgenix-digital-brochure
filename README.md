# Artgenix — Digital Brochure

Mobile-responsive web version of the A4 trifold print brochure.

- Live (Netlify): https://artgenix-digital-brochure.netlify.app
- Live (GitHub Pages): https://rahmanemon27.github.io/artgenix-digital-brochure/
- Repo: https://github.com/RahmanEmon27/artgenix-digital-brochure

## Workflow — kaj korun, tarpor deploy

1. **Local-e preview** (ei folder-e):
   ```bash
   python3 -m http.server 8090
   ```
   Browser-e http://localhost:8090 khulun.
2. **File edit korun** (`index.html`, `css/style.css`, `js/main.js`, `assets/…`).
3. **Deploy:**
   ```bash
   ./deploy.sh "ki change korlen"
   ```
   Eta commit kore, GitHub-e push kore (GitHub Pages 1–2 min-e update hoy) ar Netlify-te production deploy kore.

Folder ta Netlify project `artgenix-digital-brochure`-er shathe linked (`.netlify/`, git-e jay na).

## Structure
- `index.html` — cover, Mission, Vision, Training Programs, Creations gallery, Contact
- `css/style.css` — all styles (breakpoints at 900px and 700px)
- `js/main.js` — gallery data (`items` list: captions + categories), filters, lightbox, scroll reveal, nav highlight, share button
- `assets/img` — logo, rickshaw, training photos
- `assets/gallery` — 22 creation photos
- `assets/artgenix-brochure.pdf` — print PDF (download button)
- `deploy.sh` — deploy script
