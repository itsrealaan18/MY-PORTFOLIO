/* Renders the page from window.PORTFOLIO and wires up all animations. No dependencies. */
(function () {
  "use strict";
  const D = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const safeUrl = (u) => (/^(https?:|mailto:|#|assets\/|\/)/i.test(u) ? u : "#");

  const ICONS = {
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.8 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.4.8 1.100.8 2.200v3.200c0 .3.2.7.8.6A11.500 11.500 0 0 0 23.500 12 11.500 11.500 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M20.4 20.5h-3.6v-5.6c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.400V9h3.400v1.600c.5-.9 1.600-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500v6.200zM5.300 7.400a2.100 2.100 0 1 1 0-4.200 2.100 2.100 0 0 1 0 4.200zM7.100 20.500H3.600V9h3.500v11.500zM22.200 0H1.800C.8 0 0 .8 0 1.700v20.600c0 .9.8 1.700 1.800 1.700h20.400c1 0 1.800-.8 1.800-1.700V1.700C24 .8 23.200 0 22.200 0z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 7.400A4.600 4.600 0 1 0 12 16.600 4.600 4.600 0 0 0 12 7.400zm0 7.600a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM17.800 5.600a1.100 1.100 0 1 0 0 2.200 1.100 1.100 0 0 0 0-2.200zM12 2.200c-3.200 0-3.600 0-4.800.1-3.300.1-4.800 1.700-5 5C2.100 8.600 2.100 9 2.100 12s0 3.400.1 4.700c.2 3.300 1.700 4.800 5 5 1.200.1 1.600.1 4.800.1s3.600 0 4.800-.1c3.300-.2 4.800-1.700 5-5 .1-1.300.1-1.700.1-4.700s0-3.400-.1-4.700c-.2-3.300-1.700-4.800-5-5-1.200-.1-1.600-.1-4.800-.1zm0 1.600c3.100 0 3.500 0 4.700.1 2.500.1 3.600 1.300 3.700 3.700.1 1.200.1 1.600.1 4.700s0 3.500-.1 4.700c-.1 2.400-1.200 3.600-3.700 3.700-1.200.1-1.600.1-4.700.1s-3.500 0-4.700-.1c-2.500-.1-3.600-1.300-3.700-3.700-.1-1.200-.1-1.600-.1-4.700s0-3.500.1-4.700c.1-2.400 1.200-3.600 3.700-3.700 1.200-.1 1.600-.1 4.700-.1z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><path d="M2 5.500A1.500 1.500 0 0 1 3.500 4h17A1.500 1.500 0 0 1 22 5.500v13a1.500 1.500 0 0 1-1.500 1.500h-17A1.500 1.500 0 0 1 2 18.500v-13zm2.200.500L12 12l7.800-6H4.200zM20 7.800l-8 6.200-8-6.200v10.200h16V7.800z"/></svg>'
  };
  const socialHTML = () => Object.keys(ICONS).filter((k) => D.socials[k]).map((k) =>
    `<a href="${esc(safeUrl(D.socials[k]))}" target="${k === "email" ? "_self" : "_blank"}" rel="noopener noreferrer" aria-label="${k}">${ICONS[k]}</a>`).join("");

  /* ---------- static content ---------- */
  const P = D.profile;
  document.title = `${P.name} | ${P.title.split("|")[0].trim()} Portfolio`;
  $("#loaderLogo").textContent = P.logo;
  $("#brand").innerHTML = `${esc(P.logo)}<span>.</span>`;
  $("#footBrand").innerHTML = `${esc(P.logo)}<span>.</span>`;
  $("#footTag").textContent = P.title;
  $("#heroTitle").textContent = P.title;
  $("#heroIntro").textContent = P.intro;
  $("#heroPhoto").src = P.photo;
  $("#aboutPhoto").src = P.photo;
  $("#heroPhoto").alt = `Portrait of ${P.name}`;
  $("#resumeBtn").href = P.resume;
  $("#heroSocials").innerHTML = socialHTML();
  $("#footSocials").innerHTML = socialHTML();
  $("#copy").textContent = `© ${new Date().getFullYear()} ${P.name}. All rights reserved.`;

  // hero name: animated per-letter reveal
  const nameEl = $("#heroName");
  nameEl.setAttribute("aria-label", P.name);
  let ci = 0;
  nameEl.innerHTML = P.name.split(" ").map((w, wi, arr) =>
    `<span class="word" aria-hidden="true">${[...w].map((c) =>
      `<span class="ch${wi === arr.length - 1 ? " accent" : ""}" style="animation-delay:${(1.5 + ci++ * 0.045).toFixed(2)}s">${esc(c)}</span>`).join("")}</span>`
  ).join(" ");

  // about
  $("#aboutParas").innerHTML = D.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#aboutCards").innerHTML = D.about.cards.map((c, i) =>
    `<div class="info-card reveal" style="--d:${i * 0.07}s"><div class="ic">${c.icon}</div><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></div>`).join("");

  // services
  $("#serviceGrid").innerHTML = D.services.map(([ic, t, d], i) =>
    `<div class="service reveal" style="--d:${(i % 4) * 0.08}s"><span class="ic">${ic}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("");
  $$(".service").forEach((el) => el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", e.clientX - r.left + "px");
    el.style.setProperty("--my", e.clientY - r.top + "px");
  }));

  // timeline
  $("#timeline").innerHTML = D.timeline.map((t, i) =>
    `<article class="tl-item reveal" style="--d:${i * 0.05}s"><div class="tl-meta">${esc(t.type)} <em>${esc(t.period)}</em></div><h3>${esc(t.title)}</h3>${t.place ? `<div class="pl">${esc(t.place)}</div>` : ""}<p>${esc(t.text)}</p></article>`).join("");

  // coding profile links
  $("#profileLinks").innerHTML = D.coding.map((c, i) =>
    `<a class="pl-card reveal" style="--d:${i * 0.06}s" href="${esc(safeUrl(c.url))}" target="_blank" rel="noopener noreferrer"><span>${c.icon}</span>${esc(c.name)}</a>`).join("");

  // contact info
  const rows = [
    ["✉️", "Email", P.email, D.socials.email],
    ["📍", "Location", P.location, null],
    ["🐙", "GitHub", D.socials.github.replace(/^https?:\/\//, ""), D.socials.github],
    ["💼", "LinkedIn", D.socials.linkedin.replace(/^https?:\/\//, ""), D.socials.linkedin],
    ["📸", "Instagram", D.socials.instagram.replace(/^https?:\/\//, ""), D.socials.instagram]
  ];
  $("#contactInfo").innerHTML = rows.map(([ic, l, v, h]) => {
    const inner = `<span class="ic">${ic}</span><div><small>${l}</small>${esc(v)}</div>`;
    return h ? `<a class="ci-row" href="${esc(safeUrl(h))}" target="_blank" rel="noopener noreferrer">${inner}</a>` : `<div class="ci-row">${inner}</div>`;
  }).join("");

  /* ---------- skills (editable, saved in localStorage) ---------- */
  const LS = "portfolio.skills.v1";
  const base = () => JSON.parse(JSON.stringify(D.skills));
  let skills = base();
  try { const s = JSON.parse(localStorage.getItem(LS)); if (Array.isArray(s)) skills = s; } catch (e) { /* storage unavailable */ }
  let editing = false;
  const save = () => { try { localStorage.setItem(LS, JSON.stringify(skills)); } catch (e) {} };
  const label = (v) => (v >= 81 ? "Advanced" : v >= 61 ? "Proficient" : v >= 36 ? "Intermediate" : "Learning");
  const mono = (n) => { const w = n.replace(/[^A-Za-z0-9+#. ]/g, "").split(/\s+/); return (w.length > 1 ? w[0][0] + w[1][0] : n.slice(0, 2)).toUpperCase(); };
  const hue = (n) => [...n].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;

  function renderSkills() {
    const g = $("#skillGrid");
    g.classList.toggle("editing", editing);
    g.innerHTML = skills.map((cat, ci) => {
      const vis = cat.items.filter((it) => it[1] > 0);
      if (!vis.length && !editing) return "";
      const avg = vis.length ? Math.round(vis.reduce((a, b) => a + b[1], 0) / vis.length) : 0;
      return `<article class="skill-card reveal in"><h3><span class="ci">${cat.icon}</span>${esc(cat.cat)}</h3>
        <div class="cat-avg" title="Category average ${avg}%"><i data-w="${avg}"></i></div>
        <div class="chips">${cat.items.map((it, ii) => it[1] <= 0 ? "" :
          `<div class="chip" title="${esc(it[0])}: ${label(it[1])} (${it[1]}%)"><span class="mono" style="--h:${hue(it[0])}">${esc(mono(it[0]))}</span>
            <div><span class="nm">${esc(it[0])}</span><div class="bar"><i data-w="${it[1]}"></i></div></div><span class="lvl">${label(it[1])}</span>
            <div class="edit-controls"><input type="range" min="1" max="100" value="${it[1]}" data-c="${ci}" data-i="${ii}" aria-label="${esc(it[0])} level"><button data-rm="${ci}:${ii}" aria-label="Remove ${esc(it[0])}">×</button></div></div>`).join("")}</div></article>`;
    }).join("");
    requestAnimationFrame(() => requestAnimationFrame(() => $$("#skillGrid [data-w]").forEach((el) => (el.style.width = el.dataset.w + "%"))));
  }
  $("#skillGrid").addEventListener("input", (e) => {
    if (e.target.type !== "range") return;
    const { c, i } = e.target.dataset;
    skills[c].items[i][1] = +e.target.value; save();
    const chip = e.target.closest(".chip");
    chip.querySelector(".bar i").style.width = e.target.value + "%";
    chip.querySelector(".lvl").textContent = label(+e.target.value);
  });
  $("#skillGrid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-rm]"); if (!b) return;
    const [c, i] = b.dataset.rm.split(":").map(Number);
    skills[c].items[i][1] = 0; save(); renderSkills();
  });
  $("#editSkills").addEventListener("click", (e) => {
    editing = !editing;
    e.target.setAttribute("aria-pressed", editing);
    e.target.textContent = editing ? "Done" : "Edit skills";
    $("#resetSkills").hidden = $("#exportSkills").hidden = !editing;
    renderSkills();
  });
  $("#resetSkills").addEventListener("click", () => { skills = base(); save(); renderSkills(); });
  $("#exportSkills").addEventListener("click", async (e) => {
    const txt = JSON.stringify(skills.map((c) => ({ ...c, items: c.items })), null, 2);
    try { await navigator.clipboard.writeText(txt); e.target.textContent = "Copied!"; } catch (err) { prompt("Copy this JSON into data.js:", txt); }
    setTimeout(() => (e.target.textContent = "Copy JSON"), 1600);
  });
  renderSkills();

  /* ---------- projects ---------- */
  const cover = (p) => {
    const h = p.hue ?? 350, t = esc(p.title);
    const lines = []; // wrap the title into at most 3 lines of ~15 characters
    p.title.toUpperCase().split(/\s+/).forEach((w) => {
      const last = lines.length - 1;
      if (last >= 0 && (lines[last] + " " + w).length <= 15) lines[last] += " " + w; else lines.push(w);
    });
    lines.splice(3); for (let i = 0; i < lines.length; i++) lines[i] = esc(lines[i]);
    return `<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${t}"><defs>
      <linearGradient id="g${h}${t.length}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${h} 80% 30%)"/><stop offset="1" stop-color="#05060d"/></linearGradient></defs>
      <rect width="640" height="400" fill="url(#g${h}${t.length})"/>
      <g fill="none" stroke="hsl(${h} 90% 65% / .35)"><circle cx="540" cy="90" r="120"/><circle cx="540" cy="90" r="80"/><rect x="400" y="250" width="200" height="90" rx="14"/><path d="M400 280h200M430 250v90"/></g>
      ${lines.map((l, i) => `<text x="36" y="${96 + i * 46}" font-family="Impact,Arial Black,sans-serif" font-size="42" fill="#fff" letter-spacing="1.5">${l}</text>`).join("")}
      <text x="36" y="365" font-family="Arial,sans-serif" font-size="17" fill="hsl(${h} 90% 75%)">${esc(p.stack.slice(0, 3).join("  ·  "))}</text></svg>`;
  };
  $("#projectGrid").innerHTML = D.projects.map((p, i) => `
    <article class="project reveal" style="--d:${(i % 3) * 0.1}s"><div class="project-in">
      <div class="p-img">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy">` : cover(p)}</div>
      <div class="p-body"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
        <div class="stack">${p.stack.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
        <div class="p-actions"><a href="${esc(safeUrl(p.github))}" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="${esc(safeUrl(p.demo))}" target="_blank" rel="noopener noreferrer">Live Demo</a>
          <button data-detail="${i}">View Details</button></div></div></div></article>`).join("");
  const modal = $("#projectModal");
  $("#projectGrid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-detail]"); if (!b) return;
    const p = D.projects[+b.dataset.detail];
    $("#modalBody").innerHTML = `<h3>${esc(p.title)}</h3><p>${esc(p.details || p.desc)}</p><div class="stack">${p.stack.map((s) => `<span>${esc(s)}</span>`).join("")}</div>`;
    modal.showModal();
  });
  modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest(".modal-close")) modal.close(); });

  // 3D tilt
  if (!reduce && matchMedia("(hover:hover)").matches) {
    $$(".project-in").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(0)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
  }

  /* ---------- stats (counters from real data) ---------- */
  const nSkills = () => skills.reduce((a, c) => a + c.items.filter((i) => i[1] > 0).length, 0);
  $("#stats").innerHTML = [[D.projects.length, "Projects"], [nSkills(), "Skills"], [skills.length, "Skill Areas"]]
    .map(([n, l]) => `<div class="stat reveal"><b data-count="${n}">0</b><span>${l}</span></div>`).join("");

  function countUp(el) {
    const end = +el.dataset.count; if (reduce) { el.textContent = end; return; }
    const t0 = performance.now(), dur = 1400;
    (function tick(t) { const k = Math.min(1, (t - t0) / dur); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); })(t0);
  }

  /* ---------- GitHub live data ---------- */
  const user = D.githubUsername;
  if (user && user !== "yourusername") {
    fetch(`https://api.github.com/users/${encodeURIComponent(user)}`).then((r) => { if (!r.ok) throw 0; return r.json(); }).then((u) => {
      $("#githubLive").hidden = false;
      $("#ghStats").innerHTML = [[u.public_repos, "Public Repos"], [u.followers, "Followers"], [u.following, "Following"], [u.public_gists, "Gists"]]
        .map(([n, l]) => `<div class="stat reveal"><b data-count="${n}">0</b><span>${l}</span></div>`).join("");
      $("#ghGraph").src = `https://ghchart.rshah.org/ff1744/${encodeURIComponent(user)}`;
      observe($$("#githubLive .reveal"));
      return fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=updated&per_page=6`);
    }).then((r) => r && r.json()).then((repos) => {
      if (!repos) return;
      $("#repoGrid").innerHTML = repos.filter((r) => !r.fork).map((r) =>
        `<a class="repo reveal in" href="${esc(r.html_url)}" target="_blank" rel="noopener noreferrer"><h4>${esc(r.name)}</h4><p>${esc(r.description || "No description")}</p>
        <div class="meta"><span>${esc(r.language || "")}</span><span>★ ${r.stargazers_count}</span><span>⑂ ${r.forks_count}</span></div></a>`).join("");
    }).catch(() => { /* API unavailable or rate-limited: section stays hidden */ });
  } else {
    $("#githubLive").remove();
  }

  /* ---------- reveal on scroll ---------- */
  // split-title words
  $$(".split").forEach((el) => { el.innerHTML = el.textContent.trim().split(/\s+/).map((w, i) => `<span class="w"><b style="transition-delay:${i * 0.08}s">${esc(w)}</b></span>`).join(""); });
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    $$("[data-count]", e.target).forEach(countUp);
    if (e.target.dataset.count) countUp(e.target.querySelector("b") || e.target);
    io.unobserve(e.target);
  }), { threshold: 0.12 });
  function observe(list) { list.forEach((el) => io.observe(el)); }
  observe($$(".reveal:not(.in), .split"));
  // stat <b> counters are inside .stat.reveal, handled by querySelectorAll above

  /* ---------- nav ---------- */
  const nav = $("#nav"), menu = $("#menu"), btn = $("#menuBtn");
  btn.addEventListener("click", () => { const o = menu.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
  const links = $$("#menu a");
  const secObs = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => secObs.observe(s));

  // page transition on in-page nav
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const id = a.getAttribute("href"); const t = id.length > 1 && $(id); if (!t) return;
    e.preventDefault(); menu.classList.remove("open"); btn.setAttribute("aria-expanded", false);
    if (reduce) { t.scrollIntoView(); return; }
    const tr = $("#transition"); tr.classList.remove("go"); void tr.offsetWidth; tr.classList.add("go");
    setTimeout(() => { t.scrollIntoView({ behavior: "auto" }); history.replaceState(null, "", id); }, 330);
  }));
  $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));

  // scroll progress + nav state + timeline line
  const prog = $("#progress"), tl = $("#timeline");
  function onScroll() {
    const h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    nav.classList.toggle("scrolled", h.scrollTop > 40);
    const r = tl.getBoundingClientRect();
    tl.style.setProperty("--tl", Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height)));
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- typing ---------- */
  (function typing() {
    const el = $("#typed"), roles = P.roles; let r = 0, c = 0, del = false;
    if (reduce) { el.textContent = roles[0]; return; }
    (function step() {
      const w = roles[r];
      el.textContent = w.slice(0, c);
      if (!del && c === w.length) { del = true; return setTimeout(step, 1400); }
      if (del && c === 0) { del = false; r = (r + 1) % roles.length; return setTimeout(step, 350); }
      c += del ? -1 : 1; setTimeout(step, del ? 35 : 75);
    })();
  })();

  /* ---------- cursor glow + magnetic buttons ---------- */
  const glow = $("#cursorGlow");
  if (!reduce) {
    addEventListener("pointermove", (e) => { glow.style.opacity = 1; glow.style.transform = `translate(${e.clientX - 210}px,${e.clientY - 210}px)`; glow.style.left = glow.style.top = 0; }, { passive: true });
    $$(".magnetic").forEach((b) => {
      b.addEventListener("pointermove", (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`; });
      b.addEventListener("pointerleave", () => (b.style.transform = ""));
    });
  }

  /* ---------- particles ---------- */
  (function particles() {
    const cv = $("#particles"), ctx = cv.getContext("2d"); if (reduce || !ctx) return;
    let w, h, pts = [], mouse = { x: -999, y: -999 }, raf, running = true;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    function size() {
      w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr; cv.style.width = innerWidth + "px"; cv.style.height = innerHeight + "px";
      const n = Math.min(90, Math.round((innerWidth * innerHeight) / 18000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35 * dpr, vy: (Math.random() - 0.5) * 0.35 * dpr, r: (Math.random() * 1.6 + 0.6) * dpr }));
    }
    size(); addEventListener("resize", size);
    addEventListener("pointermove", (e) => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; }, { passive: true });
    document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) loop(); });
    function loop() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]; p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fillStyle = "rgba(255,70,100,.7)"; ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy, lim = (130 * dpr) ** 2;
          if (d < lim) { ctx.strokeStyle = `rgba(255,23,68,${0.16 * (1 - d / lim)})`; ctx.lineWidth = dpr * 0.7; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        const mx = p.x - mouse.x, my = p.y - mouse.y, md = mx * mx + my * my;
        if (md < (150 * dpr) ** 2) { ctx.strokeStyle = "rgba(255,255,255,.18)"; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      }
      raf = requestAnimationFrame(loop);
    }
    loop();
  })();

  /* ---------- contact form ---------- */
  const form = $("#contactForm"), status = $("#formStatus");
  const rules = {
    name: (v) => (v.trim().length >= 2 ? "" : "Please enter your name."),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Enter a valid email address."),
    subject: (v) => (v.trim().length >= 3 ? "" : "Subject is too short."),
    message: (v) => (v.trim().length >= 10 ? "" : "Message must be at least 10 characters.")
  };
  function validate(input) {
    const msg = rules[input.name](input.value), f = input.closest(".field");
    f.classList.toggle("bad", !!msg); f.querySelector(".err").textContent = msg; return !msg;
  }
  $$("input,textarea", form).forEach((i) => rules[i.name] && i.addEventListener("blur", () => validate(i)));
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); status.className = ""; status.textContent = "";
    const fields = $$("input,textarea", form).filter((i) => rules[i.name]);
    if (!fields.map(validate).every(Boolean)) { status.className = "fail"; status.textContent = "Please fix the highlighted fields."; return; }
    const data = Object.fromEntries(new FormData(form));
    const sb = $("#sendBtn"); sb.disabled = true; sb.textContent = "Sending…";
    try {
      const res = await fetch(window.CONTACT_API || "/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Request failed");
      status.className = "ok"; status.textContent = "Thanks! Your message was sent. I'll reply soon."; form.reset();
    } catch (err) {
      // Backend not reachable (e.g. static hosting): fall back to the visitor's mail app.
      status.className = "fail";
      status.innerHTML = `Couldn't reach the server. <a href="mailto:${encodeURIComponent(P.email)}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message + "\n\n" + data.name)}" style="text-decoration:underline">Send via your email app instead</a>.`;
    } finally { sb.disabled = false; sb.textContent = "Send Message"; }
  });

  /* ---------- loader ---------- */
  const bar = $("#loaderBar"), pct = $("#loaderPct"), loader = $("#loader");
  let pc = 0, loaded = document.readyState === "complete";
  addEventListener("load", () => (loaded = true));
  const t0 = performance.now(), minMs = reduce ? 0 : 1300;
  (function fill(t) {
    const target = loaded && t - t0 > minMs ? 100 : Math.min(90, ((t - t0) / minMs) * 90);
    pc += (target - pc) * 0.12; if (target === 100 && pc > 99.5) pc = 100;
    bar.style.width = pc + "%"; pct.textContent = Math.round(pc) + "%";
    if (pc < 100) requestAnimationFrame(fill); else { loader.classList.add("done"); document.body.classList.add("ready"); }
  })(t0);
})();
