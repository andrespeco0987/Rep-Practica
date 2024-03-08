"use strict"
/* const entrada = prompt("Ingrese su nombre:");

if(entrada)
{
    document.write("Hola, " + entrada + " Bienvenido!");
}
else
{
    document.write("Hola Bienvenido");
} */


const entrada = prompt("Ingrese su nombre:");
console.log (entrada);

switch(entrada){
    case "":
        document.write("Hola!");
        break;
    default:
        document.write("Hola " + entrada + " Bienvenido");
        break;
}
