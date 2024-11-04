const repeatString = function(str,reps) {
  let repStr = '';
  if (reps < 0) {
    return 'ERROR';
  }
  for (let i = 0; i < reps; i++) {
    repStr += str;
  }
  return repStr;
};

// Do not edit below this line
module.exports = repeatString;
