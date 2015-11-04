
'use strict';

var app = angular.module('app', ['ngRoute']);

        app.config(['$routeProvider',function ($routeProvider) {

                $routeProvider
                        .when('/', {
                            controller:'mainController',
                            templateUrl: 'views/searchAll.html', 
                    
                        }).when(
                           '/view1', {
                            controller:'actors',
                            templateUrl: 'views/searchforActors.html', 
                        })
                        .when(
                           '/view2', {
                            controller:'movies',
                            templateUrl: 'views/searchforMovies.html', 
                        })
                        .otherwise({redirectTo: '/views/searchAll.html'});
            }]);


