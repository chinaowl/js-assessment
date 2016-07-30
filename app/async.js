exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise(function(resolve, reject) {
  		resolve(value);
  	});
  },

  manipulateRemoteData: function(url) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          var response = JSON.parse(this.response).people;
          response = response.map(function(item) {
            return item.name;
          }).sort();

          resolve(response);
        } else {
          reject(this.statusText);
        }
      };

      request.open('GET', url);
      request.send();
    });
  }
};
