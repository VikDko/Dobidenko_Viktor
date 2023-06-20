//Le pedimos al usuario que ingrese un numero entero
var numero = prompt("Ingrese un numero entero para calcular su factorial:");
var factorial = 1;

// Con la funcion 'Number.isInteger()' y 'Number()' comprobamos que el dato ingresado por el usuario es un numero entero
// Usamos 'Number()' para convertir el dato ingresado, que se almacena en la variable 'numero', en un valor numerico.
// Si el dato es valido calculamos el factorial con un bucle 'for'
// Si el dato es invalido (un numero menor a cero, numero decimal, cualquier dato no numerico) no se calcula el factorial y se muestra un mensaje en consola indicando que el dato es invalido.
if (Number.isInteger(Number(numero))) {
  var n = parseInt(numero);

  if (n >= 0) {
    for (var i = 1; i <= n; i++) {
      factorial *= i;
    }

    console.log("El factorial de " + n + " es: " + factorial);
  } else {
    console.log("El dato ingresado es invalido, es necesario que sea un numero mayor o igual a cero, sin cifras decimales.");
  }
} else {
  console.log("El dato ingresado es invalido, es necesario que sea un numero mayor o igual a cero, sin cifras decimales.");
}