"use client";

export default function BackToTop() {
  return (
    <a
      href="#main"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", location.pathname + location.search);
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
    >
      ÎNAPOI SUS <span aria-hidden="true">↑</span>
    </a>
  );
}
