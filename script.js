// header
const MENU = document.getElementById("menu");
const SUBMIT_BUTTON = document.getElementById("btn");
const CLOSE_BUTTON = document.getElementById("close-btn");

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("a").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});

//hamburger

const burgerButton = document.querySelector(".header-burger");
const burgerNav = document.querySelector("nav");

burgerButton.onclick = function() {
  burgerButton.classList.toggle("burger-active");
  burgerNav.classList.toggle("burger-active");
  burgerNav.classList.toggle("shadow");
  document.querySelector(".logo").classList.toggle("logo-burger");
  document.querySelector("body").classList.toggle("lock");
};

document.addEventListener(
  "click",
  e => {
    let isBurgerActive = document
      .querySelector(".header-burger")
      .classList.contains("burger-active");
    if (
      (isBurgerActive && e.target.tagName === "A") ||
      e.target.tagName === "NAV"
    ) {
      document
        .querySelector(".header-burger")
        .classList.remove("burger-active");
      document.querySelector("nav").classList.remove("burger-active");
      burgerNav.classList.remove("shadow");
      document.querySelector(".logo").classList.remove("burger-active");
      document.querySelector("body").classList.remove("lock");
    }
  },
  true
);
//slider

const slider = document.querySelector(".slider");

slider.addEventListener("click", event => {
  const { target } = event;

  if (target.closest(".vertical-iphone")) {
    slider
      .querySelector(".slider__phone-background-one")
      .classList.toggle("hidden");
  }

  if (target.closest(".horizontal-iphone")) {
    slider
      .querySelector(".slider__phone-background-second")
      .classList.toggle("hidden");
  }

  if (target.closest(".left-arrow")) {
    slider
      .querySelector(".slider__phone_horizontal-second")
      .classList.toggle("hidden");
  }

  if (target.closest(".right-arrow")) {
    slider
      .querySelector(".slider__phone_horizontal-second")
      .classList.toggle("hidden");
  }
});

//portfolio

const portfolioButtons = document.querySelector(".portfolio__buttons");
const portfolioButtonItems = portfolioButtons.querySelectorAll(".button");
const portfolioImages = document.querySelector(".portfolio__items");
const portfolioImagesItems = portfolioImages.querySelectorAll("img");

portfolioButtons.addEventListener("click", event => {
  if (
    event.target.closest(".button") &&
    !event.target.closest(".button").classList.contains("button_selected")
  ) {
    portfolioButtonItems.forEach(button =>
      button.classList.remove("button_selected")
    );
    event.target.closest(".button").classList.add("button_selected");
    let orderArr = [];
    for (let i = 0; i < portfolioImagesItems.length; i++) {
      orderArr[i] = i;
    }
    orderArr.sort(randomSort);
    portfolioButtonItems.forEach(button =>
      button.classList.remove("button_selected")
    );
    event.target.closest(".button").classList.add("button_selected");
    portfolioImagesItems.forEach((image, i) => {
      image.style.order = orderArr[i];
      image.classList.remove("portfolio__item_active");
    });
  }
});

portfolioImages.addEventListener("click", event => {
  let image = event.target;
  if (image.tagName.toLowerCase() === "img") {
    if (image.classList.contains("portfolio__item_active")) {
      image.classList.remove("portfolio__item_active");
    } else {
      portfolioImagesItems.forEach(image =>
        image.classList.remove("portfolio__item_active")
      );
      image.classList.add("portfolio__item_active");
    }
  }
});

function randomSort(a, b) {
  return Math.random() * 10 - Math.random() * 10;
}

//form

SUBMIT_BUTTON.addEventListener("click", () => {
  let subject = document.getElementById("subject").value.toString();
  subject = subject === "" ? "Без темы" : "Тема: " + subject;
  let describe = document.getElementById("describe").value.toString();
  describe = describe === "" ? "Без описания" : "Описание: " + describe;
  let result = subject + "\n" + describe;
  document.getElementById("result").innerText = result;
  document.getElementById("message-block").classList.remove("hidden");
});

CLOSE_BUTTON.addEventListener("click", () => {
  document.getElementById("result").innerText = " ";
  document.getElementById("message-block").classList.add("hidden");
});
