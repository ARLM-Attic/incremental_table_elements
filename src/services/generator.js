angular
.module('incremental')
.service('generator',
['player',
function(player) {  
  var $scope;
  
  this.setScope = function (scope){
    $scope = scope;
  };

  this.generatorPrice = function (name, element) {
    var level = player.data.elements[element].generators[name].level;
    var price = $scope.generators[name].price * Math.pow($scope.generators[name].priceIncrease, level);
    return Math.ceil(price);
  };
  
  this.buyGenerators = function (name, element, number) {
    var price = this.generatorPrice(name, element);
    var i = 0;
    // we need a loop since we use the ceil operator
    while (i < number && player.data.resources[element].number >= price) {
      player.data.resources[element].number -= price;
      player.data.elements[element].generators[name].level++;
      price = this.generatorPrice(name, element);
      i++;
    }
    if(i > 0) {
      $scope.$emit("unlocks", name);
    }
  };
  
  this.generatorProduction = function (name, element) {
    var baseProduction = $scope.generators[name].power;
    return this.upgradedProduction(baseProduction, name, element);
  };

  this.tierProduction = function (name, element) {
    var baseProduction = $scope.generators[name].power *
                         player.data.elements[element].generators[name].level;
    return this.upgradedProduction(baseProduction, name, element);
  };

  this.upgradedProduction = function (production, name, element) {
    for(var upgrade in $scope.generators[name].upgrades) {
        if(player.data.elements[element].upgrades[$scope.generators[name].upgrades[upgrade]].bought) {
          power = $scope.upgrades[$scope.generators[name].upgrades[upgrade]].power;
          production = $scope.upgradeApply(production, power);
        }
      }
      return production;
  };
  
  this.elementProduction = function (element) {
    var total = 0;
    for(var tier in $scope.generators) {
      total += this.tierProduction(tier, element);
    }
    return total;
  };
}]);