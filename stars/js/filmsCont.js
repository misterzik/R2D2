(function() {

  var app = angular.module("starWarsapp", ["ne.swapi"]);

  var FilmsController = function($scope, $routeParams, $http, swapi) {

     swapi.films.all().then(function(films)){
       $scope.films = films;
    };

};

  app.controller("FilmsController", FilmsController);

}());
