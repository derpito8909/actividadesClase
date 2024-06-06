// obtener la seleccion del boton para poder utilizarlo en el codigo
const btnExam1 = document.getElementById("exam1");
const btnExam2 = document.getElementById("exam2");

// agregar al boton1 un evento click para ejecutar el ejericio 1
btnExam1.addEventListener("click", function (e) {
  let num1 = parseInt(prompt("digite un numero"));
  let num2 = parseInt(prompt("digite un segundo numero"));
  let result = sumNumbers(num1, num2);
  alert(result);
});
// agregar al boton2 un evento click para ejecutar el ejericio 2
btnExam2.addEventListener("click", function (e) {
  let num = parseInt(prompt("digite un numero"));
  let result = oddAndEvenNumber(num);
  alert(result);
});
/**
 * recibe dos numeros y los suma
 * @param {number} num1
 * @param {number} num2
 * @return {String} resultado de la operacion.
 */
function sumNumbers(num1, num2) {
  const resultSum = num1 + num2;
  return `La suma de ${num1} y ${num2} es ${resultSum}`;
}
/**
 * recibe un numero y muestra si ese numero es par o impar
 * @param {number} num1
 * @return {String} resultado de la operacion.
 */
function oddAndEvenNumber(num) {
  if (num % 2 == 0) {
    return `El ${num} es un numero par`;
  } else {
    return `El ${num} es un numero impar`;
  }
}
