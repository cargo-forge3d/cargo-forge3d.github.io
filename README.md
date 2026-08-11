# CargoForge3D Project Website

This repository hosts the static project page for **CargoForge3D: Port Breakbulk Cargo Generative 3D Reconstruction and Multi-GPU Serving**.

The website is designed for interview and project presentation use. It explains:

- Why port breakbulk cargo reconstruction is a service problem rather than a one-image demo.
- How Hunyuan3D-2.1 is used as a shape and texture pipeline.
- How HiCache++ accelerates white-mesh generation.
- How FastAPI, Redis, PostgreSQL, and dual GPU workers turn the pipeline into an asynchronous service.
- How teacher-generated GLB pseudo labels are converted into Hunyuan3D-compatible training data for Rank-16 LoRA adaptation.
- How generated GLB assets can be inspected interactively in the browser.

## Pages

- `index.html`: English project page.
- `zh.html`: Chinese project page.
- `about.html`: project context, author information, and technical keywords.

## Assets

- `resources/gallery/*`: input images, white meshes, and textured meshes for interactive result inspection.
- `resources/lora/cargo-val/*`: validation GLB examples for base model versus LoRA checkpoint comparison.

## Local Preview

Open `index.html` directly in a browser, or run a small static server:

```bash
python -m http.server 8000
```

Then open `http://127.0.0.1:8000`.

The 3D viewers use the browser-native `<model-viewer>` component loaded from a CDN, so GitHub Pages or an internet-connected local preview is recommended.

## Design Notes

The page uses plain HTML, CSS, and JavaScript. The layout follows a clean academic project-page style: white background, compact diagrams, interactive GLB viewers, and dense technical sections. The goal is to make the system understandable to interviewers without hiding implementation details behind a flashy UI.
