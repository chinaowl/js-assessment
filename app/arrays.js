exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
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
    var indicesToRemove = [];
    var removedSoFar = 0;

    arr.forEach(function(element, index) {
      if (element === item) indicesToRemove.push(index);
    });

    indicesToRemove.forEach(function(index) {
      arr.splice(index - removedSoFar, 1);
      removedSoFar++;
    });

    return arr;
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
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(function(element) {
      return element === item;
    }).length;
  },

  duplicates: function(arr) {
    var countMap = {};
    var result = [];

    arr.forEach(function(element) {
      if (countMap[element]) {
        countMap[element]++;
      } else {
        countMap[element] = 1;
      }
    });

    for (var item in countMap) {
      if (countMap[item] > 1) result.push(parseInt(item, 10));
    }

    return result;
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