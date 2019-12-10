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

  ForecastCardController.$inject = ['$timeout'];

  function ForecastCardController($timeout) {
    this.$onInit = function () {
      this.showLoading = false;
      this.showDegrees = false;
      this.showTryAgain = false;
      this.enableRefresh = this.enableRefresh || false;

      this.forecastCard = {
        degrees: null,
        humidity: null,
        pressure: null,
        updated: null,
        expireCache: null
      };

      this.load.call(this);
    };

    this.onTryAgain = function () {
      this.load.call(this);
    }

    this.load = function load() {
      setShowLoading.call(this);

      this.onLoadForecast({ cityId: this.cityInformation.id })
        .then(setForecastCard.bind(this))
        .then(setShowDegrees.bind(this))
        .then(setTimeForecast.bind(this))
        .catch(setShowTryAgain.bind(this));
    };

    // Private methods
    function setForecastCard(data) {
      this.forecastCard.degrees = data.main.temp;
      this.forecastCard.humidity = data.main.humidity;
      this.forecastCard.pressure = data.main.pressure;
      this.forecastCard.updated = formatAMPM(new Date(data.updated));
      this.forecastCard.expireCache = data.expireCache;
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
        var timeout = new Date(this.forecastCard.expireCache) - new Date();
        $timeout(this.load.bind(this), timeout > 0 ? timeout : 0);
      }
    }

    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
      return strTime;
    }
  }
})();
