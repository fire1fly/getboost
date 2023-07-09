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
  const promoInput = elem.querySelector(".promo-input");
  const promoSendBtn = elem.querySelector(".promo-btn");

  elem.addEventListener("click", () => {
    elem.classList.add("active")
    handlePromo(promoLink, promoField);
  });

  promoInput.addEventListener("input", (e) => {
    promoSendBtn.disabled = e.target.value ? false : true;
  })
});
