
function suma(a, b) {
    return a + b;
  }
  
 
  function resta(a, b) {
    return a - b;
  }
  

  function multiplicacion(a, b) {
    return a * b;
  }
  
 
  function division(a, b) {
    if (b === 0) {
      throw new Error("No puedes dividir por cero.");
    }
    return a / b;
  }
  

  function calculadora() {
    let operacion = prompt("Selecciona una operación: suma, resta, multiplicación, división. Ingresa 'fin' para salir.");
  
    if (operacion === 'fin') {
      return;
    }
  
    if (operacion !== 'suma' && operacion !== 'resta' && operacion !== 'multiplicación' && operacion !== 'división') {
      console.log("Operación no válida.");
      calculadora();
      return;
    }
  
    if (operacion === 'suma' || operacion === 'resta') {
      let total = 0;
      while (true) {
        let numero = prompt("Ingresa un número o 'fin' para obtener el resultado.");
        if (numero === 'fin') {
          break;
        }
        numero = parseFloat(numero);
        if (!isNaN(numero)) {
          total = operacion === 'suma' ? suma(total, numero) : resta(total, numero);
        } else {
          console.log("Número no válido.");
        }
      }
      console.log(`El resultado de la ${operacion} es: ${total}`);
    } else {
      let numero1 = parseFloat(prompt("Ingresa el primer número:"));
      let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
  
      if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Uno o ambos números no son válidos.");
      } else {
        try {
          let resultado = operacion === 'multiplicación' ? multiplicacion(numero1, numero2) : division(numero1, numero2);
          console.log(`El resultado de la ${operacion} es: ${resultado}`);
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  
    calculadora();
  }
  
  
  calculadora();
  