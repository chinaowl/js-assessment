exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.findIndex(function(element) {
      return element === item;
    });
  },

  sum: function(arr) {
    return arr.reduce(function(previous, current) {
      return previous + current;
    });
  },

  remove: function(arr, item) {
    var result = [];

    arr.forEach(function(element) {
      if (element !== item) result.push(element);
    });

    return result;
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    return arr.slice(0, index).concat(item, arr.slice(index));
  },

  count: function(arr, item) {
    return arr.filter(function(element) {
      return element === item;
    }).length;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    return arr.map(function(element) {
      return element * element;
    });
  },

  findAllOccurrences: function(arr, target) {
    var result = [];

    arr.forEach(function(element, index) {
      if (element === target) result.push(index);
    });

    return result;
  }
};