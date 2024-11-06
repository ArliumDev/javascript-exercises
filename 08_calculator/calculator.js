const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let total = 0;
  for (let i = total; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function (arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function (base,exponent) {
  return Math.pow(base,exponent);
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
