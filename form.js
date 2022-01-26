/* eslint-disable linebreak-style */
const form = document.getElementById('contact');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else (!isEmail(emailValue)); {
    setErrorFor(email, 'Not a valid email');
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}