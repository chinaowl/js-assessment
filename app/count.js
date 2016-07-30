exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    var timeout;

    function logCount() {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(logCount, 100);
      }
    }

    logCount();

    return {
      cancel: function() {
        timeout && clearTimeout(timeout);
      }
    };
  }
};