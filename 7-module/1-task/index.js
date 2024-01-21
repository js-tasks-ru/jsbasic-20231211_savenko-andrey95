import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.createMenu();
    this.innerScroll();
    this.addEvent();
  }

  createMenu() {
    this.elem = createElement(`
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left ">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

      <nav class="ribbon__inner"></nav>

      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `);

    this.ribbonInner = this.elem.querySelector(".ribbon__inner");

    this.categories.forEach((element) => {
      this.ribbonInner.append(
        createElement(`
        <a href="#" class="ribbon__item" data-id=${element.id}>${element.name}</a>
        `)
      );
    });
  }

  innerScroll() {
    const ribbonInner = this.elem.querySelector(".ribbon__inner");
    const rightButton = this.elem.querySelector(".ribbon__arrow_right");
    const leftButton = this.elem.querySelector(".ribbon__arrow_left");

    rightButton.addEventListener("click", () => {
      ribbonInner.scrollBy(350, 0);
    });

    leftButton.addEventListener("click", () => {
      ribbonInner.scrollBy(-350, 0);
    });

    ribbonInner.addEventListener("scroll", () => {
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      leftButton.classList.toggle(
        "ribbon__arrow_visible",
        ribbonInner.scrollLeft > 0
      );

      rightButton.classList.toggle("ribbon__arrow_visible", scrollRight > 0);
    });
  }

  addEvent() {
    let ribbonItem = this.ribbonInner.querySelectorAll(".ribbon__item");

    for (let item of ribbonItem) {
      item.addEventListener("click", (event) => {
        event.preventDefault();

        let customEvent = new CustomEvent("ribbon-select", {
          detail: event.target.dataset.id,
          bubbles: true,
        });
        this.elem.dispatchEvent(customEvent);
      });
    }
  }
}
