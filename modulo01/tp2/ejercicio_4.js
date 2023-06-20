// Definimos una funcion que determina la paridad de cualquier numero entero.
// Con 'document.write()' mostramos resultados en pantalla.
function ParoImpar(numero) {
  if (numero % 2 === 0) {
    document.write("El numero es PAR");
  } else {
    document.write("El numero es IMPAR");
  }
}
// Le pedimos al usuario ingresar un dato.
var dato = prompt("Por favor ingrese un numero entero:");
var numero = parseInt(dato);
// Agregamos una condicion mas en el if para poder comprobar que el dato ingresado por el usuario sea un numero entero.
// 'Number.isInteger(numero)', 'numero >= 0' y 'dato.indexOf('.')' comprueban que el dato sea un numero entero mayor o igual a cero que no contenga un punto decimal.
// Si el dato ingresado es valido se llama a la funcion 'ParoImpar'
// Si el dato es invalido se muestra un mensaje en pantalla que lo indica.
if (Number.isInteger(numero) && numero >= 0 && dato.indexOf('.') === -1) {
  ParoImpar(numero);
} else {
  document.write("El dato ingresado es invalido, es necesario que sea un numero mayor o igual a cero, sin cifras decimales.");
}
