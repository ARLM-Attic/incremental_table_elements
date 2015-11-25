angular.module('incremental',[])
.controller('IncCtrl',['$scope','$document','$interval', '$sce', '$filter', '$timeout', '$log',
function($scope,$document,$interval,$sce,$filter,$timeout,$log) { 
		$scope.version = '0.0';
		$scope.Math = window.Math;
		$scope.log = $log;
		
		const startPlayer = {
			unlocks: {
				isotopes:true
			},
			encyclopedia: {
				'Hydrogen':{is_new:true},				
				'Isotope':{is_new:true}
			},
			elements: {
				'H':{
					generators: [{level:5,
							visible:function(){
								return true;
							}},							
							{level:1,
							visible:function(){
								return $scope.player.elements.H.generators[0].level > 0;
							}},
							{level:3,
							visible:function(){
								return $scope.player.elements.H.generators[1].level > 0;
							}},
							{level:1,
							visible:function(){
								return $scope.player.elements.H.generators[2].level > 0;
							}},
							{level:2,
							visible:function(){
								return $scope.player.elements.H.generators[3].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.H.generators[4].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.H.generators[5].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.H.generators[6].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.H.generators[7].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.H.generators[8].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.H.generators[9].level > 0;
							}}],
					upgrades:{
						'Upgrade 1':{
							unlocked:true,
							bought:true
						},
						'Upgrade 2':{
							unlocked:true,
							bought:false
						},
						'Upgrade 3':{
							unlocked:false,
							bought:false
						},
						unlocked: true
					},
					unlocked:true
				},'O':{
					generators: [
							{level:15,
							visible:function(){
								return true;
							}},							
							{level:1,
							visible:function(){
								return $scope.player.elements.O.generators[0].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.O.generators[1].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.O.generators[2].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.O.generators[3].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.O.generators[4].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.O.generators[5].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.O.generators[6].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.O.generators[7].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.O.generators[8].level > 0;
							}},
							{level:0,
							visible:function(){
								return $scope.player.elements.O.generators[9].level > 0;
							}}],
					upgrades:{
						'Upgrade 1':{
							unlocked:true,
							bought:true
						},
						'Upgrade 2':{
							unlocked:false,
							bought:false
						},
						'Upgrade 3':{
							unlocked:false,
							bought:false
						},
						unlocked: true
					},
					unlocked:true
				}
			},
			resources:{
					'H':{ 
						number:1.523e25,
						is_new:false,
						visible:function(){
							return $scope.current_element === "H";
						},
						order:0,
						unlocked: true
					},
					'2H':{ 
						number:100000000,
						is_new:true,
						visible:function(){
							return $scope.current_element === "H";
						},
						order:1,
						unlocked: true
					},
					'3H':{ 
						number:1000000000,
						is_new:true,
						visible:function(){
							return $scope.current_element === "H";
						},
						order:2,		
						unlocked: true
					},
					'O':{ 
						number:0,
						is_new:false,
						visible:function(){
							return $scope.current_element === "O";
						},
						order:700,
						unlocked: true
					},
					'17O':{ 
						number:345,
						is_new:true,						
						visible:function(){
							return $scope.current_element === "O";
						},
						order:701,
						unlocked: true
					},
					'18O':{ 
						number:36236,
						is_new:true,						
						visible:function(){
							return $scope.current_element === "O";
						},
						order:702,			
						unlocked: true
					},
					'e-':{ 
						number:10,
						is_new:false,
						visible:function(){
							return $scope.player.resources['e-'].unlocked;
						},
						order:20000,
						unlocked: false
					},
					'n':{ 
						number:0,
						is_new:true,
						visible:function(){
							return true;
						},
						order:20001,
						unlocked: true
					},
					'p':{ 
						number:0,
						is_new:false,
						visible:function(){
							return true;
						},
						order:20002,
						unlocked: true
					},
					'energy':{ 
						number:0,
						is_new:false,
						visible:function(){
							return true;
						},
						order:20003,
						unlocked: true
					}
				}
			};
		
		cache = {};
		$scope.current_tab = "Elements";
		$scope.current_entry = "Hydrogen";
		$scope.current_element = "H";

		$scope.generatorPrice = function(index,level) {
			var price = $scope.generators[index].price*Math.pow($scope.generators[index].priceIncrease,level);
			return Math.ceil(price);
		};
		
		$scope.getHTML = function(resource) {
			var html = $scope.resources[resource].html;
			if(html == null) return resource;
			return html;
		};
		
		$scope.isCostMet = function(element, index) {return false;};

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
				if(table[objectKey].visible()){
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
		
        $scope.buyGenerator = function(number) {
        /*
            if ($scope.player.h >= $scope.player.hGeneratorPrice[number]) {
                $scope.player.h -= $scope.player.hGeneratorPrice[number];
                $scope.player.hGeneratorLevel[number]++;
				$scope.player.hGeneratorPrice[number] = hGeneratorBasePrice[number]*Math.pow(priceIncrease,$scope.player.hGeneratorLevel[number]);
				refreshUpgradeLine(number, true);
            }
            */
        };

		$scope.updateCurrentElement = function(new_value) {
			$scope.current_element = new_value;
		};		
		
		$scope.updateCurrentTab = function(new_value) {
			$scope.current_tab = new_value;
		};
		
		$scope.updateCurrentEntry = function(new_value) {
			$scope.current_entry = new_value;
		};

		$scope.save = function() {
			localStorage.setItem("playerStored", JSON.stringify($scope.player));
			var d = new Date();
			$scope.lastSave = d.toLocaleTimeString();
		};
		
		$scope.load = function() {
			try {
				$scope.player = JSON.parse(localStorage.getItem("playerStored"));
				$scope.currentPrestige = parseInt(localStorage.getItem("currentPrestige"));

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
            $scope.player.resources["2H"].number++;
        };
        
		$scope.prettifyNumber = function(number){
			if(typeof number == 'undefined'){
				return;
			}
				
			if(number == Infinity){
				return "&infin;";
			}
			if(number > 1e8){
				// Very ugly way to extract the mantisa and exponent from an exponential string
				var exponential = number.toExponential().split("e");
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
			init();
            $interval(update,1000);
            $interval($scope.save,60000);
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
