app.controller('loginCtrl', function($scope, $location, $rootScope, $auth) {
    $scope.submit = function() {
        if ($scope.username === 'xxx' && $scope.password === 'xxx') {
            $rootScope.loggedIn = true;
            $location.path('/dashbord');
        } else {
            alert('Неправильно');
        }
    };
    // Authentication
     $scope.authenticate = function(provider) {
        $auth.authenticate(provider);
    };

});
