# Artgenix — Digital Brochure

Mobile-responsive web version of the A4 trifold print brochure.

- Live (Netlify): https://artgenix-digital-brochure.netlify.app
- Live (GitHub Pages): https://rahmanemon27.github.io/artgenix-digital-brochure/
- Repo: https://github.com/RahmanEmon27/artgenix-digital-brochure

## Workflow — kaj korun, tarpor deploy

1. **Local-e preview** (ei folder-e):
   ```bash
   ./preview.sh
   ```
   Server chalu hoye browser-e http://localhost:8090 nije theke khulbe.
   Edit save korar por browser refresh korlei notun change dekhben.
   Eki Wi-Fi-te phone theke dekhte terminal-e dekhano `http://<mac-ip>:8090` link ta khulun.
   Bondho korte `Ctrl+C`.
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
- `js/main.js` — gallery data (`cats` = filter categories, `items` = photos), filters, lightbox, scroll reveal, nav highlight, share button
- `assets/img` — logo, rickshaw, training photos
- `assets/gallery/<category>/` — creation photos from `Trifold_brochure/Catagory Photos` (one folder per category); `*-thumb.webp` (640px) for the grid, `*.webp` (1600px) for the lightbox
- `assets/artgenix-brochure.pdf` — print PDF (download button)
- `deploy.sh` — deploy script
