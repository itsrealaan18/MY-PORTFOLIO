/* Express backend: serves the site and handles POST /api/contact.
   - If SMTP_* env vars are set and `nodemailer` is installed, the message is emailed to you.
   - Every message is also appended to server/messages.json so nothing is lost. */
const path = require("path");
const fs = require("fs");
const express = require("express");

try { require("dotenv").config({ path: path.join(__dirname, ".env") }); } catch (_) { /* dotenv optional */ }

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, "..");
const STORE = path.join(__dirname, "messages.json");

app.disable("x-powered-by");
app.use(express.json({ limit: "20kb" }));
// Only the public front-end is served, never server/, package.json or .env files.
const opts = { dotfiles: "deny", setHeaders: (res) => res.setHeader("X-Content-Type-Options", "nosniff") };
["css", "js", "assets"].forEach((d) => app.use("/" + d, express.static(path.join(ROOT, d), opts)));
app.get("/", (_req, res) => res.sendFile(path.join(ROOT, "index.html")));

// naive in-memory rate limit: 5 messages / 10 min / IP
const hits = new Map();
function limited(ip) {
  const now = Date.now(), win = 10 * 60 * 1000, arr = (hits.get(ip) || []).filter((t) => now - t < win);
  arr.push(now); hits.set(ip, arr); return arr.length > 5;
}

const clean = (s, n) => String(s || "").replace(/[\r\n]+/g, " ").trim().slice(0, n);

app.post("/api/contact", async (req, res) => {
  if (limited(req.ip)) return res.status(429).json({ error: "Too many messages. Please try again later." });
  const b = req.body || {};
  if (b.website) return res.json({ ok: true }); // honeypot filled: silently drop bots
  const name = clean(b.name, 100), email = clean(b.email, 150), subject = clean(b.subject, 150);
  const message = String(b.message || "").trim().slice(0, 5000);
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || subject.length < 3 || message.length < 10)
    return res.status(400).json({ error: "Please fill in all fields correctly." });

  // 1. persist locally
  try {
    const list = fs.existsSync(STORE) ? JSON.parse(fs.readFileSync(STORE, "utf8")) : [];
    list.push({ at: new Date().toISOString(), name, email, subject, message });
    fs.writeFileSync(STORE, JSON.stringify(list, null, 2));
  } catch (e) { console.error("Could not save message:", e.message); }

  // 2. email via SMTP if configured
  if (process.env.SMTP_HOST && process.env.MAIL_TO) {
    try {
      const nodemailer = require("nodemailer");
      const tx = nodemailer.createTransport({
        host: process.env.SMTP_HOST, port: +process.env.SMTP_PORT || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      });
      await tx.sendMail({
        from: `"Portfolio" <${process.env.SMTP_USER}>`, to: process.env.MAIL_TO, replyTo: email,
        subject: `[Portfolio] ${subject}`, text: `From: ${name} <${email}>\n\n${message}`
      });
    } catch (e) {
      console.error("Email failed:", e.message);
      return res.status(502).json({ error: "Message saved, but email delivery failed." });
    }
  }
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Portfolio running at http://localhost:${PORT}`));
