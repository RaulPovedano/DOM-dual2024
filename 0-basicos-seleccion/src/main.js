// # Ejercicios básicos de selección del DOM

// ### Ejercicio 1:

// Selecciona el elemento `h1` por su ID.

const elementH1 = document.getElementById("contenedorPrincipal").querySelector("h1");
console.log(elementH1);
elementH1.style.color = "red"
elementH1.textContent = "Hola Mundo"


// ### Ejercicio 2:

// Selecciona todos los párrafos con la clase "parrafo" dentro del `contenedorPrincipal`.
const todosParrafos = document.querySelectorAll("#contenedorPrincipal .parrafo")
console.log(todosParrafos);

// ### Ejercicio 3:

// Selecciona el elemento `img` por su atributo `src`.

const selectImgBySRC= document.querySelector("img[src='imagen.png']")
console.log(selectImgBySRC);

// ### Ejercicio 4:

// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.
const elemtSpan = document.querySelectorAll('#contenedorSecundario span')
console.log(elemtSpan);

// ### Ejercicio 5:

// Selecciona el primer párrafo con la clase "importante".

const selectPimportante = document.querySelectorAll('.parrafo.importante')
console.log(selectPimportante);

// ### Ejercicio 6:

// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".
const todosParrafos2 = document.querySelectorAll("#contenedorPrincipal p")
console.log(todosParrafos2);

// ### Ejercicio 7:

// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".

const elementAtributoValue= document.querySelectorAll("[data-atributo='valor1']") // esto devuelve un NODELIST
console.log(elementAtributoValue);

// ### Ejercicio 8:

// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".

const parrafosImportantes  = document.querySelectorAll(".parrafo.importante")
const segundoParrafo = parrafosImportantes.length>1 ? parrafosImportantes[1] :null;
console.log(segundoParrafo);

// ### Ejercicio 9:

// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedor".

const spanContenedor = document.querySelectorAll(".contenedor span")



// ### Ejercicio 10:

// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".

const pContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal .parrafor")
const tercerParrafo = pContenedorPrincipal.length>2
