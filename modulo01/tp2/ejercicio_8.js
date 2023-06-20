// Definimos la funcion 'NumerosRandom'
function NumerosRandom() {
    // Hacemos un array 'randomNumeros' donde se guardan los numeros generados.
    var randomNumeros = [];
    // Con un bucle while, que se ejecuta hasta que el array tenga 100 elementos, generamos los numeros.
    // Con 'Math.random()' y 'Math.floor()' se generan los numeros aleatorios.
    while (randomNumeros.length < 100) {
      var numAleatorio = Math.floor(Math.random() * 100) + 1;
      // Con 'includes()' comprobamos si el num generado ya esta en el array, si no esta se lo agrega con 'push()'
      if (!randomNumeros.includes(numAleatorio)) {
        randomNumeros.push(numAleatorio);
      }
    }
    // La funcion nos da el array con los 100 numeros aleatorios generados.
    return randomNumeros;
  }
  
  var numeros = NumerosRandom();
  // En el for se itera sobre 'numeros' y con 'document.write()' y '<br>' se imprimen cada uno de los numeros en pantalla uno bajo el otro en una lista. 
  for (var i = 0; i < numeros.length; i++) {
    document.write(numeros[i] + "<br>");
  }