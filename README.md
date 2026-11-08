# GHANCHI MOH.AAN: Cinematic Developer Portfolio

Dark black/navy theme, red accents, bold type, particles, cursor glow, 3D tilt cards, magnetic buttons, typing effect, animated counters, scroll progress, loader and page-wipe transitions. Plain HTML/CSS/JS (no build step) plus an optional Express backend for the contact form.

## Folder structure
```
portfolio/
├── index.html            page skeleton
├── css/styles.css        all styling + responsive rules
├── js/data.js            ★ YOUR CONTENT: edit this file
├── js/main.js            rendering + animations + form logic
├── assets/
│   ├── profile.webp      your photo (replace)
│   └── resume.pdf        ADD your resume here
├── server/
│   ├── server.js         Express: static files + POST /api/contact
│   └── .env.example      SMTP settings template
└── package.json
```

## Run it
**Option A: front end only (no install).** Double-click `index.html`, or run `npx serve .` and open the shown URL. The contact form will then offer a "send via your email app" fallback.

**Option B: with working contact form.**
```bash
npm install
cp server/.env.example server/.env     # fill in MAIL_TO + SMTP_* (optional)
npm start                               # http://localhost:3000
```
Messages are always saved to `server/messages.json`; they are also emailed if SMTP is configured (Gmail needs an App Password).

## Customise (everything is in `js/data.js`)
| What | Where |
|---|---|
| Name, logo letters, title, typing roles, intro, email, location | `profile` |
| Photo / resume | `profile.photo`, `profile.resume` (drop files in `assets/`) |
| GitHub / LinkedIn / Instagram / email links | `socials` |
| Live GitHub stats, graph, repos | `githubUsername` (set to your real username) |
| About text and cards | `about` |
| Skills and levels | `skills`: `[name, level]`; level `0` hides a skill |
| Projects | `projects`: set `image: "assets/shot.png"` for a real screenshot, plus `github`, `demo`, `details` |
| Education, internships, certificates, hackathons | `timeline` |
| LeetCode / HackerRank / CodeChef / GFG links | `coding` |
| Services | `services` |

**Skills are editable in the browser too:** click **Edit skills** in the Skills section to drag level sliders or remove technologies (saved in your browser). **Copy JSON** gives you the result to paste back into `data.js` so it applies for all visitors. The default levels are only starting values: set them honestly and delete what you don't know.

## About the "real data" rules
- GitHub numbers, repos and the contribution graph come live from GitHub's public API (and a public graph image service). If the username is unset or the API is unavailable, that block is simply hidden.
- LeetCode, HackerRank, CodeChef and GeeksforGeeks are shown as links only. They have no official public stats API, so nothing is invented.
- The counters in "About" count your actual projects and skills.

## Deploy
- **Static (Vercel / Netlify / GitHub Pages):** upload the folder (or push to GitHub and import it). No build command; publish directory is the project root. For the contact form on static hosting, deploy `server/` separately (Render/Railway) and add this before `main.js` in `index.html`:
  `<script>window.CONTACT_API="https://your-backend.onrender.com/api/contact";</script>`
  then enable CORS on that backend (`npm i cors`, `app.use(require("cors")({origin:"https://your-site.com"}))`).
- **Full stack (Render / Railway / any VPS):** deploy the repo as a Node service, build command `npm install`, start command `npm start`, and set the env vars from `.env.example`.

## Accessibility & performance
Respects `prefers-reduced-motion`, keyboard focus styles, skip link, ARIA labels, honeypot spam field, pauses the particle canvas when the tab is hidden, lazy-loads images.
