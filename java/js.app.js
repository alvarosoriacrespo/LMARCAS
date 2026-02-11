      console.log("Hola mundo")
      console.log("Adios")
      console.error("Error: no se puede conectar al servidor")
      console.warn("OJO")


      let nombre= "Basilisco"
      let /*const*/ curso= "ASIR" 
      // const no se puede cambiar en un futuro, let puedo añadir mas

      console.log("Te llamas: " + nombre + " y cursas: " + curso)

      nombre= "Julia"
      curso = "DAW"
      console.log("Te llamas: " + nombre + " y cursas: " + curso)
      
      let edad = 1

      if (edad > 17){
        console.log ("Puede beber")
      }
      else{
        if (edad > 12){
            console.log("Puede beber cafe")
      
        }
      else console.log("NO puede beber cafe")
      }