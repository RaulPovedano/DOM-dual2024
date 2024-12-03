// crear instancia del carrito // cargar carrito del localStorage

import Carrito from "./components/Carrito";
import { Producto } from "./components/Producto";

const carrito = new Carrito()
carrito.cargarLocalStorage();
console.log(carrito);

//declaracion de funciones

const renderListaCarrito = () => {
    const listaProductos = document.getElementById("lista-productos");
    const total = document.getElementById("total-carrito");
    listaProductos.innerHTML = carrito.productos.map((producto,index) => `
    <li data-id="${index}">
        ${producto.obtenerInfo()}
        <button class="btn-editar" data-id="${index}">Editar</button>
        <button class="btn-borrar" data-id="${index}">Borrar</button>
    </li>`).join("");

    //pongo total
    total.textContent = carrito.calcularTotal();

    carrito.guardarLocalStorage();
    
    }


function agregarProductoHandler(event){
    // no recargar pagina
    event.preventDefault();
    const nombre = document.getElementById("nombre-producto").value.trim();
    const cantidad = Number(document.getElementById("cantidad-producto").value)
    const precio = Number(document.getElementById("precio-producto").value)

    if ( nombre && cantidad>=0 && precio>=0 ){
        carrito.agregarProducto(nombre,cantidad,precio);
        ///PINTAR EL PRODUCTO EN EL UL 
        renderListaCarrito()
        console.log(carrito);


    }else{
        alert("Error al introducir los valores")
    }
    event.target.reset();
}

const manejarAccionesHandler = (event) =>{
    const indice = Number(event.target.dataset.id)
   if (event.target.classList.contains("btn-borrar")){
    carrito.borrarProducto(indice);
    renderListaCarrito();
   }

   if (event.target.classList.contains("btn-editar")){
  const newCantidad = Number( prompt("Introduce Cantidad nueva", carrito.productos[indice].cantidad))
  // una vez tengo la nueva cantidad modifico el carrito de productos

    carrito.editarProducto(indice, newCantidad);

  renderListaCarrito();
   }
}

function init(){
//crear h1 --carrito <--- create element
const app = document.getElementById("app");
const carritoH1 = document.createElement("h1")
carritoH1.textContent = "Carrito Productos"
app.appendChild(carritoH1);

//resto con innerHTML
//crear contenedor form
//crear imputs Nombre, cantidad, precio

//crear boton de añadir al carrito
app.innerHTML +=`
    <form id="form-producto">
      <input type="text" id="nombre-producto" placeholder="nombre del producto">
      <input type="number" id="cantidad-producto" placeholder="cantidad">
      <input type="number" id="precio-producto" placeholder="precio">
      <button type="submit">Agregar al carrito</button>
    </form>
    <div id="container-productos">
        <ul id="lista-productos"></ul>
    </div>
    <footer>
        <p>Total del Carrito: <strong id="total-carrito">0</strong></p>
    </footer>
    `

    document.getElementById("form-producto").addEventListener("submit", agregarProductoHandler)
    document.getElementById("lista-productos").addEventListener("click", manejarAccionesHandler)

    //siempre una vez cargue la pagina cargue el carrito
    renderListaCarrito();
}

init()



//añadir DIV para colocar los productos de mi carrito