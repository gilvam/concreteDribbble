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
    clientAccessToken:'57672fa944c7f7334c79ece6db43ee331f0e1c6f76926139585d940bce0929d5'
  };
}]);
