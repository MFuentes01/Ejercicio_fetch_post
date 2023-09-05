document.addEventListener("DOMContentLoaded", function(){
    const nameField = document.getElementById("name");
    const lastnameField = document.getElementById("lastname");
    const birthdateField = document.getElementById("birthdate");
    const sendButton = document.getElementById("send");
    const DATA_URL = "https://jsonplaceholder.typicode.com/users";

sendButton.addEventListener("click", function() {

    const update = {
        title: "Datos de usuario",
        body: [nameField.value, lastnameField.value, birthdateField.value]
    }

    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
        };

    fetch(DATA_URL, options)
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
    }).then(update => {
        console.log(update);
    }).catch(e => {
        console.log(e);
    });
});
    });