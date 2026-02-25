// BASICO


      //console.log("Hola mundo")
      //console.error("Error: no se puede conectar al servidor")
      //console.warn("OJO")


      //let nombre= "Basilisco"
      //let /*const*/ curso= "ASIR" 
      // const no se puede cambiar en un futuro, let puedo añadir mas

      //console.log("Te llamas: " + nombre + " y cursas: " + curso)

      //nombre= "Julia"
      //curso = "DAW"
      //console.log("Te llamas: " + nombre + " y cursas: " + curso)
      
      // let edad = 19


// IF y CADENAS

      //if (edad > 17){
      //  console.log ("Puede beber")
      //}
      //else{
      //  if (edad > 12){
      //      console.log("Puede beber cafe")
      //  }
      //else console.log("NO puede beber cafe")
      //}

      // cadena = edad > 17 ? "Puede beber" : "No puede beber"
      // console.log(cadena)


// BUCLES

      //let num=0
      //while (num<=10){
      //      num++
      //      console.log(num)
      //}

      //for(num=1;num<10;num++){
      //      console.log(num)
      //}


// EJERCICIO DADO

//let max=6
//let numero=Math.floor(Math.random
//() * max) + 1
//console.log("Tu número es " + numero)


//EJERCICIO PRIMITIVA

//function dameNumero(max){
  //    let numero=Math.floor(Math.random
  //    () * max) + 1
  //    return numero
//}

//let veces=1
//let numeros =[]
//while(veces<=6) {
//      veces++
//      let variable=dameNumero(49)
//      let posicion=numeros.indexOf(variable)
//      if(posicion>-1){
//            console.log(variable + "ya estaba en la poscion: " + posicion)
//      }
//      else numeros.push(variable)
//}
//console.log(numeros)

//EJERCICIO CIFRADO CESAR

//let letras="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
//let frase="almuerzo"
//let paso=3

//let nuevaFrase=""
//for (i=0;i<frase.length;i++) {
         //console.log("Voy a buscar la letra: " + frase[i])
//     let posicion=letras.indexOf(frase[i])
         //console.log ("Esta en la posicion " + posicion)
//     let nuevaLetra=letras[posicion+paso]
//     nuevaFrase=nuevaFrase+nuevaLetra
//}

//console.log(frase + " es : " + nuevaFrase)

//EJERCICIO CONTRASEÑA SEGURA

let caracteres= "abcdefghijklmnopqrstuvwxyz"
let Mayusculas= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let Numeros= "0123456789"
let Especiales= "!@#$%^&*()_+|~`-={}[]:;'<>?,./"

function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min
}

let num=numeroAleatorio(1,99)
let letraespecial=Especiales[numeroAleatorio(0,30)]
let password=num + letraespecial

console.log("La contraseña es: " + password)