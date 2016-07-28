exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = '';
    var previous, count = 0;

    str.split('').forEach(function(character) {
      if (character === previous) {
        if (count < amount) {
          result += character;
        }
        count++;
      } else {
        result += character;
        count = 1;
      }
      
      previous = character;
    });

    return result;
  },

  wordWrap: function(str, cols) {
  	var words = str.split(' ');
  	var currentLength = 0;
  	var result = '';
    var word, wordLength;

    for (var i = 0; i < words.length; i++) {
      word = words[i];
      wordLength = word.length;

      if (currentLength + wordLength + 1 < cols) {
        if (i !== 0) result += ' ';
        result += word;
        currentLength += wordLength;
      } else {
        if (i !== 0) result += '\n';
        result += word;
        currentLength = wordLength;
      }
    }
  	
  	return result;
  },

  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
