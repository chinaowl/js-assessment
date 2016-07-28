exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {
  	var words = str.split(' ');
  	var i = 0;
  	var currentLength = 0;
  	var result = '';

  	while (i < words.length) {
  	  if (currentLength < cols) {
  	  	result += words[i];
  	  	currentLength += words[i].length;
  	  } else {
  	  	result += '\n' + words[i];
  	  	currentLength = words[i].length;
  	  }

  	  i++;
  	}

  	return result;
  },

  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
