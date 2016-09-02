 //twitch tv
 angular.module('materialApp', []).
 controller('materialCtrl', ['$scope', '$http', function($scope, $http) {
     $scope.users = [];

     var users = ["freecodecamp", "medrybw", "storbeck", "chuah48263",
         "terakilobyte", "habathcx", "RobotCaleb", "comster404",
         "brunofin", "thomasballinger", "noobs2ninjas", "beohoff"];

     var requests = [];
     for (var i in users) {
         requests.push([$http.jsonp('https://api.twitch.tv/kraken/streams/' + users[i] + '?callback=JSON_CALLBACK'), $http.jsonp('https://api.twitch.tv/kraken/users/' + users[i] + '?callback=JSON_CALLBACK')]);
     };

     function callback(element, index, array) {
         var temp = {};
         array[index][0].success(function(data) {
             var streaming = (data.stream === null) ? false : true;
             if (streaming) {
                 temp.status = "online";
             } else {
                 temp.status = "offline";
             };
         });
         array[index][1].success(function(data) {
             temp.name = data.display_name;
             temp.logo = data.logo;
             temp.username = data.name;
         });
         $scope.users.push(temp);
     };

     requests.forEach(callback);

     $scope.title = "Twitch Status";
 }]);
