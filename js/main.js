(function(){

	var app = angular.module('dotdotdot-demo', ['dotdotdot-angular']);

	app.controller('dotdotdotDemoController', ['$scope', 
		function($scope) {
			$scope.paragraphs = [
				'Spider monkeys of the genus Ateles are New World monkeys in the subfamily Atelinae, family Atelidae. Like other atelines, they are found in tropical forests of Central and South America, from southern Mexico to Brazil. The genus contains seven species, all of which are under threat; the black-headed spider monkey, and brown spider monkey are critically endangered.'
			];

			$scope.editableParagraph = 'Their disproportionately long limbs and long prehensile tails make them one of the largest New World monkeys and gives rise to their common name. Spider monkeys live in the upper layers of the rainforest, and forage in the high canopy, from 25 to 30 m (82 to 98 ft).[2] They primarily eat fruits, but will also occasionally consume leaves, flowers, and insects.[2] Due to their large size, spider monkeys require large tracts of moist evergreen forests, and prefer undisturbed primary rainforest.[2] They are social animals and live in bands of up to 35 individuals but will split up to forage during the day.[3]'
		}]);

})();
