var numero = 0
var factorial = 1
var i = 1

numero = parseInt(prompt("Ingresa el numero a calcular:"));

while(i<=numero){
    factorial = factorial * i
    i = i +1
}

console.log(`El factorial de ${numero} es: ${factorial}` )