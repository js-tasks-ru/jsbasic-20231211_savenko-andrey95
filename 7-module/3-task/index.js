import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.createSlider();
    this.addEventStep();
  }

  createSlider() {
    this.elem = createElement(`

    <!--Корневой элемент слайдера-->
<div class="slider">

  <!--Ползунок слайдера с активным значением-->
  <div class="slider__thumb">
    <span class="slider__value">${this.value}</span>
  </div>

  <!--Полоска слайдера-->
  <div class="slider__progress"></div>
  <div class="slider__steps">
  <!-- текущий выбранный шаг выделен этим классом -->
    <span class="slider__step-active"></span>
</div>
</div> 
    `);

    let counter = this.elem.querySelector(".slider__steps");

    for (let i = 0; i < this.steps - 1; i++) {
      counter.append(document.createElement("span"));
    }
  }

  addEventStep() {
    let sliderValue = this.elem.querySelector(".slider__value");
    let sliderStep = this.elem.querySelectorAll(".slider__steps > span");
    let thumb = this.elem.querySelector(".slider__thumb");
    let progress = this.elem.querySelector(".slider__progress");
    progress.style.width = "0%";

    this.elem.addEventListener("click", (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = (value / segments) * 100;

      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      this.value = value;
      sliderValue.innerHTML = value;

      sliderStep.forEach((span, index) =>
        index == value
          ? span.classList.add("slider__step-active")
          : span.classList.remove("slider__step-active")
      );

      let sliderChangeEvent = new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      });
      this.elem.dispatchEvent(sliderChangeEvent);
    });
  }
}
