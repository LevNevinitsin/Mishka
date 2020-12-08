let featuredOrder = document.querySelector(".featured__order");
let modal = document.querySelector(".modal");
let modalWrapper = document.querySelector(".modal__wrapper");
let modalRadios = document.querySelectorAll(".modal__radio");
let modalRadiosArray = [];
let modalAdd = document.querySelector(".modal__add");

console.log(modalRadios);

for (let i = 0; i < modalRadios.length; i++) {
  modalRadiosArray[i] = modalRadios[i];
}

featuredOrder.addEventListener("click", function(e) {
  e.preventDefault();
  modal.classList.add("modal--show");
  requestAnimationFrame(function() {
    modal.classList.add("modal--appear");
  })
  modal.querySelector("input:checked").focus();
})

// Closing function

function closeModal() {
  modal.classList.remove("modal--appear");
  modal.addEventListener("transitionend", function() {modal.classList.remove("modal--show")}, {once: true});
  featuredOrder.focus();
}

// Closing on escape and tab cycle within the modal window

window.addEventListener("keydown", function(e) {
  if (modal.classList.contains("modal--show")) {
    let tabIsPressed = (e.key === "Tab");
    if (!tabIsPressed) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      } else {
        return;
      }
    } else {
      if (modalRadiosArray.includes(document.activeElement)) {
        e.preventDefault();
        modalAdd.focus();
      } else {
        e.preventDefault();
        modal.querySelector("input:checked").focus();
      }
    }
  }
})

// Closing on clicking on the outside of the modal window

modal.addEventListener("click", function(e) {
  if (e.target.closest(".modal__wrapper") === null) {
    closeModal()
  }
});
