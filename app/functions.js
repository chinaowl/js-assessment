exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    fn.apply(undefined, arr);
  },

  speak: function(fn, obj) {
    fn.call(obj);
  },

  functionFunction: function(str) {
    return function(otherStr) {
      return str + ', ' + otherStr;
    };
  },

  makeClosures: function(arr, fn) {
    var funcs = [];

    arr.forEach(function(item) {
      funcs.push(fn.bind(null, item));
    });

    return funcs;
  },

  partial: function(fn, str1, str2) {
    return function(punctuation) {
      return fn(str1, str2, punctuation);
    };
  },

  useArguments: function() {
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function(a, b) {
      return a + b;
    });
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments);
    args[0].apply(null, args.slice(1));
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
