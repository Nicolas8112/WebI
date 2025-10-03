function convertir() {
    let valor = document.getElementById("tempInput").value;
    let opcion = document.getElementById("opcion").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor.trim() === "") {
        resultado.innerHTML = "<span class='error'>Por favor, ingrese un número válido.</span>";
        return;
      }

      let temp = parseFloat(valor);
      let conversion;

      if(opcion === "F") {

        conversion = (temp *  9/5) + 32;
        resultado.innerHTML = `${temp}°C = ${conversion.toFixed(2)}°F`;
      } else {
        conversion = (temp - 32) * 5/9;
        resultado.innerHTML = `${temp}°F = ${conversion.toFixed(2)}°C`;
      }
}


