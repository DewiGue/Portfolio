document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("main section");
  
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("data-target");
  

        sections.forEach(section => section.classList.remove("active"));
  

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add("active");
        }
      });
    });
  });
  