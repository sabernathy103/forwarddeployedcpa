# Forward Deployed CPA — website

Static site for **forwarddeployedcpa.com**. A CPA deploying AI into finance & accounting —
built around live builds you can open and use.

> **Zero dependencies. No build step.** Pure HTML/CSS/JS. It works by opening a file, and
> deploys by dragging the folder to any static host. Nothing to `npm install`, nothing to break.

---

## Positioning

*Accounting, shipped where the work happens.*

Forward Deployed CPA is a **content / thought-leadership presence** — not a CPA firm and not a
legal entity. Client advisory work runs through **Hundred Spires Advisory** (hundred-spires.com).
Every footer carries this disclaimer.

---

## The three builds

Everything centers on `/builds/` — real, interactive artifacts, each a self-contained page:

1. **The Finance AI Platform** — `builds/platform-architecture.html`
   Reference architecture (the generic, LinkedIn-published graphic at
   `assets/img/platform-architecture.png`) framed with an explainer.
2. **Finance AI Maturity Assessment** — `builds/ai-maturity-assessment.html`
   Interactive 10-dimension self-assessment with a live radar. **Blank on every open**, nothing
   stored, resets on refresh. De-identified from an earlier client build — generic model only.
3. **13-Week Cash Flow Forecast** — `builds/cash-flow-13-week.html`
   Direct-method rolling forecast on synthetic data with drill-down. Rebranded to Forward
   Deployed CPA (dark theme, `❯..` glyph, grape/lime).

---

## Run it locally

Just open `index.html` in a browser. For clean paths (recommended), run any static server:

```bash
cd website
python3 -m http.server 8080
# → visit http://localhost:8080
```

> Note: opening a file directly (`file://`) in a limited preview may strip the stylesheet and
> show unstyled text. Always use the local http server to see the real design.

---

## Deploy

Any static host works — no build command, publish directory = this folder root.

**Netlify (drag & drop):** app.netlify.com → *Add new site* → *Deploy manually* → drag the
`website/` folder. `netlify.toml` + `_headers` are already configured (security headers + a
`/builds` redirect). Then add the domain `forwarddeployedcpa.com` in *Domain settings*.

**Vercel / Cloudflare Pages / GitHub Pages** — same idea, point them at this folder.

After first deploy, confirm the live domain in `sitemap.xml` and the `og:` / `canonical` tags
matches your real domain (all set to `https://forwarddeployedcpa.com`).

---

## File map

```
website/
├── index.html                     # home — hero + the three builds
├── about.html                     # about + positioning/disclaimer
├── 404.html
├── robots.txt · sitemap.xml
├── netlify.toml · _headers        # deploy config + security headers
├── builds/
│   ├── index.html                 # the Builds showcase
│   ├── platform-architecture.html # #1 architecture
│   ├── ai-maturity-assessment.html# #2 interactive tool
│   └── cash-flow-13-week.html     # #3 interactive dashboard
└── assets/
    ├── css/styles.css             # the whole design system
    ├── js/main.js                 # nav, scroll-reveal, typed hero, signup
    └── img/                       # mark (❯.. glyph), avatar, favicon, OG + build images
```

---

## Newsletter signup (wire it up when ready)

The subscribe forms are functional UI but **not yet connected to an email provider**. On submit
they show a confirmation and clear — no email is stored. To go live, open `assets/js/main.js`,
find the `form[data-signup]` handler, and POST to your ESP (Buttondown, ConvertKit, Beehiiv,
Mailchimp, etc.).

---

## Brand system (baked into `styles.css`)

| Token | Value | Use |
|------|-------|-----|
| Cyber Grape | `#6D28D9` | primary field |
| Acid Lime | `#D7FF00` | single accent — one lime moment per view |
| Ink | `#111014` | background |
| Paper | `#F5F4F7` | type |

- **Headlines:** Archivo 900, uppercase, tight tracking
- **Body:** Space Grotesk · **Labels / numbers:** IBM Plex Mono
- **Mark:** the `❯..` terminal-prompt glyph (`assets/img/mark.svg`), *not* the old double-chevron.
- Fonts load from Google Fonts. To self-host, drop the three families into `assets/fonts/` and
  swap the `<link>` for `@font-face` rules.

---

*Built for Sander Abernathy, CPA · Atlanta, GA*
