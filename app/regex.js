exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    // \d means digit
    return (/\d/).test(str);
  },

  containsRepeatingLetter: function(str) {
    // () captures a group and \1 matches the results of the first group
    return (/([a-zA-Z])\1/).test(str);
  },

  endsWithVowel: function(str) {
    // $ means the end of the string and i means ignore case
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers: function(str) {
    var matches = (/\d{3}/).exec(str);
    return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {
    // ^ means the beginning of the string
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {
    // ? means optional and * means 0 or more
    return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
  }
};
