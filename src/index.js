
exports.min = function min (array) {
  let min = 0;
  if (typeof array !== 'undefined' && array.length > 0) {
      min = array[0];
      for (let i = 0; i < array.length; i++) {
        if (array[i+1] < min) {
          min = array[i+1];
        } 
      }
  }
	return min;
}

exports.max = function max (array) {
  let max = 0;
  if (typeof array !== 'undefined' && array.length > 0) {
    max = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i+1] > max) {
        max = array[i+1];
      } 
    }
  }
	return max;
}

exports.avg = function avg (array) {
  let avg = 0;
	if (typeof array !== 'undefined' && array.length > 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    avg = sum/array.length;
  }
	return avg;
}

