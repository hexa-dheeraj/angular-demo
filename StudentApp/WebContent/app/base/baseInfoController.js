(function () {
	"use strict";

	// Register Controller
	angular.module('StudentApp')
	.controller('BaseInfoController',[
		'$scope',
		'$state',
		baseInfoController
	]);

	/**
	 * BaseInfoController
	 * @param $scope Scope
	 * @param $state State
	 * @return void
	 */
	function baseInfoController(
			$scope,
			$state,
			baseInfoService) {
		(function init() {
			initScope();
		})();

		/**
		 * Initialize the Scope
		 * @return void
		 */
		function initScope() {
			redirectToDashboard();
		}
		
		function redirectToDashboard() {
			$state.go('DASHBOARD');
		}
		
	}
}());