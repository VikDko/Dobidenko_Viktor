// Definimos la funcion 'calculoProm' que va a recibir un array de notas
function calculoProm(notas) {
    var suma = 0;
    // Sumamos las notas y las dividimos por la cantidad de notas.
    for (var i = 0; i < notas.length; i++) {
      suma += notas[i];
    }
    
    var promedio = suma / notas.length;
    return promedio;
  }
  // Definimos la funcion 'ApruebaReprueba(promedio)' que recibe el promedio y comprueba si el alumno aprueba o no. 
  function ApruebaReprueba(promedio) {
    if (promedio <= 5) {
      return "Reprobado";
    } else if (promedio >= 6 && promedio <= 8) {
      return "Aprobado";
    } else {
      return "Sobresaliente";
    }
  }
  // Le pedimos al usuario que ingrese la cantidad de notas y el valor de cada una de ellas.
  var cantNotas = parseInt(prompt("Ingrese la cantidad de notas:"));
  var notas = [];
  // Dentro del mismo bucle for se comprueba que las notas esten dentro del rango 0 a 10, si es invalida se muestra un mensaje de error y se pide nuevamente.
  for (var i = 0; i < cantNotas; i++) {
    var nota = parseInt(prompt("Por favor ingrese la nota " + (i + 1) + ":"));
    
    while (nota < 0 || nota > 10) {
      nota = parseInt(prompt("La nota es inválida, ingrese una nota entre 0 y 10:"));
    }
    // Almacenamos las notas en el array notas.
    notas.push(nota);
  }
  
  var promedio = calculoProm(notas);
  var estado = ApruebaReprueba(promedio);
  // Con 'toFixed(2)' hacemos que el resultado del promedio solo tenga dos decimales.
  document.write("Promedio: " + promedio.toFixed(2) + "<br>");
  document.write("Estado: " + estado);
  