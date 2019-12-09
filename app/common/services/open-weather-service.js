(function () {
  'use strict';

  angular.module('climateApp').service('OpenWeatherService', function ($resource, $cacheFactory) {
    var cache = $cacheFactory('OpenWeatherService');
    var City = $resource('https://api.openweathermap.org/data/2.5/weather?id=:cityId&units=metric&appid=3b91291e2d7076b57be930ab467acfef', { cityId: '@id' });

    return {
      getCity: function (cityId) {
        var city = cache.get(cityId);

        if (!city) {
          city = City.get({ cityId: cityId });
          cache.put(cityId, city);
        }

        return city;
      }
    };
  });
})();
