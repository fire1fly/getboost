document.addEventListener("DOMContentLoaded", function () {
  class Dropdown {
    constructor(el) {
      this.$dd = el;
      this.$itemList = this.$dd.querySelectorAll(".dd-item");
      this.$input = this.$dd.querySelector(".dd-input");
      this.$selected = this.$dd.querySelector(".selected");
      this.setup();
    }

    checkSelect() {
      if (!(this.$itemList.length &&
        this.$input &&
        this.$selected
      )) {
        throw new Error("The necessary elements of select are missing");
      }

      if (this.$input.value !== "null") {
        this.$selected.classList.remove("placeholder");

        this.$itemList.forEach(item => {
          if (item.dataset.value === this.$input.value) {
            item.classList.add("active");
          }
        });
      }

      return null;
    }

    setup() {
      if (this.$dd.classList.contains("select")) {
        this.checkSelect();
        this.setView();
        this.setupInput();
        this.handleInput = this.handleInput.bind(this);
        this.$input.addEventListener("change", this.handleInput);
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleOutClick = this.handleOutClick.bind(this);
      this.$dd.addEventListener("click", this.handleClick);
      document.addEventListener("click", this.handleOutClick);
    }

    setView() {
      this.$itemList.forEach(elem => {
        if (elem.dataset.value === this.$input.value) {
          this.$selected.innerHTML = elem.innerHTML;
        }
      });
    }

    handleInput() {
      this.setView();
    }

    setupInput() {
      const input = this.$input;
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          if (
            mutation.type === 'attributes'
            && mutation.attributeName === 'value'
          ) {
            input.dispatchEvent(new Event('change'));
            this.setView()
          }
        });
      });
      observer.observe(input, { attributes: true });
    }

    handleClick(e) {

      if (this.$dd.classList.contains("select")) {
        const clickedItem = e.target.closest(".dd-item");

        if (clickedItem) {
          this.$selected.innerHTML = clickedItem.innerHTML;
          this.$selected.classList.remove("placeholder");
          this.$input.value = clickedItem.dataset.value;

          this.$itemList.forEach(item => {
            item.classList.remove("active");
          });
          clickedItem.classList.add("active");
        }
      }

      if (this.$dd.classList.contains("active")) {
        this.close();
      } else {
        this.open();
      }

    }

    handleOutClick(e) {
      let path = e.path || (e.composedPath && e.composedPath());
      if (path) {
        if (!path.includes(this.$dd)) {
          this.close();
        }
      }
    }

    open() {
      this.$dd.classList.add("active");
    }

    close() {
      this.$dd.classList.remove("active");
    }

    toggle() {
      this.$dd.classList.toggle("active");
    }
  }

  const ddElems = document.querySelectorAll(".dd");

  ddElems && ddElems.forEach(el => {
    const dd = new Dropdown(el);
  });

});