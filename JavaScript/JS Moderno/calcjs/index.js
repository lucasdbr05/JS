import calculate from "./modules.js";
import copyToClipboard from "./modules.js";
import { handleButtonPress, handleClear, handleTyping } from "./modules.js";
import switchTheme from "./modules.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

document.querySelector("#clear").addEventListener("click", handleClear);
document.querySelector("#input").addEventListener("keydown", handleTyping);
document.querySelector("#equal").addEventListener("click", calculate);
document
  .querySelector("#copyToClipboard")
  .addEventListener("click", copyToClipboard);
document.querySelector("#themeSwitcher").addEventListener("click", switchTheme);
