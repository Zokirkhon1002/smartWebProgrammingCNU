// @ts-nocheck
const checkbox = document.getElementById("check");
const sections = document.querySelectorAll("section");
const navbarItems = document.querySelectorAll(".item");

window.onscroll = () => {
  sections.forEach((section) => {
    let [top, offsetTop, offsetHeight, id] = [
      window.scrollY,
      section.offsetTop,
      section.offsetHeight,
      section.getAttribute("id"),
    ];
    if (top >= offsetTop - 70 && top < offsetTop + offsetHeight + 400) {
      navbarItems.forEach((li) => {
        li.classList.remove("active");
        if (li.querySelector("a").getAttribute("href") === "#" + id) {
          li.classList.add("active");
        }
      });
    }
  });
};

navbarItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (window.matchMedia("max-width: 620px")) {
      checkbox.checked = false;
      scrollOn();
    }
  });
});

function scrollOff() {
  document.body.style.overflow = "hidden";
}
function scrollOn() {
  document.body.style.overflow = "auto";
}
