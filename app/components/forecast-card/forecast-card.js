(function () {
  'use strict';

  var module = angular.module('climateApp.component.forecastCard', []);

  module.component('forecastCard', {
    bindings: {
    },
    templateUrl: 'components/forecast-card/forecast-card.html',
    controller: ForecastCardController
  });

  ForecastCardController.$inject = [];

  function ForecastCardController() {
  }
})();
