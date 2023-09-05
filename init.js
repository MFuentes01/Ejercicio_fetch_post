document.addEventListener("DOMContentLoaded", function(){
    //Se declaran constantes por cada campo del form y la url del fetch
    const nameField = document.getElementById("name");
    const lastnameField = document.getElementById("lastname");
    const birthdateField = document.getElementById("birthdate");
    const sendButton = document.getElementById("send");
    const DATA_URL = "https://jsonplaceholder.typicode.com/users";

//Evento al hacer click en el botón "Enviar"
sendButton.addEventListener("click", function() {

    //Se declara una constante para la actualización de datos que tiene el título "Datos de usuario" y las variables de los datos a enviar
    const update = {
        title: "Datos de usuario",
        body: [nameField.value, lastnameField.value, birthdateField.value]
    }

    //Se declara una constante para las opciones del fetch, asegurando que su método sea "POST" y que la información esté en JSON
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
        };

    //El fetch actualiza la información
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