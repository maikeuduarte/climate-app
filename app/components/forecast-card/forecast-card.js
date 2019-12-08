(function () {
  'use strict';

  var module = angular.module('climateApp.component.forecastCard', []);

  module.component('forecastCard', {
    bindings: {
      cityName:'<',
      degreesInfo: '<'
    },
    templateUrl: 'components/forecast-card/forecast-card.html',
    controller: ForecastCardController
  });

  ForecastCardController.$inject = [];

  function ForecastCardController() {
  }
})();
