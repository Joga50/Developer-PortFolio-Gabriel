const hedaer = document.querySelector("header");
window.addEventListener("scroll", function () {
  hedaer.classList.toggle("sticky", window.scrollY > 100);
});
