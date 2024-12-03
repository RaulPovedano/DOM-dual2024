//Inicio sesion
export default function formComponent() {
    const divForm = document.createElement("div")
    divForm.classList.add("form-container-login")
    divForm.id = "form-container-login";

    //crear formulario
    const formEmail = document.createElement("form")
    formEmail.id = "form-login"
    //label username
    const labelUsername = document.createElement("label")
    labelUsername.textContent = "Username";
    //Input para usernamee
    const inputUsername = document.createElement("input")
    inputUsername.id = "username"
    inputUsername.type="text"
    inputUsername.name="username"
    inputUsername.placeholder="Escribe tu username"

    //label password
    const labelPassword = document.createElement("label")
    labelPassword.textContent = "Password";

    //input password
    const inputPassword = document.createElement("input")
    inputPassword.id = "password"
    inputPassword.type="password"
    inputPassword.name="password"
    inputPassword.placeholder="Escribe tu contraseña"

    //button
    const button = document.createElement("button")
    button.id = "button-login"
    button.type = "submit"
    button.textContent = "Inicar sesion"

    
    formEmail.append(labelUsername,labelPassword,inputUsername,inputPassword,button)
    //añadimos el formulario al contenedor
    divForm.appendChild(formEmail); // form inyectado
    return divForm;
}