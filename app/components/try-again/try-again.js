(function () {
  'use strict';

  var module = angular.module('climateApp.component.tryAgain', []);

  module.component('tryAgain', {
    bindings: {
      onTryAgain: '&',
      errorMessage: '<'
    },
    templateUrl: 'components/try-again/try-again.html',
    controller: TryAgainController
  });

  TryAgainController.$inject = [];

  function TryAgainController() {

    this.$onInit = function () {
      this.errorMessage = this.errorMessage || 'Something went wrong';
      this.onTryAgain = this.onTryAgain || angular.noop;
    };
  }
})();
