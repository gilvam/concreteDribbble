'use strict';

/**
 * @ngdoc overview
 * @name concreteDribbbleApp
 * @description
 * # concreteDribbbleApp
 *
 * Main module of the application.
 */
angular.module('concreteDribbbleApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]);

angular.module('concreteDribbbleApp').run(['$rootScope', function($rootScope){
  $rootScope.isloaded = true;
  $rootScope.auth = {
    clientAccessToken:'' //add token here
  };
}]);
