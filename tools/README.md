# Image generation

`og-default.png` (1200×630 social card) and `apple-touch-icon.png` (180×180) are
committed as built assets so that `npm run build` needs no dependencies.

Regenerate them only when the branding changes:

```bash
CHROME=/path/to/chrome   # any Chromium/Chrome build
$CHROME --headless --no-sandbox --hide-scrollbars \
  --screenshot=src/assets/og-default.png --window-size=1200,630 \
  "file://$PWD/tools/og-template.html"
$CHROME --headless --no-sandbox --hide-scrollbars \
  --screenshot=src/assets/apple-touch-icon.png --window-size=180,180 \
  "file://$PWD/tools/icon-template.html"
```

Edit the brand name and headline in `tools/og-template.html` first.
