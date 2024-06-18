/* Ejercicio 1 */
const datoEdad = parseInt(prompt("Porfavor, ingrese su edad"));

const ciudadania = prompt("¿ Es Ciudadano colombiano?, Digite SI o NO");

const esCiudadanoColombiano = confirm("¿Eres ciudadano colombiano?");

if (datoEdad >= 18 && esCiudadanoColombiano) {
  alert("Eres elegible para votar en las proximas eleciones");
} else {
  alert("No eres elegible parea votar proximas eleciones");
}
