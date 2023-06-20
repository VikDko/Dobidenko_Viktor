// Le pedimos al usuario que ingrese un numero.
var mes = parseInt(prompt("Ingrese el número del mes:"));
// Se verfica que el num ingresado este entre 1 y 12. 
if (mes >= 1 && mes <= 12) {
  var dias;
  // Con un switch determinamos la cantidad de dias de cada mes.
  switch (mes) {
    case 2:
      dias = "28 o 29";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dias = "30";
      break;
    default:
      dias = "31";
      break;
  }

  console.log("El mes " + mes + " tiene " + dias + " días.");
} else {
  console.log("El número de mes es inválido, ingrese un numero del 1 al 12");
}
