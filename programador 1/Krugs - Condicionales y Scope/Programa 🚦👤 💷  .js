// Solicitar al usuario que ingrese su gasto total mensual
const gastoTotal = parseFloat(prompt("Ingresa tu gasto total mensual:"));

// Utilizar condicionales para determinar la evaluación
let evaluacion = "";

if (gastoTotal < 500) {
  evaluacion = "Gasto Muy Bajo";
} else if (gastoTotal >= 500 && gastoTotal <= 1000) {
  evaluacion = "Gasto Moderado";
} else {
  evaluacion = "Gasto Alto";
}

// Mostrar la evaluación en la consola
console.log(`Tu gasto total mensual es de $${gastoTotal}.`);
console.log(`Evaluación: ${evaluacion}`);
console.log("Gracias por utilizar la calculadora de evaluación de gastos.");
