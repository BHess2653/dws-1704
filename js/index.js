angular.module('pokeApp', []);


/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
/* PokeController */
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
angular.module('pokeApp').controller('pokeController', function($scope, pokeService) {

  $scope.page = 0;

  $scope.getPokemon = function() {
      pokeService.getPokemon($scope.page).then(function(results) {
          $scope.pokemon = results;
          console.dir($scope.pokemon);
      });
  };

    /* ToolTip */
   $scope.getTip = function(name){
       console.log(name);
       switch(name){
           case "poison":
               return "don't eat this"
               break;
           case "etc":
               return "boop"
               break;
           default:
               return "fire"
               break;
       }
   }; /* ToolTip End */

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

/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
/* PokeService */
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
angular.module('pokeApp').service('pokeService', function($http) {

  var pokeUrl = '//pokeapi.co/api/v2/';

  this.getPokemon = function(page) {
      return $http({
      method: 'GET',
      url: pokeUrl + 'pokemon/?limit=45&offset=' + (page * 45) /*10090 max*/
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

/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
/* PreloadImg on Page */
/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */
function preloadImg(url) {
    var img = new Image();
    img.src = "pokemon/{{mon.name}}.gif";
}