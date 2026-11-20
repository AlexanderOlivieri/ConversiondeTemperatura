function ConvertirTemperatura() {

  const input = document.getElementById("inpNumIngresado");
  const salida = document.querySelector("output");
  const valor = input.value;


  if (valor.trim() === "" || isNaN(Number(valor))) {
    salida.innerHTML = `<span style="color: red;">Error: Ingresa un valor numérico válido.</span>`;
    input.value = "";
    input.focus();   
    return;
  }


  const celsius = Number(valor);
  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9 / 5) + 32;


  salida.innerHTML = `
    <p>Grados Kelvin: <strong>${kelvin}</strong></p>
    <p>Grados Fahrenheit: <strong>${fahrenheit}</strong></p>
  `;
}
