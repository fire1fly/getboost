const stepsObjects = document.querySelectorAll(".step-animate");

function setStateByTimeout(target, index, container, delay) {
  setTimeout(() => {
    target.classList.add("animate-active");
    if (container.dataset.animationFillmode === "backwards") {
      setTimeout(() => {
        target.classList.remove("animate-active");
      }, delay);
    }
  }, delay * index);
}

function handleSteps(entries, observer) {

  entries.forEach(entry => {

    let delay = parseInt(entry.target.dataset.animationDelay) || 800

    const elems = entry.target.querySelectorAll(".step-animate-element");

    if (entry.isIntersecting) {
      elems.forEach((elem, index) => {
        setStateByTimeout(elem, index, entry.target, delay)
      });

      if (entry.target.dataset.animationFillmode === "backwards") {
        setTimeout(() => {
          elems.forEach(elem => {
            elem.classList.add("animate-active");
            setTimeout(() => {
              elem.classList.remove("animate-active");
            }, 1000);
          });
        }, delay * elems.length + 300);
      }

      if (entry.target.dataset.animationIteration === "infinite") {
        setInterval(() => {
          elems.forEach((elem, index) => {
            elem.classList.remove("animate-active");
            setStateByTimeout(elem, index, entry.target, delay)
          });
        }, 5000);
      }
    }
  });
}

const stepsObserver = new IntersectionObserver(handleSteps, {
  threshold: 0.5
});

stepsObjects.forEach(element => {
  stepsObserver.observe(element);
});