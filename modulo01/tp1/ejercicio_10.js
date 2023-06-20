let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let num = parseInt(prompt("Ingresa un número del 1 al 12 para conocer el mes correspondiente"));
//declaramos el array meses, se le pide al usuario ingresar un numero con prompt() y el numero se convierte a entero con parseint()
if (num >= 1 && num <= 12) {
  let mes = meses[num-1];
  console.log(`El mes correspondiente al número ${num} es ${mes}`);
} else {
  console.log("Número inválido, por favor ingresa un número del 1 al 12");
}
