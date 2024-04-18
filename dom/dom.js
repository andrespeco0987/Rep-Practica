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

let contadorDeClicks = 0;

// contenido de la etiqueta
$h1.textContent = "Manipulacion Del Dom";
$p.textContent = contadorDeClicks;
$btn.textContent = "Mas";
$btn2.textContent = "Menos";
$btn3.textContent = "reset";

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

//eventos
$btn.addEventListener("click", () => {
	contadorDeClicks++;
	$p.textContent = contadorDeClicks;
	if (contadorDeClicks === 10) {
		/* $raiz.style.display = "none"; */
		$raiz.remove(); //remover con dom
	}
});

$btn2.addEventListener("click", () => {
	contadorDeClicks--;
	$p.textContent = contadorDeClicks;
});

$btn3.addEventListener("click", () => {
	contadorDeClicks = 0;
	$p.textContent = contadorDeClicks;
	/* $raiz.style.display = "block"; */
	$root.appendChild($raiz);
});
