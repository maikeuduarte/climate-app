(function () {
    'use strict';

    describe('Try Again: ', function () {
        beforeEach(module('climateApp.component.tryAgain'));

        describe('Try Again bindins', function () {
            it('Must verify bind properties', inject(function ($componentController) {
                //Arrange
                var ctrl = $componentController('tryAgain', {}, { onTryAgain: 'onTryAgain', errorMessage: 'errorMessage' });
 
                //Actions
                ctrl.$onInit();

                //Asserts
                expect(ctrl.onTryAgain).toEqual('onTryAgain');
                expect(ctrl.errorMessage).toEqual('errorMessage');
            }));
        });

        describe('method onTryAgain', function (){
            it('Must verify if is called the method', inject(function ($componentController) {
                //Arrange
                var spyOnTryAgain = jasmine.createSpy('onTryAgain');
                var ctrl = $componentController('tryAgain', {}, { onTryAgain: spyOnTryAgain, errorMessage: 'errorMessage' });
 
                //Actions
                ctrl.$onInit();
                ctrl.onTryAgain();

                //Asserts
                expect(spyOnTryAgain).toHaveBeenCalled();
            }));
        });

    });
})();
