(function () {
  'use strict';

  angular.module('climateApp').service('OpenWeatherService', function ($resource, $window, $q, ClimateConstant) {
    var resource = $resource('https://api.openweathermap.org/data/2.5/weather?id=:cityId&units=metric&appid=3b91291e2d7076b57be930ab467acfef', { cityId: '@id' });
    angular.extend(this, resource);

    return {
      getCity: function (cityId) {
        var deferred = $q.defer();
        var city = $window.localStorage.getItem(cityId);

        if (city !== null) {
          city = JSON.parse(city);
          city = verifyCleanCache(city, cityId, $window.localStorage);
        }

        if (!city) {
          this.get({ cityId: cityId }).$promise.then(function onThen(city) {
            var dateNow = new Date();
            city.updated = angular.copy(dateNow);
            city.expireCache = new Date(dateNow.setMinutes(dateNow.getMinutes() + ClimateConstant.TIME_OF_CACHE));

            $window.localStorage.setItem(cityId, JSON.stringify(city));

            deferred.resolve(city);
          }).catch(deferred.reject.bind(this));
        } else {
          deferred.resolve(city);
        }

        return deferred.promise;
      }.bind(this)
    };

    function verifyCleanCache(city, cityId, localStorage) {
      var dateExpired = new Date(city.updated);
      var dateNow = new Date();

      dateExpired = new Date(new Date(dateExpired.setMinutes(dateExpired.getMinutes() + ClimateConstant.TIME_OF_CACHE)));
      if (dateNow > dateExpired) {
        city = null;
        localStorage.removeItem(cityId);
      }

      return city;
    }
  });
})();
