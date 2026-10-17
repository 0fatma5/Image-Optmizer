# Image Optimizer

A lightweight browser-only image resizing and compression tool built with **vanilla JavaScript**, HTML, CSS, the Canvas API, and ES modules. It processes files locally: **images are not uploaded to a server**.

## Demo

[Watch the short Image Optimizer walkthrough (video)](https://github.com/user-attachments/assets/d829fe99-ad45-46c1-b45a-542f584d925e)

The video demonstrates selecting an image, choosing compression settings, and downloading the result. The demo is hosted as a GitHub attachment; open the link to watch it.

## Features
- Choose multiple JPEG, PNG, or WebP images, or drop them into the upload area.
- Export JPEG, WebP, or PNG; choose JPEG/WebP compression quality.
- Resize while preserving aspect ratio, with no upscaling.
- Preview each result, compare file sizes, and download individually.
- Responsive interface and per-file error messages.

## Run locally
No runtime dependencies are required. Use an HTTP server because the app imports an ES module:

```bash
python -m http.server 8000
```

Open http://localhost:8000.

## Run tests
Requires Node.js 18+.

```bash
npm test
```

The unit tests cover size formatting, dimension scaling, filenames, and size comparisons. Browser encoding and drag/drop still require a manual browser check.

## Limitations
- Input files are limited to 25 MB and output canvases to 25 million pixels.
- A compressed output may be larger than the original.
- PNG ignores the quality slider.
- Saving to JPEG flattens transparency onto white.
- Animated images become a single frame.

## Repository structure
- `index.html`: new application
- `styles.css`: responsive UI
- `app.js`: browser events and compression
- `utils.js`: reusable functions
- `tests/`: unit tests
- `Image Optmizer.html`: original learning version (left untouched)

## Portfolio notes
Suggested repository description: *Resize and compress images locally in your browser using vanilla JavaScript and Canvas.*

Suggested topics: `javascript`, `canvas-api`, `image-optimization`, `frontend`, `html`, `css`.

After browser testing, consider GitHub Pages deployment and adding a screenshot. The current repo name has a typo, but it was **not renamed**.
