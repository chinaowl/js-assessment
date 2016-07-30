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
    var result, i, copy;

    function permuteHelper(arr) {
      if (arr.length === 1) return [arr];

      var current = arr[0];
      var theRest = permuteHelper(arr.slice(1));

      result = [];

      theRest.forEach(function(item) {
        for (i = 0; i <= item.length; i++) {
          copy = item.slice();
          copy.splice(i, 0, current);
          result.push(copy);
        }
      });

      return result;
    }

    return permuteHelper(arr);
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
    var result = [];

    function validParenthesesHelper(n) {
      if (n === 1) return ['()'];
      if (n === 2) return two;

      var previous = validParenthesesHelper(n - 1);
      previous.forEach(function(str) {
        for (var i = 0; i < str.length - 1; i++) {
          if (str.charAt(i) === '(' && str.charAt(i + 1) === ')') {
            result.push(str.substring(0, i) + two[0] + str.substring(i + 2));
            result.push(str.substring(0, i) + two[1] + str.substring(i + 2));
            i++;
          }
        }
      });

      return result.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      });
    }

    return validParenthesesHelper(n);
  }
};