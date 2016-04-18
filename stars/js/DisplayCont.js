(function() {

  var app = angular.module("starWarsapp");

  var DisplayController = function($scope, $routeParams, $http) {

    $http.get('/stars/js/data/characters-info.json').success(function(data){
   angular.forEach(data, function(item) {
     if (item.sku == $routeParams.skuid)
       $scope.info = item;
   });
});

};

  app.controller("DisplayController", DisplayController);

}());
