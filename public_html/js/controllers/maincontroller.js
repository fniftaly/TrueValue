'use strict';

   app.controller('mainController', function($scope, dataFactory){
       
       $scope.data = dataFactory.getData();
       
   });
   
    app.controller('actors', function($scope, dataFactory){
       
       $scope.actors = dataFactory.getActors();
       
   });
    app.controller('directors', function($scope, dataFactory){
       
       $scope.directors = dataFactory.getDirectors();
       
   });
    app.controller('movies', function($scope, dataFactory){
       
       $scope.movies = dataFactory.getMovies();
       
   });
    app.controller('addnewrow', function($scope, dataFactory){
       
       $scope.addNew = function(){
           
          dataFactory.addData($scope.add.actor,$scope.add.movie,$scope.add.director);
          $scope.add.actor ="";
          $scope.add.movie = "";
          $scope.add.director = "";
       };
       
       
   });

