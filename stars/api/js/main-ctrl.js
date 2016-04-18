angular.module('StarWars').controller('MainCtrl', function($scope, CharacterService) {

	CharacterService.getCharacters()
		.then(function(result) {
			console.log(result);
			console.log(result.data);
			$scope.characters = result.data.results;
		});

		CharacterService.getFilms()
			.then(function(result) {
				console.log(result);
				console.log(result.data);
				$scope.films = result.data.results;
			});


});
