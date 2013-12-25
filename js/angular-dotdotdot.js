angular.module('dotdotdot-angular', [])
	.directive('dotdotdot', function(){
		return {
			restrict: 'A',
			scope: false,
			scope: true,
			link: function(scope, element, attributes) {
				scope.$watch(function() {
					element.dotdotdot({watch: true});
				});
			}
		}
	});
