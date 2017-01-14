'use strict';

angular.module('concreteDribbbleApp').config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });
});
