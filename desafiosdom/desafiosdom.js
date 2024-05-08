"use strict";
const d = document;

d.addEventListener("DOMContentLoaded", () => {
	manejarEjercicio1();
	manejarEjercicio2();
	manejarEjercicio3();
	manejarEjercicio4();
	calcular();
});

/* 1. Hacer un programa que reciba del usuario dos números y
muestre cual es el número mayor y cual es el número menor.
*/
function manejarEjercicio1() {
	const $resultado = d.getElementById("resultado");
	const $form1 = d.getElementById("form1");
	$form1.addEventListener("submit", (evento) => {
		evento.preventDefault();
		const numero1 = parseInt($form1.numero1.value);
		const numero2 = parseInt($form1.numero2.value);
		if (numero1 === numero2) {
			$resultado.textContent = `${numero1} es igual a ${numero2}`;
		} else if (numero1 > numero2) {
			$resultado.textContent = `${numero1} es mayor a ${numero2}`;
		} else {
			$resultado.textContent = `${numero1} es menor a ${numero2}`;
		}
		$form1.reset();
	});
}

/* 2. Hacer un programa que solicite al usuario un texto,
si el usuario no ingresa nada seguir solicitando hasta que lo haga.
*/
function manejarEjercicio2() {
	const modal = new bootstrap.Modal("#modal1");
	const $listo = d.getElementById("listo");
	$listo.addEventListener("click", () => {
		const $texto = d.getElementById("texto");
		if ($texto.value != "") {
			const $textoIngresado = d.getElementById("textoIngresado");
			$textoIngresado.textContent = `El texto ingresado es: ${$texto.value}`;
			modal.hide();
			$texto.value = "";
		}
	});
}

/* 3. Hacer un programa que solicite al usuario un número de 0 a 6 (manejar errores)
mostrar el día de la semana correspondiente según arreglo "días"
*/
function manejarEjercicio3() {
	const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
	const $form2 = d.getElementById("form2");
	$form2.addEventListener("submit", (evento) => {
		evento.preventDefault();
		const $dia = parseInt($form2.dia.value);
		if ($dia >= 0 && $dia <= 6) {
			const $diaSeleccionado = d.getElementById("diaSeleccionado");
			$diaSeleccionado.textContent = `El día seleccionado es: ${dias[$dia]}`;
		}
	});
}

/* 4. Juego piedra, papel, tijera */
function manejarEjercicio4() {
	const opciones = ["piedra", "papel", "tijera"];
	const indice = Math.floor(Math.random() * opciones.length);
	const seleccionMaquina = opciones[indice];
	console.log("seleccionMaquina: ", seleccionMaquina);
	const opcionesUsuario = d.querySelectorAll(".ppt");
	opcionesUsuario.forEach((opcion) => {
		opcion.addEventListener("click", () => {
			const seleccionUsuario = opcion.textContent;
			console.log("seleccionUsuario: ", seleccionUsuario);
			if (seleccionMaquina === seleccionUsuario) {
				manejarEjercicio4();
			} else if (
				(seleccionUsuario === "piedra" && seleccionMaquina === "tijera") ||
				(seleccionUsuario === "papel" && seleccionMaquina === "piedra") ||
				(seleccionUsuario === "tijera" && seleccionMaquina === "papel")
			) {
			}
		});
	});
}

//

function calcular() {
	const $form3 = d.getElementById("form3");
	$form3.addEventListener("submit", (evento) => {
		evento.preventDefault();
		const $num1 = parseFloat(d.getElementById("num1").value);
		const $num2 = parseFloat(d.getElementById("num2").value);

		const suma = $num1 + $num2;
		const diferencia = $num1 - $num2;
		const multi = $num1 * $num2;

		d.getElementById("result").innerHTML = "Suma: " + suma + ", Resta: " + diferencia + ", Multiplicacion: " + multi;
	});
}
