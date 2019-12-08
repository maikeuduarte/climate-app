(function () {
  'use strict';

  var module = angular.module('climateApp.component.degrees', []);

  module.component('degrees', {
    bindings: {
      temperature: '<'
    },
    templateUrl: 'components/degrees/degrees.html',
    controller: DegreesController
  });

  DegreesController.$inject = [];

  function DegreesController() {
    this.degreesStyle = '';

    this.$onChanges = function (changesObj) {
      if (changesObj.temperature && changesObj.temperature.currentValue != changesObj.temperature.previousValue) {
        if (changesObj.temperature.currentValue <= 5) {
          this.degreesStyle = 'blue-info';
          return;
        }

        if (changesObj.temperature.currentValue > 5 && changesObj.temperature.currentValue <= 25 ) {
          this.degreesStyle = 'orange-info';
        }

        if (changesObj.temperature.currentValue > 25) {
          this.degreesStyle = 'red-info';
        } 
      }
    };
  }
})();
