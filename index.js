let userInput = prompt("Enter Temperature in Fahrenheit");

let fahrenheitTemp = Number(userInput);

function toCelsius(fahrenheitTemp) {
  return (fahrenheitTemp - 32) * (5 / 9);
}

let celsiusTemp = toCelsius(fahrenheitTemp);

alert(`It's ${celsiusTemp.toFixed(2)}°C out today.`);

function describeTemperature(fahrenheitTemp) {
  if (fahrenheitTemp < 32) {
    return `Very Cold`;
  } else if (fahrenheitTemp < 64) {
    return `Cold`;
  } else if (fahrenheitTemp < 86) {
    return `Warm`;
  } else if (fahrenheitTemp < 100) {
    return `Hot`;
  } else {
    return `Very Hot`;
  }
}

alert(`That's ${describeTemperature(fahrenheitTemp)}!`);


