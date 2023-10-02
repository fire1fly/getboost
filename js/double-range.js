document.addEventListener("DOMContentLoaded", function () {

  const trackBg = "#E8E9EA";
  const trackFillBg = "#1B1930";

  class DoubleRange {
    constructor(item, isExtra = false) {
      this.$range1 = item.querySelector(".range-1");
      this.$range2 = item.querySelector(".range-2");
      this.$input1 = item.querySelector(".value-1");
      this.$input2 = item.querySelector(".value-2");
      this.$track = item.querySelector(".double-range-track");
      this.isExtra = isExtra;
      this.minGap = 1;

      if (this.isExtra) {
        this.$select1 = item.querySelector(".double-range-select-1");
        this.$select2 = item.querySelector(".double-range-select-2");
        this.$refValueList1 = item.querySelectorAll(".double-range-refvalue-1 .double-range-refvalue");
        this.$refValueList2 = item.querySelectorAll(".double-range-refvalue-2 .double-range-refvalue");
      }

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

      console.log(this.isExtra);

      if (this.isExtra) {
        this.handleSelect1 = this.handleSelect1.bind(this);
        this.handleSelect2 = this.handleSelect2.bind(this);
        this.$select1.addEventListener("change", this.handleSelect1);
        this.$select2.addEventListener("change", this.handleSelect2);
      }
    }

    handleSlide1() {
      if (parseInt(this.$range2.value) - parseInt(this.$range1.value) <= this.minGap) {
        this.$range1.value = parseInt(this.$range2.value) - this.minGap;
      }
      this.$input1.value = this.$range1.value;
      if (this.isExtra) {
        this.$select1.value = this.$range1.value;
        this.handeRefValues1();
      }
      this.fillTrack();
    }

    handleSlide2() {
      if (parseInt(this.$range2.value) - parseInt(this.$range1.value) <= this.minGap) {
        this.$range2.value = parseInt(this.$range1.value) + this.minGap;
      }
      this.$input2.value = this.$range2.value;
      if (this.isExtra) {
        this.$select2.value = this.$range2.value;
        this.handeRefValues2();
      }
      this.fillTrack();
    }

    handleInput1() {
      if ((parseInt(this.$input1.value) >= parseInt(this.$range1.min)) &&
        (parseInt(this.$input1.value) <= parseInt(this.$range2.value))) {
        this.$range1.value = this.$input1.value;
        if (this.isExtra) {
          this.$select1.value = this.$input1.value;
        }
      } else {
        this.$range1.value = this.$range2.min;
        if (this.isExtra) {
          this.$select1.value = this.$range2.value;
          this.handeRefValues1();
        }
      }
      this.fillTrack();
    }
    handleInput2() {
      if ((parseInt(this.$input2.value) <= parseInt(this.$range2.max)) &&
        (parseInt(this.$input2.value) >= parseInt(this.$range1.value))) {
        this.$range2.value = this.$input2.value;
        if (this.isExtra) {
          this.$select2.value = this.$input2.value;
        }
      } else {
        this.$range2.value = this.$range1.max;
        if (this.isExtra) {
          this.$select2.value = this.$range1.value;
          this.handeRefValues2();
        }
      }
      this.fillTrack();
    }

    handleSelect1() {
      if ((parseInt(this.$select1.value) >= parseInt(this.$range1.min)) &&
        (parseInt(this.$select1.value) <= parseInt(this.$range2.value))) {
        this.$input1.value = this.$select1.value;
        this.$range1.value = this.$select1.value;
      } else {
        this.$input1.value = this.$range2.value;
        this.$range1.value = this.$range2.value;
      }
      this.handeRefValues1();
      this.fillTrack();
    }
    handleSelect2() {
      if ((parseInt(this.$select2.value) <= parseInt(this.$range2.max)) &&
        (parseInt(this.$select2.value) >= parseInt(this.$range1.value))) {
        this.$range2.value = this.$select2.value;
        this.$input2.value = this.$select2.value;
      } else {
        this.$range2.value = this.$range1.value;
        this.$input2.value = this.$range1.value;
      }
      this.handeRefValues2();
      this.fillTrack();
    }

    handeRefValues1() {
      let values = [];
      this.$refValueList1.forEach(item => {
        values.push(parseInt(item.dataset.value));
      });
      console.log(values);
      this.$refValueList1.forEach((item, i) => {
        item.hidden = true;
        console.log(values[i + 1]);
        if (
          (
            parseInt(this.$input1.value) >= values[i]
            && parseInt(this.$input1.value) < values[i + 1]
            ||
            parseInt(this.$input1.value) >= values[values.length - 1]
            && values[i + 1] === undefined
            ||
            parseInt(this.$input1.value) < values[0]
            && values[i - 1] === undefined
          )
        ) {
          item.hidden = false;
        }
      });
    }
    handeRefValues2() {
      let values = [];
      this.$refValueList2.forEach(item => {
        values.push(parseInt(item.dataset.value));
      });
      console.log(values);
      this.$refValueList2.forEach((item, i) => {
        item.hidden = true;
        console.log(values[i + 1]);
        if (
          (
            parseInt(this.$input2.value) >= values[i]
            && parseInt(this.$input2.value) < values[i + 1]
            ||
            parseInt(this.$input2.value) >= values[values.length - 1]
            && values[i + 1] === undefined
            ||
            parseInt(this.$input2.value) < values[0]
            && values[i - 1] === undefined
          )
        ) {
          item.hidden = false;
        }
      });
    }

    fillTrack() {
      let percent1 = (this.$range1.value / this.$range1.max) * 100;
      let percent2 = (this.$range2.value / this.$range1.max) * 100;
      this.$track.style.background = `linear-gradient(to right, ${trackBg} ${percent1}% , ${trackFillBg} ${percent1}% , ${trackFillBg} ${percent2}%, ${trackBg} ${percent2}%)`;
    }
  }

  let doubleRanges = document.querySelectorAll(".double-range");

  doubleRanges.forEach(item => {
    const doubleRange = new DoubleRange(item, item.dataset.rangeType === 'extra' ? true : false);
  });

});