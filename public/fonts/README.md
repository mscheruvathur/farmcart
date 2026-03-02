# Fonts

Place your **Driftune Demo Font** files here:

- `Driftune-Demo.woff2`  ← preferred (smallest, modern browsers)
- `Driftune-Demo.woff`   ← fallback
- `Driftune-Demo.ttf`    ← fallback

Vite serves the `public/` folder at the root, so these files will be
available at `/fonts/Driftune-Demo.woff2` etc. in the browser.

If your font file has a different name, update the `src:` paths inside
`src/styles/globals.css` under the `@font-face` block to match.
