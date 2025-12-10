(function () {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  document.querySelectorAll(".nav-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const list = document.getElementById("navLinks");
      if (list) list.classList.toggle("show");
    });
  });
})();

(function () {
  const links = document.querySelectorAll(".nav-links a");
  const current = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    if (href === current || (href === "index.html" && current === "")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
})();

(function () {
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Solicitud recibida. Te confirmaremos vía correo o teléfono.");
      bookingForm.reset();
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensaje enviado. Gracias por contactarnos.");
      contactForm.reset();
    });
  }
})();
