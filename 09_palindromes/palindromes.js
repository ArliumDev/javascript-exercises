const palindromes = function (str) {
  const format = str.replaceAll(/\W/g,"").toLowerCase();
  const reversed = format.split("").reverse().join("");
  format === reversed;
};

// Do not edit below this line
module.exports = palindromes;