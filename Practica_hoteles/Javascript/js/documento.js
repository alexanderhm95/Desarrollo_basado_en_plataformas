function saludar() {
    alert("Hola mi primer script");
}

function sumar() {
    numero1 = parseInt(document.getElementById("n1").value);
    numero2 = parseInt(document.getElementById("n2").value);
    resultado = numero1 + numero2;
    alert("La suma es: " + resultado);
}

function invertir(){
    var cadenaObtenida = document.getElementById("cadena").innerText;
    var vector = cadenaObtenida.split("");
    var reversa = vector.reverse();
    var cadenaInvertida = reversa.join("");
    document.write(cadenaInvertida);
}

function validarFormulario(){
    var nombres = document.getElementById("nombres");
    if(nombres.value == ""){
        alert("Por favor dígite el usuario");
    }
}


