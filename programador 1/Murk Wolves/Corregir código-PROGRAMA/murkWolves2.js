// Solicitar al usuario el nombre y la edad
let nombre = prompt("Por favor, ingresa tu nombre:");
let edad = parseInt(prompt("Por favor, ingresa tu edad:"));

// Calcular el año de nacimiento
let añoActual = new Date().getFullYear();
let añoNacimiento = añoActual - edad;

// Crear el mensaje
let mensaje = "Hola " + nombre + ", naciste en el año " + añoNacimiento;

// Mostrar el mensaje en la consola
console.log(mensaje);

// Mostrar el mensaje en una ventana emergente
alert(mensaje);



//Desarrollar un pequeño programa que solicite al usuario el nombre y la edad,br
// devolver por consola y por ventana el siguiente mensaje con los datos correspondientes. 
//"Hola nombreIngresado, naciste en el año añoIngresado" 

//Guardar el archivo en la estructura de carpetas que creaste para todo el ejercicio y pedir que te lo corrija el profesor o un compañero del otro equipo. 

 