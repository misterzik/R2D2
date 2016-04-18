(function() {

  var app = angular.module("starWarsapp");

  var FilmsController = function($scope, CharacterService) {


		CharacterService.getCharacters()
			.then(function(result) {
				console.log(result);
				console.log(result.data);
				$scope.characters = result.data.results;
			});


  };

  app.controller("FilmsController", FilmsController);

}());
