/* 
Titulo: Juego del numero clave

Descripción: 
Define un numero clave entre 0 y 20, luego deberás
pedirle al usuario un numero menor a 20 y el usuario deberá 
de adivinar si el numero ingresado es igual al numero establecido 
como numero clave y mostrarle un mensaje que diga "Ganaste, adivinaste el numero clave" de caso contrario mostrar el mesnaje  "No es el numero, vuelve a intentarlo".
*/

let numero = 8
let i = 0
const MAX_INTENTOS = 4

while(i < MAX_INTENTOS){
    i = i + 1
    let adivina = parseInt(prompt("Ingresa el numero clave"))
    if(adivina == numero){
        alert(`Ganaste, encontraste el numero clave: ${numero}\nNum. Intentos: ${i}`)
        break
    }else{
        alert("No es el numero clave, intenta nuevamente.")
    }
}

if(i === MAX_INTENTOS){
    alert("Maximo de intentos cumplidos")
}


