(function() {

    var editCtrl = function($scope, $location, $routeParams) {
        $scope.edit = $scope.categories.items.filter(function(item) {
            return item.id == $routeParams.itemId
        });
       // console.log(JSON.stringify($scope.edit))
       $scope.edit_error = "";
       $scope.edit_success = ""
       $scope.saveEdit = function(title, description){
       	if (!title)
       		$scope.edit_error = "Введите название";
       	else if(!description)
       		$scope.edit_error = "Введите текст";
       	else $scope.edit_error = "Изменения сохранены";
       }
    };
    app.controller('editCtrl', editCtrl);
})();
