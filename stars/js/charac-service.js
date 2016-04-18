(function() {

  var app = angular.module("starWarsapp");

this.getCharacters = function($http) {
			return $http({
				method: 'GET',
				url: 'http://swapi.co/api/films/'
			});

};

  app.service("CharacterService", CharacterService);

}());
