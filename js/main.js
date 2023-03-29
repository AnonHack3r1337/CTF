const darkModeSwitch = document.getElementById("dark-mode-switch");
const body = document.querySelector("body");

darkModeSwitch.addEventListener("change", function() {
  body.classList.toggle("dark-mode");
});
