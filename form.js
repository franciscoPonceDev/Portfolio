/* eslint-disable linebreak-style */
const form = document.getElementById('contact');
const email = document.getElementById('email');

function isEmail(email) {
  return email.match(/^[a-z]*$/);
}

function checkInputs() {
  const emailValue = email.value.trim();

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  }

  if (!isEmail(emailValue)) {
    setErrorFor(email, 'Can not submit email with uppercase characters');
  } else {
    form.submit();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});
