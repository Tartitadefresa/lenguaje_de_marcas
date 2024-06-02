class ListaDeTareas {
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea) {
      this.tareas.push(tarea);
    }
  
    completarTarea(indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas[indice].completada = true;
      } else {
        console.log("Índice de tarea fuera de rango.");
      }
    }
  
    eliminarTarea(indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas.splice(indice, 1);
      } else {
        console.log("Índice de tarea fuera de rango.");
      }
    }
  
    obtenerResumen() {
      let pendientes = 0;
      let completadas = 0;
      for (const tarea of this.tareas) {
        if (tarea.completada) {
          completadas++;
        } else {
          pendientes++;
        }
      }
      return `Tareas pendientes: ${pendientes}, Tareas completadas: ${completadas}`;
    }
}

export { ListaDeTareas }