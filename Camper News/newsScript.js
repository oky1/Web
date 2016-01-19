angular.module("nApp",["ngRoute"]).
    controller('nCtrl',["$scope","$filter","$http",function($scope,$filter,$http){
            var orderBy = $filter('orderBy');
            $http.get('http://www.freecodecamp.com/news/hot').success(function(data){
            $scope.users=data;
            $scope.order = function(iff) {
            $scope.iff = iff;
            $scope.reverse = ($scope.iff === iff) ? !$scope.reverse : false;
            $scope.users = orderBy($scope.users, iff, $scope.reverse);
          };
          $scope.order('rank', true);
         })
    }])
    .directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {

      scope.$watch(function() {
          return attrs['ngSrc'];
        }, function (value) {
          if (!value) {
            element.attr('src', attrs.errSrc);  
          }
      });

      element.bind('error', function() {
        element.attr('src', attrs.errSrc);
      });
    }
  }
});