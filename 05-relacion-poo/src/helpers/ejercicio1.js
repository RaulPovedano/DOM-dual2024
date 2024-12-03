export function Tarea(nombre) {

//propiedades estaticas
Tarea.contador = 0;
//propiedades privadas
//propiedades publicas
this.id = ++Tarea.contador;
this.nombre = nombre;
this.completada = false;

// metodos publicos

this.toggleCompletada = function () {
    this.completada = !this.completada
}

//metodo privada

function logEstado() {
    console.log(`la tarea ${this.nombre} esta: ${this.completada ? 'completada' : 'pendiente'}`);
}
//crear una propiedad estatica del objeto que lo tengan todas las instancias
Tarea.prototype.info = function () {
    console.log(`la tarea ${this.nombre} esta: ${this.completada ? 'completada' : 'pendiente'}`);
}

}

//con clases


export class TareaClass {
    //variable de la clase
    static contador = 1;
    //propiedad privada
    #completada;
    //constructor
    constructor(nombre){
        this.id = TareaClass.contador++
        this.nombre = nombre;
        this.#completada = false;
    }

    //metodos publicos
    toggleCompletada() {
        this.#completada = !this.#completada
    }
    info() {
        console.log(`la tarea ${this.nombre} esta: ${this.#completada ? 'completada' : 'pendiente'}`);
    }
}
