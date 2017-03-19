describe("Visible service", function() {
  var spec = {};

  commonSpec(spec);

  describe('visibility functions', function() {
    it("should show visible elements", function() {
      spec.player.data = {elements:{},resources:{}};
      spec.$scope.elements = {'H':{disabled:false},'C':{disabled:true},'O':{disabled:false}};
      spec.player.data.elements.H = {unlocked:true};
      spec.$scope.elements.H.includes = ['H'];
      spec.player.data.elements.C = {unlocked:false};
      spec.$scope.elements.C.includes = ['C'];
      spec.player.data.elements.O = {unlocked:false};
      spec.$scope.elements.O.includes = ['O'];
      spec.player.data.resources.H = {unlocked:true};
      spec.player.data.resources.C = {unlocked:false};
      spec.player.data.resources.O = {unlocked:false};

      var values = spec.visibility.visibleElements();

      expect(values).toEqual(['H']);
    });

    it("should show visible generators", function() {
      spec.$scope.current_element = 'H';
      spec.player.data = {elements:{}};
      spec.player.data.elements.H = {generators:[]};
      spec.player.data.elements.H.generators['Tier 1'] = {level: 1};
      spec.player.data.elements.H.generators['Tier 2'] = {level: 0};
      spec.player.data.elements.H.generators['Tier 3'] = {level: 0};
      var temp = spec.$scope.generators;
      spec.$scope.generators = {};
      spec.$scope.generators['Tier 1'] = temp['Tier 1'];
      spec.$scope.generators['Tier 2'] = temp['Tier 2'];
      spec.$scope.generators['Tier 3'] = temp['Tier 3'];

      var values = spec.visibility.visibleGenerators();

      expect(values).toEqual(['Tier 1', 'Tier 2']);
    });

    it("should show if an upgrade is visible", function() {
      spec.player.data = {elements:{}, unlocks:{}};
      spec.player.data.unlocks = {upgrade:true};
      spec.player.data.elements.H = {generators:[],upgrades:[]};
      spec.player.data.elements.H.generators['Tier 1'] = {level: 1};
      spec.player.data.elements.H.upgrades['Tier 1-1'] = {bought: true};
      spec.player.data.elements.H.upgrades['Tier 1-2'] = {bought: false};
      spec.player.data.elements.H.upgrades['Tier 1-3'] = {bought: false};
      var temp = spec.$scope.upgrades;
      spec.$scope.upgrades = {};
      spec.$scope.upgrades['Tier 1-1'] = temp['Tier 1-1'];
      spec.$scope.upgrades['Tier 1-2'] = temp['Tier 1-2'];
      spec.$scope.upgrades['Tier 1-3'] = temp['Tier 1-3'];

      var values = spec.visibility.isUpgradeVisible('Tier 1-1');

      expect(values).toBeTruthy();
    });

    it("should show if an upgrade is visible 2", function() {
      spec.player.data = {elements:{}, unlocks:{}};
      spec.player.data.unlocks = {upgrade:true};
      spec.player.data.elements.H = {generators:[],upgrades:[]};
      spec.player.data.elements.H.generators['Tier 1'] = {level: 1};
      spec.player.data.elements.H.upgrades['Tier 1-1'] = {bought: true};
      spec.player.data.elements.H.upgrades['Tier 1-2'] = {bought: false};
      spec.player.data.elements.H.upgrades['Tier 1-3'] = {bought: false};
      var temp = spec.$scope.upgrades;
      spec.$scope.upgrades = {};
      spec.$scope.upgrades['Tier 1-1'] = temp['Tier 1-1'];
      spec.$scope.upgrades['Tier 1-2'] = temp['Tier 1-2'];
      spec.$scope.upgrades['Tier 1-3'] = temp['Tier 1-3'];

      var values = spec.visibility.isUpgradeVisible('Tier 1-2');

      expect(values).toBeTruthy();
    });

    it("should show if an upgrade is not visible", function() {
      spec.player.data = {elements:{}, unlocks:{}};
      spec.player.data.unlocks = {upgrade:true};
      spec.player.data.elements.H = {generators:[],upgrades:[]};
      spec.player.data.elements.H.generators['Tier 1'] = {level: 1};
      spec.player.data.elements.H.upgrades['Tier 1-1'] = {bought: true};
      spec.player.data.elements.H.upgrades['Tier 1-2'] = {bought: false};
      spec.player.data.elements.H.upgrades['Tier 1-3'] = {bought: false};
      var temp = spec.$scope.upgrades;
      spec.$scope.upgrades = {};
      spec.$scope.upgrades['Tier 1-1'] = temp['Tier 1-1'];
      spec.$scope.upgrades['Tier 1-2'] = temp['Tier 1-2'];
      spec.$scope.upgrades['Tier 1-3'] = temp['Tier 1-3'];

      var values = spec.visibility.isUpgradeVisible('Tier 1-3');

      expect(values).toBeFalsy();
    });

    it("should show visible resources", function() {
      spec.$scope.current_element = 'H';
      spec.player.data = {resources:{}};
      spec.player.data.resources.H = {unlocked:true};
      spec.player.data.resources['2H'] = {unlocked:false};
      spec.player.data.resources.eV = {unlocked:true};
      spec.player.data.resources.O= {unlocked:true};
      var temp = spec.$scope.resources;
      spec.$scope.resources = {};
      spec.$scope.resources['H'] = temp['H'];
      spec.$scope.resources['2H'] = temp['2H'];
      spec.$scope.resources['eV'] = temp['eV'];
      spec.$scope.resources['O'] = temp['O'];

      var values = spec.visibility.visibleResources();

      expect(values).toEqual(['H', 'eV']);
    });

    it("should show visible encyclopedia entries", function() {
      spec.player.data = {unlocks:{}};
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.hydrogen = true;
      spec.player.data.unlocks.oxygen = false;
      var temp = spec.$scope.encyclopedia;
      spec.$scope.encyclopedia = {};
      spec.$scope.encyclopedia.hydrogen = temp.hydrogen;
      spec.$scope.encyclopedia.oxygen = temp.oxygen;

      var values = spec.visibility.visibleEncyclopediaEntries();

      expect(values).toEqual(['hydrogen']);
    });

    it("should show visible redoxes", function() {
      spec.$scope.current_element = 'H';
      spec.player.data = {unlocks:{},resources:{}};
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.redox = true;
      spec.player.data.resources.H = {unlocked:true};
      spec.player.data.resources.eV = {unlocked:true};
      spec.player.data.resources['e-'] = {unlocked:false};

      var values = spec.visibility.visibleRedox();

      expect(values).toEqual(['H+1']);
    });

    it("should not show redoxes if they are locked", function() {
      spec.$scope.current_element = 'H';
      spec.player.data = {unlocks:{},resources:{}};
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.redox = false;
      spec.player.data.resources.H = {unlocked:true};
      spec.player.data.resources.eV = {unlocked:true};
      spec.player.data.resources['e-'] = {unlocked:false};

      var values = spec.visibility.visibleRedox();

      expect(values).toEqual([]);
    });

    it("should not show redoxes of other elements", function() {
      spec.$scope.current_element = 'O';
      spec.player.data = {unlocks:{},resources:{}};
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.redox = true;
      spec.player.data.resources.H = {unlocked:true};
      spec.player.data.resources.eV = {unlocked:true};
      spec.player.data.resources['e-'] = {unlocked:false};

      var values = spec.visibility.visibleRedox();

      expect(values).toEqual([]);
    });

    it("should show visible bindings", function() {
      spec.$scope.current_element = 'H';
      spec.player.data = {unlocks:{},resources:{}};
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.nuclear_binding_energy = true;
      spec.player.data.resources.eV = {unlocked:true};
      spec.player.data.resources['2H'] = {unlocked:true};
      spec.player.data.resources['3H'] = {unlocked:false};
      var temp = spec.$scope.binding_energy;
      spec.$scope.binding_energy = {};
      spec.$scope.binding_energy['2H'] = temp['2H'];
      spec.$scope.binding_energy['3H'] = temp['3H'];

      var values = spec.visibility.visibleBindings();

      expect(values).toEqual(['2H']);
    });

    it("should show visible syntheses", function() {
      spec.$scope.current_element = 'H';
      spec.player.data = {unlocks:{},resources:{}};
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.synthesis = true;
      spec.player.data.resources['H-'] = {unlocked:true};
      spec.player.data.resources.p = {unlocked:true};
      spec.player.data.resources.H2 = {unlocked:true};
      spec.player.data.resources.O2 = {unlocked:false};
      var temp = spec.$scope.syntheses;
      spec.$scope.syntheses = {};
      spec.$scope.syntheses['H-p'] = temp['H-p'];
      spec.$scope.syntheses.H2O = temp.H2O;

      var values = spec.visibility.visibleSyntheses();

      expect(values).toEqual(['H-p']);
    });
  });

  describe('has new functions', function() {
    it("should return true if any element has new items", function() {
      spec.$scope.current_element = 'H';
      spec.player.data = {elements:{},unlocks:{},resources:{}};
      spec.player.data.elements = {H:{}};
      spec.player.data.elements.H.unlocked = true;
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.synthesis = true;
      spec.player.data.resources.H = {unlocked:true, is_new:true};
      spec.$scope.elements.H.includes = ['H'];

      var hasNew = spec.visibility.elementsHasNew();
      expect(hasNew).toBeTruthy();
    });

    it("should return false if no unlocked element has new items", function() {
      spec.$scope.current_element = 'H';
      spec.player.data = {elements:{},unlocks:{},resources:{}};
      spec.player.data.elements = {H:{}};
      spec.player.data.elements.H.unlocked = false;
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.synthesis = true;
      spec.player.data.resources.H = {unlocked:true, is_new:true};
      spec.$scope.elements.H.includes = ['H'];

      var hasNew = spec.visibility.elementsHasNew();
      expect(hasNew).toBeFalsy();
    });

    it("should return true if an element has new items", function() {
      spec.$scope.current_element = 'H';
      spec.player.data = {unlocks:{},resources:{}};
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.synthesis = true;
      spec.player.data.resources.H = {unlocked:true, is_new:true};
      spec.$scope.elements.H.includes = ['H'];

      var hasNew = spec.visibility.elementHasNew('H');
      expect(hasNew).toBeTruthy();
    });

    it("should return false if an element has no new items", function() {
      spec.$scope.current_element = 'H';
      spec.player.data = {unlocks:{},resources:{}};
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.synthesis = true;
      spec.player.data.resources['2H'] = {unlocked:true, is_new:false};
      spec.player.data.resources['3H'] = {unlocked:false, is_new:true};
      spec.player.data.resources['H-'] = {unlocked:false, is_new:false};
      spec.$scope.elements.H.includes = ['2H','3H','H-'];

      var hasNew = spec.visibility.elementHasNew('H');
      expect(hasNew).toBeFalsy();
    });

    it("should return true if there are new encyclopedia entries", function() {
      spec.player.data = {unlocks:{},encyclopedia:{}};
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.hydrogen = true;
      spec.player.data.unlocks.oxygen = true;
      spec.player.data.encyclopedia = {};
      spec.player.data.encyclopedia.hydrogen = {is_new:false};
      spec.player.data.encyclopedia.oxygen = { is_new:true};
      var temp = spec.$scope.encyclopedia;
      spec.$scope.encyclopedia = {};
      spec.$scope.encyclopedia.hydrogen = temp.hydrogen;
      spec.$scope.encyclopedia.oxygen = temp.oxygen;

      var hasNew = spec.visibility.encyclopediaHasNew();

      expect(hasNew).toBeTruthy();
    });

    it("should return false if there are no new encyclopedia entries", function() {
      spec.player.data = {unlocks:{},encyclopedia:{}};
      spec.player.data.unlocks = {};
      spec.player.data.unlocks.hydrogen = true;
      spec.player.data.unlocks.oxygen = true;
      spec.player.data.encyclopedia = {};
      spec.player.data.encyclopedia.hydrogen = {is_new:false};
      spec.player.data.encyclopedia.oxygen = { is_new:false};
      var temp = spec.$scope.encyclopedia;
      spec.$scope.encyclopedia = {};
      spec.$scope.encyclopedia.hydrogen = temp.hydrogen;
      spec.$scope.encyclopedia.oxygen = temp.oxygen;

      var hasNew = spec.visibility.encyclopediaHasNew();

      expect(hasNew).toBeFalsy();
    });
  });
});
