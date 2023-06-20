// Le pedimos al usuario que ingrese un texto.
var texto = prompt("Ingrese un texto:");
// Con 'indexOf()' determinamos la posicion de la primera vocal.
// Con 'toLowerCase()' convertimos el texto a minusculas.
// En el if usamos '/^[a-zA-Z]+$/' para comprobar que lo ingresado sean solo letras.
if (/^[a-zA-Z]+$/.test(texto)) {
  var vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  
  var PriVocal = null;
  for (var i = 0; i < texto.length; i++) {
    var caracter = texto[i].toLowerCase();
    if (vocales.includes(caracter)) {
      PriVocal = caracter;
      break;
    }
  }
  
  if (PriVocal !== null) {
    var posicion = texto.toLowerCase().indexOf(PriVocal) + 1;
    console.log("La primera vocal es '" + PriVocal + "' y es la letra Nº" + posicion);
  } else {
    console.log("El texto ingresado no contiene ninguna vocal.");
  }
} else {
  console.log("El dato es invalido, solamente debe ingresar letras.");
}