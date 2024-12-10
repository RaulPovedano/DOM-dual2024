const divForm = () =>{

    //crear un contenedor para mi formulario
    const divForm = document.createElement('div');
    divForm.classList.add('form-container');
    //crear un formulario
    const formEmail = document.createElement('form');
    formEmail.classList.add('form');
    //crear el label
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Email';
    formEmail.appendChild(labelEmail)
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputEmail.id = 'email';
    inputEmail.setAttribute('placeholder', 'Escribe tu email');
    formEmail.appendChild(inputEmail);
    //añadimos el formulario al contenedor
    divForm.appendChild(formEmail);
    formEmail.appendChild(inputEmail);

    //creo parrafo de verificacion de email
    const pEmailCheck = document.createElement("p")
    pEmailCheck.id = "email-check"
    pEmailCheck.textContent = "Email no valido"
    pEmailCheck.style.color = "red"
    pEmailCheck.style.display = "none"
    divForm.appendChild(pEmailCheck);

    //logica validacion email
    //necesito una expresion regular de validaccion de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    inputEmail.addEventListener("input", () => {
        //si el email es valido
        const isValidEmail=emailRegex.test(inputEmail.value)

        pEmailCheck.style.display=isValidEmail ? "none" : "block";
        
    })


    // devolvemos el contenedor
   return divForm;
}

export default divForm;