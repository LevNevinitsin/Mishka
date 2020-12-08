let sliderList = document.querySelector(".slider__list");
let sliderItems = document.querySelectorAll(".slider__item");
let sliderArray = [];
let togglePrev = document.querySelector(".slider__toggle--prev");
let toggleNext = document.querySelector(".slider__toggle--next");

for (let i = 0; i < sliderItems.length; i++) {
  sliderArray[i] = sliderItems[i].innerHTML;
  sliderItems[i].remove();
}

let step = 0;

function draw() {
  for (let i = 0; i <= 2; i++) {
    let slideNumber = step + i;
    if (slideNumber === 0) {
      slideNumber = sliderArray.length - 1;
    } else if (slideNumber === sliderArray.length + 1) {
      slideNumber = 0
    } else {
      slideNumber--;
    }
    let item = document.createElement("li");
    item.innerHTML = sliderArray[slideNumber];
    item.classList.add("slider__item");
    item.classList.add("slider__item--active");
    item.classList.add("reviews__item");
    sliderList.appendChild(item);
  }
}

draw();

function redraw(toggleDirection) {
  sliderList.innerHTML = "";
  sliderList.style.transition = "none";
  requestAnimationFrame(function() {
    sliderList.style.left = "0";
    draw();
    requestAnimationFrame(function() {
      sliderList.removeAttribute("style");
      if (toggleDirection === "prev") {
        togglePrev.addEventListener("click", showPrev);
      } else {
        toggleNext.addEventListener("click", showNext);
      };
    })
  })
}

function showPrev() {
  if (step === 0) {
    step = sliderArray.length - 1;
  } else {
    step--;
  }
  sliderList.addEventListener("transitionend", function() {redraw("prev")}, {once: true})
  sliderList.style.left = "120%";
  togglePrev.removeEventListener("click", showPrev);
}

togglePrev.addEventListener("click", showPrev)

function showNext() {
  if (step === sliderArray.length - 1) {
    step = 0;
  } else {
    step++;
  }
  sliderList.addEventListener("transitionend", function() {redraw("next")}, {once: true})
  sliderList.style.left = "-120%";
  toggleNext.removeEventListener("click", showNext);
}

toggleNext.addEventListener("click", showNext)
