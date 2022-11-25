class Range {
  constructor(range) {
    this.$rangeInput = range.querySelector(".range-input");
    this.$rangeValue = range.querySelector(".range-value");

    if (this.$rangeValue) {
      this.updateValue = this.updateValue.bind(this);
      this.$rangeInput.addEventListener("input", this.updateValue);
    }
  }

  updateValue(e) {
    this.$rangeValue.textContent = e.target.value;
  }
}

const ranges = document.querySelectorAll(".range");

ranges.forEach(item => {
  const range = new Range(item);
});