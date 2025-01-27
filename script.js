document.addEventListener("DOMContentLoaded", () => {
    // Header Section Animations
    gsap.from(".header__content h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".header__content p", { opacity: 0, y: 50, delay: 0.5, duration: 1 });
    gsap.from(".header__content .btn", { opacity: 0, scale: 0.8, delay: 1, duration: 1 });
    gsap.from(".header__image img", { opacity: 0, x: 100, delay: 0.5, duration: 1 });
  
    // Explore Section Animations
    gsap.from(".explore__card", {
      opacity: 1,
      y: 50,
      stagger: 0.2,
      duration: 1,
      delay: 0.5,
      ease: "back.out(1.7)",
    });
  
    // Join Section Animations
    gsap.from(".join__card", {
      opacity: 1,
      scale: 0.8,
      stagger: 0.2,
      duration: 1,
      delay: 1,
      ease: "elastic.out(1, 0.75)",
    });
  
    // Pricing Plan Animations
    gsap.from(".price__card", {
      opacity: 1,
      y: 50,
      stagger: 0.2,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });
  
    // Footer Animations
    gsap.from(".footer__col", {
      opacity: 1,
      y: 50,
      stagger: 0.3,
      duration: 1,
      delay: 1,
    });
  
    // Button Click Functionality
    document.querySelectorAll(".btn").forEach((button) => {
      button.addEventListener("click", () => {
        alert("Thank you for joining!");
      });
  
      // Button Hover Animation
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.1, duration: 0.2 });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.2 });
      });
    });
  
    // Explore Section Navigation
    const exploreCards = document.querySelector(".explore__grid");
    let currentTranslate = 0;
  
    document.querySelectorAll(".explore__nav span").forEach((navButton, index) => {
      navButton.addEventListener("click", () => {
        if (index === 0 && currentTranslate < 0) {
          currentTranslate += 300;
        } else if (index === 1) {
          currentTranslate -= 300;
        }
        gsap.to(exploreCards, { x: currentTranslate, duration: 0.5, ease: "power2.out" });
      });
    });
  
    // Review Section Navigation
    let currentReviewIndex = 0;
    const reviews = document.querySelectorAll(".review__content");
    document.querySelectorAll(".review__nav span").forEach((navButton, index) => {
      navButton.addEventListener("click", () => {
        reviews[currentReviewIndex].classList.remove("visible");
  
        if (index === 0) {
          currentReviewIndex =
            currentReviewIndex > 0 ? currentReviewIndex - 1 : reviews.length - 1;
        } else if (index === 1) {
          currentReviewIndex =
            currentReviewIndex < reviews.length - 1 ? currentReviewIndex + 1 : 0;
        }
  
        reviews[currentReviewIndex].classList.add("visible");
        gsap.fromTo(
          reviews[currentReviewIndex],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
      });
    });
  
    // Custom Cursor Animation
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);
  
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    });
  
    // Cursor Hover Effects
    document.querySelectorAll("button, a").forEach((interactiveElement) => {
      interactiveElement.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
      });
      interactiveElement.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
      });
    });
  });
  