(function() {

  var app = angular.module("starWarsapp", ["ngRoute"]);

  app.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when("/", {
      templateUrl: "templates/main.html",
      controller: "RestController"
      })
      .when("/Characters/:skuid", {
        templateUrl: "templates/display.html",
        controller: "DisplayController"
      })
      .when("/Characters/Films", {
        templateUrl: "templates/films.html",
        controller: "FilmsController",
        resolve: {
          films: function(swapi){
            return swapi.films.all();
          }
        }
      });
    // use the HTML5 History API
    $locationProvider.html5Mode(false);
  })

}());
