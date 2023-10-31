// Función para calcular el promedio de una lista de números
function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma / numeros.length;
  }
  
  // Intenta calcular el promedio de [5, 10, 15, 20]
  const lista = [5, 10, 15, 20];
  const promedio = calcularPromedio(lista); // Corrección en el nombre de la variable
  console.log(promedio);
  