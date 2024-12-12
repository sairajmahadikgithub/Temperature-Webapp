function convertTemperature() {
  let temperature = parseFloat(document.getElementById('temperature').value);
  let unitType = document.getElementById('unitType').value;
  let result = document.getElementById('result');
  
  if (isNaN(temperature)) {
    result.innerHTML = "Please enter a valid number!";
    result.style.color = "red";
    return;
  }

  let convertedTemp;
  let unit;
  let color;

  if (unitType === "C") {
    convertedTemp = (temperature - 32) * 5 / 9;  // Fahrenheit to Celsius
    unit = "°C";
  } else if (unitType === "F") {
    convertedTemp = (temperature * 9 / 5) + 32;  // Celsius to Fahrenheit
    unit = "°F";
  } else if (unitType === "K") {
    convertedTemp = parseFloat(temperature) + 273.15;  // Celsius to Kelvin
    unit = "K";
  }

  // Determine color based on temperature
  if (convertedTemp < 0) {
    color = "#1E90FF";  // Cold (blue)
  } else if (convertedTemp <= 30) {
    color = "#FFD700";  // Moderate (gold)
  } else {
    color = "#FF4500";  // Hot (red)
  }

  result.style.color = color;
  result.innerHTML = `Converted Temperature: ${convertedTemp.toFixed(2)} ${unit}`;
}
