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
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
};

window.onload = function () {
    const submitBtn = document.querySelector("#submit-btn");
    submitBtn.addEventListener("click", btnSubmit);
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
    const concordo2 = document.querySelector('#concordo2');
    concordo2.addEventListener("change", enableSubmit)

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

  function enableSubmit() {
    const submitBtn = document.querySelector('#submit-btn');
    const concordo2 = document.querySelector('#concordo2');
    submitBtn.disabled = !concordo2.checked;
  }

  function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#name').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#answer').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }



