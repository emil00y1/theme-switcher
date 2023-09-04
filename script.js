const body = document.querySelector("body");

document.querySelectorAll("option").forEach((option) => {
  addEventListener("click", optionClicked);
});

function optionClicked(evt) {
  if (evt.target.value === "light") {
    body.dataset.theme = "light";
  } else if (evt.target.value === "dark") {
    body.dataset.theme = "dark";
  } else if (evt.target.value === "hawaii") {
    body.dataset.theme = "hawaii";
  }
}
