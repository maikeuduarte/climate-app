(function () {
    'use strict';
  
    describe('Degrees: ', function () {
      beforeEach(module('climateApp.component.degrees'));
  
      describe('Degrees change', function () {
        it('should set degreesStyle with blue when is less or equal 5', inject(function ($componentController) {
            //Arrange
            var ctrl = $componentController('degrees');
            var changesObj = {
              temperature: {
                currentValue: 5
              }
            };

            //Actions
            ctrl.$onChanges(changesObj);
    
            //Asserts
            expect(ctrl.degreesStyle).toEqual('blue-info');
          }));

          it('should set degreesStyle with orange when is bigger then 5 and less or equal 25', inject(function ($componentController) {
            //Arrange
            var ctrl = $componentController('degrees');
            var changesObj = {
              temperature: {
                currentValue: 25
              }
            };

            //Actions
            ctrl.$onChanges(changesObj);
    
            //Asserts
            expect(ctrl.degreesStyle).toEqual('orange-info');
          }));
          
          
          it('should set degreesStyle with red when is bigger then 25', inject(function ($componentController) {
            //Arrange
            var ctrl = $componentController('degrees');
            var changesObj = {
              temperature: {
                currentValue: 25
              }
            };

            //Actions
            ctrl.$onChanges(changesObj);
    
            //Asserts
            expect(ctrl.degreesStyle).toEqual('orange-info');
          }));     
      });
    });
  })();
  