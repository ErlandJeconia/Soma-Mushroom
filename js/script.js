// ============================================================
// SOMOMASROOM — interaksi ringan, tanpa dependency eksternal
// ============================================================

// Toggle menu mobile
const navBurger = document.getElementById("navBurger");
const navLinks = document.querySelector(".nav__links");

if (navBurger && navLinks) {
  navBurger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navBurger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navBurger.setAttribute("aria-expanded", "false");
    });
  });
}

// Gambar garis "miselium" pada alur produksi saat section terlihat
const flowPath = document.getElementById("flowPath");
const flowSection = document.getElementById("myceliumFlow");

if (flowPath && flowSection && "IntersectionObserver" in window) {
  const length = flowPath.getTotalLength();
  flowPath.style.strokeDasharray = String(length);
  flowPath.style.strokeDashoffset = String(length);
  flowPath.style.transition = "stroke-dashoffset 2.2s ease-out";

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          flowPath.style.strokeDashoffset = "0";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(flowSection);
}

// Navbar: tambah bayangan halus setelah scroll
const nav = document.getElementById("nav");
if (nav) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 12) {
      nav.style.boxShadow = "0 8px 24px rgba(0,0,0,0.25)";
    } else {
      nav.style.boxShadow = "none";
    }
  });
}
