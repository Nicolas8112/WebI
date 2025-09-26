function CalculadoraIMC(){

let peso = parseFloat(document.getElementById("peso").value);
let altura = parseFloat(document.getElementById("altura").value);

if (peso > 0 && altura > 0) {
    let imc = peso / (altura ** 2);
    let condicion = ""


    if (imc < 18.5) {
        condicion = "Bajo peso";
    } else if (imc < 25) {
        condicion = "Peso normal";
    } else if (imc < 30) {
        condicion = "Sobrepeso";
    } else {
        condicion = "Obesidad";
    }

    alert("Tu IMC es: " + imc.toFixed(2) + " → " + condicion);
} else {
    alert("Por favor, ingresa valores válidos.");
}

}

