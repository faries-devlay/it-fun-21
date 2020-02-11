// Object Timeline
const tl = gsap.timeline({ duration: 0.4, ease: "power4.out" });
const spinnerTl = gsap.timeline({
  ease: "power4.out"
});
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

const modals = document.querySelectorAll(".btn-detail");
const close_modal = document.querySelector(".popup__close");
const transition = gsap.timeline();
const popup = document.querySelector(".popup");
const popupInner = document.querySelector(".popup-inner");
const spinner = document.querySelector(".spinner-box");

// Scroll Magic
const controller = new ScrollMagic.Controller();

spinnerTl
  .fromTo(spinner, 1, { y: "-100vh", opacity: 0 }, { y: "0vh", opacity: 1 })
  .from(".spinner-box .box", { y: -20, opacity: 0 });
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
  .from(".list-project .tab-project li", 0.5, {
    opacity: 0,
    x: -30,
    stagger: 0.5
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
  .fromTo(
    ".box-header",
    0.5,
    {
      opacity: 0,
      y: -10
    },
    { opacity: 1, y: 0 }
  )
  .fromTo(
    ".box-body",
    0.5,
    {
      opacity: 0,
      y: -10,
      stagger: 0.5
    },
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
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".project",
  triggerHook: 0.6
})
  .setTween(portfolio)
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".contact-us",
  triggerHook: 0.6
})
  .setTween(contactMe)
  .reverse(false)
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".footer",
  triggerHook: 0.9
})
  .setTween(footer)
  .reverse(false)
  .addTo(controller);

modals.forEach(modal => {
  modal.addEventListener("click", function() {
    popup.style.opacity = "1";
    popup.style.visibility = "visible";
    popupInner.style.bottom = "0";
    popupInner.style.right = "0";
  });
});

close_modal.addEventListener("click", function(e) {
  e.preventDefault();
  popupInner.style.bottom = "-100vw";
  popupInner.style.right = "-100vh";
  popup.style.visibility = "hidden";
});

window.onload = function() {
  spinner.style.display = "none";
};
