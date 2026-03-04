







//EJERCICIO CONTRASEÑA SEGURA
// Buscamos el elemento por su ID

let caracteres= "abcdefghijklmnopqrstuvwxyz"
let Mayusculas= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let Numeros= "0123456789"
let Especiales= "!@#$%^&*()_+|~`-={}[]:;'<>?,./"

function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min
}

let num=numeroAleatorio(1,99)
let letraespecial=Especiales[numeroAleatorio(0,30)]
let caracter= caracteres[numeroAleatorio(0,26)]
let mayu=Mayusculas[numeroAleatorio(1,26)]
let password=letraespecial+num+caracter+mayu
//console.log(password)
      