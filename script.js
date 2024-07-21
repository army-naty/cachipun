function opciones(opcion) {
    let tiro;
    if (opcion == 1) {
        tiro = "piedra";
    } else if (opcion == 2) {
        tiro = "papel";
    } else {
        tiro = "tijera";
    }
    return tiro;
}

function tiroUsuario() {
    let opcion;
    while (true) {
        opcion = prompt(`Ingresa el número de tu opción:
            1. Piedra
            2. Papel
            3. Tijera
        `);
        if (!isNaN(opcion) && opcion >= 1 && opcion <= 3) {
            break;
        } else {
            alert("Por favor, ingresa un número válido (1, 2, o 3).");
        }
    }
    return opciones(parseInt(opcion));
}

function tiroComputadora() {
    let opcionComputadora = Math.floor(Math.random() * 3) + 1;
    return opciones(opcionComputadora);
}

function repeticiones() {
    let repetir;
    while (true) {
        repetir = prompt("Ingresa el número de veces que deseas jugar");
        if (!isNaN(repetir)) {
            break;
        } else {
            alert("Por favor, ingresa un número válido");
        }
    }
    return parseInt(repetir);
}

function ganador(tiroUsuario, tiroComputadora) {
    let resultado;
    if (tiroComputadora == tiroUsuario) {
        resultado = "Es un empate";
    } else if (
        (tiroUsuario == 'piedra' && tiroComputadora == 'tijera') ||
        (tiroUsuario == 'papel' && tiroComputadora == 'piedra') ||
        (tiroUsuario == 'tijera' && tiroComputadora == 'papel')
    ) {
        resultado = "¡Felicidades Ganaste!";
    } else {
        resultado = "¡Lo siento, perdiste!";
    }
    return resultado;
}

function jugar() {
    let tiros = repeticiones();
    for (let inicio = 0; inicio < tiros; inicio++) {
        let usuarioTiro = tiroUsuario();
        alert("El usuario elige: " + usuarioTiro);

        let computadoraTiro = tiroComputadora();
        alert("La computadora elige: " + computadoraTiro);

        let resultado = ganador(usuarioTiro, computadoraTiro);
        alert("Resultado: " + resultado);
    }
    alert("Hasta luego!")
}

// Para iniciar el juego
jugar();
