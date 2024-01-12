function initCarousel() {
  let rightButton = document.querySelector(".carousel__arrow_right");
  let leftButton = document.querySelector(".carousel__arrow_left");
  let mainSlide = document.querySelector(".carousel__inner");
  leftButton.style.display = "none";

  let click = 0;
  let slideWidth = mainSlide.offsetWidth;
  let sum = 0;

  rightButton.addEventListener("click", () => {
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
