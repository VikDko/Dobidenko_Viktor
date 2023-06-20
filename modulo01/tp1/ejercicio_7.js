let dato, resultado;
val1 = window.prompt("Introduce tu nombre", "...");
val2 = window.prompt("Introduce tu apellido", "...");
//definimos dos variables val1 y val2 que guardan valores ingresados por el usuario
//con window.prompt() se muestra una ventana emergente para que el usuario ingrese un valor
//el 1er window.prompt le pide al usuario ingresar su nombre
//el 2do window.prompt le pide al usuario ingresar su apellido
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
//se concatenan los valores de val1 y val2 y se guardan en la variable resultado
document.write(resultado);
//se muestra el resultado en pantalla