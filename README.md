# CargoForge project website

This repository contains the static website for **CargoForge: Generative 3D Reconstruction for Port Breakbulk Cargo**.

The site is designed for GitHub Pages and uses:

- Plain HTML/CSS/JavaScript
- `<model-viewer>` for interactive GLB previews
- Local GLB/image assets under `resources/`
- Separate English, Chinese, and About pages

## Local preview

Open `index.html` directly, or start a small static server:

```bash
python -m http.server 8000
```

Then open `http://127.0.0.1:8000`.

## Pages

- `index.html`: English project page
- `zh.html`: Chinese project page
- `about.html`: project and author information

## Notes

The website structure is inspired by academic project pages such as VGGT and RAPID Route, with the content adapted to a port-oriented 3D reconstruction and multi-GPU inference system.
