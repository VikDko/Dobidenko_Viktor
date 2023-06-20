let a, b;
a = 3; b = 7;
//declaramos dos variables a y b con los valores 3 y 7 respectivamente
resultado = a * b;
//el resultado de la multiplicacion entre a y b se guarda en la variable "resultado"
document.write(`Variable a contiene ${a} <br> ` );
document.write(`Variable b contiene ${b} <br> ` );
document.write(`El producto de a por b es ${resultado} <br> `);
//el error se encontraba en la linea 6, el codigo estaba mal escrito, intentaba llamar al resultado de la multiplicacion entre A y B con "result" en vez de usar el nombre correcto de esa variable
//el error se soluciona al cambiar ${result} por ${resultado}
document.write("Los puntos de interrupcion son fundamentales para programar");