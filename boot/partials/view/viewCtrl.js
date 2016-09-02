(function() {
var viewCtrl = function($scope, $routeParams, $location) {
    $scope.load_error_text = "";
    var mydata = $scope.categories.items
   
    var pureData = function(item){
    	return item.id == $routeParams.itemId 
    }

   $scope.itemView = mydata.filter(pureData);
  console.log(JSON.stringify($scope.itemView))
};
app.controller('viewCtrl',viewCtrl)
})();
