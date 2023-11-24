const bnrEl = document.querySelector(".bnr2");
const titleEl = document.querySelector(".bnr2-title-animate");
const btnEl = document.querySelector(".bnr2-btn-animate");

let isIntersecting = false;
let delay = parseInt(bnrEl.dataset.animationDelay) || 300;

function setStateByTimeout(target, index, delay) {
  setTimeout(() => {
    target.classList.add("animate-active");
  }, delay * index);
}

function handleAnimation() {

  const elems = titleEl.querySelectorAll(".step-animate-element");

  console.log(elems);

  elems.forEach((elem, index) => {
    setStateByTimeout(elem, index, delay);
    setStateByTimeout(btnEl, index, delay);
  });

  setInterval(() => {
    btnEl.classList.remove("animate-active");
    setTimeout(() => {
      setStateByTimeout(btnEl, 0, 0);
      elems.forEach((elem, index) => {
        elem.classList.remove("animate-active");
        setStateByTimeout(elem, index, delay);
      });
    }, 1000);
  }, (delay * elems.length) + 1000);

}

function init() {
  if (document.documentElement.clientHeight - bnrEl.getBoundingClientRect().top > 100 && !isIntersecting) {
    isIntersecting = true;
    handleAnimation();
  }
}

init();

document.addEventListener("scroll", init);