document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  });
});

window.addEventListener("scroll", () => {
  document.querySelector(".custom-nav").classList.toggle("shadow", window.scrollY > 50);
});