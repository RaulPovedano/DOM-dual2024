// seleccion de elementos del DOM

const appDiv = document.getElementById('app')

appDiv.innerText ="Hola Mundo" //texto plano
appDiv.innerHTML = "<h1>Hola Mundo</h1>" //interpreta codigo html

//añadir clases a un elemento del DOM

appDiv.classList.add("clase1", "clase2");


//seleccion de ClassName
const items = document.getElementsByClassName("items")
//items.length; 
let n = 0
for (const i of items){
   // i.textContent =`hola amigo ${++n}`;
   i.innerText = `hola amigo ${++n}`

}


//seleccion por clase

const sauldoP = document.querySelector(".saludo")

const saludos = document.querySelectorAll(".saludo")

saludos.forEach((saludo,index)=>{ 
    saludo.innerText=`Hola Mundo ${index}`
})

const migit = document.getElementById('github')

migit.setAttribute("target","_blank")

//migit.removeAttribute("target")

migit.textContent = "Ir a mi gitHub";