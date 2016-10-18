(function() {
  var app = angular.module("starWarsapp");
  var RestController = function($scope, $http, $routeParams) {
      $http.get('/js/data/characters.json').
      then(function(res) {
        $scope.todos = res.data;
      });
  };
app.controller("RestController", RestController);
}());
