const slider = document.querySelector(".slider")

if (slider) {
  applySlider()
}

function applySlider() {
  const sliderList = document.querySelector(".slider__list");
  const sliderItems = document.querySelectorAll(".slider__item");
  const sliderArray = [];
  const togglePrev = document.querySelector(".slider__toggle--prev");
  const toggleNext = document.querySelector(".slider__toggle--next");

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

  function redraw() {
    sliderList.innerHTML = "";
    sliderList.style.transition = "none";
    requestAnimationFrame(function() {
      sliderList.style.left = "0";
      draw();
      requestAnimationFrame(function() {
        sliderList.removeAttribute("style");
        togglePrev.addEventListener("click", showPrev);
        toggleNext.addEventListener("click", showNext);
      })
    })
  }

  function showPrev() {
    if (step === 0) {
      step = sliderArray.length - 1;
    } else {
      step--;
    }
    sliderList.addEventListener("transitionend", redraw, {once: true})
    sliderList.style.left = "120%";
    togglePrev.removeEventListener("click", showPrev);
    toggleNext.removeEventListener("click", showNext);
  }

  togglePrev.addEventListener("click", showPrev)

  function showNext() {
    if (step === sliderArray.length - 1) {
      step = 0;
    } else {
      step++;
    }
    sliderList.addEventListener("transitionend", redraw, {once: true})
    sliderList.style.left = "-120%";
    togglePrev.removeEventListener("click", showPrev);
    toggleNext.removeEventListener("click", showNext);
  }

  toggleNext.addEventListener("click", showNext)
}
