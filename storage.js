window.onload = function storeInputs() {
    let lStorage = {}
    
    const nameInput = document.getElementById('name');
    const nameValue = document.getElementById('name').value;
    const emailInput = document.getElementById('email');
    const emailValue = document.getElementById('email').value;
    const messageInput = document.getElementById('message');
    const messageValue = document.getElementById('message').value;

    nameInput.addEventListener('change', (event) => {
        lStorage = {...lStorage, "name" : event.target.value}
        console.log(nameValue)
        console.log(lStorage)
    });

    emailInput.addEventListener('change', (event) => {
        lStorage = {...lStorage, "email" : event.target.value}
        console.log(lStorage)
    });
    
    messageInput.addEventListener('change', (event) => {
        lStorage = {...lStorage, "message" : event.target.value}
        console.log(lStorage)
    });

    localStorage.setItem(JSON.stringify(lStorage))
}



//     document.getElementById('name').innerHTML = localStorage.getItem("name");
//     document.getElementById('email').innerHTML = localStorage.getItem("email");
//     document.getElementById('message').innerHTML = localStorage.getItem("message");