import { Pelota } from "./Pelota.js";

// TODO. Crear una pelota de color blue y almacenarla en una
// variable pelota
const pelota = new Pelota("blue");

// Invocamos al método mover de la pelota cada 30 milisegundos
setInterval(() => pelota.mover(), 30);
