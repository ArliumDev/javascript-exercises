const leapYears = function(yearCandidate) {
  const isLeap = (yearCandidate % 4 == 0 && (yearCandidate % 100 !== 0 || yearCandidate % 400 == 0)) ? true : false;
  return isLeap;
};

// Do not edit below this line
module.exports = leapYears;