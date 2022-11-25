class Dropblock {
  constructor(el) {
    this.$drop = el;
    this.$dropTrigger = this.$drop.querySelector(".drop-trigger");
    this.$dropBlock = this.$drop.querySelector(".drop-block"); // temp

    this.check();
    this.setup();
  }

  check() {
    if (!(this.$dropTrigger && this.$dropBlock)) {
      throw new Error("The necessary elements are missing");
    }
    return null;
  }

  setup() {
    this.$dropTrigger.addEventListener("click", () => this.toggle())
  }

  toggle() {
    this.$drop.classList.toggle("active");
  }
}

const dropEls = document.querySelectorAll(".drop");

dropEls.forEach(item => {
  const drop = new Dropblock(item);
})