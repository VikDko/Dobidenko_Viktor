var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// item 1.1: Determinar el "elemento de texto" mayor en el array
var TextElementos = valores.filter(function (elemento) {
  return typeof elemento === "string";
});

var MasLetras = TextElementos.reduce(function (mayor, actual) {
  return mayor.length > actual.length ? mayor : actual;
});

console.log("- El mayor elemento de texto presente en el array es: " + MasLetras);

// item 1.2: Elementos en orden (de menor a mayor cantidad de letras)
var MenoraMayor = TextElementos.sort(function (a, b) {
  return a.length - b.length;
});

console.log("- Elementos de texto ordenados de menor a mayor:");
console.log(MenoraMayor);

// item 1.3: Cuatro operaciones matemáticas básicas con elementos numéricos en el array
var NumArray = valores.filter(function (elemento) {
  return typeof elemento === "number";
});

var suma = NumArray[0] + NumArray[1];
var resta = NumArray[0] - NumArray[1];
var multiplicacion = NumArray[0] * NumArray[1];
var division = NumArray[0] / NumArray[1];

console.log("- Los resultados de las cuatro operaciones matematicas basicas realizadas con los dos unicos elementos numericos del array son las siguientes.");
console.log("   Resultado suma: " + suma);
console.log("   Resultado resta: " + resta);
console.log("   Resultado multiplicación: " + multiplicacion);
console.log("   Resultado división: " + division);
