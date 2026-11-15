# BIR MURA — Digital Heritage Museum

An interactive, trilingual (Kazakh / Russian / English) digital museum concept exploring shared Turkic cultural heritage, tamga and ornament motifs, and the Great Silk Road.

## Features
- Responsive landing page with a premium dark museum aesthetic.
- Kazakh, Russian and English interface switching.
- Interactive 3D Silk Road tabletop map built with Three.js.
- Orbit controls: drag to rotate, scroll to zoom.
- Selectable historical city information.
- Cultural motif comparison section.
- Shared heritage exhibits: yurt culture, crafts, music and architecture.
- Mobile navigation and responsive layouts.

## Run locally
This project uses browser ES modules and an import map, so run it through a local web server (not by opening `index.html` directly).

### Option A — VS Code
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.

### Option B — Python
```bash
python -m http.server 8000
```
Then open <http://localhost:8000>.

## Publish with GitHub Pages
1. Create a GitHub repository, for example `bir-mura-museum`.
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then press **Save**.
6. Wait for the Pages deployment and open the published URL.

## Notes
- Three.js and OrbitControls are loaded from jsDelivr, so an internet connection is required.
- The 3D map is a stylized educational visualization, not a geographically precise GIS map.
- Tamga and ornament cards use illustrative motifs for comparison. They are not claimed to be official national emblems or historically identical signs.
- Historical city descriptions are short educational summaries and can be expanded with researched sources before a formal museum deployment.

## Project structure
```text
bir-mura-museum/
├── index.html
├── styles.css
├── app.js
└── README.md
```
