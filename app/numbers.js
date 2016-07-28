exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var bitArray = (num).toString(2).split('').reverse();
  	return parseInt(bitArray[bit - 1], 10);
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	var padding = '00000000';
  	return (padding + (num).toString(2)).slice(-8);
  },

  multiply: function(a, b) {
  	function getDecimals(n) {
  	  var split = (n + '').split('.');
  	  if (split.length !== 2) return 0;
  	  return split[1].length;
  	}

  	var precision = Math.max(getDecimals(a), getDecimals(b));
  	return +(a * b).toPrecision(precision);
  }
};
