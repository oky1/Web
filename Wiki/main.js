 //wiki
 
 angular.module('myApp', [])
     .controller('myCtrl', ['$scope', '$http', function($scope, $http) {
         $scope.search = {};
         //Flickr search
         $scope.$watch('search.searchByFlickr', function() {
             $http({
                 method: 'GET',
                 url: 'https://api.flickr.com/services/rest',
                 params: {
                     method: 'flickr.photos.getRecent',
                     api_key: '20922b59e9a00e715d66caaa0237153c',
                     text: $scope.searchByFlickr,
                     format: 'json',
                     per_page: 10,
                     nojsoncallback: 1
                 }
             }).success(function(data) {
                 $scope.flickr = data;
                 console.log(data);
             })
         });
         //Film search
         $scope.$watch('search.searchByTitle', function() {
             $http.get("http://www.omdbapi.com/?t=" + $scope.search.searchByTitle + "&y=&plot=full&r=json").success(function(data) {
                 $scope.movies = [];
                 $scope.movies.push(data);
              })
         });
         //Wiki search
         $scope.$watch('search.searchByWiki', function() {
             var wikiApi = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&search=" +
                 $scope.search.searchByWiki + "&callback=JSON_CALLBACK";
             $http.jsonp(wikiApi).success(function(data) {
                     $scope.wikis = [];
                     for (var i = 0; i <= data[1].length - 1; i++) {
                         var d = {};
                         d.name = data[1][i];
                         d.snip = data[2][i];
                         d.link = data[3][i];
                         $scope.wikis.push(d);
                     }
                 })
              });
         $scope.message = 'Maybe later';
     }]);

 /* particles */

 particlesJS("particles-js", {
     "particles": {
         "number": {
             "value": 40,
             "density": {
                 "enable": false,
                 "value_area": 800
             }
         },
         "color": {
             "value": "#ffffff"
         },
         "shape": {
             "type": "star",
             "stroke": {
                 "width": 0,
                 "color": "#000000"
             },
             "polygon": {
                 "nb_sides": 5
             },
             "image": {
                 "src": "img/github.svg",
                 "width": 100,
                 "height": 100
             }
         },
         "opacity": {
             "value": 0.2,
             "random": false,
             "anim": {
                 "enable": false,
                 "speed": 1,
                 "opacity_min": 0.1,
                 "sync": false
             }
         },
         "size": {
             "value": 30,
             "random": true,
             "anim": {
                 "enable": false,
                 "speed": 40,
                 "size_min": 0.1,
                 "sync": false
             }
         },
         "line_linked": {
             "enable": false,
             "distance": 150,
             "color": "#ffffff",
             "opacity": 0.4,
             "width": 1
         },
         "move": {
             "enable": true,
             "speed": 3,
             "direction": "none",
             "random": false,
             "straight": false,
             "out_mode": "out",
             "bounce": false,
             "attract": {
                 "enable": false,
                 "rotateX": 600,
                 "rotateY": 1200
             }
         }
     },
     "interactivity": {
         "detect_on": "canvas",
         "events": {
             "onhover": {
                 "enable": false,
                 "mode": "repulse"
             },
             "onclick": {
                 "enable": false,
                 "mode": "push"
             },
             "resize": true
         },
         "modes": {
             "grab": {
                 "distance": 400,
                 "line_linked": {
                     "opacity": 1
                 }
             },
             "bubble": {
                 "distance": 400,
                 "size": 40,
                 "duration": 2,
                 "opacity": 8,
                 "speed": 3
             },
             "repulse": {
                 "distance": 200,
                 "duration": 0.4
             },
             "push": {
                 "particles_nb": 4
             },
             "remove": {
                 "particles_nb": 2
             }
         }
     },
     "retina_detect": true
 });
