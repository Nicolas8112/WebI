document.getElementById("btnCalcular").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value.trim();
    let edad = parseFloat(document.getElementById("edad").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let sexo = document.getElementById("sexo").value;

    let resultado = document.getElementById("resultado");
    let error = document.getElementById("error");

    resultado.textContent = "";
    error.textContent = "";

    if (!nombre || isNaN(edad) || isNaN(peso) || isNaN(altura)) {
        error.textContent = "⚠️ Por favor complete todos los campos con valores válidos.";
        return;
    }

    let tmb;

    if (sexo === "hombre") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
    }

    resultado.textContent = `Hola ${nombre}, tu tmbs es de ${tmb.toFixed(2)} calorias/dia en reposo.`;


});