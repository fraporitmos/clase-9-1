//DECLARACION DE VARIABLES
const PI = 3.14;

let altura = 0;
let radio = 0;
let volumen = 0;

radio = parseInt(prompt("Ingresa la RADIO del cilindro:"));
altura = parseInt(prompt("Ingresa la ALTURA del cilindro:"));

if (radio === 0) {
  alert("Los valores no deben ser cero");
} else {
  if (altura === 0) {
    alert("Los valores no deben ser cero");
  } else {
    volumen = PI * (radio * radio) * altura
    console.log(`El valor del volumen es: ${volumen}`)
  }
}
