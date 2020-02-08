const btn_navbar = document.getElementById("btn_navbar");
const btn_close = document.getElementById("btn_close");
const nav = document.querySelector(".nav-cover");
const link_tab = document.querySelectorAll(".link-tab");
const scroll_element = document.getElementById("scroll");
const nav_link = document.querySelectorAll(".nav-link");
const about = document.querySelector("#about");
btn_navbar.addEventListener("click", function(events) {
  nav.classList.add("nav-open");
});
btn_close.addEventListener("click", function(events) {
  nav.classList.remove("nav-open");
});
link_tab.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const data = this.getAttribute("href");
    const element = document.querySelector(data);
    const content_tab = document.querySelectorAll(".content-tab");
    // remove all tab active and set active
    link_tab.forEach(tab => {
      tab.classList.remove("active");
    });
    this.classList.add("active");
    // add show class
    content_tab.forEach(content => {
      content.classList.remove("show");
    });
    element.classList.add("show");
  });
});
scroll_element.addEventListener("click", function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

nav_link.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    let id = this.getAttribute("href");
    console.log(id);
  });
});

const offsets = 400;

window.onscroll = function() {
  let now = this.pageYOffset;
  if (now > offsets) {
    scroll_element.classList.add("active");
  } else {
    scroll_element.classList.remove("active");
  }
};
