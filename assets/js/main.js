(function () {
  "use strict";

  // ---------- Theme toggle (persists in localStorage, respects OS preference) ----------
  const STORAGE_KEY = "ar-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  function initTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  initTheme();

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }

  // ---------- Year in footer ----------
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // ---------- Scroll-reveal for sections ----------
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const targets = document.querySelectorAll(".section, .hero-stats, .timeline-item, .card, .edu-item, .contact-card");
    targets.forEach(function (el) { el.classList.add("reveal"); });

    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    targets.forEach(function (el) { io.observe(el); });
  }
})();
