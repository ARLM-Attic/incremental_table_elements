function loadData($scope) {
  $scope.elements = {
    'H' : {
      name : 'Hydrogen',
      isotopes : [ '2H', '3H' ],
      visible : function () {
        return $scope.player.data.elements.H.unlocked;
      },
      has_new : function () {
        var includes = [ 'H', '2H', '3H', 'H-', 'H2' ];
        for ( var key in includes) {
          if ($scope.player.data.resources[includes[key]].unlocked && $scope.player.data.resources[includes[key]].is_new) {
            return true;
          }
        }
        for ( var key in $scope.reactions.H.synthesis) {
          if ($scope.synthesis[$scope.reactions.H.synthesis[key]].visible() &&
              $scope.player.data.synthesis[$scope.reactions.H.synthesis[key]].is_new) {
            return true;
          }
        }
        return false;
      },
      order : 1
    },
    'He' : {
      name : 'Helium',
      isotopes : [ '3He' ],
      visible : function () {
        return false;
        // return $scope.player.data.elements.He.unlocked;
      },
      has_new : function () {
        return false;
      },
      order : 2,
      disabled : true
    },
    'Li' : {
      name : 'Lithium',
      isotopes : [ '7Li' ],
      visible : function () {
        return false;
        // return $scope.player.data.elements.Li.unlocked;
      },
      has_new : function () {
        return false;
      },
      order : 3,
      disabled : true
    },
    'Be' : {
      name : 'Beryllium',
      isotopes : [ '7Be', '10Be' ],
      visible : function () {
        return false;
        // return $scope.player.data.elements.Be.unlocked;
      },
      has_new : function () {
        return false;
      },
      order : 4,
      disabled : true
    },
    'B' : {
      name : 'Boron',
      isotopes : [ '11B' ],
      visible : function () {
        return false;
        // return $scope.player.data.elements.B.unlocked;
      },
      has_new : function () {
        return false;
      },
      order : 5,
      disabled : true
    },
    'C' : {
      name : 'Carbon',
      isotopes : [ '11C', '13C', '14C' ],
      visible : function () {
        return false;
        // return $scope.player.data.elements.C.unlocked;
      },
      has_new : function () {
        return false;
      },
      order : 6,
      disabled : true
    },
    'N' : {
      name : 'Nitrogen',
      isotopes : [ '13N', '15N' ],
      visible : function () {
        return false;
        // return $scope.player.data.elements.N.unlocked;
      },
      has_new : function () {
        return false;
      },
      order : 7,
      disabled : true
    },
    'O' : {
      name : 'Oxygen',
      isotopes : [ '17O', '18O' ],
      visible : function () {
        return $scope.player.data.elements.O.unlocked;
      },
      has_new : function () {
        var includes = [ 'O', '17O', '18O', 'O2', 'O3' ];
        for ( var key in includes) {
          if ($scope.player.data.resources[includes[key]].unlocked && $scope.player.data.resources[includes[key]].is_new) {
            return true;
          }
        }
        for ( var key in $scope.reactions.O.synthesis) {
          if ($scope.synthesis[$scope.reactions.O.synthesis[key]].visible() &&
              $scope.player.data.synthesis[$scope.reactions.O.synthesis[key]].is_new) {
            return true;
          }
        }
        return false;
      },
      order : 8
    },
    'F' : {
      name : 'Fluorine',
      isotopes : [ '18F' ],
      visible : function () {
        return false;
        // return $scope.player.data.elements.F.unlocked;
      },
      has_new : function () {
        return false;
      },
      order : 9,
      disabled : true
    },
    'Ne' : {
      name : 'Neon',
      isotopes : [ '21Ne', '22Ne' ],
      visible : function () {
        return false;
        // return $scope.player.data.elements.Ne.unlocked;
      },
      has_new : function () {
        return false;
      },
      order : 10,
      disabled : true
    },
    'Na' : {
      name : 'Sodium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 11,
      disabled : true
    },
    'Mg' : {
      name : 'Magnesium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 12,
      disabled : true
    },
    'Al' : {
      name : 'Aluminium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 13,
      disabled : true
    },
    'Si' : {
      name : 'Silicon',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 14,
      disabled : true
    },
    'P' : {
      name : 'Phosphorus',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 15,
      disabled : true
    },
    'S' : {
      name : 'Sulfur',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 16,
      disabled : true
    },
    'Cl' : {
      name : 'Chlorine',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 17,
      disabled : true
    },
    'Ar' : {
      name : 'Argon',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 18,
      disabled : true
    },
    'K' : {
      name : 'Potassium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 19,
      disabled : true
    },
    'Ca' : {
      name : 'Calcium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 20,
      disabled : true
    },
    'Sc' : {
      name : 'Scandium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 21,
      disabled : true
    },
    'Ti' : {
      name : 'Titanium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 22,
      disabled : true
    },
    'V' : {
      name : 'Vanadium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 23,
      disabled : true
    },
    'Cr' : {
      name : 'Chromium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 24,
      disabled : true
    },
    'Mn' : {
      name : 'Manganese',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 25,
      disabled : true
    },
    'Fe' : {
      name : 'Iron',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 26,
      disabled : true
    },
    'Co' : {
      name : 'Cobalt',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 27,
      disabled : true
    },
    'Ni' : {
      name : 'Nickel',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 28,
      disabled : true
    },
    'Cu' : {
      name : 'Copper',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 29,
      disabled : true
    },
    'Zn' : {
      name : 'Zinc',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 30,
      disabled : true
    },
    'Ga' : {
      name : 'Gallium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 31,
      disabled : true
    },
    'Ge' : {
      name : 'Germanium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 32,
      disabled : true
    },
    'As' : {
      name : 'Arsenic',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 33,
      disabled : true
    },
    'Se' : {
      name : 'Selenium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 34,
      disabled : true
    },
    'Br' : {
      name : 'Bromine',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 35,
      disabled : true
    },
    'Kr' : {
      name : 'Krypton',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 36,
      disabled : true
    },
    'Rb' : {
      name : 'Rubidium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 37,
      disabled : true
    },
    'Sr' : {
      name : 'Strontium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 38,
      disabled : true
    },
    'Y' : {
      name : 'Yttrium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 39,
      disabled : true
    },
    'Zr' : {
      name : 'Zirconium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 40,
      disabled : true
    },
    'Nb' : {
      name : 'Niobium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 41,
      disabled : true
    },
    'Mo' : {
      name : 'Molybdenum',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 42,
      disabled : true
    },
    'Tc' : {
      name : 'Technetium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 43,
      disabled : true
    },
    'Ru' : {
      name : 'Ruthenium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 44,
      disabled : true
    },
    'Rh' : {
      name : 'Rhodium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 45,
      disabled : true
    },
    'Pd' : {
      name : 'Palladium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 46,
      disabled : true
    },
    'Ag' : {
      name : 'Silver',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 47,
      disabled : true
    },
    'Cd' : {
      name : 'Cadmium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 48,
      disabled : true
    },
    'In' : {
      name : 'Indium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 49,
      disabled : true
    },
    'Sn' : {
      name : 'Tin',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 50,
      disabled : true
    },
    'Sb' : {
      name : 'Antimony',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 51,
      disabled : true
    },
    'Te' : {
      name : 'Tellurium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 52,
      disabled : true
    },
    'I' : {
      name : 'Iodine',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 53,
      disabled : true
    },
    'Xe' : {
      name : 'Xenon',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 54,
      disabled : true
    },
    'Cs' : {
      name : 'Caesium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 55,
      disabled : true
    },
    'Ba' : {
      name : 'Barium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 56,
      disabled : true
    },
    'La' : {
      name : 'Lanthanum',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 57,
      disabled : true
    },
    'Ce' : {
      name : 'Cerium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 58,
      disabled : true
    },
    'Pr' : {
      name : 'Praseodymium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 59,
      disabled : true
    },
    'Nd' : {
      name : 'Neodymium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 60,
      disabled : true
    },
    'Pm' : {
      name : 'Promethium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 61,
      disabled : true
    },
    'Sm' : {
      name : 'Samarium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 62,
      disabled : true
    },
    'Eu' : {
      name : 'Europium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 63,
      disabled : true
    },
    'Gd' : {
      name : 'Gadolinium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 64,
      disabled : true
    },
    'Tb' : {
      name : 'Terbium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 65,
      disabled : true
    },
    'Dy' : {
      name : 'Dysprosium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 66,
      disabled : true
    },
    'Ho' : {
      name : 'Holmium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 67,
      disabled : true
    },
    'Er' : {
      name : 'Erbium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 68,
      disabled : true
    },
    'Tm' : {
      name : 'Thulium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 69,
      disabled : true
    },
    'Yb' : {
      name : 'Ytterbium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 70,
      disabled : true
    },
    'Lu' : {
      name : 'Lutetium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 71,
      disabled : true
    },
    'Hf' : {
      name : 'Hafnium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 72,
      disabled : true
    },
    'Ta' : {
      name : 'Tantalum',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 73,
      disabled : true
    },
    'W' : {
      name : 'Tungsten',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 74,
      disabled : true
    },
    'Re' : {
      name : 'Rhenium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 75,
      disabled : true
    },
    'Os' : {
      name : 'Osmium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 76,
      disabled : true
    },
    'Ir' : {
      name : 'Iridium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 77,
      disabled : true
    },
    'Pt' : {
      name : 'Platinum',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 78,
      disabled : true
    },
    'Au' : {
      name : 'Gold',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 79,
      disabled : true
    },
    'Hg' : {
      name : 'Mercury',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 80,
      disabled : true
    },
    'Tl' : {
      name : 'Thallium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 81,
      disabled : true
    },
    'Pb' : {
      name : 'Lead',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 82,
      disabled : true
    },
    'Bi' : {
      name : 'Bismuth',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 83,
      disabled : true
    },
    'Po' : {
      name : 'Polonium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 84,
      disabled : true
    },
    'At' : {
      name : 'Astatine',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 85,
      disabled : true
    },
    'Rn' : {
      name : 'Radon',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 86,
      disabled : true
    },
    'Fr' : {
      name : 'Francium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 87,
      disabled : true
    },
    'Ra' : {
      name : 'Radium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 88,
      disabled : true
    },
    'Ac' : {
      name : 'Actinium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 89,
      disabled : true
    },
    'Th' : {
      name : 'Thorium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 90,
      disabled : true
    },
    'Pa' : {
      name : 'Protactinium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 91,
      disabled : true
    },
    'U' : {
      name : 'Uranium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 92,
      disabled : true
    },
    'Np' : {
      name : 'Neptunium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 93,
      disabled : true
    },
    'Pu' : {
      name : 'Plutonium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 94,
      disabled : true
    },
    'Am' : {
      name : 'Americium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 95,
      disabled : true
    },
    'Cm' : {
      name : 'Curium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 96,
      disabled : true
    },
    'Bk' : {
      name : 'Berkelium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 97,
      disabled : true
    },
    'Cf' : {
      name : 'Californium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 98,
      disabled : true
    },
    'Es' : {
      name : 'Einsteinium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 99,
      disabled : true
    },
    'Fm' : {
      name : 'Fermium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 100,
      disabled : true
    },
    'Md' : {
      name : 'Mendelevium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 101,
      disabled : true
    },
    'No' : {
      name : 'Nobelium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 102,
      disabled : true
    },
    'Lr' : {
      name : 'Lawrencium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 103,
      disabled : true
    },
    'Rf' : {
      name : 'Rutherfordium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 104,
      disabled : true
    },
    'Db' : {
      name : 'Dubnium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 105,
      disabled : true
    },
    'Sg' : {
      name : 'Seaborgium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 106,
      disabled : true
    },
    'Bh' : {
      name : 'Bohrium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 107,
      disabled : true
    },
    'Hs' : {
      name : 'Hassium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 108,
      disabled : true
    },
    'Mt' : {
      name : 'Meitnerium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 109,
      disabled : true
    },
    'Ds' : {
      name : 'Darmstadtium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 110,
      disabled : true
    },
    'Rg' : {
      name : 'Roentgenium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 111,
      disabled : true
    },
    'Cn' : {
      name : 'Copernicium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 112,
      disabled : true
    },
    'Uut' : {
      name : 'Ununtrium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 113,
      disabled : true
    },
    'Fl' : {
      name : 'Flerovium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 114,
      disabled : true
    },
    'Uup' : {
      name : 'Ununpentium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 115,
      disabled : true
    },
    'Lv' : {
      name : 'Livermorium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 116,
      disabled : true
    },
    'Uus' : {
      name : 'Ununseptium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 117,
      disabled : true
    },
    'Uuo' : {
      name : 'Ununoctium',
      isotopes : [],
      visible : function () {
        return false;
      },
      has_new : function () {
        return false;
      },
      order : 118,
      disabled : true
    }
  };

  // TODO: create this programatically
  $scope.generators = {
    "Tier 1": {
      "price": 15,
      "power": 1,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 1-1",
        "Tier 1-2",
        "Tier 1-3",
        "Tier 1-4",
        "Tier 1-5",
        "Tier 1-6",
        "Tier 1-7",
        "Tier 1-8"
      ]
    },
    "Tier 2": {
      "price": 100,
      "power": 10,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 2-1",
        "Tier 2-2",
        "Tier 2-3",
        "Tier 2-4",
        "Tier 2-5",
        "Tier 2-6",
        "Tier 2-7",
        "Tier 2-8"
      ]
    },
    "Tier 3": {
      "price": 1100,
      "power": 80,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 3-1",
        "Tier 3-2",
        "Tier 3-3",
        "Tier 3-4",
        "Tier 3-5",
        "Tier 3-6",
        "Tier 3-7",
        "Tier 3-8"
      ]
    },
    "Tier 4": {
      "price": 12000,
      "power": 470,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 4-1",
        "Tier 4-2",
        "Tier 4-3",
        "Tier 4-4",
        "Tier 4-5",
        "Tier 4-6",
        "Tier 4-7",
        "Tier 4-8"
      ]
    },
    "Tier 5": {
      "price": 130000,
      "power": 2600,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 5-1",
        "Tier 5-2",
        "Tier 5-3",
        "Tier 5-4",
        "Tier 5-5",
        "Tier 5-6",
        "Tier 5-7",
        "Tier 5-8"
      ]
    },
    "Tier 6": {
      "price": 1400000,
      "power": 14000,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 6-1",
        "Tier 6-2",
        "Tier 6-3",
        "Tier 6-4",
        "Tier 6-5",
        "Tier 6-6",
        "Tier 6-7",
        "Tier 6-8"
      ]
    },
    "Tier 7": {
      "price": 2000000,
      "power": 78000,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 7-1",
        "Tier 7-2",
        "Tier 7-3",
        "Tier 7-4",
        "Tier 7-5",
        "Tier 7-6",
        "Tier 7-7",
        "Tier 7-8"
      ]
    },
    "Tier 8": {
      "price": 330000000,
      "power": 440000,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 8-1",
        "Tier 8-2",
        "Tier 8-3",
        "Tier 8-4",
        "Tier 8-5",
        "Tier 8-6",
        "Tier 8-7",
        "Tier 8-8"
      ]
    },
    "Tier 9": {
      "price": 5100000000,
      "power": 2600000,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 9-1",
        "Tier 9-2",
        "Tier 9-3",
        "Tier 9-4",
        "Tier 9-5",
        "Tier 9-6",
        "Tier 9-7",
        "Tier 9-8"
      ]
    },
    "Tier 10": {
      "price": 75000000000,
      "power": 16000000,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 10-1",
        "Tier 10-2",
        "Tier 10-3",
        "Tier 10-4",
        "Tier 10-5",
        "Tier 10-6",
        "Tier 10-7",
        "Tier 10-8"
      ]
    },
    "Tier 11": {
      "price": 1000000000000,
      "power": 100000000,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 11-1",
        "Tier 11-2",
        "Tier 11-3",
        "Tier 11-4",
        "Tier 11-5",
        "Tier 11-6",
        "Tier 11-7",
        "Tier 11-8"
      ]
    },
    "Tier 12": {
      "price": 14000000000000,
      "power": 650000000,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 12-1",
        "Tier 12-2",
        "Tier 12-3",
        "Tier 12-4",
        "Tier 12-5",
        "Tier 12-6",
        "Tier 12-7",
        "Tier 12-8"
      ]
    },
    "Tier 13": {
      "price": 1.7e+14,
      "power": 4300000000,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 13-1",
        "Tier 13-2",
        "Tier 13-3",
        "Tier 13-4",
        "Tier 13-5",
        "Tier 13-6",
        "Tier 13-7",
        "Tier 13-8"
      ]
    },
    "Tier 14": {
      "price": 2.1e+15,
      "power": 2900000000,
      "priceIncrease": 1.05,
      "upgrades": [
        "Tier 14-1",
        "Tier 14-2",
        "Tier 14-3",
        "Tier 14-4",
        "Tier 14-5",
        "Tier 14-6",
        "Tier 14-7",
        "Tier 14-8"
      ]
    }
  };

  $scope.upgrades = {
		  "Tier 1-1": {
			    "price": 100,
			    "description": "x2",
			    "order": 0,
			    "apply": function (resource) {return resource * 2;},
			    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 1'].level > 0;}
			  },
		  "Tier 1-2": {
		    "price": 500,
		    "description": "x3",
		    "order": 1,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 1-1'].bought;}
		  },
		  "Tier 1-3": {
		    "price": 10000,
		    "description": "x4",
		    "order": 2,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 1-2'].bought;}
		  },
		  "Tier 1-4": {
		    "price": 100000,
		    "description": "x5",
		    "order": 3,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 1-3'].bought;}
		  },
		  "Tier 1-5": {
		    "price": 10000000,
		    "description": "x6",
		    "order": 4,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 1-4'].bought;}
		  },
		  "Tier 1-6": {
		    "price": 100000000,
		    "description": "x7",
		    "order": 5,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 1-5'].bought;}
		  },
		  "Tier 1-7": {
		    "price": 1000000000,
		    "description": "x8",
		    "order": 6,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 1-6'].bought;}
		  },
		  "Tier 1-8": {
		    "price": 10000000000,
		    "description": "x9",
		    "order": 7,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 1-7'].bought;}
		  },
		  "Tier 2-1": {
		    "price": 1000,
		    "description": "x2",
		    "order": 14,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 2'].level > 0;}
		  },
		  "Tier 2-2": {
		    "price": 5000,
		    "description": "x3",
		    "order": 15,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 2-1'].bought;}
		  },
		  "Tier 2-3": {
		    "price": 50000,
		    "description": "x4",
		    "order": 16,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 2-2'].bought;}
		  },
		  "Tier 2-4": {
		    "price": 5000000,
		    "description": "x5",
		    "order": 17,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 2-3'].bought;}
		  },
		  "Tier 2-5": {
		    "price": 500000000,
		    "description": "x6",
		    "order": 18,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 2-4'].bought;}
		  },
		  "Tier 2-6": {
		    "price": 50000000000,
		    "description": "x7",
		    "order": 19,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 2-5'].bought;}
		  },
		  "Tier 2-7": {
		    "price": 50000000000000,
		    "description": "x8",
		    "order": 20,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 2-6'].bought;}
		  },
		  "Tier 2-8": {
		    "price": 5.0e+16,
		    "description": "x9",
		    "order": 21,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 2-7'].bought;}
		  },
		  "Tier 3-1": {
		    "price": 10000,
		    "description": "x2",
		    "order": 28,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 3'].level > 0;}
		  },
		  "Tier 3-2": {
		    "price": 55000,
		    "description": "x3",
		    "order": 29,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 3-1'].bought;}
		  },
		  "Tier 3-3": {
		    "price": 550000,
		    "description": "x4",
		    "order": 30,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 3-2'].bought;}
		  },
		  "Tier 3-4": {
		    "price": 55000000,
		    "description": "x5",
		    "order": 31,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 3-3'].bought;}
		  },
		  "Tier 3-5": {
		    "price": 5500000000,
		    "description": "x6",
		    "order": 32,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 3-4'].bought;}
		  },
		  "Tier 3-6": {
		    "price": 550000000000,
		    "description": "x7",
		    "order": 33,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 3-5'].bought;}
		  },
		  "Tier 3-7": {
		    "price": 5.5e+14,
		    "description": "x8",
		    "order": 34,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 3-6'].bought;}
		  },
		  "Tier 3-8": {
		    "price": 5.5e+17,
		    "description": "x9",
		    "order": 35,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 3-7'].bought;}
		  },
		  "Tier 4-1": {
		    "price": 120000,
		    "description": "x2",
		    "order": 42,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 4'].level > 0;}
		  },
		  "Tier 4-2": {
		    "price": 600000,
		    "description": "x3",
		    "order": 43,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 4-1'].bought;}
		  },
		  "Tier 4-3": {
		    "price": 6000000,
		    "description": "x4",
		    "order": 44,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 4-2'].bought;}
		  },
		  "Tier 4-4": {
		    "price": 600000000,
		    "description": "x5",
		    "order": 45,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 4-3'].bought;}
		  },
		  "Tier 4-5": {
		    "price": 60000000000,
		    "description": "x6",
		    "order": 46,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 4-4'].bought;}
		  },
		  "Tier 4-6": {
		    "price": 6000000000000,
		    "description": "x7",
		    "order": 47,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 4-5'].bought;}
		  },
		  "Tier 4-7": {
		    "price": 6.0e+15,
		    "description": "x8",
		    "order": 48,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 4-6'].bought;}
		  },
		  "Tier 4-8": {
		    "price": 6.0e+18,
		    "description": "x9",
		    "order": 49,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 4-7'].bought;}
		  },
		  "Tier 5-1": {
		    "price": 1300000,
		    "description": "x2",
		    "order": 56,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 5'].level > 0;}
		  },
		  "Tier 5-2": {
		    "price": 6500000,
		    "description": "x3",
		    "order": 57,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 5-1'].bought;}
		  },
		  "Tier 5-3": {
		    "price": 65000000,
		    "description": "x4",
		    "order": 58,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 5-2'].bought;}
		  },
		  "Tier 5-4": {
		    "price": 6500000000,
		    "description": "x5",
		    "order": 59,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 5-3'].bought;}
		  },
		  "Tier 5-5": {
		    "price": 650000000000,
		    "description": "x6",
		    "order": 60,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 5-4'].bought;}
		  },
		  "Tier 5-6": {
		    "price": 65000000000000,
		    "description": "x7",
		    "order": 61,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 5-5'].bought;}
		  },
		  "Tier 5-7": {
		    "price": 6.5e+16,
		    "description": "x8",
		    "order": 62,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 5-6'].bought;}
		  },
		  "Tier 5-8": {
		    "price": 6.5e+19,
		    "description": "x9",
		    "order": 63,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 5-7'].bought;}
		  },
		  "Tier 6-1": {
		    "price": 14000000,
		    "description": "x2",
		    "order": 70,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 6'].level > 0;}
		  },
		  "Tier 6-2": {
		    "price": 70000000,
		    "description": "x3",
		    "order": 71,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 6-1'].bought;}
		  },
		  "Tier 6-3": {
		    "price": 700000000,
		    "description": "x4",
		    "order": 72,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 6-2'].bought;}
		  },
		  "Tier 6-4": {
		    "price": 70000000000,
		    "description": "x5",
		    "order": 73,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 6-3'].bought;}
		  },
		  "Tier 6-5": {
		    "price": 7000000000000,
		    "description": "x6",
		    "order": 74,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 6-4'].bought;}
		  },
		  "Tier 6-6": {
		    "price": 7.0e+14,
		    "description": "x7",
		    "order": 75,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 6-5'].bought;}
		  },
		  "Tier 6-7": {
		    "price": 7.0e+17,
		    "description": "x8",
		    "order": 76,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 6-6'].bought;}
		  },
		  "Tier 6-8": {
		    "price": 7.0e+20,
		    "description": "x9",
		    "order": 77,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 6-7'].bought;}
		  },
		  "Tier 7-1": {
		    "price": 200000000,
		    "description": "x2",
		    "order": 84,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 7'].level > 0;}
		  },
		  "Tier 7-2": {
		    "price": 1000000000,
		    "description": "x3",
		    "order": 85,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 7-1'].bought;}
		  },
		  "Tier 7-3": {
		    "price": 10000000000,
		    "description": "x4",
		    "order": 86,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 7-2'].bought;}
		  },
		  "Tier 7-4": {
		    "price": 1000000000000,
		    "description": "x5",
		    "order": 87,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 7-3'].bought;}
		  },
		  "Tier 7-5": {
		    "price": 1.0e+14,
		    "description": "x6",
		    "order": 88,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 7-4'].bought;}
		  },
		  "Tier 7-6": {
		    "price": 1.0e+16,
		    "description": "x7",
		    "order": 89,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 7-5'].bought;}
		  },
		  "Tier 7-7": {
		    "price": 1.0e+19,
		    "description": "x8",
		    "order": 90,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 7-6'].bought;}
		  },
		  "Tier 7-8": {
		    "price": 1.0e+22,
		    "description": "x9",
		    "order": 91,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 7-7'].bought;}
		  },
		  "Tier 8-1": {
		    "price": 3300000000,
		    "description": "x2",
		    "order": 98,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 8'].level > 0;}
		  },
		  "Tier 8-2": {
		    "price": 16500000000,
		    "description": "x3",
		    "order": 99,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 8-1'].bought;}
		  },
		  "Tier 8-3": {
		    "price": 165000000000,
		    "description": "x4",
		    "order": 100,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 8-2'].bought;}
		  },
		  "Tier 8-4": {
		    "price": 16500000000000,
		    "description": "x5",
		    "order": 101,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 8-3'].bought;}
		  },
		  "Tier 8-5": {
		    "price": 1.65e+15,
		    "description": "x6",
		    "order": 102,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 8-4'].bought;}
		  },
		  "Tier 8-6": {
		    "price": 1.65e+17,
		    "description": "x7",
		    "order": 103,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 8-5'].bought;}
		  },
		  "Tier 8-7": {
		    "price": 1.65e+20,
		    "description": "x8",
		    "order": 104,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 8-6'].bought;}
		  },
		  "Tier 8-8": {
		    "price": 1.65e+23,
		    "description": "x9",
		    "order": 105,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 8-7'].bought;}
		  },
		  "Tier 9-1": {
		    "price": 51000000000,
		    "description": "x2",
		    "order": 112,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 9'].level > 0;}
		  },
		  "Tier 9-2": {
		    "price": 255000000000,
		    "description": "x3",
		    "order": 113,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 9-1'].bought;}
		  },
		  "Tier 9-3": {
		    "price": 2550000000000,
		    "description": "x4",
		    "order": 114,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 9-2'].bought;}
		  },
		  "Tier 9-4": {
		    "price": 2.55e+14,
		    "description": "x5",
		    "order": 115,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 9-3'].bought;}
		  },
		  "Tier 9-5": {
		    "price": 2.55e+16,
		    "description": "x6",
		    "order": 116,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 9-4'].bought;}
		  },
		  "Tier 9-6": {
		    "price": 2.55e+18,
		    "description": "x7",
		    "order": 117,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 9-5'].bought;}
		  },
		  "Tier 9-7": {
		    "price": 2.55e+21,
		    "description": "x8",
		    "order": 118,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 9-6'].bought;}
		  },
		  "Tier 9-8": {
		    "price": 2.55e+24,
		    "description": "x9",
		    "order": 119,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 9-7'].bought;}
		  },
		  "Tier 10-1": {
		    "price": 750000000000,
		    "description": "x2",
		    "order": 126,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 10'].level > 0;}
		  },
		  "Tier 10-2": {
		    "price": 3750000000000,
		    "description": "x3",
		    "order": 127,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 10-1'].bought;}
		  },
		  "Tier 10-3": {
		    "price": 37500000000000,
		    "description": "x4",
		    "order": 128,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 10-2'].bought;}
		  },
		  "Tier 10-4": {
		    "price": 3.75e+15,
		    "description": "x5",
		    "order": 129,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 10-3'].bought;}
		  },
		  "Tier 10-5": {
		    "price": 3.75e+17,
		    "description": "x6",
		    "order": 130,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 10-4'].bought;}
		  },
		  "Tier 10-6": {
		    "price": 3.75e+19,
		    "description": "x7",
		    "order": 131,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 10-5'].bought;}
		  },
		  "Tier 10-7": {
		    "price": 3.75e+22,
		    "description": "x8",
		    "order": 132,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 10-6'].bought;}
		  },
		  "Tier 10-8": {
		    "price": 3.75e+25,
		    "description": "x9",
		    "order": 133,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 10-7'].bought;}
		  },
		  "Tier 11-1": {
		    "price": 10000000000000,
		    "description": "x2",
		    "order": 140,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 11'].level > 0;}
		  },
		  "Tier 11-2": {
		    "price": 50000000000000,
		    "description": "x3",
		    "order": 141,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 11-1'].bought;}
		  },
		  "Tier 11-3": {
		    "price": 5.0e+14,
		    "description": "x4",
		    "order": 142,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 11-2'].bought;}
		  },
		  "Tier 11-4": {
		    "price": 5.0e+16,
		    "description": "x5",
		    "order": 143,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 11-3'].bought;}
		  },
		  "Tier 11-5": {
		    "price": 5.0e+18,
		    "description": "x6",
		    "order": 144,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 11-4'].bought;}
		  },
		  "Tier 11-6": {
		    "price": 5.0e+20,
		    "description": "x7",
		    "order": 145,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 11-5'].bought;}
		  },
		  "Tier 11-7": {
		    "price": 5.0e+23,
		    "description": "x8",
		    "order": 146,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 11-6'].bought;}
		  },
		  "Tier 11-8": {
		    "price": 5.0e+26,
		    "description": "x9",
		    "order": 147,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 11-7'].bought;}
		  },
		  "Tier 12-1": {
		    "price": 1.4e+14,
		    "description": "x2",
		    "order": 154,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 12'].level > 0;}
		  },
		  "Tier 12-2": {
		    "price": 7.0e+14,
		    "description": "x3",
		    "order": 155,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 12-1'].bought;}
		  },
		  "Tier 12-3": {
		    "price": 7.0e+15,
		    "description": "x4",
		    "order": 156,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 12-2'].bought;}
		  },
		  "Tier 12-4": {
		    "price": 7.0e+17,
		    "description": "x5",
		    "order": 157,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 12-3'].bought;}
		  },
		  "Tier 12-5": {
		    "price": 7.0e+19,
		    "description": "x6",
		    "order": 158,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 12-4'].bought;}
		  },
		  "Tier 12-6": {
		    "price": 7.0e+21,
		    "description": "x7",
		    "order": 159,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 12-5'].bought;}
		  },
		  "Tier 12-7": {
		    "price": 7.0e+24,
		    "description": "x8",
		    "order": 160,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 12-6'].bought;}
		  },
		  "Tier 12-8": {
		    "price": 7.0e+27,
		    "description": "x9",
		    "order": 161,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 12-7'].bought;}
		  },
		  "Tier 13-1": {
		    "price": 1.7e+15,
		    "description": "x2",
		    "order": 168,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 13'].level > 0;}
		  },
		  "Tier 13-2": {
		    "price": 8.5e+15,
		    "description": "x3",
		    "order": 169,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 13-1'].bought;}
		  },
		  "Tier 13-3": {
		    "price": 8.5e+16,
		    "description": "x4",
		    "order": 170,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 13-2'].bought;}
		  },
		  "Tier 13-4": {
		    "price": 8.5e+18,
		    "description": "x5",
		    "order": 171,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 13-3'].bought;}
		  },
		  "Tier 13-5": {
		    "price": 8.5e+20,
		    "description": "x6",
		    "order": 172,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 13-4'].bought;}
		  },
		  "Tier 13-6": {
		    "price": 8.5e+22,
		    "description": "x7",
		    "order": 173,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 13-5'].bought;}
		  },
		  "Tier 13-7": {
		    "price": 8.5e+25,
		    "description": "x8",
		    "order": 174,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 13-6'].bought;}
		  },
		  "Tier 13-8": {
		    "price": 8.5e+28,
		    "description": "x9",
		    "order": 175,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 13-7'].bought;}
		  },
		  "Tier 14-1": {
		    "price": 2.1e+16,
		    "description": "x2",
		    "order": 182,
		    "apply": function (resource) {return resource * 2;},
		    "visible": function () {return $scope.player.data.unlocks.upgrade && $scope.player.data.elements[$scope.current_element].generators['Tier 14'].level > 0;}
		  },
		  "Tier 14-2": {
		    "price": 1.05e+17,
		    "description": "x3",
		    "order": 183,
		    "apply": function (resource) {return resource * 3;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 14-1'].bought;}
		  },
		  "Tier 14-3": {
		    "price": 1.05e+18,
		    "description": "x4",
		    "order": 184,
		    "apply": function (resource) {return resource * 4;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 14-2'].bought;}
		  },
		  "Tier 14-4": {
		    "price": 1.05e+20,
		    "description": "x5",
		    "order": 185,
		    "apply": function (resource) {return resource * 5;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 14-3'].bought;}
		  },
		  "Tier 14-5": {
		    "price": 1.05e+22,
		    "description": "x6",
		    "order": 186,
		    "apply": function (resource) {return resource * 6;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 14-4'].bought;}
		  },
		  "Tier 14-6": {
		    "price": 1.05e+24,
		    "description": "x7",
		    "order": 187,
		    "apply": function (resource) {return resource * 7;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 14-5'].bought;}
		  },
		  "Tier 14-7": {
		    "price": 1.05e+27,
		    "description": "x8",
		    "order": 188,
		    "apply": function (resource) {return resource * 8;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 14-6'].bought;}
		  },
		  "Tier 14-8": {
		    "price": 1.05e+30,
		    "description": "x9",
		    "order": 189,
		    "apply": function (resource) {return resource * 9;},
		    "visible": function () {return $scope.player.data.elements[$scope.current_element].upgrades['Tier 14-7'].bought;}
		  }
		};
  
  var upgradePrice = [ [ 100, 500, 10000, 100000, 10e6, 100e6, 1e9, 10e9 ],
      [ 1000, 5000, 50000, 5e6, 500e6, 50e9, 50e12, 50e15 ],
      [ 10000, 55000, 550000, 55e6, 5.5e9, 550e9, 550e12, 550e15 ],
      [ 120000, 600000, 6e6, 600e6, 60e9, 6e12, 6e15, 6e18 ],
      [ 1.3e6, 6.5e6, 65e6, 6.5e9, 650e9, 65e12, 65e15, 65e18 ],
      [ 14e6, 70e6, 700e6, 70e9, 7e12, 700e12, 700e15, 700e18 ],
      [ 200e6, 1e9, 10e9, 1e12, 100e12, 10e15, 10e18, 10e21 ],
      [ 3.3e9, 16.5e9, 165e9, 16.5e12, 1.65e15, 165e15, 165e18, 165e21 ],
      [ 51e9, 255e9, 2.55e12, 255e12, 25.5e15, 2.55e18, 2.55e21, 2.55e24 ],
      [ 750e9, 3.75e12, 37.5e12, 3.75e15, 375e15, 37.5e18, 37.5e21, 37.5e24 ],
      [ 10e12, 50e12, 500e12, 50e15, 5e18, 500e18, 500e21, 500e24 ],
      [ 140e12, 700e12, 7e15, 700e15, 70e18, 7e21, 7e24, 7e27 ],
      [ 1.7e15, 8.5e15, 85e15, 8.5e18, 850e18, 85e21, 85e24, 85e27 ],
      [ 21e15, 105e15, 1.05e18, 105e18, 10.5e21, 1.05e24, 1.05e27, 1.05e30 ] ];
  var upgradePower = [ [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ],
      [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ],
      [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ],
      [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ], [ 2, 3, 4, 5, 6, 7, 8, 9 ] ];

  $scope.resources = {
    'H' : {
      visible : function () {
        return $scope.current_element === "H" && $scope.current_tab == "Elements";
      },
      order : 0,
      ratio : 0.999884,
      type : 'element'
    },
    'H-' : {
      visible : function () {
        return $scope.current_element === "H" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['H-'].unlocked;
      },
      order : 1,
      html : 'H<sup>-</sup>',
      type : 'ion',
      charge : +1
    },
    '2H' : {
      visible : function () {
        return $scope.current_element === "H" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['2H'].unlocked;
      },
      order : 2,
      ratio : 0.000115,
      html : '<sup>2</sup>H',
      type : 'isotope'
    },
    '3H' : {
      visible : function () {
        return $scope.current_element === "H" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['3H'].unlocked;
      },
      order : 4,
      ratio : 0.000001,
      html : '<sup>3</sup>H',
      type : 'isotope',
      decay : {
        half_life : 3.8852e+8,
        decay_type : 'beta-',
        decay_product : {
          '3He+1' : 1,
          'e-' : 1,
          'eV' : 18610
        }
      }
    },
    'H2' : {
      visible : function () {
        return $scope.current_element === "H" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources.H2.unlocked;
      },
      order : 5,
      html : 'H<sub>2</sub>',
      type : 'allotrope'
    },
    'He' : {
      visible : function () {
        return $scope.current_element === "He" && $scope.current_tab == "Elements";
      },
      order : 100,
      ratio : 0.999998,
      type : 'element',
    },
    '3He' : {
      visible : function () {
        return $scope.current_element === "He" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['3He'].unlocked;
      },
      order : 101,
      ratio : 0.000002,
      html : '<sup>3</sup>He',
      type : 'isotope',
    },
    '3He+1' : {
      visible : function () {
        return $scope.current_element === "He" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['3He+1'].unlocked;
      },
      order : 102,
      html : '<sup>3</sup>He<sup>+</sup>',
      type : [ 'isotope', 'ion' ]
    },
    'Li' : {
      visible : function () {
        return $scope.current_element === "Li" && $scope.current_tab == "Elements";
      },
      order : 200,
      ratio : 0.95,
      type : 'element',
    },
    '7Li' : {
      visible : function () {
        return $scope.current_element === "Li" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['7Li'].unlocked;
      },
      order : 201,
      ratio : 0.05,
      html : '<sup>7</sup>Li',
      type : 'isotope',
    },
    'Be' : {
      visible : function () {
        return $scope.current_element === "Be" && $scope.current_tab == "Elements";
      },
      order : 300,
      ratio : 0.999998,
      type : 'element',
    },
    '7Be' : {
      visible : function () {
        return $scope.current_element === "Be" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['7Be'].unlocked;
      },
      order : 310,
      ratio : 0.000001,
      html : '<sup>7</sup>Be',
      type : 'isotope',
      decay : {
        half_life : 4589568,
        decay_type : 'electron-capture',
        decay_product : {
          '7Li' : 1,
          'eV' : 862000
        }
      }
    },
    '10Be' : {
      visible : function () {
        return $scope.current_element === "Be" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['10Be'].unlocked;
      },
      order : 320,
      ratio : 0.000001,
      type : 'isotope',
      html : '<sup>10</sup>Be',
      decay : {
        half_life : 4.2917e+14,
        decay_type : 'beta-',
        decay_product : {
          '10B' : 1,
          'e-' : 1,
          'eV' : 556000
        }
      }
    },
    'B' : {
      visible : function () {
        return $scope.current_element === "B" && $scope.current_tab == "Elements";
      },
      order : 400,
      ratio : 0.2,
      type : 'element',
    },
    '11B' : {
      visible : function () {
        return $scope.current_element === "B" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['11B'].unlocked;
      },
      order : 410,
      ratio : 0.8,
      html : '<sup>11</sup>B',
      type : 'isotope',
    },
    'C' : {
      visible : function () {
        return $scope.current_element === "C" && $scope.current_tab == "Elements";
      },
      order : 500,
      ratio : 0.988998,
      type : 'element',
    },
    '11C' : {
      visible : function () {
        return $scope.current_element === "C" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['11C'].unlocked;
      },
      order : 510,
      ratio : 0.000001,
      html : '<sup>11</sup>C',
      type : 'isotope',
      decay : {
        half_life : 1200,
        decay_type : 'beta+',
        decay_product : {
          '11B' : 1,
          'e+' : 1,
          'eV' : 96000
        }
      }
    },
    '13C' : {
      visible : function () {
        return $scope.current_element === "C" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['13C'].unlocked;
      },
      order : 520,
      ratio : 0.011,
      html : '<sup>13</sup>C',
      type : 'isotope',
    },
    '14C' : {
      visible : function () {
        return $scope.current_element === "C" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['14C'].unlocked;
      },
      order : 530,
      ratio : 0.000001,
      html : '<sup>14</sup>C',
      type : 'isotope',
      decay : {
        half_life : 1.807e+11,
        decay_type : 'beta-',
        decay_product : {
          '14N' : 1,
          'e-' : 1,
          'eV' : 156000
        }
      }
    },
    'N' : {
      visible : function () {
        return $scope.current_element === "N" && $scope.current_tab == "Elements";
      },
      order : 600,
      ratio : 0.959999,
      type : 'element',
    },
    '13N' : {
      visible : function () {
        return $scope.current_element === "N" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['13N'].unlocked;
      },
      order : 610,
      ratio : 0.000001,
      html : '<sup>13</sup>N',
      type : 'isotope',
      decay : {
        half_life : 598,
        decay_type : 'electron-capture',
        decay_product : {
          '13C' : 1,
          'eV' : 2220000
        }
      }
    },
    '15N' : {
      visible : function () {
        return $scope.current_element === "N" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['15N'].unlocked;
      },
      order : 620,
      ratio : 0.04,
      html : '<sup>15</sup>N',
      type : 'isotope',
    },
    'O' : {
      visible : function () {
        return $scope.current_element === "O" && $scope.current_tab == "Elements";
      },
      order : 700,
      ratio : 0.9976,
      type : 'element'
    },
    'O2' : {
      visible : function () {
        return $scope.current_element === "O" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources.O2.unlocked;
      },
      order : 701,
      html : 'O<sub>2</sub>',
      type : 'molecule',
    },
    'O3' : {
      visible : function () {
        return $scope.current_element === "O" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources.O3.unlocked;
      },
      order : 702,
      html : 'O<sub>3</sub>',
      type : 'molecule'
    },
    '17O' : {
      visible : function () {
        return $scope.current_element === "O" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['17O'].unlocked;
      },
      order : 710,
      ratio : 0.00039,
      html : '<sup>17</sup>O',
      type : 'isotope'
    },
    '18O' : {
      visible : function () {
        return $scope.current_element === "O" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['18O'].unlocked;
      },
      order : 720,
      ratio : 0.00201,
      html : '<sup>18</sup>O',
      type : 'isotope'
    },
    'H2O' : {
      visible : function () {
        return ($scope.current_element === "H" || $scope.current_element === "O") &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources.H2O.unlocked;
      },
      html : 'H<sub>2</sub>O',
      type : 'molecule'
    },
    'F' : {
      visible : function () {
        return $scope.current_element === "F" && $scope.current_tab == "Elements";
      },
      order : 800,
      ratio : 0.999998,
      type : 'element',
    },
    '18F' : {
      visible : function () {
        return $scope.current_element === "F" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['18F'].unlocked;
      },
      order : 810,
      ratio : 0.000001,
      html : '<sup>18</sup>F',
      type : 'isotope',
      decay : {
        half_life : 6586,
        decay_type : 'beta+',
        decay_product : {
          '18O' : 1,
          'e+' : 1,
          'eV' : 634000
        }
      }
    },
    'Ne' : {
      visible : function () {
        return $scope.current_element === "Ne" && $scope.current_tab == "Elements";
      },
      order : 900,
      ratio : 0.9048,
      type : 'element',
    },
    '21Ne' : {
      visible : function () {
        return $scope.current_element === "Ne" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['21Ne'].unlocked;
      },
      order : 910,
      ratio : 0.0027,
      html : '<sup>21</sup>Ne',
      type : 'isotope',
    },
    '22Ne' : {
      visible : function () {
        return $scope.current_element === "Ne" &&
               $scope.current_tab == "Elements" &&
               $scope.player.data.resources['22Ne'].unlocked;
      },
      order : 920,
      ratio : 0.0925,
      html : '<sup>22</sup>Ne',
      type : 'isotope',
    },
    'e-' : {
      visible : function () {
        return $scope.player.data.resources['e-'].unlocked;
      },
      order : 20000,
      type : 'subatomic'
    },
    'n' : {
      visible : function () {
        return $scope.player.data.resources.n.unlocked;
      },
      order : 20001,
      type : 'subatomic'
    },
    'p' : {
      visible : function () {
        return $scope.player.data.resources.p.unlocked;
      },
      order : 20002,
      type : 'subatomic'
    },
    'eV' : {
      visible : function () {
        return $scope.player.data.resources.eV.unlocked;
      },
      order : 20003,
      type : 'eV'
    }
  };

  $scope.radioisotopes = [ '3H' ];// ,'7Be','10Be','11C','14C','13N','18F'];

  $scope.tabs = {
    'Elements' : {
      visible : function () {
        return true;
      },
      has_new : function () {
        for ( var key in $scope.elements) {
          if ($scope.player.data.elements[key] !== undefined &&
              $scope.player.data.elements[key].unlocked &&
              $scope.elements[key].has_new()) {
            return true;
          }
        }
        var other = [ 'e-', 'n', 'p', 'eV' ];
        for ( var key in other) {
          if ($scope.player.data.resources[other[key]].unlocked && $scope.player.data.resources[other[key]].is_new) {
            return true;
          }
        }
        return false;
      },
      order : 0
    },
    'Encyclopedia' : {
      visible : function () {
        return $scope.player.data.intro.content;
      },
      has_new : function () {
        for ( var key in $scope.player.data.encyclopedia) {
          if ($scope.encyclopedia[key].visible() && $scope.player.data.encyclopedia[key].is_new) {
            return true;
          }
        }

        return false;
      },
      order : 1
    },
    'Periodic Table' : {
      visible : function () {
        return $scope.player.data.unlocks.periodic_table;
      },
      has_new : function () {
        return false;
      },
      order : 2
    },
    'Options' : {
      visible : function () {
        return $scope.player.data.intro.content;
      },
      has_new : function () {
        return false;
      },
      order : 3
    }
  };

  $scope.encyclopedia = {
    'Hydrogen' : {
      visible : function () {
        return true;
      },
      order : 1,
      link : 'https://en.wikipedia.org/wiki/Hydrogen',
      description : '<b>Hydrogen</b> is a chemical element with chemical symbol <b>H</b> and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass. Non-remnant stars are mainly composed of hydrogen in its plasma state. The most common isotope of hydrogen, termed protium, has one proton and no neutrons.'
    },
    'Helium' : {
      visible : function () {
        return $scope.player.data.unlocks.helium;
      },
      order : 2,
      link : 'https://en.wikipedia.org/wiki/Helium',
      description : '<b>Helium</b> is a chemical element with symbol <b>He</b> and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table. After hydrogen, helium is the second lightest and second most abundant element in the observable universe, being present at about 24% of the total elemental mass. Most helium in the universe is helium-4, and is believed to have been formed during the Big Bang. Large amounts of new helium are being created by nuclear fusion of hydrogen in stars.'
    },
    'Lithium' : {
      visible : function () {
        return $scope.player.data.unlocks.lithium;
      },
      order : 3,
      link : 'https://en.wikipedia.org/wiki/Lithium',
      description : '<b>Lithium</b> (from Greek: λίθος lithos, "stone") is a chemical element with the symbol <b>Li</b> and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group. Lithium is highly reactive and flammable, and therefore appears in nature only in compounds. The nucleus of the lithium atom verges on instability, having among the lowest binding energies per nucleon. The transmutation of lithium atoms to helium in 1932 was the first fully man-made nuclear reaction, and lithium-6 deuteride serves as a fusion fuel in staged thermonuclear weapons. Lithium and its compounds have several industrial applications, including heat-resistant glass and ceramics, lithium and lithium-ion batteries.'
    },
    'Beryllium' : {
      visible : function () {
        return $scope.player.data.unlocks.beryllium;
      },
      order : 4,
      link : 'https://en.wikipedia.org/wiki/Beryllium',
      description : 'Beryllium is a chemical element with symbol Be and atomic number 4. It is a relatively rare element in the universe belonging to the alkaline earth metal group. Within the cores of stars beryllium is depleted as it is fused and creates larger elements. It is a divalent element which occurs naturally only in combination with other elements. Beryllium improves many physical properties when added as an alloying element to aluminium, copper, iron and nickel. The combination of high flexural rigidity, thermal stability, thermal conductivity and low density make beryllium metal a desirable aerospace material. The high thermal conductivities of beryllium and beryllium oxide have led to their use in thermal management applications. The commercial use of beryllium requires the use of appropriate dust control equipment and industrial controls at all times because of the toxicity of inhaled beryllium dusts.'
    },
    'Boron' : {
      visible : function () {
        return $scope.player.data.unlocks.boron;
      },
      order : 5,
      link : 'https://en.wikipedia.org/wiki/Boron',
      description : 'Boron is a chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in the Solar system. The primary use of elemental boron is as boron filaments with applications similar to carbon fibers in some high-strength materials. Boron compounds are used as fertilizers in agriculture and in sodium perborate bleaches. In biology, borates have low toxicity in mammals (similar to table salt), but are more toxic to arthropods and are used as insecticides. Boric acid is mildly antimicrobial, and several natural boron-containing organic antibiotics are known. Boron is essential to life. Small amounts of boron compounds play a strengthening role in the cell walls of all plants, making boron a necessary plant nutrient. Boron is involved in the metabolism of calcium in both plants and animals. It is considered an essential nutrient for humans, and boron deficiency is implicated in osteoporosis.'
    },
    'Carbon' : {
      visible : function () {
        return $scope.player.data.unlocks.carbon;
      },
      order : 6,
      link : 'https://en.wikipedia.org/wiki/Carbon',
      description : 'Carbon (from Latin: carbo "coal") is a chemical element with symbol C and atomic number 6. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds.  Carbon is the fourth most abundant element in the universe by mass. Carbon\'s abundance, its unique diversity of organic compounds, and its unusual ability to form polymers at the temperatures commonly encountered on Earth enables this element to serve as a common element of all known life. It is the second most abundant element in the human body by mass (about 18.5%) after oxygen. The atoms of carbon can be bonded together in different ways, termed allotropes of carbon. The best known are graphite, diamond, and amorphous carbon. The physical properties of carbon vary widely with the allotropic form. For example, graphite is opaque and black while diamond is highly transparent. Graphite is soft enough to form a streak on paper, while diamond is the hardest naturally-occurring material known. Graphite is a good electrical conductor while diamond has a low electrical conductivity. Under normal conditions, diamond, carbon nanotubes, and graphene have the highest thermal conductivities of all known materials. They are chemically resistant and require high temperature to react even with oxygen. Carbon forms a vast number of compounds, more than any other element, with almost ten million compounds described to date.'
    },
    'Nitrogen' : {
      visible : function () {
        return $scope.player.data.unlocks.nitrogen;
      },
      order : 7,
      link : 'https://en.wikipedia.org/wiki/Nitrogen',
      description : 'Nitrogen is a chemical element with symbol N and atomic number 7. Nitrogen is a common element in the universe, estimated at about seventh in total abundance. On Earth, the element forms about 78% of Earth\'s atmosphere. Many industrially important compounds, such as ammonia, nitric acid, organic nitrates (propellants and explosives), and cyanides, contain nitrogen. Synthetically produced ammonia and nitrates are key industrial fertilizers, and fertilizer nitrates are key pollutants in the eutrophication of water systems. Apart from its use in fertilizers and energy-stores, nitrogen is a constituent of organic compounds as diverse as Kevlar fabric and cyanoacrylate "super" glue. Nitrogen is a constituent of every major pharmacological drug class, including antibiotics. Nitrogen occurs in all organisms, primarily in amino acids (and thus proteins), in the nucleic acids (DNA and RNA) and in the energy transfer molecule adenosine triphosphate. The human body contains about 3% by mass of nitrogen, the fourth most abundant element in the body.'
    },
    'Oxygen' : {
      visible : function () {
        return $scope.player.data.unlocks.oxygen;
      },
      order : 8,
      link : 'https://en.wikipedia.org/wiki/Oxygen',
      description : '<b>Oxygen</b> is a chemical element with symbol <b>O</b> and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium. At standard temperature and pressure, two atoms of the element bind to form dioxygen, a colorless and odorless diatomic gas with the formula O<sub>2</sub>. Diatomic oxygen gas constitutes 20.8% of the Earth\'s atmosphere. Oxygen is the most abundant element by mass in the Earth\'s crust as part of oxide compounds such as silicon dioxide, making up almost half of the crust\'s mass.'
    },
    'Fluorine' : {
      visible : function () {
        return $scope.player.data.unlocks.fluorine;
      },
      order : 9,
      link : 'https://en.wikipedia.org/wiki/Fluorine',
      description : 'Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive: almost all other elements, including some noble gases, form compounds with fluorine. Owing to the expense of refining pure fluorine, most commercial applications use fluorine compounds, with about half of mined fluorite used in steelmaking. The rest of the fluorite is converted into corrosive hydrogen fluoride en route to various organic fluorides, or into cryolite which plays a key role in aluminium refining. Organic fluorides have very high chemical and thermal stability; their major uses are as refrigerants, electrical insulation and cookware (Teflon). The fluoride ion inhibits dental cavities, and so finds use in toothpaste and water fluoridation.'
    },
    'Neon' : {
      visible : function () {
        return $scope.player.data.unlocks.neon;
      },
      order : 10,
      link : 'https://en.wikipedia.org/wiki/Neon',
      description : 'Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions. Neon is chemically inert and forms no uncharged chemical compounds. During cosmic nucleogenesis of the elements, large amounts of neon are built up from the alpha-capture fusion process in stars. Although neon is a very common element in the universe and solar system, it is very rare on Earth. The reason for neon\'s relative scarcity on Earth is that neon is highly volatile and forms no compounds to fix it to solids. Neon gives a distinct reddish-orange glow low-voltage neon glow lamps and in high-voltage discharge tubes and neon advertising signs.[ The red emission line from neon also causes the well known red light of helium–neon lasers. Neon is used in some plasma tube and refrigerant applications but has few other commercial uses.'
    },
    'Isotope' : {
      visible : function () {
        return $scope.player.data.unlocks.isotope;
      },
      order : 200,
      link : 'https://en.wikipedia.org/wiki/Isotope',
      description : '<b>Isotopes</b> are variants of a particular chemical element which differ in neutron number, although all isotopes of a given element have the same number of protons in each atom. The term isotope is formed from the Greek roots isos (ἴσος "equal") and topos (τόπος "place"), meaning "the same place"; thus, the meaning behind the name it is that different isotopes of a single element occupy the same position on the periodic table. The number of protons within the atom\'s nucleus is called atomic number and is equal to the number of electrons in the neutral (non-ionized) atom. Each atomic number identifies a specific element, but not the isotope; an atom of a given element may have a wide range in its number of neutrons. The number of nucleons (both protons and neutrons) in the nucleus is the atom\'s mass number, and each isotope of a given element has a different mass number.'
    },
    'Electron' : {
      visible : function () {
        return $scope.player.data.unlocks.electron;
      },
      order : 201,
      link : 'https://en.wikipedia.org/wiki/Electron',
      description : 'The <b>electron</b> is a subatomic particle, symbol e−, with a negative elementary electric charge. Electrons belong to the first generation of the lepton particle family, and are generally thought to be elementary particles because they have no known components or substructure. The electron has a mass that is approximately 1/1836 that of the proton. Quantum mechanical properties of the electron include an intrinsic angular momentum (spin) of a half-integer value in units of ħ, which means that it is a fermion. Being fermions, no two electrons can occupy the same quantum state, in accordance with the Pauli exclusion principle.'
    },
    'Proton' : {
      visible : function () {
        return $scope.player.data.unlocks.proton;
      },
      order : 202,
      link : 'https://en.wikipedia.org/wiki/Proton',
      description : 'The <b>proton</b> is a subatomic particle, symbol p, with a positive electric charge of +1e elementary charge and mass slightly less than that of a neutron. Protons and neutrons, each with mass approximately one atomic mass unit, are collectively referred to as "nucleons". One or more protons are present in the nucleus of every atom. The number of protons in the nucleus is the defining property of an element, and is referred to as the atomic number. Since each element has a unique number of protons, each element has its own unique atomic number.'
    },
    'Neutron' : {
      visible : function () {
        return $scope.player.data.unlocks.neutron;
      },
      order : 203,
      link : 'https://en.wikipedia.org/wiki/Neutron',
      description : 'The <b>neutron</b> is a subatomic particle, symbol n, with no net electric charge and a mass slightly larger than that of a proton. Protons and neutrons, each with mass approximately one atomic mass unit, constitute the nucleus of an atom, and they are collectively referred to as nucleons. Their properties and interactions are described by nuclear physics.<br>Within the nucleus, protons and neutrons are bound together through the nuclear force, and neutrons are required for the stability of nuclei. Neutrons are produced copiously in nuclear fission and fusion. They are a primary contributor to the nucleosynthesis of chemical elements within stars through fission, fusion, and neutron capture processes.'
    },
    'Radioactivity' : {
      visible : function () {
        return $scope.player.data.unlocks.radioactivity;
      },
      order : 204,
      link : 'https://en.wikipedia.org/wiki/Radioactive_decay',
      description : '<b>Radioactive decay</b>, also known as <b>nuclear decay</b> or <b>radioactivity</b>, is the process by which a nucleus of an unstable atom loses energy by emitting <b>radiation</b>. A material that spontaneously emits such radiation — which includes alpha particles, beta particles, gamma rays and conversion electrons — is considered radioactive.<br>Radioactive decay is a stochastic (i.e. random) process at the level of single atoms, in that, according to quantum theory, it is impossible to predict when a particular atom will decay. The chance that a given atom will decay never changes, that is, it does not matter how long the atom has existed. For a large collection of atoms however, the decay rate for that collection can be calculated from their measured decay constants or half-lives.<BR>There are many different types of radioactive decay. A decay, or loss of energy from the nucleus, results when an atom with one type of nucleus, called the parent radionuclide (or parent radioisotope), transforms into an atom with a nucleus in a different state, or with a nucleus containing a different number of protons and neutrons. The product is called the daughter nuclide. In some decays, the parent and the daughter nuclides are different chemical elements, and thus the decay process results in the creation of an atom of a different element. This is known as a nuclear transmutation.'
    },
    'Half-life' : {
      visible : function () {
        return $scope.player.data.unlocks.half_life;
      },
      order : 205,
      link : 'https://en.wikipedia.org/wiki/Half-life',
      description : '<b>Half-life</b> (t<sub>1/2</sub>) is the amount of time required for the amount of something to fall to half its initial value. The term is very commonly used in nuclear physics to describe how quickly unstable atoms undergo radioactive decay, but it is also used more generally for discussing any type of exponential decay. <br>Half-life is used to describe a quantity undergoing exponential decay, and is constant over the lifetime of the decaying quantity. It is a characteristic unit for the exponential decay equation. The term "half-life" may generically be used to refer to any period of time in which a quantity falls by half, even if the decay is not exponential.'
    },
    'Beta decay' : {
      visible : function () {
        return $scope.player.data.unlocks.beta_decay;
      },
      order : 206,
      link : 'https://en.wikipedia.org/wiki/Beta_decay',
      description : 'In nuclear physics, <b>beta decay</b> (β-decay) is a type of radioactive decay in which a proton is transformed into a neutron, or vice versa, inside an atomic nucleus. This process allows the atom to move closer to the optimal ratio of protons and neutrons. As a result of this transformation, the nucleus emits a detectable beta particle, which is an electron or positron.<br>Beta decay is mediated by the weak force. There are two types of beta decay, known as beta minus and beta plus. In beta minus (β−) decay a neutron is lost and a proton appears and the process produces an electron and electron antineutrino, while in beta plus (β+) decay a proton is lost and a neutron appears and the process produces a positron and electron neutrino; β+ decay is thus also known as positron emission.'
    },
    'Energy' : {
      visible : function () {
        return $scope.player.data.unlocks.energy;
      },
      order : 207,
      link : 'https://en.wikipedia.org/wiki/Energy',
      description : 'In physics, <b>energy</b> is a property of objects which can be transferred to other objects or converted into different forms, but cannot be created or destroyed. The "ability of a system to perform work" is a common description, but it is difficult to give one single comprehensive definition of energy because of its many forms. <br>Common energy forms include the kinetic energy of a moving object, the potential energy stored by an object\'s position in a force field (gravitational, electric or magnetic), the elastic energy stored by stretching solid objects, the chemical energy released when a fuel burns, the radiant energy carried by light, and the thermal energy due to an object\'s temperature. All of the many forms of energy are convertible to other kinds of energy, and obey the law of conservation of energy which says that energy can be neither created nor be destroyed; however, it can change from one form to another.'
    },
    'Electronvolt' : {
      visible : function () {
        return $scope.player.data.unlocks.energy;
      },
      order : 208,
      link : 'https://en.wikipedia.org/wiki/Electronvolt',
      description : 'In physics, the <b>electronvolt</b> (symbol <b>eV</b>; also written <b>electron volt</b>) is a unit of energy equal to approximately 160 zeptojoules (symbol zJ) or 1.6 × 10<sup>−19</sup> joules (symbol J). By definition, it is the amount of energy gained (or lost) by the charge of a single electron moving across an electric potential difference of one volt. <br>The electron volt is not an SI unit, and its definition is empirical, thus its value in SI units must be obtained experimentally.'
    },
    'Ionization energy' : {
      visible : function () {
        return $scope.player.data.unlocks.ionization_energy;
      },
      order : 209,
      link : 'https://en.wikipedia.org/wiki/Ionization_energy',
      description : 'The <b>ionization energy</b> is qualitatively defined as the amount of energy required to remove the most loosely bound electron of an isolated gaseous atom to form a cation.'
    },
    'Electron affinity' : {
      visible : function () {
        return $scope.player.data.unlocks.electron_affinity;
      },
      order : 210,
      link : 'https://en.wikipedia.org/wiki/Electron_affinity',
      description : 'In chemistry and atomic physics, the <b>electron affinity</b> of an atom or molecule is defined as the amount of energy released when an electron is added to a neutral atom or molecule in the gaseous state to form a negative ion.'
    },
    'Nuclear binding energy' : {
      visible : function () {
        return $scope.player.data.unlocks.nuclear_binding_energy;
      },
      order : 211,
      link : 'https://en.wikipedia.org/wiki/Nuclear_binding_energy',
      description : '<b>Nuclear binding energy</b> is the energy that would be required to disassemble the nucleus of an atom into its component parts. These component parts are neutrons and protons, which are collectively called nucleons. The binding energy of nuclei is due to the attractive forces that hold these nucleons together and this is usually a positive number, since most nuclei would require the expenditure of energy to separate them into individual protons and neutrons. The mass of an atomic nucleus is usually less than the sum of the individual masses of the constituent protons and neutrons (according to Einstein\'s equation E=mc<sup>2</sup>) and this \'missing mass\' is known as the mass defect, and represents the energy that was released when the nucleus was formed.'
    },
    'Synthesis' : {
      visible : function () {
        return $scope.player.data.unlocks.synthesis;
      },
      order : 212,
      link : 'https://en.wikipedia.org/wiki/Chemical_synthesis',
      description : '<b>Chemical synthesis</b> is a purposeful execution of chemical reactions to obtain a product, or several products. This happens by physical and chemical manipulations usually involving one or more reactions.<br>A chemical synthesis begins by selection of compounds that are known as reagents or reactants. Various reaction types can be applied to these to synthesize the product.'
    },
    'Ion' : {
      visible : function () {
        return $scope.player.data.unlocks.ion;
      },
      order : 213,
      link : 'https://en.wikipedia.org/wiki/Ion',
      description : 'An <b>ion</b> (/ˈaɪən, -ɒn/) is an atom or a molecule in which the total number of electrons is not equal to the total number of protons, giving the atom or molecule a net positive or negative electrical charge. Ions can be created, by either chemical or physical means, via ionization.<br>In chemical terms, if a neutral atom loses one or more electrons, it has a net positive charge and is known as a cation.<br>If an atom gains electrons, it has a net negative charge and is known as an anion.'
    },
    'Molecule' : {
      visible : function () {
        return $scope.player.data.unlocks.molecule;
      },
      order : 214,
      link : 'https://en.wikipedia.org/wiki/Molecule',
      description : 'A <b>molecule</b> (/ˈmɒlɪkjuːl/ from Latin moles "mass") is an electrically neutral group of two or more atoms held together by chemical bonds. Molecules are distinguished from ions by their lack of electrical charge.<br>A molecule may be homonuclear, that is, it consists of atoms of a single chemical element, or it may be heteronuclear, a chemical compound composed of more than one element. Atoms and complexes connected by non-covalent bonds such as hydrogen bonds or ionic bonds are generally not considered single molecules.'
    },
    'Allotrope' : {
      visible : function () {
        return $scope.player.data.unlocks.allotrope;
      },
      order : 216,
      link : 'https://en.wikipedia.org/wiki/Allotropy',
      description : '<b>Allotropy</b> or <b>allotropism</b> (from Greek ἄλλος (allos), meaning "other", and τρόπος (tropos), meaning "manner, form") is the property of some chemical elements to exist in two or more different forms, in the same physical state, known as allotropes of these elements. Allotropes are different structural modifications of an element; the atoms of the element are bonded together in a different manner. '
    }
  };

  $scope.reactions = {
    'H' : {
      'ionization' : {
        1 : {
          reactant : {
            'eV' : 13.5984,
            'H' : 1
          },
          product : {
            'p' : 1,
            'e-' : 1
          },
          visible : function () {
            return $scope.player.data.unlocks.ionization_energy;
          }
        }
      },
      'electron_affinity' : {
        1 : {
          reactant : {
            'e-' : 1,
            'H' : 1
          },
          product : {
            'H-' : 1,
            'eV' : 0.7545
          },
          visible : function () {
            return $scope.player.data.unlocks.electron_affinity;
          }
        }
      },
      'binding_energy' : {
        1 : {
          reactant : {
            'eV' : 2224520,
            '2H' : 1
          },
          product : {
            'p' : 1,
            'n' : 1,
            'e-' : 1
          },
          visible : function () {
            return $scope.player.data.unlocks.nuclear_binding_energy && $scope.player.data.resources['2H'].unlocked;
          }
        },
        2 : {
          reactant : {
            'eV' : 2827266,
            '3H' : 1
          },
          product : {
            'p' : 1,
            'n' : 2,
            'e-' : 1
          },
          visible : function () {
            return $scope.player.data.unlocks.nuclear_binding_energy && $scope.player.data.resources['3H'].unlocked;
          }
        }
      },
      // We could create a function that checks for every synthesis if
      // one of the reactants is an isotope, ion or molecule of the element
      // However for the sake of a proof of concept that is beyond our scope
      'synthesis' : [ 'H-p', 'H2O' ]
    },
    'O' : {
      'ionization' : {},
      'electron_affinity' : {},
      'binding_energy' : {
        1 : {
          reactant : {
            'eV' : 128030000,
            'O' : 1
          },
          product : {
            'p' : 8,
            'n' : 8,
            'e-' : 8
          },
          visible : function () {
            return $scope.player.data.unlocks.nuclear_binding_energy && $scope.player.data.resources.O.unlocked;
          }
        },
        2 : {
          reactant : {
            'eV' : 131750000,
            '17O' : 1
          },
          product : {
            'p' : 8,
            'n' : 9,
            'e-' : 8
          },
          visible : function () {
            return $scope.player.data.unlocks.nuclear_binding_energy && $scope.player.data.resources['17O'].unlocked;
          }
        },
        3 : {
          reactant : {
            'eV' : 141170000,
            '18O' : 1
          },
          product : {
            'p' : 8,
            'n' : 10,
            'e-' : 8
          },
          visible : function () {
            return $scope.player.data.unlocks.nuclear_binding_energy && $scope.player.data.resources['18O'].unlocked;
          }
        }
      },
      'synthesis' : [ 'O3', 'O2-OO', 'H2O', 'O2O2-O3O' ]
    }
  };

  $scope.synthesis = {
    'H-p' : {
      reactant : {
        'H-' : 1,
        'p' : 1
      },
      product : {
        'H2' : 1,
        'eV' : 17.3705
      },
      visible : function () {
        return $scope.player.data.unlocks.synthesis &&
               $scope.player.data.resources['H-'].unlocked &&
               $scope.player.data.resources.p.unlocked &&
               $scope.current_element == "H";
      }
    },
    'O3' : {
      reactant : {
        'O3' : 1,
        'eV' : 4.43
      },
      product : {
        'O2' : 1,
        'O' : 1
      },
      visible : function () {
        return $scope.player.data.unlocks.synthesis &&
               $scope.player.data.resources.O3.unlocked &&
               $scope.player.data.resources.eV.unlocked &&
               $scope.current_element == "O";
      }
    },
    'O2-OO' : {
      reactant : {
        'O2' : 1,
        'eV' : 21.4219
      },
      product : {
        'O' : 2
      },
      visible : function () {
        return $scope.player.data.unlocks.synthesis &&
               $scope.player.data.resources.O2.unlocked &&
               $scope.player.data.resources.eV.unlocked &&
               $scope.current_element == "O";
      }
    },
    'O2O2-O3O' : {
      reactant : {
        'O2' : 2,
        'eV' : 18
      },
      product : {
        'O3' : 1,
        'O' : 1
      },
      visible : function () {
        return $scope.player.data.unlocks.synthesis &&
               $scope.player.data.resources.O2.unlocked &&
               $scope.player.data.resources.O3.unlocked &&
               $scope.player.data.resources.eV.unlocked &&
               $scope.current_element == "O";
      }
    },
    'H2O' : {
      reactant : {
        'H2' : 2,
        'O2' : 1
      },
      product : {
        'H2O' : 2,
        'eV' : 5.925
      },
      visible : function () {
        return $scope.player.data.unlocks.synthesis &&
               $scope.player.data.resources.O.number > 1e8 &&
               $scope.player.data.resources.H.number > 1e14 &&
               ($scope.current_element == "H" || $scope.current_element == "O");
      }
    }
  };

  $scope.html = {
    'beta-' : '&#946;<sup>-</sup>',
    'beta+' : '&#946;<sup>+</sup>',
    'electron-capture' : '&#x3B5'
  };

  $scope.unlocks = {
    "hydrogen" : {
      check : function (event, data) {
        // $scope.achievement.addToast("Periodic table");
        $scope.player.data.unlocks.hydrogen = true;
        $scope.unlocks.hydrogen.listener();
      },
      event : "cycle"
    },
    "periodic_table" : {
      check : function (event, data) {
        if ($scope.player.data.resources['e-'].unlocked &&
            $scope.player.data.resources.p.unlocked &&
            $scope.player.data.resources.n.unlocked) {
          $scope.achievement.addToast("Periodic table");
          $scope.player.data.unlocks.periodic_table = true;
          $scope.unlocks.periodic_table.listener();
        }
      },
      event : "cycle"
    },
    "isotope" : {
      check : function (event, data) {
        if ([ '2H', '3H' ].indexOf(data) != -1) {
          $scope.achievement.addToast("Isotope");
          $scope.player.data.unlocks.isotope = true;
          $scope.unlocks.isotope.listener();
        }
      },
      event : "resource"
    },
    "ion" : {
      check : function (event, data) {
        if ("H-" == data) {
          $scope.achievement.addToast("Ion");
          $scope.player.data.unlocks.ion = true;
          $scope.unlocks.ion.listener();
        }
      },
      event : "resource"
    },
    "radioactivity" : {
      check : function (event, data) {
        if ("3H" == data) {
          $scope.achievement.addToast("Radioactivity");
          $scope.player.data.unlocks.radioactivity = true;
          $scope.unlocks.radioactivity.listener();
        }
      },
      event : "resource"
    },
    "allotrope" : {
      check : function (event, data) {
        if ([ 'O2', 'O3' ].indexOf(data) != -1) {
          $scope.achievement.addToast("Allotrope");
          $scope.player.data.unlocks.allotrope = true;
          $scope.unlocks.allotrope.listener();
        }
      },
      event : "resource"
    },
    "reactions" : {
      check : function (event, data) {
        if ("e-" == data) {
          $scope.achievement.addToast("Reactions");
          $scope.player.data.unlocks.reactions = true;
          $scope.unlocks.reactions.listener();
        }
      },
      event : "resource"
    },
    "electron" : {
      check : function (event, data) {
        if ("e-" == data) {
          $scope.achievement.addToast("Electron");
          $scope.player.data.unlocks.electron = true;
          $scope.unlocks.electron.listener();
        }
      },
      event : "resource"
    },
    "proton" : {
      check : function (event, data) {
        if ("p" == data) {
          $scope.achievement.addToast("Proton");
          $scope.player.data.unlocks.proton = true;
          $scope.unlocks.proton.listener();
        }
      },
      event : "resource"
    },
    "neutron" : {
      check : function (event, data) {
        if ("n" == data) {
          $scope.achievement.addToast("Neutron");
          $scope.player.data.unlocks.neutron = true;
          $scope.unlocks.neutron.listener();
        }
      },
      event : "resource"
    },
    "energy" : {
      check : function (event, data) {
        if ("eV" == data) {
          $scope.achievement.addToast("Energy");
          $scope.player.data.unlocks.energy = true;
          $scope.unlocks.energy.listener();
        }
      },
      event : "resource"
    },
    "half_life" : {
      check : function (event, data) {
        if ("3H" == data) {
          $scope.achievement.addToast("Half-life");
          $scope.player.data.unlocks.half_life = true;
          $scope.unlocks.half_life.listener();
        }
      },
      event : "resource"
    },
    "oxygen" : {
      check : function (event, data) {
        if ("O" == data) {
          $scope.achievement.addToast("Oxygen");
          $scope.player.data.unlocks.oxygen = true;
          $scope.unlocks.oxygen.listener();
        }
      },
      event : "element"
    },
    "upgrade" : {
      check : function (event, data) {
        if ("Tier 3" == data) {
          $scope.achievement.addToast("Upgrades");
          $scope.player.data.unlocks.upgrade = true;
          $scope.unlocks.upgrade.listener();
        }
      },
      event : "upgrade"
    },
    "ionization_energy" : {
      check : function (event, data) {
        if ("e-" == data) {
          $scope.achievement.addToast("Ionization energy");
          $scope.player.data.unlocks.ionization_energy = true;
          $scope.unlocks.ionization_energy.listener();
        }
      },
      event : "resource"
    },
    "electron_affinity" : {
      check : function (event, data) {
        if ($scope.player.data.resources['e-'].number >= 10 && $scope.player.data.resources.p.number >= 10) {
          $scope.achievement.addToast("Electron affinity");
          $scope.player.data.unlocks.electron_affinity = true;
          $scope.unlocks.electron_affinity.listener();
        }
      },
      event : "cycle"
    },
    "nuclear_binding_energy" : {
      check : function (event, data) {
        if ($scope.player.data.resources['e-'].number >= 100 && $scope.player.data.resources.p.number >= 100) {
          $scope.achievement.addToast("Nuclear binding energy");
          $scope.player.data.unlocks.nuclear_binding_energy = true;
          $scope.unlocks.nuclear_binding_energy.listener();
        }
      },
      event : "cycle"
    },
    "beta_decay" : {
      check : function (event, data) {
        if ("beta-" == data) {
          $scope.achievement.addToast("Beta decay");
          $scope.player.data.unlocks.beta_decay = true;
          $scope.unlocks.beta_decay.listener();
        }
      },
      event : "decay"
    },
    "molecule" : {
      check : function (event, data) {
        if ("H2" == data || "O2" == data || "O3" == data) {
          $scope.achievement.addToast("Molecule");
          $scope.player.data.unlocks.molecule = true;
          $scope.unlocks.molecule.listener();
        }
      },
      event : "resource"
    },
    "synthesis" : {
      check : function (event, data) {
        if ($scope.player.data.resources['H-'].number >= 10) {
          $scope.achievement.addToast("Synthesis");
          $scope.player.data.unlocks.synthesis = true;
          $scope.unlocks.synthesis.listener();
        }
      },
      event : "cycle"
    },
    "helium" : {
      check : function (event, data) {
        if ("He" == data) {
          $scope.achievement.addToast("Helium");
          $scope.player.data.unlocks.helium = true;
          $scope.unlocks.helium.listener();
        }
      },
      event : "element"
    },
    "lithium" : {
      check : function (event, data) {
        if ("Li" == data) {
          $scope.achievement.addToast("Lithium");
          $scope.player.data.unlocks.lithium = true;
          $scope.unlocks.lithium.listener();
        }
      },
      event : "element"
    },
    "beryllium" : {
      check : function (event, data) {
        if ("Be" == data) {
          $scope.achievement.addToast("Beryllium");
          $scope.player.data.unlocks.beryllium = true;
          $scope.unlocks.beryllium.listener();
        }
      },
      event : "element"
    },
    "boron" : {
      check : function (event, data) {
        if ("B" == data) {
          $scope.achievement.addToast("Boron");
          $scope.player.data.unlocks.boron = true;
          $scope.unlocks.boron.listener();
        }
      },
      event : "element"
    },
    "carbon" : {
      check : function (event, data) {
        if ("C" == data) {
          $scope.achievement.addToast("Carbon");
          $scope.player.data.unlocks.carbon = true;
          $scope.unlocks.carbon.listener();
        }
      },
      event : "element"
    },
    "nitrogen" : {
      check : function (event, data) {
        if ("N" == data) {
          $scope.achievement.addToast("Nitrogen");
          $scope.player.data.unlocks.nitrogen = true;
          $scope.unlocks.nitrogen.listener();
        }
      },
      event : "element"
    },
    "fluorine" : {
      check : function (event, data) {
        if ("F" == data) {
          $scope.achievement.addToast("Fluorine");
          $scope.player.data.unlocks.fluorine = true;
          $scope.unlocks.fluorine.listener();
        }
      },
      event : "element"
    },
    "neon" : {
      check : function (event, data) {
        if ("Ne" == data) {
          $scope.achievement.addToast("Neon");
          $scope.player.data.unlocks.neon = true;
          $scope.unlocks.neon.listener();
        }
      },
      event : "element"
    }
  };

  $scope.periodic_table = [
      [ 'H', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'He' ],
      [ 'Li', 'Be', '', '', '', '', '', '', '', '', '', '', 'B', 'C', 'N', 'O', 'F', 'Ne' ],
      [ 'Na', 'Mg', '', '', '', '', '', '', '', '', '', '', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar' ],
      [ 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr' ],
      [ 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe' ],
      [ 'Cs', 'Ba', '*', 'Hf', 'Ta', 'W', 'Re', 'Os', 'I', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn' ],
      [ 'Fr', 'Ra', '**', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Uut', 'Fl', 'Uup', 'Lv', 'Uus', 'Uuo' ],
      [ '', '', '*', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu' ],
      [ '', '', '**', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr' ] ];
}
