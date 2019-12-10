(function () {
    'use strict';

    describe('Controller: HomeController', function () {
        beforeEach(module('climateApp'));

        it('Verify city information data', inject(function ($controller, $rootScope) {
            // arrange
            var ctrl = $controller('HomeController', {
                $scope: $rootScope.$new()
            });

            // Asserts
            expect(ctrl.cityInformation).toEqual([{
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
              }]);
        }));

        it('Method onLoadForecast: must get forecast by city from id', inject(function ($controller, $rootScope, OpenWeatherService) {
            // arrange
            spyOn(OpenWeatherService, 'getCity');
            var ctrl = $controller('HomeController', {
                $scope: $rootScope.$new()
            });

            // Action
            ctrl.onLoadForecast('FAKE_ID');

            // Asserts
            expect(OpenWeatherService.getCity).toHaveBeenCalledWith('FAKE_ID');
        }));
    });
})();
