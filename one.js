var angular = require('angular');
var two = require('two/bundle');

require('one.css');

var metadata = {
	name: 'one'
};

angular
	.module(metadata.name, [two.name])
	.controller('OneCtrl', angular.noop)
	.directive('one', function () {
		return {
			restrict: 'E',
			replace: true,
			template: '<div>one<two class="two"></two></div>'
		};
	});

angular.element(document).ready(function () {
	angular.bootstrap(document, [metadata.name]);
});

module.exports = metadata;