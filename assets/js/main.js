/* Forward Deployed CPA — progressive enhancement only.
   The site is fully functional with JS disabled; this just adds polish. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- current year ---------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- mobile nav ------------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- scroll reveal --------------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- typed hero line ------------------------------------------------- */
  var typer = document.querySelector("[data-type]");
  if (typer && !reduce) {
    var phrases = (typer.getAttribute("data-type") || "").split("|").filter(Boolean);
    if (phrases.length) {
      var pi = 0, ci = 0, deleting = false;
      var out = typer.querySelector(".type-out") || typer;
      var tick = function () {
        var word = phrases[pi];
        out.textContent = word.slice(0, ci);
        if (!deleting && ci < word.length) { ci++; setTimeout(tick, 55); }
        else if (!deleting && ci === word.length) { deleting = true; setTimeout(tick, 1800); }
        else if (deleting && ci > 0) { ci--; setTimeout(tick, 28); }
        else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 260); }
      };
      tick();
    }
  }

  /* ---- newsletter (no backend yet — graceful capture) ------------------ */
  document.querySelectorAll("form[data-signup]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type=email]');
      var note = form.parentElement.querySelector(".form-note");
      if (!input || !input.value) return;
      if (note) {
        note.textContent = "❯ thanks — you're on the list. (Connect your ESP in main.js to go live.)";
      }
      form.reset();
    });
  });
})();
