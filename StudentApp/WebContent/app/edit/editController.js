(function () {
	"use strict";

	// Register Controller
	angular.module('StudentApp')
	.controller('EditController',[
		'$scope',
		'$state',
		'DashboardInfoService',
		editController
	]);

	/**
	 * EditController
	 * @param $scope Scope
	 * @return void
	 */
	function editController(
			$scope,
			$state,
			dashboardInfoService) {
		(function init() {
			initScope();
		})();

		/**
		 * Initialize the Scope
		 * @return void
		 */
		function initScope() {
			_.extend($scope, {
				studentModel : dashboardInfoService.selectedStudent ? dashboardInfoService.getSelectedStudent() : new StudentInfoModel(),
				save : save
			}); 
		}
		
		function save() {
			var student = _.find(dashboardInfoService.studentsInfoList, {
				studentId: $scope.studentModel.studentId
			});
			if(!student) {
				dashboardInfoService.studentsInfoList.push($scope.studentModel);
			}
			$state.go('DASHBOARD');
		}
		
	}
}());