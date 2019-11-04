console.log("Made at the Reacteur 2019");
let burgerActive = false;
let cartCount = 0;

// ---------- Dark Theme ----------
let darkMode = false;
let running = false;
const element = document.querySelector(".logoTheme");
// console.log("Dark Theme");
if (element && !running) {
  element.addEventListener("click", () => {
    // console.log("Click Dark Theme");
    running = true;
    element.classList.add("rotate");

    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    darkMode = !darkMode;

    setTimeout(function() {
      element.classList.remove("rotate");
      running = false;
    }, 1000);
  });
}
