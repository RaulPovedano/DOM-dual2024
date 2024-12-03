export function Producto(nombre,precio,stock,img){
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
    this.img=img;
    

    this.getInfo = function(){
        return `Producto: ${this.nombre} ${this.img} - Precio: ${this.precio} - Stock: ${this.stock}`
    }
    this.updateProduct = function(newStock) {
        if (this.stock )
    }
}