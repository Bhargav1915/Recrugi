// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".scroll-reveal, .fadeInUp");
const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el) => scrollObserver.observe(el));

// Navbar Shrink on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// WhatsApp Chat Widget
const whatsappBtn = document.createElement("div");
whatsappBtn.id = "whatsapp-chat";
whatsappBtn.innerHTML = `
  <img src="assets/images/whatsapp.svg" alt="WhatsApp">
  <span>Chat with us</span>
`;
whatsappBtn.addEventListener("click", () => {
  window.open("https://wa.me/919999999999", "_blank");
});
document.body.appendChild(whatsappBtn);

// Testimonial Slider with Auto-play and Dots
const testimonials = document.querySelectorAll('.testimonial');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const sliderNav = document.querySelector('.slider-nav');

let currentSlide = 0;
let autoPlayInterval;

// Create dot navigation
const dotContainer = document.createElement('div');
dotContainer.classList.add('dots');
testimonials.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    resetAutoPlay();
  });
  dotContainer.appendChild(dot);
});
sliderNav?.appendChild(dotContainer);

function showSlide(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) t.classList.add('active');
  });
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  showSlide(currentSlide);
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000); // 5 seconds
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

nextBtn?.addEventListener('click', () => {
  nextSlide();
  resetAutoPlay();
});

prevBtn?.addEventListener('click', () => {
  prevSlide();
  resetAutoPlay();
});

// Pause on hover
const slider = document.querySelector('.testimonial-slider');
slider?.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
slider?.addEventListener('mouseleave', () => startAutoPlay());

showSlide(currentSlide);
startAutoPlay();




// Reveal on scroll effect
const elements = document.querySelectorAll(".fadeInUp");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 10000) {
      el.style.animationPlayState = "running";
    }
  });
});









// AI Modal Logic (New)
const aiBtn = document.querySelector('.ai-modal-btn');
const aiModal = document.getElementById('aiModal');
const closeModal = document.querySelector('.close-modal');

if (aiBtn && aiModal && closeModal) {
  aiBtn.addEventListener('click', () => {
    aiModal.style.display = 'flex';
  });

  closeModal.addEventListener('click', () => {
    aiModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === aiModal) {
      aiModal.style.display = 'none';
    }
  });
}
