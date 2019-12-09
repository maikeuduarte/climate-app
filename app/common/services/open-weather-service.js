(function () {
  'use strict';

  angular.module('climateApp').service('OpenWeatherService', function ($resource, $window, $q) {
    var resource = $resource('https://api.openweathermap.org/data/2.5/weather?id=:cityId&units=metric&appid=3b91291e2d7076b57be930ab467acfef', { cityId: '@id' });

    return {
      getCity: function (cityId) {
        debugger
        var deferred = $q.defer();

        var city = $window.localStorage.getItem(cityId);

        if (city !== null) {
          city = JSON.parse(city);
        }

        city = verifyCleanCache(city);

        if (!city) {
          resource.get({ cityId: cityId }).$promise.then(function onThen(city) {
            city.updated = new Date();
            $window.localStorage.setItem(cityId, JSON.stringify(city));

            deferred.resolve(city);
          }).catch(deferred.reject.bind(this));
        } else {
          deferred.resolve(city);
        }

        return deferred.promise;
      }
    };

    function verifyCleanCache(city) {
      var dateExpired = new Date(city.updated);
      var dateNow = new Date();

      dateExpired = new Date(new Date(dateExpired.setMinutes(dateExpired.getMinutes() + 10)));
      if (dateNow > dateExpired) {
        city = null;
      }

      return city;
    }
  });
})();
