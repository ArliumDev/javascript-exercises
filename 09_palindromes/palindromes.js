const palindromes = function (str) {
  let originalString = str;
  let regex = /\W/g;
  let cleanString = originalString.replaceAll(regex,'').toLowerCase();
  let splitString = cleanString.split('');
  let palindromeCheck = splitString.reverse().join('');

  if (palindromeCheck == cleanString) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
