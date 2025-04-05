// App state
let currentLanguage = "en";
let isRTL = false;

// DOM elements
const app = document.getElementById("app");

// Initialize app
document.addEventListener("DOMContentLoaded", function () {
  // Setup language selector removal (no longer needed)

  // Animate elements on scroll
  const fadeElements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, observerOptions);

  fadeElements.forEach((element) => {
    appearOnScroll.observe(element);
  });

  // Add hover effects to buttons
  const buttons = document.querySelectorAll(
    ".cta-button, .cta-button-lg, .select-plan-btn"
  );
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.7)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.5)";
    });

    button.addEventListener("mousedown", function () {
      this.style.transform = "scale(0.95)";
    });

    button.addEventListener("mouseup", function () {
      this.style.transform = "scale(1.05)";
    });
  });

  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

// Set RTL attribute if needed
if (isRTL) {
  document.body.setAttribute("dir", "rtl");
  app.classList.add("rtl");
} else {
  document.body.removeAttribute("dir");
  app.classList.remove("rtl");
}

// Subscription data (for reference)
const subscriptionPlans = [
  {
    duration: 1,
    price: 1000,
    features: [
      "Personal Training Sessions",
      "Custom Workout Plan",
      "Nutrition Guidance",
      "Progress Tracking"
    ]
  },
  {
    duration: 2,
    price: 1600,
    features: [
      "Personal Training Sessions",
      "Custom Workout Plan",
      "Nutrition Guidance",
      "Progress Tracking",
      "Video Form Check"
    ]
  },
  {
    duration: 3,
    price: 1900,
    originalPrice: 2500,
    isSpecial: true,
    features: [
      "Personal Training Sessions",
      "Custom Workout Plan",
      "Nutrition Guidance",
      "Progress Tracking",
      "Video Form Check",
      "Weekly Check-ins"
    ]
  },
  {
    duration: 4,
    price: 2400,
    features: [
      "Personal Training Sessions",
      "Custom Workout Plan",
      "Nutrition Guidance",
      "Progress Tracking",
      "Video Form Check",
      "Weekly Check-ins",
      "Priority Support"
    ]
  }
];