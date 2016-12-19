angular
.module('incremental')
.service('util',
['$filter',
'$sce',
function($filter, $sce) {
  // Polyfill for some browsers
  Number.parseFloat = parseFloat;
  Number.isInteger = Number.isInteger || function (value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };
  
  var $scope;
  this.numberGenerator = new Ziggurat();

  this.setScope = function (scope){
    $scope = scope;
  };

  this.getHTML = function (resource) {
    var html = $scope.html[resource];
    if(html === undefined){
      html = $scope.resources[resource].html;
    }
    if(html === undefined){
      return resource;
    }
    return html;
  };

  this.updateCurrent = function (variable, new_value) {
    $scope[variable] = new_value;
  };

  this.prettifyNumber = function (number) {
    if(typeof number == 'undefined') {
      return;
    }
    if(number === "") {
      return "";
    }
    if(number == Infinity) {
      return "&infin;";
    }
    if(number > 1e6) {
      // Very ugly way to extract the mantisa and exponent from an exponential string
      var exponential = number.toPrecision(6).split("e");
      var exponent = parseFloat(exponential[1].split("+")[1]);
      // And it is displayed in with superscript
      return $filter('number')(exponential[0]) +
             " &#215; 10<sup>" +
             this.prettifyNumber(exponent) +
             "</sup>";
    }
    return $filter('number')(number);
  };

  this.randomDraw = function (number, p) {
    var mean = p * number;
    var production;
    if(mean < 5) {
      // using Poisson distribution (would get slow for large numbers. there are fast formulas but I don't know
      // how good they are)
      production = this.getPoisson(mean);
    } else {
      // Gaussian distribution
      var q = 1 - p;
      var variance = number * p * q;
      var std = Math.sqrt(variance);
      production = Math.round(this.numberGenerator.nextGaussian() * std + mean);
    }
    if(production > number) {
      production = number;
    }
    if(production < 0) {
      production = 0;
    }
    return production;
  };

  this.getPoisson = function (lambda) {
    var L = Math.exp(-lambda);
    var p = 1.0;
    var k = 0;

    do {
      k++;
      p *= Math.random();
    } while (p > L);

    return k - 1;
  };
  
  this.trustHTML = function (html) {
    return $sce.trustAsHtml(html);
  };

  this.visibleKeys = function (map) {
    var result = {};
    for(var key in map) {
      if(map[key].visible()) {
        result[key] = map[key];
      }
    }
    return Object.keys(result);
  };
  
  /**
   * Simply compares two string version values.
   * 
   * Example: versionCompare('1.1', '1.2') => smaller
   * versionCompare('1.1', '1.1') => equal versionCompare('1.2',
   * '1.1') => bigger versionCompare('2.23.3', '2.22.3') => bigger
   * 
   * Returns: smaller = left is LOWER than right equal = they are
   * equal bigger = left is GREATER = right is LOWER And FALSE if
   * one of input versions are not valid
   * 
   * @function
   * @param {String}
   *          left Version #1
   * @param {String}
   *          right Version #2
   * @return {Integer|Boolean}
   * @author Alexey Bass (albass)
   * @since 2011-07-14
   */
  this.versionCompare = function (left, right) {
    if(typeof left != 'string' || typeof right != 'string') {
      return;
    }

    var a = left.split('.');
    var b = right.split('.');
    var len = Math.max(a.length, b.length);

    for(var i = 0; i < len; i++) {
      if((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
        return 'bigger';
      } else if((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
        return 'smaller';
      }
    }

    return 'equal';
  };
}]);