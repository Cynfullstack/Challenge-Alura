const textArea = document.querySelector(".text-area");// captura lo que escribe el usuario
const mensaje = document.querySelector(".mensaje");// aqui aparece el mensaje del usuario encriptado
const copiarYpegar = document.querySelector(".copiar")


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""; // limpia el textarea, lo que ingreso el usuario 
    mensaje.style.backgroundImage = "none" // limpia la imagen donde aparece el texto ecriptado
}


function encriptar(StringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];//conjunto de arreglos, arregos anidados
    StringEncriptada = StringEncriptada.toLowerCase() // hace la conversion a minuscula// stringEncriptada se llama a si misma
    
    for (let i = 0; i < matrizCodigo.length; i++){
        if (StringEncriptada.includes(matrizCodigo[i][0])) {
             StringEncriptada =StringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return StringEncriptada
}

function btDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""; // limpia el textarea, lo que ingreso el usuario 
    

function desencriptar(StringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];//conjunto de arreglos, arregos anidados
    StringDesencriptada = StringDesencriptada.toLowerCase() // hace la conversion a minuscula// stringEncriptada se llama a si misma
    
    for (let i = 0; i < matrizCodigo.length; i++){
        if (StringDesencriptada.includes(matrizCodigo[i][1])) {
            StringDesencriptada = StringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return StringDesencriptada
}
}


// Crear un botón para llamar a la función que copia el texto encriptado o desencriptado


function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("El texto se copio en portapapeles.");
  }