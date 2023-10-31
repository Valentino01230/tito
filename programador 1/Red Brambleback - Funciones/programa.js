// Implementación de una calculadora simple

function calculadoraSimple() {
    while (true) {
      const num1 = parseFloat(prompt("Ingresa el primer número:"));
      const operador = prompt("Ingresa un operador (+, -, *, /) o 'q' para salir:");
      
      if (operador === 'q') {
        break;
      }
      
      const num2 = parseFloat(prompt("Ingresa el segundo número:"));
      
      let resultado;
      switch (operador) {
        case '+':
          resultado = num1 + num2;
          break;
        case '-':
          resultado = num1 - num2;
          break;
        case '*':
          resultado = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            resultado = num1 / num2;
          } else {
            console.log("Error: No se puede dividir por cero.");
            continue;
          }
          break;
        default:
          console.log("Operador no válido.");
          continue;
      }
      
      console.log(`Resultado: ${num1} ${operador} ${num2} = ${resultado}`);
    }
  }
  
  console.log("Calculadora Simple");
  calculadoraSimple();
  