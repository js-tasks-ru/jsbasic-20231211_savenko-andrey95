import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.createCarousel();
    this.switchCarousel();
    this.addEvent();
  }

  createCarousel() {
    this.elem = createElement(`

    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    </div>

    `);

    let slide = createElement(`<div class="carousel__inner"></div>`);
    this.elem.append(slide);

    this.slides.forEach((element) => {
      slide.append(
        createElement(`
        <div class="carousel__slide" data-id=${element.id}>
        <img src="/assets/images/carousel/${
          element.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${element.price.toFixed(2)}</span>
          <div class="carousel__title">${element.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
        `)
      );
    });
  }

  switchCarousel() {
    let rightButton = this.elem.querySelector(".carousel__arrow_right");
    let leftButton = this.elem.querySelector(".carousel__arrow_left");
    let mainSlide = this.elem.querySelector(".carousel__inner");
    leftButton.style.display = "none";

    let click = 0;
    let sum = 0;

    rightButton.addEventListener("click", () => {
      let slideWidth = mainSlide.offsetWidth;
      click += slideWidth;
      mainSlide.style.transform = `translateX(-${click}px)`;
      sum += 1;

      if (sum >= mainSlide.children.length - 1) {
        rightButton.style.display = "none";
      } else {
        leftButton.style.display = "";
      }
    });
    leftButton.addEventListener("click", () => {
      let slideWidth = mainSlide.offsetWidth;
      if (click > 0) {
        click -= slideWidth;
        mainSlide.style.transform = `translateX(-${click}px)`;
        sum -= 1;
      }

      if (sum == 0) {
        leftButton.style.display = "none";
      } else {
        rightButton.style.display = "";
      }
    });
  }

  addEvent() {
    const carouselButton = this.elem.querySelectorAll(".carousel__button");

    for (let button of carouselButton) {
      button.addEventListener("click", (event) => {
        let slide = event.target.closest(".carousel__slide");
        let productId = slide.dataset.id;

        const addCard = new CustomEvent("product-add", {
          detail: productId,
          bubbles: true,
        });
        this.elem.dispatchEvent(addCard);
      });
    }
  }
}
