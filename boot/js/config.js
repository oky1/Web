var app = angular.module('app', ['ngAnimate', 'ngRoute', 'satellizer', 'angularFileUpload'])
    .config(function($routeProvider, $authProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/content/content.html',
            controller: 'contentCtrl'
        }).
        when('/item/:itemId', {
            templateUrl: 'partials/view/view.html',
            controller: 'viewCtrl'
        }).
        when('/note', {
            templateUrl: 'partials/note/note.html',
            controller: 'noteCtrl'
        }).
        when('/edit/:itemId', {
            templateUrl: 'partials/edit/edit.html',
            controller: 'editCtrl'
        }).
        when('/login', {
            templateUrl: 'partials/login/login.html',
            controller: 'loginCtrl'
        }).
        when('/dashbord', {
            resolve: {
                'check': function($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'partials/dashbord.html'
        }).
        otherwise({ redirectTo: '/' });


        //Authentication satellizer



        // No additional setup required for Twitter

        $authProvider.oauth2({
            name: 'foursquare',
            url: '/auth/foursquare',
            clientId: 'Foursquare Client ID',
            redirectUri: window.location.origin,
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',

        });
    });
