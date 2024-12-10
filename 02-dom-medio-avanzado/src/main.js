/*
1-Crear un formulario que permita validad el correo electronico 
si el email no es valido mostrara un mensaje de error dinamico bajo el campo de texto

*/

import divForm from "./components/divForm.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('app')
     const divFormulario = divForm();

     app.appendChild(divFormulario);
    
})

/*
2-Crear ua tabla dinamica , dado un array de objetos con datos de usuarios nombre,edad y email genera una tabla dinamicamente en la que
 cada fila corresponda a un usuario añade funcionalidad para ordenar las filas por nombre o edad haciendo click en la cabecera de la columna
 Utilizando la lista de los usuaroos utilizar un input para que a medida que busquemos filtre los nombres
*/
