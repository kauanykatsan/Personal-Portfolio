gsap.registerPlugin(ScrollTrigger);

const miniHero = document.querySelector(".hero-mini");

gsap.to(".hero-content", {
  y: 7,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

ScrollTrigger.create({
  trigger: ".hero",
  start: "bottom 110px",
  onEnter: () => miniHero.classList.add("show"),
  onLeaveBack: () => miniHero.classList.remove("show")
});
