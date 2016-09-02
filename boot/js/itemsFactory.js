//angular.module('app')
  app.factory('Items', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('items.json').then(function(response) {
          return response.data;
        });
      }
    };
  }])