(function () {
    'use strict';

    describe('Forecast Card: ', function () {
        beforeEach(module('climateApp.component.forecastCard'));

        describe('Forecast Card bindins', function () {
            it('Must verify bind properties', inject(function ($componentController) {
                //Arrange
                var ctrl = $componentController('forecastCard', {}, {
                    cityInformation: 'cityInformation',
                    onLoadForecast: 'onLoadForecast',
                    enableRefresh: 'enableRefresh'
                });
                spyOn(ctrl, 'load');

                //Actions
                ctrl.$onInit();

                //Asserts
                expect(ctrl.cityInformation).toEqual('cityInformation');
                expect(ctrl.onLoadForecast).toEqual('onLoadForecast');
                expect(ctrl.enableRefresh).toEqual('enableRefresh');
                expect(ctrl.showLoading).toBeFalsy();
                expect(ctrl.showDegrees).toBeFalsy();
                expect(ctrl.showTryAgain).toBeFalsy();
                expect(ctrl.forecastCard).toEqual({
                    degrees: null,
                    humidity: null,
                    pressure: null,
                    updated: null,
                    expireCache: null
                });
                expect(ctrl.load).toHaveBeenCalled();
            }));
        });


        describe('Load method', function (){
            it('Should load a city', inject(function ($componentController, $q, $rootScope){
                //Arrange
                var city = {
                    main: {
                        temp: 15,
                        humidity: 5,
                        pressure: 875                        
                    },
                    updated: new Date(2019, 12, 09, 21, 30, 45),
                    expireCache: new Date(2019, 12, 09, 21, 40, 45)
                };

                var ctrl = $componentController('forecastCard', {}, {});
                ctrl.cityInformation = {
                    id: 'fake_id'
                };
                ctrl.forecastCard = {};
                ctrl.onLoadForecast = jasmine.createSpy('onLoadForecast').and.returnValue($q.resolve(city));

                // Action
                ctrl.load();
                $rootScope.$digest();

                // Assert
                expect(ctrl.onLoadForecast).toHaveBeenCalledWith({ cityId: ctrl.cityInformation.id });
                expect(ctrl.forecastCard.degrees).toEqual(15);
                expect(ctrl.forecastCard.humidity).toEqual(5);
                expect(ctrl.forecastCard.pressure).toEqual(875);
                expect(ctrl.forecastCard.updated).toEqual('09:30:45 PM');
                expect(ctrl.forecastCard.expireCache).toEqual(city.expireCache);
                expect(ctrl.showLoading).toBeFalsy();
                expect(ctrl.showDegrees).toBeTruthy();
                expect(ctrl.showTryAgain).toBeFalsy();
            }));

            it('Should display try again', inject(function ($componentController, $q, $rootScope){
                //Arrange
                var ctrl = $componentController('forecastCard', {}, {});
                ctrl.cityInformation = {
                    id: 'fake_id'
                };
                ctrl.forecastCard = {};
                ctrl.onLoadForecast = jasmine.createSpy('onLoadForecast').and.returnValue($q.reject());

                // Action
                ctrl.load();
                $rootScope.$digest();

                // Assert
                expect(ctrl.onLoadForecast).toHaveBeenCalledWith({ cityId: ctrl.cityInformation.id });
                expect(ctrl.showLoading).toBeFalsy();
                expect(ctrl.showDegrees).toBeFalsy();
                expect(ctrl.showTryAgain).toBeTruthy();
            }));
        });

        describe('onTryAgain method', function (){
            it('Should call try again', inject(function ($componentController){
                //Arrange
                var ctrl = $componentController('forecastCard', {}, {});
                ctrl.load = jasmine.createSpy('load');

                // Action
                ctrl.onTryAgain();

                // Assert
                expect(ctrl.load).toHaveBeenCalled();
            }));
        });
    });
})();
