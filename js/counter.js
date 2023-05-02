class Counter {
  constructor(el) {
    this.$valueEl = el.querySelector(".counter-value");
    this.$plus = el.querySelector(".counter-plus");
    this.$minus = el.querySelector(".counter-minus");
    this.value = parseInt(this.$valueEl.value) || 0;
    this.step = parseInt(el.dataset.counterStep) || 1;

    this.setup();
  }

  setup() {

    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.$minus.addEventListener("click", this.handleMinus);
    this.$plus.addEventListener("click", this.handlePlus);
    this.$valueEl.addEventListener("input", this.handleInput);

    if (this.value === 0) {
      this.$minus.disabled = true;
    }

  }

  handleInput(e) {
    this.value = Math.abs(parseInt(e.target.value)) || 0;
    // console.log(this.value);
  }

  handleMinus(e) {
    if (this.value > this.step) {
      this.value -= this.step;
      this.$valueEl.value = this.value;
    } else if (this.value <= this.step) {
      this.value -= this.value;
      this.$valueEl.value = this.value;
      this.$minus.disabled = true;
    }
    // console.log(this.value, 'minus');
  }

  handlePlus() {
    this.value += this.step;
    this.$valueEl.value = this.value;
    if (this.value > 0) {
      this.$minus.disabled = false;
    }
    // console.log(this.value, 'plus');
  }


}

const counters = document.querySelectorAll(".counter");

counters.forEach(counterEl => {

  const counter = new Counter(counterEl);

});