document.addEventListener("DOMContentLoaded", function () {

  class Counter {
    constructor(el) {
      this.$valueEl = el.querySelector(".counter-value");
      this.$plus = el.querySelector(".counter-plus");
      this.$minus = el.querySelector(".counter-minus");
      this.value = parseInt(this.$valueEl.textContent) || 0;
      this.step = parseInt(el.dataset.counterStep) || 1;

      this.setup();
    }

    setup() {

      this.handleMinus = this.handleMinus.bind(this);
      this.handlePlus = this.handlePlus.bind(this);
      this.$minus.addEventListener("click", this.handleMinus);
      this.$plus.addEventListener("click", this.handlePlus);

      if (this.value === 0) {
        this.$minus.disabled = true;
      }

    }

    handleMinus(e) {
      if (this.value > this.step) {
        this.value -= this.step;
        this.$valueEl.textContent = this.value;
      } else if (this.value <= this.step) {
        this.value -= this.value;
        this.$valueEl.textContent = this.value;
        this.$minus.disabled = true;
      }
      console.log(this.value, 'minus');
    }

    handlePlus() {
      this.value += this.step;
      this.$valueEl.textContent = this.value;
      if (this.value > 0) {
        this.$minus.disabled = false;
      }
      console.log(this.value, 'plus');
    }


  }

  const counters = document.querySelectorAll(".counter");

  counters.forEach(counterEl => {

    const counter = new Counter(counterEl);

  });

});