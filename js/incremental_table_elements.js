angular.module('incremental',['ngAnimate'])
.controller('IncCtrl',['$scope','$document','$interval', '$sce', '$filter', '$timeout', '$log',
function($scope,$document,$interval,$sce,$filter,$timeout,$log) { 
		$scope.version = '0.0';
		$scope.Math = window.Math;
		$scope.log = $log;
		
		const startPlayer = {
			unlocks: {
				isotopes:true,
				decay:true,
				periodic_table:true,
				reactions:true
			},
			encyclopedia: {
				'Hydrogen':{is_new:true},				
				'Isotope':{is_new:true}
			},
			elements_unlocked:2,
			elements: {
				'H':{
					generators: {
							'Tier 1':{level:1},							
							'Tier 2':{level:1},
							'Tier 3':{level:1},
							'Tier 4':{level:10000000000},
							'Tier 5':{level:0},
							'Tier 6':{level:0},
							'Tier 7':{level:0},
							'Tier 8':{level:0},
							'Tier 9':{level:0},
							'Tier 10':{level:0},
							'Tier 11':{level:0}
					},
					upgrades:{
						'Tier 1-1':{
							unlocked:true,
							bought:true
						},
						'Tier 1-2':{
							unlocked:true,
							bought:false
						},
						'Tier 2-1':{
							unlocked:false,
							bought:false
						},
						unlocked: true
					},
					synthesis:{
						'H-p':{
							number:0,
							active:0
						}
					},
					unlocked:true
				},'O':{					
					generators: {
							'Tier 1':{level:15},							
							'Tier 2':{level:1},
							'Tier 3':{level:10},
							'Tier 4':{level:10},
							'Tier 5':{level:10},
							'Tier 6':{level:0},
							'Tier 7':{level:0},
							'Tier 8':{level:0},
							'Tier 9':{level:0},
							'Tier 10':{level:0},
							'Tier 11':{level:0}
					},
					upgrades:{
						'Tier 1-1':{
							unlocked:true,
							bought:true
						},
						'Tier 1-2':{
							unlocked:false,
							bought:false
						},
						'Tier 2-1':{
							unlocked:false,
							bought:false
						},
						unlocked: true
					},
					synthesis:{
						'O3':{
							number:0,
							active:0
						}
					},
					unlocked:true
				}
			},
			resources:{
					'H':{ 
						number:0,
						is_new:false,
						unlocked: true
					},
					'H-':{ 
						number:0,
						is_new:true,
						unlocked: false
					},
					'2H':{ 
						number:0,
						is_new:true,
						unlocked: true
					},
					'3H':{ 
						number:0,
						is_new:true,		
						unlocked: true
					},
					'H2':{ 
						number:0,
						is_new:true,		
						unlocked: false
					},
					'3He+1':{ 
						number:0,
						is_new:true,
						unlocked: false
					},
					'O':{ 
						number:0,
						is_new:false,
						unlocked: true
					},
					'O2':{ 
						number:0,
						is_new:true,
						unlocked: false
					},
					'O3':{ 
						number:0,
						is_new:true,
						unlocked: false
					},
					'17O':{ 
						number:0,
						is_new:true,	
						unlocked: true
					},
					'18O':{ 
						number:0,
						is_new:true,			
						unlocked: true
					},
					'e-':{ 
						number:0,
						is_new:false,
						unlocked: false
					},
					'n':{ 
						number:0,
						is_new:true,
						unlocked: false
					},
					'p':{ 
						number:1000,
						is_new:false,
						unlocked: true
					},
					'energy':{ 
						number:10000000,
						is_new:false,
						unlocked: true
					}
				}
			};
			
		cache = {};
		$scope.current_tab = "Elements";
		$scope.current_entry = "Hydrogen";
		$scope.current_element = "O";
		$scope.hover_element = "";
		$scope.synthesis_price_increase = 2;
		$scope.synthesis_power_increase = 2;
		$scope.toast = [{name:'Allotropes'}];
		
        var numberGenerator = new Ziggurat();

		$scope.elementPrice = function(element) {
			return Math.pow($scope.player.elements_unlocked+1,$scope.resources[element].number);
		};
		
		$scope.isElementCostMet = function(element) {
			var price = $scope.elementPrice(element);
			return $scope.player.resources['e-'].number >= price &&
					$scope.player.resources['p'].number >= price &&
					$scope.player.resources['n'].number >= price;
		};

		$scope.generatorPrice = function(name, element) {
			var level = $scope.player.elements[element].generators[name].level;
			var price = $scope.generators[name].price*Math.pow($scope.generators[name].priceIncrease, level);
			return Math.ceil(price);
		};
		
		$scope.synthesisMultiplier = function(element, synthesis) {
			var level = $scope.player.elements[element].synthesis[synthesis].number;
			return Math.ceil(Math.pow($scope.synthesis_price_increase, level));
		};
		
		$scope.synthesisPower = function(element, synthesis) {
			var level = $scope.player.elements[element].synthesis[synthesis].active;
			return Math.ceil(Math.pow(level, $scope.synthesis_power_increase));
		};
		
		$scope.synthesisPrice = function(element, synthesis) {
			var multiplier = $scope.synthesisMultiplier(element, synthesis);
			var price = {};
			var reactant = $scope.synthesis[synthesis].reactant;
			for(resource in reactant){
				price[resource] = reactant[resource]*multiplier;
			}
			return price;
		};
		
		$scope.isSynthesisCostMet = function(element, synthesis) {
			var price = $scope.synthesisPrice(element, synthesis);
			for(resource in price){
				if($scope.player.resources[resource].number < price[resource]){
					return false;
				}
			}
			return true;
		};	
		
		$scope.buySynthesis = function(element, synthesis) {
            if ($scope.isSynthesisCostMet(element, synthesis)) {
            	var price = $scope.synthesisPrice(element, synthesis);
            	for(resource in price){
					$scope.player.resources[resource].number -= price[resource];
				}
				$scope.player.elements[$scope.current_element].synthesis[synthesis].number += 1;
            }
		};	
		
		$scope.getHTML = function(resource) {		
			var html = $scope.html[resource];
			if(html == null) html = $scope.resources[resource].html;
			if(html == null) return resource;
			return html;
		};

		/*
			Values is a list or map of values that we want to filter and order.
			Table is the map that contains the information of order and visibility.
		*/
		$scope.filterAndOrder = function(values, table) {	
			if(values == undefined) return;
			hash = JSON.stringify(values).hashCode();
			if(cache[hash] != null){
				return cache[hash];
			}	
			var array = [];
			for(var objectKey in values) {
				if(Array.isArray(values)){
					objectKey = values[objectKey];
				}
				if(objectKey in table && table[objectKey].visible()){
					var object = {};
					object.name = objectKey;
					object.value = values[objectKey];
					array.push(object);
				}
			}
			array.sort(function(a, b){
				n = parseInt(table[a.name].order);
				m = parseInt(table[b.name].order);
				return n - m;
			});
			cache[hash] = array;
			return array;
		};
		
        $scope.buyGenerator = function(name, element) {
        	var price = $scope.generatorPrice(name, element);
            if ($scope.player.resources[element].number >= price) {
                $scope.player.resources[element].number -= price;
                $scope.player.elements[element].generators[name].level++;
            }
        };
        
        $scope.buyUpgrade = function(name, element) {
        	var price = $scope.upgrades[name].price;
            if ($scope.player.resources[element].number >= price) {
                $scope.player.resources[element].number -= price;
                $scope.player.elements[element].upgrades[name].bought = true;
            }
        };
        
        $scope.buyElement = function(element) {
        	if($scope.isElementCostMet(element)){
        		var price = $scope.elementPrice(element);
				$scope.player.resources['e-'].number -= price;
				$scope.player.resources['p'].number -= price;
				$scope.player.resources['n'].number -= price;
				$scope.player.elements[element].unlocked = true;
				$scope.player.elements_unlocked++;
        	}
        };
        
        $scope.isReactionCostMet = function(number, reaction) {
	    	var keys = Object.keys(reaction.reactant);
	    	for(var i = 0; i < keys.length; i++){
	    		var available = $scope.player.resources[keys[i]].number;
	    		var required = Number.parseFloat((number*reaction.reactant[keys[i]]).toFixed(4));
				if(required > available){
					return false;
				}
	    	}
	    	return true;
        };
        
        $scope.react = function(number, reaction) {
        	if($scope.isReactionCostMet(number, reaction)){
		    	var keys = Object.keys(reaction.reactant);
		    	for(var i = 0; i < keys.length; i++){
	    			var required = Number.parseFloat((number*reaction.reactant[keys[i]]).toFixed(4));
	    			$scope.player.resources[keys[i]].number -= required;
	    			$scope.player.resources[keys[i]].number = Number.parseFloat($scope.player.resources[keys[i]].number.toFixed(4));
		    	}
		    	var keys = Object.keys(reaction.product);
		    	for(var i = 0; i < keys.length; i++){
	    			var produced = Number.parseFloat((number*reaction.product[keys[i]]).toFixed(4));
	    			$scope.player.resources[keys[i]].number += produced;
	    			$scope.player.resources[keys[i]].unlocked = true;
	    			$scope.player.resources[keys[i]].number = Number.parseFloat($scope.player.resources[keys[i]].number.toFixed(4));
		    	}
        	}
        };

		$scope.tierProduction = function(name, element) {
			var baseProduction = $scope.generators[name].power*$scope.player.elements[element].generators[name].level;
			var upgradedProduction = baseProduction;
			for(var upgrade in $scope.generators[name].upgrades){
				if($scope.player.elements[element].upgrades[$scope.generators[name].upgrades[upgrade]].bought){
					upgradedProduction = $scope.upgrades[$scope.generators[name].upgrades[upgrade]].apply(upgradedProduction);
				}
			}
			return upgradedProduction;
		};
		
		$scope.elementProduction = function(element) {
			var total = 0;
			for(var tier in $scope.generators){
				total += $scope.tierProduction(tier, element);
			}
			return total;
		};
		
		$scope.updateCurrent = function(variable, new_value) {
			$scope[variable] = new_value;
		};	

		$scope.save = function() {
			localStorage.setItem("playerStored", JSON.stringify($scope.player));
			var d = new Date();
			$scope.lastSave = d.toLocaleTimeString();
		};
		
		$scope.load = function() {
			try {
				$scope.player = JSON.parse(localStorage.getItem("playerStored"));
			}catch(err){
				alert("Error loading savegame, reset forced.");
				$scope.reset(false);
			}
			versionControl();
		};
		
		$scope.reset = function(ask) {
			var confirmation = true;
			if(ask){
				confirmation = confirm("Are you sure you want to reset? This will permanently erase your progress.");
			}
			
			if(confirmation === true){
				init();
				localStorage.removeItem("playerStored");
			}
		};
		
		function versionControl() {
            
        };
		
        function update() {        
            // decay should become first, since we are decaying the products from last step
            // We will process the radioactive decay
            for(var i = 0; i < $scope.radioisotopes.length; i++){
            	var radioisotope = $scope.radioisotopes[i];
            	if($scope.player.resources[radioisotope].unlocked){
            		var number = $scope.player.resources[radioisotope].number;
            		// p is the decay constant
            		var p = Math.log(2) / $scope.resources[radioisotope].radioactivity.half_life;
            		var q = 1-p;
		        	var mean = number*p;
		        	var variance = number*p*q;
		        	var std = Math.sqrt(variance);
		        	production = Math.round(numberGenerator.nextGaussian()*std+mean);
		        	if(production > number){
		        		production = number;
		        	}
		        	if(production < 0){
		        		production = 0;
		        	}
		        	// we decrease the number of radioactive element
		        	$scope.player.resources[radioisotope].number -= production;
		        	// produce energy
		        	$scope.player.resources["energy"].number += $scope.resources[radioisotope].radioactivity.decay_energy*production;
		        	if($scope.resources[radioisotope].radioactivity.decay_energy*production > 0){
			        	$scope.player.resources["energy"].unlocked = true;
			        }
		        	// and decay products
		        	for(var product in $scope.resources[radioisotope].radioactivity.decay_product){
		        		$scope.player.resources[product].number += $scope.resources[radioisotope].radioactivity.decay_product[product]*production;
		        		if(production > 0){
			        		$scope.player.resources[product].unlocked = true;
			        	}
		        	}
            	}
            }
            
            // decomposition comes second since it is very similar to radioactivity
            // We will process the decompositions
            for(var i = 0; i < $scope.unstables.length; i++){
            	var unstable = $scope.unstables[i];
            	if($scope.player.resources[unstable].unlocked){
            		var number = $scope.player.resources[unstable].number;
            		// p is the decay constant
            		var p = Math.log(2) / $scope.resources[unstable].decomposition.half_life;
            		var q = 1-p;
		        	var mean = number*p;
		        	var variance = number*p*q;
		        	var std = Math.sqrt(variance);
		        	production = Math.round(numberGenerator.nextGaussian()*std+mean);
		        	if(production > number){
		        		production = number;
		        	}
		        	if(production < 0){
		        		production = 0;
		        	}
		        	// we decrease the number of unstable element
		        	$scope.player.resources[unstable].number -= production;
		        	// produce decay products
		        	for(var product in $scope.resources[unstable].decomposition.decomposition_product){
		        		$scope.player.resources[product].number += $scope.resources[unstable].decomposition.decomposition_product[product]*production;
		        		if(production > 0){
			        		$scope.player.resources[product].unlocked = true;
			        	}
		        	}
            	}
            }
            
            // We will simulate the reactivity of free radicals            
            for(var i = 0; i < $scope.free_radicals.length; i++){
            	var radical = $scope.free_radicals[i];
            	if($scope.player.resources[radical].unlocked){
            	    var number = $scope.player.resources[radical].number;
            		var p = $scope.resources[radical].free_radical.reactivity;
            		var q = 1-p;
		        	var mean = number*p;
		        	var variance = number*p*q;
		        	var std = Math.sqrt(variance);
		        	production = Math.round(numberGenerator.nextGaussian()*std+mean);

		        	if(production > number){
		        		production = number;
		        	}
		        	if(production < 0){
		        		production = 0;
		        	}	   	
		        	
					var reacted = {};
					var remaining_production = production;
					
        			var keys = Object.keys($scope.resources[radical].free_radical.reaction);
					for(var i = 0; i < keys.length-1; i++){
						var product = keys[i];
				    	var reactants_number = 0;
				    	for(var j = i; j < keys.length; j++){
				    		var reactant = keys[j];
				    		reactants_number += $scope.player.resources[reactant].number;
				    	}
				    	
				    	if(reactants_number == 0){
				    		var p = 0;
				    	}else{
				    		var p = $scope.player.resources[product].number/reactants_number;
				    	}
				    	var q = 1-p;
				    	var mean = remaining_production*p;
				    	var variance = remaining_production*p*q;
				    	var std = Math.sqrt(variance);
				    	reacted[product] = Math.round(numberGenerator.nextGaussian()*std+mean);
				    	if(reacted[product] > remaining_production){
				    		reacted[product] = remaining_production;
				    	}
				    	if(reacted[product] < 0){
				    		reacted[product] = 0;
				    	}
				    	
		        		remaining_production -= reacted[product];
		        		// This is complicated...
		        		// when an element reacts with itself, we are not producing the full amount, but half of it
		        		// e.g. if you react 30 atoms with itself, they will form 15 pairs
		        		// also if the production number is even, there will be one leftover atom, that must be put back into the pool
		        		// finally to avoid double counting, we need to refill the atoms by half of the production
		        		if(product == radical){
		        			var adjusted_production = Math.floor(reacted[product]/2);
		        			$scope.player.resources[radical].number += reacted[product]%2+adjusted_production;
		        			reacted[product] = adjusted_production;
		        		}		        		
		        	}
		        	// The last reaction is just the remaining production that hasn't been consumed
            		reacted[keys[keys.length-1]] = remaining_production;
            		
		        	for(var product in $scope.resources[radical].free_radical.reaction){
		        		$scope.player.resources[product].number -= reacted[product];
		        		$scope.player.resources[$scope.resources[radical].free_radical.reaction[product]].number += reacted[product];
		        		if($scope.player.resources[$scope.resources[radical].free_radical.reaction[product]].number > 0){
			        		$scope.player.resources[$scope.resources[radical].free_radical.reaction[product]].unlocked = true;
			        	}
		        	}
		        	$scope.player.resources[radical].number -= production;
            	}
            }
            
            // We will simulate the production of isotopes proportional to their ratio
            for(var element in $scope.player.elements){
            	// Prepare an array with the isotopes
            	var isotopes = [element];
            	isotopes = isotopes.concat($scope.elements[element].isotopes);
            	// N is the total production for this element
            	var N = $scope.elementProduction(element);
            	var remaining_N = N;
            	// We will create a random draw from a Gaussian with mean N*p and std
            	// based on a binomial
            	// On each consecutive draw we subtract the number generated to the total and
            	// recalculate the mean and std
            	for(var i = 0; i < isotopes.length-1; i++){
            		// First we need to adjust the ratio for the remaining isotopes 
            		var remaining_ratio_sum = 0;
            		for(var j = i; j < isotopes.length; j++){
            			remaining_ratio_sum += $scope.resources[isotopes[j]].ratio;
            		}
            		
		        	var p = $scope.resources[isotopes[i]].ratio/remaining_ratio_sum;
		        	var q = 1-p;
		        	var mean = remaining_N*p;
		        	var variance = remaining_N*p*q;
		        	var std = Math.sqrt(variance);
		        	production = Math.round(numberGenerator.nextGaussian()*std+mean);
		        	if(production > remaining_N){
		        		production = remaining_N;
		        	}
		        	if(production < 0){
		        		production = 0;
		        	}
		        	$scope.player.resources[isotopes[i]].number += production;
		        	if(production > 0){
		        		$scope.player.resources[isotopes[i]].unlocked = true;
		        	}
		        	remaining_N -= production;
            	}
            	// The last isotope is just the remaining production that hasn't been consumed
            	$scope.player.resources[isotopes[isotopes.length-1]].number += remaining_N;
            	if(remaining_N > 0){
            		$scope.player.resources[isotopes[isotopes.length-1]].unlocked = true;
            	}
            }
            
            // We will process the synthesis reactions
            for(var element in $scope.player.elements){
            	for(var synthesis in $scope.player.elements[element].synthesis){
            		var power = $scope.synthesisPower(element, synthesis);
            		if(power != 0){
            			$scope.react(power, $scope.synthesis[synthesis]);
            		}
            	}
            }
        };

		/* 
			Formats a reaction i.e. a transformation from one compound to another
		*/
		$scope.reactionFormat = function(number, reaction) {
			var reactionHTML = "";
			reactionHTML += $scope.compoundFormat(number, reaction.reactant);
			reactionHTML += "<span class=\"icon\">&#8594;</span> ";
			reactionHTML += $scope.compoundFormat(number, reaction.product);
			return reactionHTML;
		}

		/* 
			Formats in HTML a compound i.e. a collection of resources 
			of the form x + y + z
		*/
        $scope.compoundFormat = function(number, compound) {
        	var compoundHTML = "";
        	var keys = Object.keys(compound);
        	for(var i = 0; i < keys.length; i++){
		    	if(Number.isInteger(number) && number > 1){
		    		compoundHTML += $scope.prettifyNumber(Number.parseFloat((number*compound[keys[i]]).toFixed(4)))+" ";
		    	}else if(compound[keys[i]] != 1){
		    		compoundHTML += $scope.prettifyNumber(compound[keys[i]])+" ";
		    	}
        		compoundHTML += $scope.getHTML(keys[i])+" ";
        		if(i < keys.length-1){
        			compoundHTML += "+ ";
        		}
        	}
        	return compoundHTML;
        }
        
        $scope.decayFormat = function(radioactivity) {
        	var format = '<span class="icon">&#8594;</span>';
        	for (var i = 0; i < radioactivity.decay_product.length; i++) {
        		format += $scope.getHTML(radioactivity.decay_product[i])+"+";
        	}
        	format += $scope.prettifyNumber(radioactivity.decay_energy)+' '+$scope.getHTML('energy');
        	return format;
        }
        
		$scope.prettifyNumber = function(number){
			if(typeof number == 'undefined'){
				return;
			}					
			if(number === ""){
				return "";
			}
			if(number == Infinity){
				return "&infin;";
			}
			if(number > 1e8){
				// Very ugly way to extract the mantisa and exponent from an exponential string
				var exponential = number.toPrecision(8).split("e");
				var exponent = parseFloat(exponential[1].split("+")[1]);
				// And it is displayed in with superscript
				if(exponential[0] == "1"){
					return  "10<sup>"+$scope.prettifyNumber(exponent)+"</sup>";							
				}
				return  $filter('number')(exponential[0])+" &#215; 10<sup>"+$scope.prettifyNumber(exponent)+"</sup>";						
			}
			return $filter('number')(number);
		};   
		
		function init(){
			$scope.player = angular.copy(startPlayer);
		};
				
		$timeout(function(){
			if(localStorage.getItem("playerStored") !== null){
				$scope.load();
			}
			if(typeof $scope.player  === 'undefined'){
				init();
			}
			if(typeof $scope.lastSave  === 'undefined'){
				$scope.lastSave = "None";
			}
			loadData($scope);
			//init();
            $interval(update,1000);
            //$interval($scope.save,60000);
        });	
        
        $scope.trustHTML = function(html) {
               return $sce.trustAsHtml(html);
        };
        
        String.prototype.hashCode = function() {
		  var hash = 0, i, chr, len;
		  if (this.length == 0) return hash;
		  for (i = 0, len = this.length; i < len; i++) {
			chr   = this.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		  }
		  return hash;
		};
}]);
