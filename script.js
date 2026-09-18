const menu = document.querySelector(".menu");
const links = document.querySelector(".navlinks");

if (menu && links) {
  menu.addEventListener("click", () => {
    const open = links.classList.toggle("open");

    menu.setAttribute("aria-expanded", open);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll(".navlinks a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");

    if (menu) {
      menu.setAttribute("aria-expanded", "false");
    }
  });
});
