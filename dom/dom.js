"use strict";
//creacion de elementos
const d = document;
const $root = d.getElementById("root");
const $raiz = d.getElementById("raiz");
const $h1 = d.createElement("h1");
const $p = d.createElement("p");
const $btn = d.createElement("button");
const $btn2 = d.createElement("button");
const $btn3 = d.createElement("button");
const $span = d.createElement("span");

let contadorDeClicks = 0;

// contenido de la etiqueta
$h1.textContent = "Manipulacion Del Dom";
$p.textContent = contadorDeClicks;
$btn.textContent = "Mas";
$btn2.textContent = "Menos";
$btn3.textContent = "reset";
$span.textContent = " ";

//estilos
$root.style.backgroundColor = "green";
$root.style.color = "white";
$raiz.style.backgroundColor = "greenyellow";

//asociacion de hijos al padre
$root.appendChild($h1);
$root.appendChild($p);
$root.appendChild($btn);
$root.appendChild($btn2);
$root.appendChild($btn3);
$raiz.appendChild($span);

//eventos
$btn.addEventListener("click", () => {
	contadorDeClicks++;
	$p.textContent = contadorDeClicks;
	if (contadorDeClicks === 10) {
		/* $raiz.style.display = "none"; */
		/* $raiz.remove(); //remover con dom */
	}
	$span.textContent = ` El doble de clicks es: ${contadorDeClicks * 2}`;
	$raiz.appendChild($span);
	$raiz.style.display = "block";
});

$btn2.addEventListener("click", () => {
	contadorDeClicks--;
	$p.textContent = contadorDeClicks;
	$span.textContent = ` El doble de clicks es: ${contadorDeClicks * 2}`;
	$raiz.style.display = "block";
});

$btn3.addEventListener("click", () => {
	contadorDeClicks = 0;
	$p.textContent = contadorDeClicks;
	/* $raiz.style.display = "block"; */
	/* $root.appendChild($raiz); */
	$raiz.style.display = "none";
});
