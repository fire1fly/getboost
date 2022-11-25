const intersectionObjects = document.querySelectorAll(".intersection-element");

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-active");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5
});

intersectionObjects.forEach(element => {
  observer.observe(element);
});