/* eslint-disable linebreak-style */
const form = document.getElementById("contact");
const email = document.getElementById("email");

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([A-Z\-0-9]+\.)+[A-Z]{2,}))$/.test(
    email
  );
}

function checkInputs() {
  const emailValue = email.value.trim();

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});
