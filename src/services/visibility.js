angular
.module('incremental')
.service('visibility',
['player',
 function(player) {  
  var $scope;
  
  this.setScope = function (scope){
    $scope = scope;
  };
  
  visible = function(items, func) {
    var visibles = [];
    for(var item in items) {
      if(func(item)) {
        visibles.push(item);
      }
    }
    return visibles;
  };
  
  this.visibleElements = function() {
    return visible($scope.elements, isElementVisible);
  };

  this.visibleGenerators = function() {
    return visible($scope.generators, isGeneratorVisible);
  };

  this.visibleResources = function() {
    return visible($scope.resources, isResourceVisible);
  };

  this.visibleEncyclopediaEntries = function() {
    return visible($scope.encyclopedia, isEncyclopediaEntryVisible);
  };
  
  this.visibleRedox = function() {
    return visible($scope.redox, isRedoxVisible);
  };
  
  this.visibleBindings = function() {
    return visible($scope.binding_energy, isBindingVisible);
  };
  
  this.visibleSyntheses = function() {
    return visible($scope.syntheses, isSynthesisVisible);
  };

  isElementVisible = function(element) {
    if($scope.elements[element].disabled) {
      return false;
    }
    return player.data.elements[element].unlocked;
  };

  isGeneratorVisible = function(name) {
    var generator = $scope.generators[name];
    var condition = "";
    for( var dep in generator.dependencies) {
      condition += "player.data.elements[$scope.current_element].generators['"
          + generator.dependencies[dep] + "'].level > 0 && ";
    }
    condition += "true";
    return eval(condition);
  };

  // FIXME use eval for the time being, refactor to preprocess conditional functions
  this.visibleUpgrade = function(name) {
    var upgrade = $scope.upgrades[name];
    var condition = "";
    for( var pre in upgrade.preconditions) {
      condition += upgrade.preconditions[pre] + " && ";
    }
    for( var dep in upgrade.dependencies) {
      condition += "player.data.elements[$scope.current_element].upgrades['"
          + upgrade.dependencies[dep] + "'].bought && ";
    }
    condition += "true";

    return eval(condition);
  };
  
  isResourceVisible = function(name) {
    if(!player.data.resources[name].unlocked){
      return false;
    }
    
    var elements = $scope.resources[name].elements;
    if(elements.length === 0){
      return true;
    }
    
    for(var element in elements){
      if($scope.current_element === elements[element]){
        return true;
      }
    }
    
    return false;
  };

  isEncyclopediaEntryVisible = function(entry) {
    return player.data.unlocks[entry];
  };
  
  isRedoxVisible = function(entry) {
    if(!player.data.unlocks.redox){
      return false;
    }

    for(var reactant in entry.reactant){
      if(!player.data.resources[reactant].unlocked){
        return false;
      }
    }
    
    for(var element in entry.elements){
      if($scope.current_element === entry.elements[element]){
        return true;
      }
    }
    
    return false;
  };

  isBindingVisible = function(entry) {
    if(!player.data.unlocks.nuclear_binding_energy){
      return false;
    }

    for(var reactant in entry.reactant){
      if(!player.data.resources[reactant].unlocked){
        return false;
      }
    }
    
    for(var element in entry.elements){
      if($scope.current_element === entry.elements[element]){
        return true;
      }
    }
    
    return false;
  };
  
  isSynthesisVisible = function(entry) {
    if(!player.data.unlocks.synthesis){
      return false;
    }

    for(var reactant in entry.reactant){
      if(!player.data.resources[reactant].unlocked){
        return false;
      }
    }
    
    for(var element in entry.elements){
      if($scope.current_element === entry.elements[element]){
        return true;
      }
    }
    
    return false;
  };

  this.elementHasNew = function(element) {
    var includes = $scope.elements[element].includes;
    for( var key in includes) {
      if(player.data.resources[includes[key]].unlocked
          && player.data.resources[includes[key]].is_new) {
        return true;
      }
    }
    for( var index in $scope.elements[element].syntheses) {
      var synthesis = $scope.elements[element].syntheses[index];
      if(isSynthesisVisible(synthesis)
          && player.data.syntheses[synthesis].is_new) {
        return true;
      }
    }
    return false;
  };

  this.elementsHasNew = function() {
    for( var key in $scope.elements) {
      if(player.data.elements[key] !== undefined
          && player.data.elements[key].unlocked && this.elementHasNew(key)) {
        return true;
      }
    }
    for( var key in $scope.table_resources) {
      if(player.data.resources[$scope.table_resources[key]].unlocked
          && player.data.resources[$scope.table_resources[key]].is_new) {
        return true;
      }
    }
    return false;
  };

  this.encyclopediaHasNew = function() {
    for( var entry in player.data.encyclopedia) {
      if(isEncyclopediaEntryVisible(entry) && player.data.encyclopedia[entry].is_new) {
        return true;
      }
    }
  };
}]);