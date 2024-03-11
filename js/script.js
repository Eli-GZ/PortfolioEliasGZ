document.addEventListener("DOMContentLoaded", function () {
    var frases = [
        "Programador Web.",
        "Front-End.",
        "Back-End."
    ];

    var velocidadEscritura = 50;
    var tiempoEspera = 2000;
    var elementoTexto = document.getElementById("texto");
    var indiceFraseActual = 0;

    function escribirTexto(i) {
        if (i < frases[indiceFraseActual].length) {
            elementoTexto.innerHTML += frases[indiceFraseActual].charAt(i);
            setTimeout(function () {
                escribirTexto(i + 1);
            }, velocidadEscritura);
        } else {

            setTimeout(function () {
                borrarTexto();
            }, tiempoEspera);
        }
    }

    function borrarTexto() {
        var textoActual = elementoTexto.innerHTML;
        var longitudTexto = textoActual.length;

        if (longitudTexto > 0) {
            elementoTexto.innerHTML = textoActual.substring(0, longitudTexto - 1);
            setTimeout(function () {
                borrarTexto();
            }, velocidadEscritura);
        } else {

            indiceFraseActual = (indiceFraseActual + 1) % frases.length;


            setTimeout(function () {
                escribirTexto(0);
            }, tiempoEspera);
        }
    }

    escribirTexto(0);
});