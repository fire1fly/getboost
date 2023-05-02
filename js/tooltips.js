const tooltips = document.querySelectorAll(".tooltip-trigger");

tooltips.forEach(item => {
  // console.log(item.dataset);
  tippy(item, {
    placement: item.dataset.placement || "top",
    content: item.querySelector(".tooltip"),
  })
});