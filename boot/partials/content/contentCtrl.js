(function() {
    var contentCtrl = function($scope, $location) {

        // sidebar

        $scope.hidesidebar = function() {
            if ($scope.hamburger === true) $scope.hamburger = !$scope.hamburger
        };

        //form

        $scope.showForm = function() { $scope.show = false };

    };
    app.controller('contentCtrl', contentCtrl);

})();
