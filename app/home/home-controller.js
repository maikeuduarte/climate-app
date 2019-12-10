(function (angular) {
  'use strict';

  angular.module('climateApp').controller('HomeController', function (OpenWeatherService) {
    this.cityInformation = [{
      name: 'Nuuk, GL',
      id: 3421319,
      isPrincipal: false
    }, {
      name: 'Urubici, BR',
      id: 3445709,
      isPrincipal: true
    }, {
      name: 'Nairobi, KE',
      id: 184745,
      isPrincipal: false
    }];

    this.onLoadForecast = function (cityId) {
      return OpenWeatherService.getCity(cityId);
    };
  });
})(window.angular);
