(function (angular) {
  'use strict';

  angular.module('climateApp').controller('ForecastCardExampleController', function ($scope, $q, OpenWeatherService) {
    $scope.cityInformation = [{
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

    $scope.onLoadForecast = function (cityId) {
      return OpenWeatherService.getCity(cityId);
    };
  });
})(window.angular);
