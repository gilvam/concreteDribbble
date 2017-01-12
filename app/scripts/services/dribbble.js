'use strict';

/**
 * @ngdoc service
 * @name concreteDribbbleApp.Dribbble
 * @description
 * # Dribbble
 * Factory in the concreteDribbbleApp.
 */
angular.module('concreteDribbbleApp').factory('Dribbble', [ '$resource', function($resource) {
  console.log('$resource: ', $resource);
	return $resource('http://api.dribbble.comrest/Dribbbles/:action/:DribbbleId', {
		action : ''
	}, {
		getPopular: {
			method : 'GET',
			params : {
				action: 'getDashboardInformation'
			}
		}
	});
} ]);





// popular
// https://dribbble.com/shots?page=2&per_page=12
