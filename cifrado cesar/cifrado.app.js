
const contenedor = document.getElementById('cifrado');

let letras="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let frase="almuerzo"
let paso=3

let nuevaFrase=""
for (i=0;i<frase.length;i++) {
        console.log("Voy a buscar la letra: " + frase[i])
    let posicion=letras.indexOf(frase[i])
        console.log ("Esta en la posicion " + posicion)
   let nuevaLetra=letras[posicion+paso]
    nuevaFrase=nuevaFrase+nuevaLetra
}
contenedor.innerText = frase + " es: " + nuevaFrase;
