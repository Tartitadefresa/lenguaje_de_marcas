class Pelota {
  // TODO. Declarar todas las propiedades privadas utilizando sintaxis de campo privado (#)
  #posX;
  #velX;
  #posY;
  #velY;
  #tamanyo;
  #color;
  #elemento;

  constructor(colorPelota) {
    // Obtener el elemento HTML de la pelota (id = pelota) y asignarlo a la propiedad elemento
    // Posición inicial de la pelota en el eje X
    this.#elemento = document.getElementById("pelota");
    this.#posX = 250;
    // TODO. Establecer la posición inicial de la pelota en el eje Y
    this.#posY = 250;
    // Establecemos la velocidad inicial de la pelota en el eje X
    this.#velX = 7;

    // TODO. Establecer la velocidad inicial de la pelota en el eje Y
    this.#velY = 3;
    // TODO. Establecer el valor de la propiedad color con el color recibido como parámetro de entrada
    this.#color = colorPelota;
    // Método para dibujar la pelota en su posición inicial
    this.dibujar();
  }

  // Método para dibujar la pelota en su posición actual
  dibujar() {
    // Establecer el tamaño de la pelota. Asignamos el valor de la propiedad tamanyo tanto al
    // width como al height del elemento.
    this.#elemento.style.width = this.#tamanyo + "px";
    this.#elemento.style.height = this.#tamanyo + "px";

    // TODO. Establecer la posición de la pelota en el contenedor. En este caso, asignaremos a las propiedades
    // top y left del style del elemento los valores de posX y posY respectivamente.
    this.#elemento.style.top = this.#posY + "px";
    this.#elemento.style.left = this.#posX + "px";
    // TODO. Establecer el color de la pelota. Asignaremos el valor de la propiedad color al atributo
    // backgroundColor del style del elemento.
    this.#elemento.style.backgroundColor = this.#color;
  }

  // Método para mover la pelota
  mover() {
    // Actualizar la posición de la pelota según su velocidad. Añade a la propiedad posX tantos pixels
    // como velocidad en el eje de las X tengamos y lo mismo en el eje de las Y
    this.#posX += this.#velX;
    this.#posY += this.#velY;

    // TODO. Redibujar la pelota en su nueva posición. Invocamos al método dibujar
    this.dibujar();
    // TODO. Verificar si la pelota ha colisionado con los bordes del contenedor.
    this.detectarColision();
    // Invocamos al método detectarColisión
  }

  // Método para detectar colisiones con los bordes del contenedor
  detectarColision() {
    // Obtener el contenedor que contiene la pelota (el que tiene la clase css container)
    const container = document.querySelector(".container");
    // Calcular los límites del contenedor en los ejes X e Y
    const limiteX = container.offsetWidth - this.#elemento.offsetWidth;
    const limiteY = container.offsetHeight - this.#elemento.offsetHeight;

    // TODO. Verificar si la pelota ha colisionado con los bordes del contenedor en el eje X
    // Si la posX es mayor o igual que limiteX o la posX es menor o igual que 0,
    // hacemos que velX se invierta (cambie de signo)
    if (this.#posX >= limiteX || this.#posX <= 0) {
      this.#velX = -this.#velX;
    }

    // TODO. Verificar si la pelota ha colisionado con los bordes del contenedor en el eje Y.
    // Repetimos la misma lógica que hemos hecho con el eje de las X
    if (this.#posY >= limiteY || this.#posY <= 0) {
      this.#velY = -this.#velY;
    }
  }
}

// Exportar la clase Pelota para su uso en otros archivos
export { Pelota };
