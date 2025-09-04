function saludar() {
    alert("Hola");

}
function cambiarTexto() {
    document.getElementById("Start").innerText = "Como estas!";

}
function sumar() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById(resultado).innerText = "⚠️ Ingresa dos números.";
    } else {
        let suma = n1 + n2;
        document.getElementById("resultado").innerText = "resultado: " + suma;
    }

}
