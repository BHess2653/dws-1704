angular.module('pokeApp', []);

angular.module('pokeApp').controller('pokeController', function($scope, pokeService) {

  $scope.getPokemon();

});
