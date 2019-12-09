(function () {
    'use strict';
    
    angular.module('climateApp').service('OpenWeatherService', function ($resource) {
      return angular.extend(this, $resource('http://api.openweathermap.org/data/2.5/weather?id=:id&units=metric&appid=3b91291e2d7076b57be930ab467acfef', null, {}));
  
    });
  })();
  