document.addEventListener("DOMContentLoaded", function () {
    const textoFijo = "Desarrollador ";
    const frases = [ 
        "Back-end",
        "Java",
        "Spring boot"
    ];

    const velocidadEscritura = 45;
    const tiempoEspera = 1500;
    const elementoTexto = document.getElementById("texto");
    let indiceFraseActual = 0;

    function escribirTexto(i) {
        if (i < frases[indiceFraseActual].length) {
            elementoTexto.innerHTML = textoFijo + frases[indiceFraseActual].substring(0, i + 1);
            setTimeout(() => escribirTexto(i + 1), velocidadEscritura);
        } else {
            setTimeout(borrarTexto, tiempoEspera);
        }
    }

    function borrarTexto() {
        const textoActual = frases[indiceFraseActual];
        if (textoActual.length > 0) {
            frases[indiceFraseActual] = textoActual.slice(0, -1);
            elementoTexto.innerHTML = textoFijo + frases[indiceFraseActual];
            setTimeout(borrarTexto, velocidadEscritura);
        } else {
            // Restaurar la frase original y pasar a la siguiente
            frases[indiceFraseActual] = textoActualOriginal[indiceFraseActual];
            indiceFraseActual = (indiceFraseActual + 1) % frases.length;
            setTimeout(() => escribirTexto(0), tiempoEspera);
        }
    }

    // Guardar copias originales para restaurar después del borrado
    const textoActualOriginal = [...frases];

    escribirTexto(0);
});


