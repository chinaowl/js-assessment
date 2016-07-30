exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var files = [];

    function listFilesHelper(data, foundDir) {
      if (data.dir === dirName) foundDir = true;

      data.files.forEach(function(item) {
        if (typeof item === 'string') {
          if (foundDir) {
            files.push(item);
          }
        } else {
          listFilesHelper(item, foundDir);
        }
      });
    }

    listFilesHelper(data, !dirName);

    return files;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    function fibonacciHelper(n) {
      if (n <= 2) return 1;

      return fibonacciHelper(n - 1) + fibonacciHelper(n - 2);
    }

    return fibonacciHelper(n);
  },

  validParentheses: function(n) {
    var two = ['(())', '()()'];
    var current = [];

    function validParenthesesHelper(n) {
      if (n === 1) return ['()'];
      if (n === 2) return two;

      var previous = validParenthesesHelper(n - 1);
      previous.forEach(function(str) {
        for (var i = 0; i < str.length - 1; i++) {
          if (str.charAt(i) === '(' && str.charAt(i + 1) === ')') {
            current.push(str.substring(0, i) + two[0] + str.substring(i + 2));
            current.push(str.substring(0, i) + two[1] + str.substring(i + 2));
            i++;
          }
        }
      });

      return current.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      });
    }

    return validParenthesesHelper(n);
  }
};
