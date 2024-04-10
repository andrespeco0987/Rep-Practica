"use strict";
/* const entrada = prompt("Ingrese su nombre:");

if(entrada)
{
    document.write("Hola, " + entrada + " Bienvenido!");
}
else
{
    document.write("Hola Bienvenido");
} */

/* const entrada = prompt("Ingrese su nombre:");
console.log(entrada);

switch (entrada) {
  case "":
    document.write("Hola!");
    break;
  default:
    document.write("Hola " + entrada + " Bienvenido");
    break;
} */

/* let numero1 = prompt("ingrese un numero para sumarlo");
let numero2 = prompt("ingrese segundo numero");

numero1 = +numero1;
numero2 = +numero2;

let resultado = numero1 + numero2;

document.write(resultado);
console.log(resultado); */

/* const nombre = prompt("ingresa tu nombre");
const apellido = prompt("ingresa tu apellido");

const nombreCompleto = nombre + " " + apellido;

document.write(nombreCompleto);
console.log(nombreCompleto); */
/* 
const numero = parseInt(prompt('ingrese un numero'))
for(let i = 1; i <= numero; i++){
  document.write(i + "\n")
} */

/* const numero = parseInt(prompt('Ingrese un número: '));

for (let i = 1; i <= numero; i++) {
  const div = document.createElement('div'); // Crear un elemento div
  div.textContent = i; // Establecer el contenido de div como el número
  document.body.appendChild(div); // Agregar el div al cuerpo del documento
} */

const numero = parseInt(prompt('Ingrese un número: '));

for (let i = 1; i <= numero; i++) {
  document.write(i + "\n"); // Agregar "\n" al final de cada número
}

