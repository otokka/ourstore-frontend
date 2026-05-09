// ===============================
// IMAGE SLIDER SCRIPT
// ===============================

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  let currentSlide = 0;

  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dots span");
  const totalSlides = slides.length;

  // Safety check
  if (totalSlides === 0) return;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      if (dots[i]) {
        dots[i].classList.toggle("active", i === index);
      }
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % totalSlides);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }

  function goToSlide(index) {
    showSlide(index);
  }

  // Auto slide every 5 seconds
  let sliderInterval = setInterval(nextSlide, 5000);

  // Pause auto-slide on hover
  const slider = document.querySelector(".slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => {
      clearInterval(sliderInterval);
    });

    slider.addEventListener("mouseleave", () => {
      sliderInterval = setInterval(nextSlide, 5000);
    });
  }

  // Make dot clicks work
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  // Make arrows work (if present)
  const nextArrow = document.querySelector(".arrow.right");
  const prevArrow = document.querySelector(".arrow.left");

  if (nextArrow) nextArrow.addEventListener("click", nextSlide);
  if (prevArrow) prevArrow.addEventListener("click", prevSlide);

  // Initialize first slide
  showSlide(0);
});
