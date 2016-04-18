(function() {

  var app = angular.module("starWarsapp");

  var DisplayController = function($scope, $routeParams, $http) {

    $http.get('/stars/js/data/characters-info.json').success(function(data) {
      angular.forEach(data, function(item) {
        if (item.name == $routeParams.skuid)
          $scope.info = item;
      });
    });


    $http.get('http://swapi.co/api/films/1/').success(function(data) {
      angular.forEach(data, function(item) {
        if (item.name == $routeParams.skuid)
          $scope.films = item;
      });
    });

    $scope.$back = function() {
        window.history.back();
      };

  };

  app.controller("DisplayController", DisplayController);

}());
