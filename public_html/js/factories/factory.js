
'use strict';

app.factory('dataFactory', function () {

    var factory = {};

    var data = [
        {name: 'Al Pacino', movie: 'The Godfather', director: 'Francis Ford Coppola'},
        {name: 'Kevin Costner', movie: 'Draft Day', director: 'Ivan Reitman'},
        {name: 'Robert Duvall', movie: 'Lonesome Dove', director: 'Simon Wincer'},
        {name: 'Clint Eastwood', movie: 'Unforgiven', director: 'Clint Eastwood'},
        {name: 'Robert De Niro', movie: 'Good Fellas', director: 'Martin Scorsese'},
        {name: 'Joe Pesci', movie: 'My cousin vinny', director: 'Jonathan Lynn'},
        {name: 'James Woods', movie: 'Once Upon a Time in America', director: 'Sergio Leone'},
        {name: 'Marlon Brando', movie: 'Viva Zapata', director: 'Elia Kazan'},
        {name: 'Robert Redford', movie: 'Jeremiah Johnson', director: 'Sydney Pollack'}
    ];
    var size = data.length;
    var arrayActors = [];
    var arrayMovies = [];
    var arrayDirectors = [];

    factory.addData = function (name, movie, director) {
        var newname = {name: name};
        var newmovie = {movie: movie};
        arrayActors.push(newname);
        arrayMovies.push(newmovie);
        var newData = {name: name, movie: movie, director: director};
        data.push(newData);

        
    };
    factory.getData = function () {

        return data;
    };
    factory.getActors = function () {

        for (var n = 0; n < size; n++) {

            var val = {name: data[n].name};

            arrayActors[n] = val;
        }
        return arrayActors;
    };

    factory.getMovies = function () {

        for (var n = 0; n < size; n++) {

            var val = {movie: data[n].movie};

            arrayMovies[n] = val;
        }
        return arrayMovies;
    };

    factory.getDirectors = function () {

        for (var n = 0; n < size; n++) {

            var val = {director: data[n].director};

            arrayDirectors[n] = val;
        }
        return arrayDirectors;
    };

    console.log(factory.getMovies());
    return factory;
});
