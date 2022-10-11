/* const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', (event) => {
    event.preventDefault();
})

INPUT_CHECKBOX.addEventListener('click', (event) => {
    event.preventDefault();
})

INPUT_TEXT.addEventListener('keypress', (event) => {
    const character = event.key;
    if (character !== 'a') {
        event.preventDefault();
    }
    
}) */


function btnSubmit(event) {
    event.preventDefault();
};

window.onload = function () {
    const submitBtn = document.querySelector("#submit-btn");
    submitBtn.addEventListener("click", btnSubmit);
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
};

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }

  


