const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (btn.textContent == "On") {
    bulb.style.backgroundColor = "yellow";
    btn.textContent = "OFF";
  } else {
    bulb.style.backgroundColor = "";
    btn.textContent = "On";
  }
});
