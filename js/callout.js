class Callout {
  constructor(callout, timeout, closeAxis) {
    this.$callout = callout;
    this.$close = this.$callout.querySelector(".js-callout-close");
    this.timeout = timeout;
    this.closeAxis = closeAxis;
    this.setup();
  }

  setup() {
    this.close = this.close.bind(this);
    if (this.$close) {
      this.$close.addEventListener("click", this.close)
    }
  }


  close() {
    this.handleAxis();
    this.$callout.classList.add("closed");
    setTimeout(() => {
      this.$callout.remove();
    }, this.timeout + 50);
  }

  handleAxis() {
    if (this.closeAxis === "y") {
      this.$callout.style.height = this.$callout.clientHeight + 'px';
    }
    if (this.closeAxis === "x") {
      this.$callout.style.width = this.$callout.clientWidth + 'px';
    }
  }

}

const calloutList = document.querySelectorAll(".js-callout");

calloutList.forEach(item => {
  const callout = new Callout(item, 300, item.dataset.closeAxis);
});
