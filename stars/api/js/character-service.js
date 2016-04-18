angular.module('StarWars').service('CharacterService', function($http) {
	this.getCharacters = function() {
		return $http({
			method: 'GET',
			url: 'http://swapi.co/api/people/',
			params: {name: name}
		});
	};

	this.getFilms = function() {
		return $http({
			method: 'GET',
			url: 'http://swapi.co/api/films/',
			params: {name: name}
		});
	};

});
