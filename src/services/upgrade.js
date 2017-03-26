angular
.module('incremental')
.service('upgrade',
['player',
'data',
function(player, data) {
  var $scope;

  this.setScope = function (scope){
    $scope = scope;
  };

  this.buyUpgrade = function (name, element) {
    if(player.data.elements[element].upgrades[name].bought) {
      return;
    }
    var price = data.upgrades[name].price;
    if(player.data.resources[element].number >= price) {
      player.data.resources[element].number -= price;
      player.data.elements[element].upgrades[name].bought = true;
    }
  };

  this.lastUpgradeTierPrice = function (tier) {
    for(var upgrade in data.generators[tier].upgrades) {
      if(!player.data.elements[$scope.current_element].upgrades[data.generators[tier].upgrades[upgrade]].bought) {
        return data.upgrades[data.generators[tier].upgrades[upgrade]].price;
      }
    }
    return null;
  };

  this.filterUpgrade = function (input) {
    return player.data.elements[$scope.current_element].generators[input].level > 0;
  };

  this.upgradeApply = function(resource, power) {
    return resource * power;
  };
}]);
