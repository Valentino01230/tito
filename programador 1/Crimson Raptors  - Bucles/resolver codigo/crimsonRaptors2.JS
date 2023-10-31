function sumarNumerosHastaN() {
    let numero = prompt("Por favor, ingresa un número entero positivo:");
    numero = parseInt(numero);

    if (Number.isNaN(numero) || numero <= 0.0) {
        console.log("Error: Debes ingresar un número entero positivo válido.");
        return;
    }

    let suma = 0;
    for (let i = 1; i <= numero; i++) {
        suma += i;
    }

    console.log(`La suma de los números desde 1 hasta ${numero} es: ${suma}`);
}

sumarNumerosHastaN();
