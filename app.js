// ============================================================
// TREINTA MÁS TREINTA — Interacciones
// ============================================================

(function () {
  const T = window.TMT;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // -----------------------------------------------------------
  // NAV — sticky scroll state
  // -----------------------------------------------------------
  const topnav = $("#topnav");
  let lastY = 0;
  function onScroll() {
    const y = window.scrollY;
    topnav.classList.toggle("scrolled", y > 24);
    lastY = y;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // -----------------------------------------------------------
  // SIDE PROGRESS — IntersectionObserver
  // -----------------------------------------------------------
  const sideBtns = $$("#sideprogress button");
  const sideMap = new Map();
  sideBtns.forEach((b) => {
    const anchor = b.dataset.anchor;
    b.addEventListener("click", () => {
      const target = document.querySelector(anchor);
      if (target) target.scrollIntoView({ behavior: isReducedMotion ? "auto" : "smooth", block: "start" });
    });
    sideMap.set(anchor, b);
  });
  const sections = $$("section[id]");
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = "#" + entry.target.id;
        sideBtns.forEach((b) => b.classList.toggle("active", b.dataset.anchor === id));
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
  sections.forEach((s) => sectionObs.observe(s));

  // Smooth anchor scroll for top nav links
  $$('.nav-links a, .hero-scroll').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: isReducedMotion ? "auto" : "smooth", block: "start" });
        }
      }
    });
  });

  // -----------------------------------------------------------
  // HERO — title word stagger + counters
  // -----------------------------------------------------------
  $$(".hero-title .word").forEach((w, i) => {
    w.style.animationDelay = (90 * i + 200) + "ms";
  });

  function animateCounter(el, target) {
    if (isReducedMotion) { el.textContent = target; return; }
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      el.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.counter, 10);
        animateCounter(el, target);
        counterObs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  $$("[data-counter]").forEach((el) => counterObs.observe(el));

  // -----------------------------------------------------------
  // SCROLL REVEAL
  // -----------------------------------------------------------
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -10% 0px" });
  $$(".reveal").forEach((el) => revealObs.observe(el));

  // -----------------------------------------------------------
  // DIAGNÓSTICO — render + accordion
  // -----------------------------------------------------------
  const diagGrid = $("#diagGrid");
  if (diagGrid && T.diagnostico) {
    diagGrid.innerHTML = T.diagnostico.map((d, i) => `
      <div class="diag-col${i === 0 ? " open" : ""}">
        <div class="col-eyebrow">${esc(d.eyebrow)}</div>
        <h3 class="col-title">${esc(d.titulo)}</h3>
        <button class="col-toggle" aria-expanded="${i === 0 ? "true" : "false"}">
          <span>Ver detalle</span>
          <span class="ic" aria-hidden="true"></span>
        </button>
        <ul class="col-bullets">
          ${d.bullets.map(b => `<li>${esc(b)}</li>`).join("")}
        </ul>
      </div>
    `).join("");
    $$(".diag-col", diagGrid).forEach((col) => {
      const toggle = $(".col-toggle", col);
      toggle.addEventListener("click", () => {
        const open = col.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
    });
  }

  // -----------------------------------------------------------
  // BIG IDEA — pilares
  // -----------------------------------------------------------
  const pilaresGrid = $("#pilaresGrid");
  if (pilaresGrid && T.pilares) {
    pilaresGrid.innerHTML = T.pilares.map((p, i) => `
      <div class="pilar" data-pilar="${i}" role="button" tabindex="0">
        <div class="pilar-n">${esc(p.n)}</div>
        <div class="pilar-nombre">${esc(p.nombre)}</div>
        <div class="pilar-resumen">${esc(p.resumen)}</div>
        <span class="pilar-more">Ver desarrollo</span>
      </div>
    `).join("");
    $$(".pilar", pilaresGrid).forEach((el) => {
      const idx = +el.dataset.pilar;
      const p = T.pilares[idx];
      const open = () => openModal(renderPilar(p));
      el.addEventListener("click", open);
      el.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
  }
  function renderPilar(p) {
    return `
      <div class="modal-eyebrow">— Pilar ${esc(p.n)}<span class="roman">${esc(p.n)}</span></div>
      <h2 class="modal-title">${esc(p.nombre)}</h2>
      <p class="modal-sub">${esc(p.resumen)}</p>
      <div class="modal-block">
        <h4>Desarrollo</h4>
        <p>${esc(p.desarrollo)}</p>
      </div>
      <div class="modal-block">
        <h4>Formatos en los que vive</h4>
        <p>${esc(p.formatos)}</p>
      </div>
    `;
  }

  // -----------------------------------------------------------
  // TABS — Sistema de contenido
  // -----------------------------------------------------------
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      $$(".tab").forEach((t) => t.classList.toggle("active", t === tab));
      $$(".tab-panel").forEach((p) => p.classList.toggle("active", p.dataset.panel === target));
    });
  });

  // -----------------------------------------------------------
  // REELS / CARRUSELES — formato cards + grid de 12
  // -----------------------------------------------------------
  function renderFormatoCard(f, type) {
    return `
      <div class="formato-card" data-type="${type}" data-id="${esc(f.id)}" role="button" tabindex="0">
        ${f.desarrollado ? `<span class="fmt-badge">Desarrollada</span>` : ""}
        <div class="fmt-id">${esc(f.id)}</div>
        <div class="fmt-pilar">
          <span class="roman">${esc(f.pilarN)}</span>
          <span>${esc(f.pilar)}</span>
        </div>
        <div class="fmt-nombre">${esc(f.nombre)}</div>
        <div class="fmt-hook">${esc(f.hookTipo)}</div>
        <div class="fmt-meta">
          <span class="fmt-dur">${esc(f.duracion || f.slides + " slides")}</span>
          <span class="fmt-link">Detalle</span>
        </div>
      </div>
    `;
  }
  const reelsGrid = $("#reelsGrid");
  if (reelsGrid && T.reelsFormatos) {
    reelsGrid.innerHTML = T.reelsFormatos.map(f => renderFormatoCard(f, "reel")).join("");
  }
  const carruselesGrid = $("#carruselesGrid");
  if (carruselesGrid && T.carruselesFormatos) {
    carruselesGrid.innerHTML = T.carruselesFormatos.map(f => renderFormatoCard(f, "carrusel")).join("");
  }

  $$(".formato-card").forEach((c) => {
    const type = c.dataset.type;
    const id = c.dataset.id;
    const open = () => {
      const data = type === "reel"
        ? T.reelsFormatos.find(x => x.id === id)
        : T.carruselesFormatos.find(x => x.id === id);
      openModal(type === "reel" ? renderReel(data) : renderCarrusel(data));
    };
    c.addEventListener("click", open);
    c.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });

  function renderReel(r) {
    let out = `
      <div class="modal-eyebrow">— Reel · ${esc(r.id)} · ${esc(r.pilar)} <span class="roman">${esc(r.pilarN)}</span></div>
      <h2 class="modal-title">${esc(r.nombre)}</h2>
      <p class="modal-sub">${esc(r.hookTipo)}</p>

      <div class="modal-block">
        <h4>Duración objetivo</h4>
        <p>${esc(r.duracion)}</p>
      </div>

      <div class="modal-block">
        <h4>Estructura del guion</h4>
        <ul class="numbered">${r.estructura.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
      </div>

      <div class="modal-block">
        <h4>KPI objetivo</h4>
        <p>${esc(r.kpi)}</p>
      </div>
    `;
    if (r.desarrollado) {
      out += `
        <div class="modal-block">
          <h4>Pieza desarrollada al 100% — Ejemplo</h4>
          <p><strong>Hook (segundo 0-2):</strong> ${esc(r.hookEjemplo)}</p>
          <div class="pre">${esc(r.copyDesarrollado)}</div>
        </div>
        <div class="modal-block">
          <h4>Producción</h4>
          <ul class="plain">${r.produccion.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
        </div>
      `;
    }
    return out;
  }
  function renderCarrusel(c) {
    let out = `
      <div class="modal-eyebrow">— Carrusel · ${esc(c.id)} · ${esc(c.pilar)} <span class="roman">${esc(c.pilarN)}</span></div>
      <h2 class="modal-title">${esc(c.nombre)}</h2>
      <p class="modal-sub">${esc(c.estructura)}</p>

      <div class="modal-block">
        <h4>Slides</h4>
        <p>${esc(c.slides)}</p>
      </div>
      <div class="modal-block">
        <h4>KPI objetivo</h4>
        <p>${esc(c.kpi)}</p>
      </div>
    `;
    if (c.desarrollado && c.slidesDesarrollados) {
      out += `
        <div class="modal-block">
          <h4>Carrusel desarrollado al 100% — Slide a slide</h4>
          ${c.slidesDesarrollados.map(s => `
            <div class="lm-slide">
              <div class="sn">${esc(String(s.n).padStart(2, "0"))}</div>
              <div>
                <div class="st">${esc(s.titulo)}</div>
                <div class="ss">${esc(s.sub)}</div>
                ${s.nota ? `<span class="sn-note">${esc(s.nota)}</span>` : ""}
              </div>
            </div>
          `).join("")}
        </div>
        <div class="modal-block">
          <h4>Copy del pie</h4>
          <div class="pre">${esc(c.copyPie)}</div>
        </div>
      `;
    }
    return out;
  }

  // 12 piezas reels / carruseles
  function renderPiezas12(arr) {
    return `
      <div style="border-top:1px solid var(--rule);">
        ${arr.map(p => `
          <div style="display:grid;grid-template-columns:60px 60px 90px 1fr;gap:24px;padding:18px 0;border-bottom:1px solid var(--rule-soft);font-size:14px;line-height:1.5;align-items:baseline;">
            <span class="mono" style="color:var(--ink-muted);">W${String(p.sem).padStart(2, "0")}</span>
            <span class="mono" style="color:var(--accent-warm);">${esc(p.mes)}</span>
            <span class="mono" style="color:var(--ink);">${esc(p.formato)}</span>
            <span>${esc(p.pieza)}</span>
          </div>
        `).join("")}
      </div>
    `;
  }
  const r12 = $("#reels12Grid");
  if (r12) r12.innerHTML = renderPiezas12(T.reels12);
  const c12 = $("#carruseles12Grid");
  if (c12) c12.innerHTML = renderPiezas12(T.carruseles12);

  // -----------------------------------------------------------
  // LEAD MAGNETS — grid + modal
  // -----------------------------------------------------------
  const lmGrid = $("#lmGrid");
  if (lmGrid && T.leadMagnets) {
    lmGrid.innerHTML = T.leadMagnets.map((lm, i) => `
      <div class="lm-card" data-lm="${i}" role="button" tabindex="0">
        ${lm.desarrollado ? `<span class="lm-badge">Desarrollado</span>` : ""}
        <div class="lm-top">
          <div class="lm-num">${esc(lm.numero)}</div>
          <div class="lm-tag">
            <b>${esc(lm.mes)}</b>
            ${esc(lm.quincena)} · Pilar ${esc(lm.pilarN)}
          </div>
        </div>
        <h3 class="lm-titulo">${esc(lm.titulo)}</h3>
        <p class="lm-sub">${esc(lm.subtitulo)}</p>
        <div class="lm-foot">
          <span class="lm-formato">${esc(lm.formato)}</span>
          <span class="lm-link">Detalle</span>
        </div>
      </div>
    `).join("");
    $$(".lm-card", lmGrid).forEach((c) => {
      const idx = +c.dataset.lm;
      const open = () => openModal(renderLM(T.leadMagnets[idx]));
      c.addEventListener("click", open);
      c.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
  }
  function renderLM(lm) {
    let out = `
      <div class="modal-eyebrow">— Lead magnet · ${esc(lm.numero)} · ${esc(lm.mes)} ${esc(lm.quincena)} <span class="roman">${esc(lm.pilarN)}</span></div>
      <h2 class="modal-title">${esc(lm.titulo)}</h2>
      <p class="modal-sub">${esc(lm.subtitulo)}</p>

      <div class="modal-block">
        <h4>Formato</h4>
        <p>${esc(lm.formato)}</p>
      </div>
      <div class="modal-block">
        <h4>Audiencia objetivo</h4>
        <p>${esc(lm.audiencia)}</p>
      </div>
      <div class="modal-block">
        <h4>Hook de captación</h4>
        <div class="pre">${esc(lm.hook)}</div>
      </div>
      <div class="modal-block">
        <h4>KPI objetivo</h4>
        <p>${esc(lm.kpiObjetivo)}</p>
      </div>
    `;
    if (lm.desarrollado) {
      out += `
        <div class="modal-block">
          <h4>Índice del PDF</h4>
          <table>
            <thead><tr><th>Pág.</th><th>Contenido</th></tr></thead>
            <tbody>
              ${lm.indice.map(it => `<tr><td>${esc(String(it.p))}</td><td>${esc(it.contenido)}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="modal-block">
          <h4>Secuencia de email post-descarga</h4>
          <table>
            <thead><tr><th>Día</th><th>Asunto</th><th>Esencia</th></tr></thead>
            <tbody>
              ${lm.secuencia.map(s => `<tr><td>D+${esc(String(s.dia))}</td><td><strong>${esc(s.asunto)}</strong></td><td>${esc(s.cuerpo)}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div class="modal-block">
          <h4>Diseño</h4>
          <p>${esc(lm.diseño)}</p>
        </div>
        <div class="modal-block">
          <h4>Conexión con el club</h4>
          <p>${esc(lm.conexion)}</p>
        </div>
      `;
    }
    return out;
  }

  // -----------------------------------------------------------
  // EMBUDO — fases + detail
  // -----------------------------------------------------------
  const fasesList = $("#fasesList");
  const faseDetail = $("#faseDetail");
  if (fasesList && T.embudo) {
    fasesList.innerHTML = T.embudo.map((f, i) => `
      <div class="fase-row${i === 0 ? " active" : ""}" data-fase="${i}" role="button" tabindex="0">
        <div class="fase-n">${esc(f.n)}</div>
        <div class="fase-info">
          <div class="nm">${esc(f.nombre)}</div>
          <div class="tt">${esc(f.titulo)}</div>
        </div>
        <div class="fase-arrow">→</div>
      </div>
    `).join("");
    function showFase(idx) {
      const f = T.embudo[idx];
      $$(".fase-row", fasesList).forEach((r) => r.classList.toggle("active", +r.dataset.fase === idx));
      faseDetail.innerHTML = `
        <div class="detail-eyebrow">Fase ${esc(f.n)} — ${esc(f.titulo)}</div>
        <h3 class="detail-titulo">${esc(f.nombre)}</h3>
        <h5>Objetivo</h5>
        <p class="detail-kpi">${esc(f.objetivo)}</p>
        <h5>Tácticas</h5>
        <ul>${f.tacticas.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
        <h5>KPI principal</h5>
        <p class="detail-kpi">${esc(f.kpi)}</p>
        <h5>Herramientas</h5>
        <p class="detail-tools">${esc(f.herramientas)}</p>
      `;
    }
    showFase(0);
    $$(".fase-row", fasesList).forEach((row) => {
      row.addEventListener("click", () => showFase(+row.dataset.fase));
      row.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showFase(+row.dataset.fase); } });
      row.addEventListener("mouseenter", () => showFase(+row.dataset.fase));
    });
  }

  // -----------------------------------------------------------
  // CALENDARIO
  // -----------------------------------------------------------
  const calGrid = $("#calGrid");
  function renderCal(q) {
    if (!calGrid) return;
    const data = T.calendario[q];
    calGrid.innerHTML = data.map((d) => `
      <div class="cal-cell" data-fmt="${esc(d.formato)}" role="button" tabindex="0" data-pieza="${esc(d.pieza)}" data-pilar="${esc(d.pilar)}" data-apunta="${esc(d.apunta)}">
        <div class="dia">${esc(d.dia)}</div>
        <div class="fecha">${esc(d.fecha)}</div>
        <div class="pieza">${esc(d.pieza)}</div>
        <div class="fmt">${esc(d.formato)}</div>
      </div>
    `).join("");
    $$(".cal-cell", calGrid).forEach((cell) => {
      const open = () => {
        openModal(`
          <div class="modal-eyebrow">— Día ${esc(cell.querySelector(".fecha").textContent)} · ${esc(cell.querySelector(".dia").textContent)}</div>
          <h2 class="modal-title">${esc(cell.dataset.pieza)}</h2>
          <div class="modal-block">
            <h4>Formato</h4>
            <p>${esc(cell.dataset.fmt)}</p>
          </div>
          <div class="modal-block">
            <h4>Pilar</h4>
            <p>${esc(cell.dataset.pilar)}</p>
          </div>
          <div class="modal-block">
            <h4>Apunta a</h4>
            <p>${esc(cell.dataset.apunta)}</p>
          </div>
        `);
      };
      cell.addEventListener("click", open);
      cell.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
  }
  renderCal("q1");
  $$(".cal-toggle button").forEach((b) => {
    b.addEventListener("click", () => {
      $$(".cal-toggle button").forEach((x) => x.classList.toggle("active", x === b));
      renderCal(b.dataset.q);
    });
  });

  // -----------------------------------------------------------
  // KPIs
  // -----------------------------------------------------------
  const kpisGrid = $("#kpisGrid");
  if (kpisGrid && T.kpis) {
    const blocks = ["comunidad", "leads", "marca", "conversion"];
    kpisGrid.innerHTML = blocks.map((k) => {
      const b = T.kpis[k];
      return `
        <div class="kpi-block">
          <div class="blk-head">
            <h3 class="blk-titulo">${esc(b.titulo)}</h3>
            <span class="blk-num">${esc(b.n)}</span>
          </div>
          ${b.items.map(it => `
            <div class="kpi-item">
              <div class="kpi-name">${esc(it.metrica)}</div>
              <div class="kpi-obj">${esc(it.objetivo)}</div>
              <div class="kpi-meta">
                <span>Benchmark: ${esc(it.benchmark)}</span>
                <span class="nota">${esc(it.nota)}</span>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }).join("");
  }

  // -----------------------------------------------------------
  // PLAN
  // -----------------------------------------------------------
  const planTimeline = $("#planTimeline");
  if (planTimeline && T.plan) {
    planTimeline.innerHTML = T.plan.fases.map(f => `
      <div class="fase-card">
        <div class="fc-n">Fase ${esc(f.n)}</div>
        <div class="fc-dur">${esc(f.duracion)}</div>
        <h4 class="fc-nm">${esc(f.nombre)}</h4>
        <div class="fc-fechas">${esc(f.fechas)}</div>
        <ul class="fc-hitos">
          ${f.hitos.map(h => `<li>${esc(h)}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }
  const rolesAcc = $("#rolesAcc");
  if (rolesAcc && T.plan) {
    rolesAcc.innerHTML = T.plan.roles.map((r, i) => `
      <div class="role-row">
        <div class="r-name"><span class="r-mark">${String(i + 1).padStart(2, "0")}</span>${esc(r.rol)}</div>
        <div class="r-entrega">${esc(r.entrega)}</div>
      </div>
    `).join("");
  }

  // -----------------------------------------------------------
  // INVERSIÓN
  // -----------------------------------------------------------
  const invGrid = $("#invGrid");
  if (invGrid && T.inversion) {
    invGrid.innerHTML = T.inversion.map(p => `
      <div class="inv-card${p.destacado ? " featured" : ""}">
        ${p.destacado ? `<span class="inv-tag">Recomendado</span>` : ""}
        <div class="inv-num">Nivel ${esc(p.n)}</div>
        <h3 class="inv-name">${esc(p.nombre)}</h3>
        <p class="inv-pos">${esc(p.posicionamiento)}</p>
        <ul class="inv-incluye">
          ${p.incluye.map(i => `<li>${esc(i)}</li>`).join("")}
        </ul>
        <p class="inv-para">${esc(p.paraQuien)}</p>
      </div>
    `).join("");
  }

  // -----------------------------------------------------------
  // SIGUIENTES PASOS
  // -----------------------------------------------------------
  const stepsGrid = $("#stepsGrid");
  if (stepsGrid && T.siguientesPasos) {
    stepsGrid.innerHTML = T.siguientesPasos.map(s => `
      <div class="step">
        <div class="step-n">${esc(s.n)}</div>
        <h4 class="step-titulo">${esc(s.titulo)}</h4>
        <div class="step-dur">${esc(s.duracion)}</div>
        <p class="step-desc">${esc(s.descripcion)}</p>
      </div>
    `).join("");
  }

  // -----------------------------------------------------------
  // MODAL — open / close / focus trap
  // -----------------------------------------------------------
  const modal = $("#modal");
  const modalPanel = $("#modalPanel");
  let lastFocused = null;

  function openModal(html) {
    lastFocused = document.activeElement;
    modalPanel.innerHTML = html;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    modalPanel.scrollTop = 0;
    setTimeout(() => { modalPanel.focus(); }, 60);
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.body.classList.remove("modal-open");
    if (lastFocused) { try { lastFocused.focus(); } catch (e) {} }
  }
  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    // simple focus trap
    if (e.key === "Tab" && modal.classList.contains("open")) {
      const focusables = modalPanel.querySelectorAll("a[href], button, [tabindex='0']");
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // -----------------------------------------------------------
  // CUSTOM CURSOR — desktop only
  // -----------------------------------------------------------
  const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches && window.innerWidth >= 1024;
  if (isFine && !isReducedMotion) {
    document.documentElement.classList.add("has-cursor");
    const dot = $(".cursor-dot");
    const halo = $(".cursor-halo");
    let dx = 0, dy = 0, hx = 0, hy = 0, mx = 0, my = 0;
    document.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });
    function tick() {
      dx += (mx - dx) * 0.55;
      dy += (my - dy) * 0.55;
      hx += (mx - hx) * 0.18;
      hy += (my - hy) * 0.18;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      halo.style.transform = `translate(${hx}px, ${hy}px) translate(-50%, -50%) ${halo.classList.contains("active") ? "scale(1.6)" : ""}`;
      requestAnimationFrame(tick);
    }
    tick();
    const hoverables = "a, button, [role='button'], .formato-card, .lm-card, .pilar, .fase-row, .cal-cell, .diag-col, .step";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverables)) halo.classList.add("active");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverables)) halo.classList.remove("active");
    });
  }

})();
