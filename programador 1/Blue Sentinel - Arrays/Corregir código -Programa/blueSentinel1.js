const animales = ["perro", "gato", "pájaro", "conejo"];

// Muestra el contenido del array desde el principio
let i = 0;
while (i < animales.length) {
  console.log(animales[i]);
  i++; // Incrementa i en cada iteración
}

// Muestra el contenido del array de atrás hacia adelante
let j = animales.length - 1; // Inicializa j con la última posición del array
do {
  console.log(animales[j]);
  j--; // Disminuye j en cada iteración para retroceder en el array
} while (j >= 0); // La condición verifica si j es mayor o igual a 0
