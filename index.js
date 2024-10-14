const userInput = prompt("Enter Temperature in Fahrenheit");

const fahrenheitTemp = Number(userInput);

const toCelsius = (fahrenheitTemp) => {
  return (fahrenheitTemp - 32) * (5 / 9);
}

const describeTemperature = (fahrenheitTemp) => {
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

alert(`It's ${toCelsius(fahrenheitTemp).toFixed(2)}°C out today.`);
alert(`That's ${describeTemperature(fahrenheitTemp)}!`);