/* ejercicio 2 */
const precioOriginal = parseFloat(prompt("Digite el valor base del producto:"));
const descuento = prompt("Defina el descuento que quiere aplicar: \n 1-> Descuento de 20% \n 2-> Descuento de 50% \n 3-> Descuento de 70% ");
let precioFinal = 0;

switch (descuento) {
  case "1":
    precioFinal = precioOriginal - precioOriginal * 0.2;
    alert("El precio final despues del descuento es:" + precioFinal);
    break;

  case "2":
    precioFinal = precioOriginal - precioOriginal * 0.5;
    alert("El precio final despues del descuento es:" + precioFinal);
    break;

  case "3":
    precioFinal = precioOriginal - precioOriginal * 0.7;
    alert("El precio final despues del descuento es:" + precioFinal);
    break;

  default:
    alert("Digite una opcion valida");
    break;
}
