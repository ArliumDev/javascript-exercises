const convertToCelsius = function (fahrenTemp) {
  const celTemp = (fahrenTemp - 32) * (5/9);
  if (!Number.isInteger(celTemp)) {
    return Number.parseFloat(celTemp.toFixed(1));
  } else {
    return celTemp;
  }
};

const convertToFahrenheit = function (celcTemp) {
  const fahrTemp = (celcTemp * (9/5)) + 32;
  if (!Number.isInteger(fahrTemp)) {
    return Number.parseFloat(fahrTemp.toFixed(1));
  } else {
    return fahrTemp;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
