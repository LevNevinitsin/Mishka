const modal = document.querySelector(".modal");

if (modal) {
  applyModal();
}

function applyModal() {
  const modalTriggers = document.querySelectorAll(".modal-trigger");
  const modalWrapper = document.querySelector(".modal__wrapper");
  const modalRadios = document.querySelectorAll(".modal__radio");
  const modalRadiosArray = [];
  const modalAdd = document.querySelector(".modal__add");
  let triggeredElement;

  for (let i = 0; i < modalRadios.length; i++) {
    modalRadiosArray[i] = modalRadios[i];
  }

  for (modalTrigger of modalTriggers) {
    modalTrigger.addEventListener("click", function(e) {
      triggeredElement = (e.target.closest("a"));
      e.preventDefault();
      modal.classList.add("modal--show");
      requestAnimationFrame(function() {
        modal.classList.add("modal--appear");
      })
      modal.querySelector("input:checked").focus();
    })
  }

  // Closing function

  function closeModal() {
    modal.classList.remove("modal--appear");
    modal.addEventListener("transitionend", function() {modal.classList.remove("modal--show")}, {once: true});
    triggeredElement.focus();
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
}
