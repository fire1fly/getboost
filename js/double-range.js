document.addEventListener("DOMContentLoaded", function () {

  const trackBg = "#E8E9EA";
  const trackFillBg = "#1B1930";

  class DoubleRange {
    constructor(item) {
      this.$range1 = item.querySelector(".range-1");
      this.$range2 = item.querySelector(".range-2");
      this.$input1 = item.querySelector(".value-1");
      this.$input2 = item.querySelector(".value-2");
      this.$track = item.querySelector(".double-range-track");
      this.minGap = 1;

      this.handleSlide1();
      this.handleSlide2();
      this.setup();
    }

    setup() {
      this.handleSlide1 = this.handleSlide1.bind(this);
      this.handleSlide2 = this.handleSlide2.bind(this);
      this.$range1.addEventListener("input", this.handleSlide1);
      this.$range2.addEventListener("input", this.handleSlide2);

      this.handleInput1 = this.handleInput1.bind(this);
      this.handleInput2 = this.handleInput2.bind(this);
      this.$input1.addEventListener("input", this.handleInput1);
      this.$input2.addEventListener("input", this.handleInput2);
    }

    handleSlide1() {
      if (parseInt(this.$range2.value) - parseInt(this.$range1.value) <= this.minGap) {
        this.$range1.value = parseInt(this.$range2.value) - this.minGap;
      }
      this.$input1.value = this.$range1.value;
      this.fillTrack();
    }
    handleSlide2() {
      if (parseInt(this.$range2.value) - parseInt(this.$range1.value) <= this.minGap) {
        this.$range2.value = parseInt(this.$range1.value) + this.minGap;
      }
      this.$input2.value = this.$range2.value;
      this.fillTrack();
    }

    handleInput1() {
      if ((parseInt(this.$input1.value) >= parseInt(this.$range1.min)) &&
        (parseInt(this.$input1.value) <= parseInt(this.$range2.value))) {
        this.$range1.value = this.$input1.value;
      } else {
        this.$range1.value = this.$range2.value;
      }
      this.fillTrack();
    }
    handleInput2() {
      if ((parseInt(this.$input2.value) <= parseInt(this.$range2.max)) &&
        (parseInt(this.$input2.value) >= parseInt(this.$range1.value))) {
        this.$range2.value = this.$input2.value;
      } else {
        this.$range2.value = this.$range1.value;
      }
      this.fillTrack();
    }

    fillTrack() {
      let percent1 = (this.$range1.value / this.$range1.max) * 100;
      let percent2 = (this.$range2.value / this.$range1.max) * 100;
      this.$track.style.background = `linear-gradient(to right, ${trackBg} ${percent1}% , ${trackFillBg} ${percent1}% , ${trackFillBg} ${percent2}%, ${trackBg} ${percent2}%)`;
    }
  }

  let doubleRanges = document.querySelectorAll(".double-range");

  doubleRanges.forEach(item => {
    const doubleRange = new DoubleRange(item);
  });

});