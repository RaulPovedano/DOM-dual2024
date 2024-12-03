// //implementar un perfil de login y actualización del perfil usando POO
// //Objetivo: Crear una CLASE u OBJETO para modelas el inicio de sesión/perfil

// import { Usuario } from "./components/Usuario";
// import { UsuarioFFabrica } from "./components/UsuarioFFabrica";
// import { UsuarioClases } from "./components/UsuariosClases";

// //Creo una instancia de Usuario
// //const usuario = new Usuario("Ana", "ana@gmail.com", "1234");
// //const usuario = new UsuarioClases("Raul", "raul@gmail.com", "1234");
// const usuarioFabrica = UsuarioFFabrica("Raul", "raul@gmail.com", "1234")

// const app = document.getElementById("app");
// app.innerHTML=`
//     <h2>Gestión de Usuarios</h2>
//     <p>${usuario.getInfo()}</p>
//     <button id="btn-login">Iniciar Sesión</button>
//     <button id="btn-actualizar-email">Actualizar email</button>
//     <div id="form-container"></div>
// `;

// //gestiono los eventos
// document.getElementById("btn-login")
//         .addEventListener("click", mostrarFormularioLogin);

// document.querySelector("#btn-actualizar-email")
//         .addEventListener("click", mostrarFormularioUpdateEmail);

// function mostrarFormularioLogin(){
//     const formContainer = document.getElementById("form-container");
//     formContainer.innerHTML = `
//         <br>
//         <input id="email-login" type="email" placeholder="Introduzca el email">
//         <input id="password-login" type="password" placeholder="Contraseña">
//         <button id="btn-enviar-login">Enviar</button>
//     `
//     document.getElementById("btn-enviar-login")
//         .addEventListener("click", ()=>{
//             const email = document.getElementById("email-login").value.trim(); //trim quita espacios a la derecha e izq
//             const password = document.getElementById("password-login").value.trim();
//             alert(usuario.login(email,password));
//         })
// }

// function mostrarFormularioUpdateEmail(){
//     const formContainer = document.getElementById("form-container");
//     formContainer.innerHTML = `
//         <br>
//         <input id="nuevo-email" type="email" placeholder="Nuevo email">
//         <button id="btn-actualizar-nuevo-email">Enviar</button>
//     `
//     document.getElementById("btn-actualizar-nuevo-email")
//         .addEventListener("click", ()=>{
//             const newEmail = document.getElementById("nuevo-email").value.trim(); //trim quita espacios a la derecha e izq
//             alert(usuario.updateEmail(newEmail));

// })
// }

/*
2-Inplementar funcion constructora que modele un producto, del producto quiero saber: nombre, precio, stock,img o url
metodos:
obtener informacion del producto y actualizar stock pasandole por parametro una cantidad q si es positiva le suma y si es negativa resta siempre que haya stock suficiente
genera un array de productos, reenderizalos en el dom, añade un boton a cad producto que permita actualizar el stock
Aplicar dos de las tres formas posible de creacion de objetos

3-sistema bancario, Implemetar clase llamada CuentaBancaria que tenga una prpiedadd privada llmada saldo y que permita depositar una cantidad
y retirar una cantidad siempre que sea posible. Genera en el DOM dos contenedores uno para ingresar o retirar saldo a traves de un radio button y otro para mostrar informacion del saldo que tengo dispinible.
Aplicar dos de las tres formas posible de creacion de objetos

*/

