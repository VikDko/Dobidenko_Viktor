// Definimos la funcion, usamos expresiones para comprobar si el texto esta formado solo por mayuscules o minusculas.
function MayusMinus(texto) {
    var esMayuscula = /^[A-Z]+$/;
    var esMinuscula = /^[a-z]+$/;
    
    if (esMayuscula.test(texto)) {
      return "La cadena de texto ingresada está formada solo por mayúsculas.";
    } else if (esMinuscula.test(texto)) {
      return "La cadena de texto ingresada está formada solo por minúsculas.";
    } else {
      return "La cadena de texto ingresada está formada por una combinación de mayúsculas y minúsculas.";
    }
  }
  
  var cadenaTexto = prompt("Ingrese un texto:");
  // Usamos un if para comprobar que lo ingresado cumpla con la expresion '/^[a-zA-Z]+$/'
  // Con '/^[a-zA-Z]+$/' verificamos que la cadena ingresada solo contenga letras.
  // Si lo ingresado es valido se ejecuta la funcion y se muestra el resultado en consola.
  // Si es invalido se muestra un mensaje en consola que lo indica.
  if (/^[a-zA-Z]+$/.test(cadenaTexto)) {
    var resultado = MayusMinus(cadenaTexto);
    console.log(resultado);
  } else {
    console.log("El dato es invalido, solamente debe ingresar letras.");
  }
  