document.addEventListener("DOMContentLoaded", function() {
  let fields = document.querySelectorAll('INPUT[type="text"], INPUT[type="password"], INPUT[type="number"], INPUT[type="email"]');

  fields = [...fields].filter(element => !element.closest('.m'));

  function handleField(e) {
    const input = e.target.closest("INPUT");
    const topOffsetInput = input.getBoundingClientRect().top;

    if (topOffsetInput > (window.innerHeight / 2) - 100) {
      const offset = topOffsetInput - 100;
      window.scrollBy({
        top: offset,
        behavior: 'smooth'
      });
    }
  }

  if (window.matchMedia("only screen and (max-width: 991px)").matches) {
    fields.forEach(field => {
      field.addEventListener("click", handleField);
    });
  }
});