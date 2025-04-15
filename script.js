// Animasi efek mengetik
var typed = new Typed(".typing", {
    strings: ["DevOps Enthusiast", "UI/UX Designer", "Pelajar SMK TJKT"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
  
  // Dark Mode Toggle
  const toggleButton = document.getElementById("toggle-mode");
  const body = document.body;
  
  if (localStorage.getItem("mode") === "light") {
    body.classList.add("light-mode");
    toggleButton.textContent = "☀️";
  }
  
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("mode", "light");
      toggleButton.textContent = "☀️";
    } else {
      localStorage.setItem("mode", "dark");
      toggleButton.textContent = "🌙";
    }
  });
  
  // Smooth Scroll (saat klik nav link)
  document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Back-to-Top Button
  const backToTopButton = document.getElementById("back-to-top");
  
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  