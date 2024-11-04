const removeFromArray = function(arr,...valuesToRemove) {
  const removed = arr.filter(item => !valuesToRemove.includes(item));
  return removed;
};

// Do not edit below this line
module.exports = removeFromArray;