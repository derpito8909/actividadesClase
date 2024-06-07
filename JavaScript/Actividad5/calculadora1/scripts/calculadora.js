// traer los elementos del html

//declaracion de variables;
let pantalla;

// asignarle a mis variables los elementos de html
pantalla = document.getElementById("pantalla");

const botonSuma = document.getElementById("botonSuma");
const botonResta = document.getElementById("botonResta");
const botonMultiplicacion = document.getElementById("botonMultiplicacion");
const botonDivision = document.getElementById("botonDivision");

//asignar los eventos a loa botones de las operaciones
botonSuma.addEventListener("click", suma);
botonResta.addEventListener("click", resta);
botonMultiplicacion.addEventListener("click", multiplicacion);
botonDivision.addEventListener("click", division);

function suma() {
  pantalla.textContent = "";

  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);

  let resultado = numero1 + numero2;

  pantalla.textContent = resultado;
}
function resta() {
  pantalla.textContent = "";

  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);

  let resultado = numero1 - numero2;

  pantalla.textContent = resultado;
}
function multiplicacion() {
  pantalla.textContent = "";

  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);

  let resultado = numero1 * numero2;

  pantalla.textContent = resultado;
}
function division() {
  pantalla.textContent = "";

  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);

  let resultado = numero1 / numero2;

  pantalla.textContent = resultado;
}
