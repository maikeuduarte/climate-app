(function () {
  'use strict';

  var module = angular.module('climateApp.component.forecastCard', []);

  module.component('forecastCard', {
    bindings: {
      cityInformation: '<',
      onLoadForecast: '&',
      enableRefresh: '<?'
    },
    templateUrl: 'components/forecast-card/forecast-card.html',
    controller: ForecastCardController
  });

  ForecastCardController.$inject = ['$scope', '$interval'];

  function ForecastCardController($scope, $interval) {
    var stop = null;

    this.$onInit = function () {
      this.showLoading = false;
      this.showDegrees = false;
      this.showTryAgain = false;
      this.enableRefresh = this.enableRefresh || false;

      this.forecastCard = {
        degrees: null,
        humidity: null,
        pressure: null,
        updated: null
      };

      load.call(this);
    };

    this.onTryAgain = function () {
      load.call(this);
    }

    // Private methods
    function load() {
      setShowLoading.call(this);

      this.onLoadForecast({ cityId: this.cityInformation.id })
        .then(setForecastCard.bind(this))
        .then(setShowDegrees.bind(this))
        .then(setTimeForecast.bind(this))
        .catch(setShowTryAgain.bind(this));
    }

    function setForecastCard(data) {
      this.forecastCard.degrees = data.main.temp;
      this.forecastCard.humidity = data.main.humidity;
      this.forecastCard.pressure = data.main.pressure;
      this.forecastCard.updated = new Date(data.updated).toLocaleTimeString();
    }

    function setShowLoading() {
      this.showLoading = true;
      this.showDegrees = false;
      this.showTryAgain = false;
    }

    function setShowDegrees() {
      this.showLoading = false;
      this.showDegrees = true;
      this.showTryAgain = false;
    }

    function setShowTryAgain() {
      this.showLoading = false;
      this.showDegrees = false;
      this.showTryAgain = true;
    }

    function setTimeForecast() {
      if (this.enableRefresh) {
        stop = $interval(load.bind(this), 600000);
      }
    }

    $scope.$on('$destroy', function () {
      $interval.cancel(stop);
    });
  }
})();
