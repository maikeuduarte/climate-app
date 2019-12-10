(function () {
    'use strict';
  
    describe('OpenWeatherService:', function () {
      beforeEach(module('climateApp'));
  
      it('should get city by id', inject(function (OpenWeatherService) {
        //Arranges
        var cityId = 'FAKE_ID';
        spyOn(OpenWeatherService, 'getCity');

        //Actions
        OpenWeatherService.getCity(cityId);
  
        //Asserts
        expect(OpenWeatherService.getCity).toHaveBeenCalledWith(cityId);
      }));
    });
  })();
  