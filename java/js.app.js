//VARIABLES
let numero=document.getElementById("numero1")
let numero2=document.getElementById("numero2")
let solucion=document.getElementById("solucion")

let run=document.getElementById("run")

//EVENTOS
run.addEventListener("click", (e) => {
      let num= (numero.value)
      let num2= (numero2.value)
      let cadenaTotal=""
      for (let i=0;i<num2;i++){
            cadenaTotal=cadenaTotal + num + "<BR>"
            console.log("i vale: " + i + "<->" + num)
      }
      solucion.innerHTML=cadenaTotal

      //let sol= parseInt(num) + parseInt(num2)
      //console.log(sol)
      //solucion.innerHTML=sol
}

)