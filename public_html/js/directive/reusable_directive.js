'use strict';

angular.module('reuseable', [])
        .directive('reuseable', function(){
            return{
                scope:true,
                restrict: 'E',
                link: function(scope, e,a){
                    scope.row = a.actor + " " + a.movie + " " + a.director;
                    scope.actor = a.actor;
                    scope.movie = a.movie;
                    scope.director = a.director;
                },
                template:"<p>{{actor}} {{movie}} {{direcrot}}</p>"
            }
        });


