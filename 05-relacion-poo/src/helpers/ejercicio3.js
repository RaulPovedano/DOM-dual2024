export function Empleado(nombre,edad, puesto){
    this.nombre=nombre
    this.edad = edad
    this.puesto=puesto

    //salario compartido para la clase

    Empleado.prototype.calcularSalario = function(){
        const salarioBase = {
            junior:1500,
            senior: 2500,
            master:5000
        };
        return salarioBase[this.puesto] || 0;
    }

    Empleado.prototype.info = function () {
        console.log(`${this.nombre}- ${this.edad}- ${this.puesto}----${this.calcularSalario()} €`);
    }

}


// subclase constructora llamado EmpleadoFreelance

export function EmpleadoFreelance(nombre,edad,precioHora) {
    Empleado.call(this, nombre, edad, "freelance");
    this.precioHora = precioHora;
    //tengo que heredar los metodos de la funcion constructora padre
    //para ello uso el metodo call

    EmpleadoFreelance.prototype = Object.create(Empleado.prototype)
    //y que eel constructor sea el del padre

    EmpleadoFreelance.prototype.constructor = EmpleadoFreelance

    //sobreescribir un metodo calcularSalario y el info

    

    EmpleadoFreelance.prototype.info() = function (){

    }
}