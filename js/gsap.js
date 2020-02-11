// Object Timeline
const tl = gsap.timeline({ duration: 0.4, ease: "power4.out" });
const introTimeline = gsap.timeline({
  duration: 0.6,
  ease: "power4.out"
});
const portfolio = gsap.timeline({
  duration: 0.6,
  ease: "power4.out"
});
const contactMe = gsap.timeline({
  duration: 0.6,
  ease: "power4.out"
});
const footer = gsap.timeline({
  duration: 0.6,
  ease: "power4.out"
});
const css = CSSRulePlugin.getRule(".navbar-nav li.active::after");
const introAfter = CSSRulePlugin.getRule("#about .title-global::after");
const introBefore = CSSRulePlugin.getRule("#about .title-global::before");
const portfolioAfter = CSSRulePlugin.getRule(".project .title-global::after");
const portfolioBefore = CSSRulePlugin.getRule(".project .title-global::before");
const contactAfter = CSSRulePlugin.getRule(".contact-us .title-global::after");
const contactBefore = CSSRulePlugin.getRule(
  ".contact-us .title-global::before"
);

// Scroll Magic
const controller = new ScrollMagic.Controller();

tl.from(".logo", { y: 50 })
  .from(".navbar-nav li", {
    y: 50,
    opacity: 0,
    stagger: 0.3
  })
  .from(css, {
    cssRule: {
      opacity: 0
    }
  })
  .fromTo(
    ".jmb-title",
    0.8,
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0 },
    "-=0.7"
  )
  .from(".jmb-subtitle", {
    y: -30,
    opacity: 0
  })
  .from(".jmb-desc  p", {
    y: -30,
    opacity: 0
  })
  .from(".jmb-footer  button", {
    y: -20,
    opacity: 0
  });

// Intro Gsap
introTimeline
  .fromTo(
    ".intro-profil .title-global",
    0.7,
    {
      opacity: 0,
      y: -30
    },
    { opacity: 1, y: 0 }
  )
  // .fromTo([introBefore, introAfter], { opacity: 0 }, { opacity: 1 })
  .fromTo(
    ".intro-profil .card-header",
    0.7,
    { opacity: 0, x: -30, scaleX: 0.6 },
    { opacity: 1, x: 0, scaleX: 1 }
  )
  .fromTo(
    ".intro-profil .card-body",
    0.7,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0 }
  );

// Portfolio
portfolio
  .fromTo(
    ".project .title-global",
    0.7,
    {
      opacity: 0,
      y: -30
    },
    { opacity: 1, y: 0 }
  )
  .fromTo(
    ".project .list-project",
    0.3,
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0 }
  )
  .from(".list-project .tab-project li", 0.7, {
    opacity: 0,
    x: -30,
    stagger: { amount: 0.5 }
  })
  .from(
    ".list-project .content-tab",
    0.3,
    {
      opacity: 0,
      x: 30
    },
    "-=0.6"
  )
  .from(".box-header", 0.5, {
    opacity: 0,
    y: -10
  })
  .from(".box-body", 0.5, {
    opacity: 0,
    y: -10,
    stagger: 0.5
  })
  .fromTo(
    ".intro-profil .card-body",
    0.7,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0 }
  );

// Contact Me
contactMe
  .from(".contact-us .title-global", 0.7, {
    opacity: 0,
    x: -30
  })
  .fromTo(".contact-us .box-next", { opacity: 0, y: -30 }, { opacity: 1, y: 0 })
  .from(".contact-us .form-group", 0.7, {
    opacity: 0,
    x: -30,
    stagger: 0.5
  })
  .from(
    ".contact-us .btn",
    0.8,
    {
      opacity: 0,
      y: 30
    },
    "-=0.6"
  )
  .from(".box-header", 0.5, {
    opacity: 0,
    y: -10
  })
  .from(".box-body", 0.5, {
    opacity: 0,
    y: -10,
    stagger: 0.5
  })
  .fromTo(
    ".intro-profil .card-body",
    0.7,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0 }
  );
footer
  .from(".footer", 0.7, { opacity: 0, x: "-100%" })
  .from(".footer-icon", 0.5, { opacity: 0, y: 30, stagger: 0.2 })
  .from(".copyright", { opacity: 0, y: 30 });
// Scroll Magic Scene
new ScrollMagic.Scene({
  triggerElement: ".intro-profil",
  triggerHook: 0.6
})
  .setTween(introTimeline)
  .reverse(false)
  .addIndicators({ name: "intro profil" })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".project",
  triggerHook: 0.6
})
  .setTween(portfolio)
  .reverse(false)
  .addIndicators({ name: "project" })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".contact-us",
  triggerHook: 0.6
})
  .setTween(contactMe)
  .reverse(false)
  .addIndicators({ name: "contact" })
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".footer",
  triggerHook: 0.9
})
  .setTween(footer)
  .reverse(false)
  .addIndicators({ name: "footer" })
  .addTo(controller);
