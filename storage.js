window.onload = function storeInputs() {
  let lStorage = {};

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (localStorage.getItem('contact-form')) {
    lStorage = JSON.parse(localStorage.getItem('contact-form'));

    nameInput.value = lStorage.name;
    emailInput.value = lStorage.email;
    messageInput.value = lStorage.message;
  }

  nameInput.addEventListener('change', (event) => {
    lStorage = { ...lStorage, name: event.target.value };
    localStorage.setItem('contact-form', JSON.stringify(lStorage));
  });

  emailInput.addEventListener('change', (event) => {
    lStorage = { ...lStorage, email: event.target.value };
    localStorage.setItem('contact-form', JSON.stringify(lStorage));
  });

  messageInput.addEventListener('change', (event) => {
    lStorage = { ...lStorage, message: event.target.value };
    localStorage.setItem('contact-form', JSON.stringify(lStorage));
  });
};

//     document.getElementById('name').innerHTML = localStorage.getItem("name");
//     document.getElementById('email').innerHTML = localStorage.getItem("email");
//     document.getElementById('message').innerHTML = localStorage.getItem("message");
