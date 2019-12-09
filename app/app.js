'use strict';

/**
 * @ngdoc overview
 * @name climateApp
 * @description
 * # climateApp
 *
 * Main module of the application.
 */
angular
  .module('climateApp', [
    'ngResource',
    'ui.router',
    'climateApp.component.degrees',
    'climateApp.component.forecastCard',
    'climateApp.component.tryAgain'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('index', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    });

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/home.html',
      controller: 'HomeController',
      controllerAs: '$ctrl'
    });

    $stateProvider.state('degrees-example', {
      url: '/degrees-example',
      templateUrl: 'examples/degrees-example/degrees-example.html',
      controller: 'DegreesExampleController',
      controllerAs: '$ctrl'
    });

    $stateProvider.state('forecast-card-example', {
      url: '/forecast-card-example',
      templateUrl: 'examples/forecast-card-example/forecast-card-example.html',
      controller: 'ForecastCardExampleController',
      controllerAs: '$ctrl'
    });

    $stateProvider.state('try-again-example', {
      url: '/try-again-example',
      templateUrl: 'examples/try-again-example/try-again-example.html',
      controller: 'TryAgainExampleController',
      controllerAs: '$ctrl'
    });

    $urlRouterProvider.otherwise('/');


  });
