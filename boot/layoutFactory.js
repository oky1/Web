app.factory('Layouts', ['$http', function($http) {
        return {
            get: function() {
                return $http.get('layout.json').then(function(response) {
                    return response.data;
                });
            }
        };
 }])