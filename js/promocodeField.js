const promoElems = document.querySelectorAll(".promo");

function handlePromo(link, field) {
  if (field.classList.contains("hidden")) {
    field.classList.remove("hidden");
    link.classList.add("hidden");
  }
}

promoElems.forEach(elem => {
  const promoLink = elem.querySelector(".promo-link");
  const promoField = elem.querySelector(".promo-field");
  elem.addEventListener("click", () => {
    elem.classList.add("active")
    handlePromo(promoLink, promoField);
  });
});
