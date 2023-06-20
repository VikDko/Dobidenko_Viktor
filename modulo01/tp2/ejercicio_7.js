// Con un for iteramos desde el ultimo caracter al primero e invertimos el texto original con 'textoInvertido'
function AlReves(texto) {
    var textoInvertido = "";
    
    for (var i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
    
    return textoInvertido;
  }
  // Llamamos a la funcion. 
  // Pedimos al usuario ingresar un texto.
  var textoOriginal = prompt("Por favor ingrese un texto:");
  var textoInvertido = AlReves(textoOriginal);
  
  console.log("Texto original: " + textoOriginal);
  console.log("Texto al reves: " + textoInvertido);
  