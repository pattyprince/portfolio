//Script del menu toggle
const overlayLayer = document.querySelector(".overlay");
const navLayer = document.querySelector(".nav");
const menuList = document.querySelectorAll(".nav__menu-list a");

menuList.forEach((item) => {
  item.addEventListener("click", handleToggleMenu);
});

function handleToggleMenu() {
  navLayer.classList.toggle("nav-open");
  overlayLayer.classList.toggle("overlay-active");
}

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    document.querySelector(".logo").style.display = "block";
  } else {
    document.querySelector(".logo").style.display = "none";
  }
}
