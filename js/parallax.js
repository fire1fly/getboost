// контейнер, в котором должен происходить параллакс должен иметь класс parallax-container
// соответственно элемент должен иметь класс parallax-container
// по умолчанию движение элементов идет за курсором с коэффициентом скорости движения 1/40
// если нужно движение против курсора, элементу нужно добавить атрибут data-direction="reverse"

class Parallax {
  constructor(container) {
    this.container = container;
    this.elems = container.querySelectorAll(".parallax-element");
    this.ratio = parseInt(container.dataset.parallaxRatio) || 40;
    this.setup();
  }

  setup() {
    this.handleParallax = this.handleParallax.bind(this);
    this.container.addEventListener("mousemove", this.handleParallax);
  }

  handleParallax(e) {
    let coordX = (e.clientX) / this.ratio;
    let coordY = (e.clientY) / this.ratio;
    this.elems.forEach(elem => {
      if (elem.dataset.direction === "reverse") {
        coordX = -1 * coordX;
        coordY = -1 * coordY;
      }
      elem.style.transform = `translate(${coordX}%, ${coordY}%)`;
    });
  }
}

const parallaxConts = document.querySelectorAll(".parallax-container");

parallaxConts.forEach(item => {
  const parallax = new Parallax(item);
});