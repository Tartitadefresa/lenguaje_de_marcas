import { ListaDeTareas } from "./ListaDeTareas.js";
import { Tarea } from "./Tarea.js";

const listaTareas = new ListaDeTareas();

listaTareas.agregarTarea(new Tarea("Hacer la compra"));
listaTareas.agregarTarea(new Tarea("Lavar el coche"));
listaTareas.agregarTarea(new Tarea("Pasear al perro"));

listaTareas.completarTarea(0);

listaTareas.eliminarTarea(1);

console.log(listaTareas.obtenerResumen());