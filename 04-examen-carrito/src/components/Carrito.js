import { Producto } from "./Producto";

export default class Carrito {
    constructor() {
        this.productos = [];
    }

    //agregar "un Producto" al carrito

    agregarProducto(nombre,cantidad,precio){
        this.productos.push(new Producto(nombre,cantidad,precio));
        // guardar en el localStorage
    }

    borrarProducto(index){
        this.productos.splice(index, 1);
        // guardar en el localStorage
    }

    editarProducto(index, newCantidad){
        if (newCantidad>0){
            this.productos[index].cantidad = newCantidad
            // guardar en el localStorage
        }
    }

    calcularTotal(){
       return this.productos.reduce((total, producto) => total + producto.calcularTotal() ,0)
    }

    // extra localStorage
    guardarLocalStorage(){
        localStorage.setItem("Carrito:",JSON.stringify(this.productos))
    }

    cargarLocalStorage(){
        const carrito = JSON.parse(localStorage.getItem("Carrito:"))
        if (carrito){
            //coger y guardar en productos un map creado de carrito con productos
            this.productos = carrito.map((producto) => new Producto(producto.nombre,producto.cantidad, producto.precio))
        }
}

// Ordenar por nombre y por precio
}