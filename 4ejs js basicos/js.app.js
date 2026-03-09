//EJERCICIO DADO
let max=6
let numero1=Math.floor(Math.random() * max) + 1
//console.log("Tu número es " + numero1)

//EJERCICIO PRIMITIVA

function dameNumero(max){
    let numero=Math.floor(Math.random
    () * max) + 1
    return numero
}

let veces=1
let numeros =[]
while(veces<=6) {
    veces ++
    let variable=dameNumero(49)
    let posicion=numeros.indexOf(variable)
    if(posicion>-1){
        //console.log(variable + "ya estaba en la posicion: " + posicion)
    }
    else numeros.push(variable)
}
//console.log(numeros)

//EJERCICIO CIFRADO

let letras="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let frase="almuerzo"
let paso=3

let nuevaFrase=""
for (i=0;i<frase.length;i++) {
        //console.log("Voy a buscar la letra: " + frase[i])
    let posicion=letras.indexOf(frase[i])
        //console.log ("Esta en la posicion " + posicion)
   let nuevaLetra=letras[posicion+paso]
    nuevaFrase=nuevaFrase+nuevaLetra
}
//console.log( frase + " será esta nueva: " + nuevaFrase)

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

