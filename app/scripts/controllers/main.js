'use strict';

/**
 * @ngdoc function
 * @name concreteDribbbleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the concreteDribbbleApp
 */
angular.module('concreteDribbbleApp').controller('MainCtrl',['$scope', 'Dribbble', function ($scope, Dribbble) {
  console.log('$scope: ', $scope);
  console.log('Dribbble: ', Dribbble);
}]);
