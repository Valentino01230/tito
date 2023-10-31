// Función para obtener la elección aleatoria de la computadora
function eleccionComputadora() {
    const opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
  }
  
  // Función para determinar el resultado del juego
  function determinarResultado(usuario, computadora) {
    if (usuario === computadora) {
      return "Empate";
    } else if (
      (usuario === "Piedra " && (computadora === "Tijera" || computadora === "Lagarto")) ||
      (usuario === "Papel" && (computadora === "Piedra" || computadora === "Spock")) ||
      (usuario === "Tijera" && (computadora === "Papel" || computadora === "Lagarto")) ||
      (usuario === "Lagarto" && (computadora === "Papel" || computadora === "Spock")) ||
      (usuario === "Spock" && (computadora === "Piedra" || computadora === "Tijera"))
    ) {
      return "Ganaste";
    } else {
      return "La computadora ganó";
    }
  }
  
  // Función principal del juego
  function jugarPiedraPapelTijera() {
    let continuarJugando = true;
    let puntajeUsuario = 0;
    let puntajeComputadora = 0;
  
    while (continuarJugando) {
      const usuario = prompt("Elige una opción: Piedra, Papel, Tijera, Lagarto, Spock");
      if (usuario === "Piedra" || usuario === "Papel" || usuario === "Tijera" || usuario === "Lagarto" || usuario === "Spock") {
        const computadora = eleccionComputadora();
        console.log(`Usuario: ${usuario}`);
        console.log(`Computadora: ${computadora}`);
        const resultado = determinarResultado(usuario, computadora);
        console.log(`Resultado: ${resultado}`);
        if (resultado === "Ganaste") {
          puntajeUsuario++;
        } else if (resultado === "La computadora ganó") {
          puntajeComputadora++;
        }
  
        console.log(`Puntaje - Usuario: ${puntajeUsuario}, Computadora: ${puntajeComputadora}`);
  
        continuarJugando = confirm("¿Deseas continuar jugando?");
      } else {
        console.log("Opción no válida. Por favor, elige una de las opciones: Piedra, Papel, Tijera, Lagarto, Spock");
      }
    }
  
    console.log("Juego terminado. Gracias por jugar.");
  }
  
  // Iniciar el juego
  jugarPiedraPapelTijera();

// ___
// ---'   __)
//       (___)
//       (___)
//       (__)
// ---._(__)
// `,
//     papel: `
//      ___
// ---'    _)_
//            __)
//           ___)
//          ___)
// ---.____)
// `,
//     tijera: `
//     ___
// ---'   _)_
//           __)
//        ____)
//       (__)
// ---._(__)
// `,
//     lagarto: `
//      ___
//    /     \\
//   { () () }
//    - ^^^ -
//   /  -^-  \\
//  /___\\
// `,
//     spock: `
//      ___
//     /___\\
//    (| . . |)
//    _\\-/_
//   /___\\
// `
// 