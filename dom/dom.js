"use strict";
const d = document;
const $root = d.getElementById("root");
const $h1 = d.createElement("h1");
const $p = d.createElement("p");
const $btn = d.createElement("button");
const $btn2 = d.createElement("button");
const $btn3 = d.createElement("button");

let contadorDeClicks = 0;

$h1.textContent = "Manipulacion Del Dom";
$p.textContent = contadorDeClicks;
$btn.textContent = "Mas";
$btn2.textContent = "Menos";
$btn3.textContent = "reset";

$root.appendChild($h1);
$root.appendChild($p);
$root.appendChild($btn);
$root.appendChild($btn2);
$root.appendChild($btn3);

$btn.addEventListener("click", () => {
	contadorDeClicks++;
	$p.textContent = contadorDeClicks;
});

$btn2.addEventListener("click", () => {
	contadorDeClicks--;
	$p.textContent = contadorDeClicks;
});

$btn3.addEventListener("click", () => {
	contadorDeClicks = 0;
	$p.textContent = contadorDeClicks;
});
