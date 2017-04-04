angular.module('pokeApp', []);

angular.module('pokeApp').controller('pokeController', function($scope, pokeService) {

  $scope.getPokemon();

  $scope.getMore = function(url) {
    pokeService.getMore(url).then(function(results) {
      $scope.pokeInfo = results;
      console.dir($scope.pokeInfo);
    });
  };

});

angular.module('pokeApp').service('pokeService', function($http) {

  var pokeUrl = 'http://pokeapi.co/api/v2/';

  this.getMore = function(url) {
    return $http({
      method: 'GET',
      url: url
    }).then(function(results) {
      return results.data;
    });
  };

});
