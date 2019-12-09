(function (angular) {
  'use strict';

  angular.module('climateApp').controller('TryAgainExampleController', function ($scope) {
    $scope.onTryAgain = function onTryAgain(){
      console.log('Try Again!!!');
    };
  });
})(window.angular);
