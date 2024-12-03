//---testing de los ejercicios POO

import {Tarea, TareaClass} from "./helpers/ejercicio1";

//----#####################---EJERCICIO 1---###############----

//FUNCIONES CONSTRUCTORAS

const tarea1 = new Tarea("Aprender JavaScipt")
const tarea2 = new Tarea("Aprender React")
tarea1.info()
tarea1.toggleCompletada();
tarea1.info();
tarea2.info()

// ---Clases--
const tarea1Clases = new TareaClass("Aprender JavaScipt")
const tarea2Clases = new TareaClass("Aprender React")
tarea1Clases.info()
tarea1Clases.toggleCompletada();
tarea1Clases.info();
tarea2Clases.info()