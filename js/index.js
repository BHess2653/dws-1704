angular.module('pokeApp', []);

angular.module('pokeApp').controller('pokeController', function($scope, pokeService) {

  $scope.page = 0;

  $scope.getPokemon = function() {
      pokeService.getPokemon($scope.page).then(function(results) {
          $scope.pokemon = results;
          console.dir($scope.pokemon);
      });
  };

  $scope.getPokemon();

  $scope.getMore = function(url) {
      $scope.pokeInfo = null;
    pokeService.getMore(url).then(function(results) {
      $scope.pokeInfo = results;
      console.dir($scope.pokeInfo);
    });
  };

  $scope.nextPage = function() {
      $scope.page++;
      $scope.getPokemon();
  }

  $scope.previousPage = function() {
      if ($scope.page > 0) {
          $scope.page--;
          $scope.getPokemon();
      }
  }

});

angular.module('pokeApp').service('pokeService', function($http) {

  var pokeUrl = 'http://pokeapi.co/api/v2/';

  this.getPokemon = function(page) {
      return $http({
      method: 'GET',
      url: pokeUrl + 'pokemon/?limit=40&offset=' + (page * 40) /*10090 max*/
      }).then(function(results) {
          return results.data.results;
      });
  };

  this.getMore = function(url) {
    return $http({
      method: 'GET',
      url: url
    }).then(function(results) {
      return results.data;
    });
  };

});
