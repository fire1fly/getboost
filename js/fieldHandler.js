document.addEventListener("DOMContentLoaded", function() {
  let fields = document.querySelectorAll('INPUT[type="text"], INPUT[type="password"], INPUT[type="number"], INPUT[type="email"]');

  fields = [...fields].filter(element => !element.closest('.m'));

  console.log(fields);

  function getPosition(el) {
    let x = 0, y = 0, n = true;

    do {
      if (n) {
        x += el.offsetLeft || 0
        y += el.offsetTop || 0
        n = false
      } else if (getComputedStyle(el).position === "relative") {
        n = true
      }
      el = el.parentElement;
    } while (el != null && (el.tagName || '').toLowerCase() !== 'html');

    return {x: parseInt(x, 10), y: parseInt(y, 10)};
  }

  function handleField(e) {;
    const offset = (getPosition(e.target).y + 100);
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }

  if (window.matchMedia("only screen and (max-width: 991px)").matches) {
    fields.forEach(field => field.addEventListener("focus", handleField));
  }
});