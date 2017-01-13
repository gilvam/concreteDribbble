'use strict';

/**
 * @ngdoc service
 * @name concreteDribbbleApp.Dribbble
 * @description
 * # Dribbble
 * Factory in the concreteDribbbleApp.
 */
angular.module('concreteDribbbleApp').factory('Dribbble', [ '$resource', function($resource) {

	return $resource('https://api.dribbble.com/v1/:action', {
		action : ''
	}, {
    shots: {
			method : 'GET',
			params : {
				action: 'shots'
			},
      isArray: true
		}
	});

} ]);
