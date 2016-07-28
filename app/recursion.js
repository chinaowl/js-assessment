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

  }
};
