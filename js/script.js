document.addEventListener("DOMContentLoaded", function() {
  var frases = [
      "Programador trainee.",
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
          setTimeout(function() {
              escribirTexto(i + 1);
          }, velocidadEscritura);
      } else {
          // Esperar antes de borrar y cambiar la frase
          setTimeout(function() {
              borrarTexto();
          }, tiempoEspera);
      }
  }

  function borrarTexto() {
      var textoActual = elementoTexto.innerHTML;
      var longitudTexto = textoActual.length;

      if (longitudTexto > 0) {
          elementoTexto.innerHTML = textoActual.substring(0, longitudTexto - 1);
          setTimeout(function() {
              borrarTexto();
          }, velocidadEscritura);
      } else {
          // Cambiar a la siguiente frase
          indiceFraseActual = (indiceFraseActual + 1) % frases.length;

          // Esperar antes de empezar a escribir la siguiente frase
          setTimeout(function() {
              escribirTexto(0);
          }, tiempoEspera);
      }
  }

  escribirTexto(0);
});