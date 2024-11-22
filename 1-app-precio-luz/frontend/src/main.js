import { createLoadButton } from "./components/loadButton/loadButton"
import { createSpinner } from "./components/spinner/spinner"
//------Declaracion de variables----


//------Declaracion de funciones------
const handleClick = () =>{
    alert("btn")
}
document.addEventListener("DOMContentLoaded" , () => {
    /*const app = document.getElementById("app") // div#app del index.html
    const spinner = createSpinner(); //crear spinner
    app.appendChild(spinner);// añadimos el spinner al DOM*/

    const app = document.getElementById("app")
    const loadButton = createLoadButton();
    //const loadPriceBtn = document.getElementById("load-prices-btn")
    app.appendChild(loadButton)

    loadButton.addEventListener("click", handleClick)
})
