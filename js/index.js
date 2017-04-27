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
           case "normal":
               return "weak against: fighting"
               break;
           case "fire":
               return "weak against: ground, rock, water"
               break;
            case "water":
               return "weak against: electric, grass"
               break;
            case "grass":
               return "weak against: bug, fire, flying, ice, poison"
               break;
            case "electric":
               return "weak against: ground"
               break;
            case "ice":
               return "weak against: fighting, fire, rock, steel"
               break;
            case "fighting":
               return "weak against: fairy, flying, psychic"
               break;
            case "poison":
               return "weak against: ground, psychic"
               break;
            case "ground":
               return "weak against: grass, ice, water"
               break;
            case "flying":
               return "weak against: electric, ice, rock"
               break;
            case "psychic":
               return "weak against: bug, dark, ghost"
               break;
            case "bug":
               return "weak against: fire, flying, rock"
               break;
            case "rock":
               return "weak against: fighting, grass, ground, steel, water"
               break;
            case "ghost":
               return "weak against: dark, ghost"
               break;
            case "dark":
               return "weak against: bug, fairy, fighting"
               break;
            case "dragon":
               return "weak against: dragon, fairy, ice"
               break;
            case "steel":
               return "weak against: fighting, fire, ground"
               break;
            case "fairy":
               return "weak against: poison, steel"
               break;
           default:
               return "boop"
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