//moove background
$('body').mousemove(function(e) {
    var x = (e.pageX * -1 / 5),
        y = (e.pageY * -1 / 5);
    $(this).css('background-position', x + 'px ' + y + 'px');
});
//get data
angular.module('myApp', [])
    .controller('myCtrl', ['$scope', '$http', function($scope, $http) {
        // $scope.search = {};
        $scope.$watch('search.searchByGiantbomb', function() {
            $scope.find = "resources=game";
            $http.jsonp("http://www.giantbomb.com/api/search/?api_key=ab526aeb8927f41a3a0c9ae8a048082af18a7f97&format=jsonp&limit=45&" + $scope.find + "&query=" + $scope.search.searchByGiantbomb + "&json_callback=JSON_CALLBACK").success(function(data) {
                $scope.games = [];
                for (i = 0; i < data.results.length; i++) {
                    $scope.games.push(data.results[i]);
                    //console.log(data);
                }
                //console.log($scope.games);
            });
        });
        $scope.currentPage = 0;
        $scope.pageSize = 9;
        $scope.data = [];
        $scope.numberOfPages = function() {
            return Math.ceil($scope.data.length / $scope.pageSize);
        };
        for (var i = 0; i < 45; i++) {
            $scope.data.push("Item Number " + i);
        }
    }]).
filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) {
            return;
        }
        start = +start; //parse to int
        return input.slice(start);
    };
});
// offCanvas
(function(w) {
    var $container = $('.offcanvas-top'),
        $cHeight = $('.o-content').outerHeight();
    $(document).ready(function() {
        buildCanvas();
    });

    function buildCanvas() {
        $('<a href="#" id="trigger">More +</a>').appendTo($container);

        $('#trigger').bind('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            $container.toggleClass('active');
            if ($container.hasClass('active')) {
                $container.height($cHeight);
                $this.text('Hide -');
                $('h5').hide();
            } else {
                $container.height(50);
                $this.text('More +');
                $('h5').show(500);
            }
        });
    }
    $(window).resize(function() { //On Window resizeBy(
        $cHeight = $('.o-content').outerHeight();
        //console.log($cHeight);
    });
})(this);
//baner
$('#advertising').on('click', function() {
    $('.advertising').slideToggle();
});
$(document).ready(function() {
    setTimeout(function() {
        $('.adv').removeClass('adv');
    }, 1000);
});
