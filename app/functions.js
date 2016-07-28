exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
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
    var args = Array.prototype.slice.call(arguments).slice(1);
    
    return function() {
      var moreArgs = Array.prototype.slice.call(arguments);
      return fn.apply(null, args.concat(moreArgs));
    }
  },

  curryIt: function(fn) {
    function accumulateArguments(args, expectedArgsCount) {
      return function(currentArg) {
        args.push(currentArg);

        if (args.length === expectedArgsCount) {
          return fn.apply(null, args);
        }

        return accumulateArguments(args, expectedArgsCount);
      }
    }

    return accumulateArguments([], fn.length);
  }
};
