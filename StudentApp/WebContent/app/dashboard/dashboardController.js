(function() {
	"use strict";

	// Register Controller
	angular.module('StudentApp').controller('DashboardController',
			[ '$scope', 'DashboardInfoService', dashboardController ]);

	/**
	 * DashboardController
	 * @param $scope Scope
	 * @param DashboardInfoService
	 * @return void
	 */
	function dashboardController($scope, dashboardInfoService) {
		(function init() {
			initScope();
		})();

		/**
		 * Initialize the Scope
		 * @return void
		 */
		function initScope() {
			_.extend($scope, {
				studentList : new Array(),
				gridStudentInfo : {}
			});

			getStudentInfo();
			initStudentInfoGrid();
		}

		function getStudentInfo() {
			dashboardInfoService.getStudentInfo().success(
					function(dataFromServer, status, headers, config) {
						$scope.studentList = dataFromServer;
						$scope.gridStudentInfo.data = dataFromServer;
						console.log(dataFromServer);
					}).error(function(dataFromServer, status, headers, config) {
				console.log(dataFromServer);
			});
		}

		function initStudentInfoGrid() {
			$scope.gridStudentInfo.columnDefs = [ {
				name : 'studentName',
				displayName : 'Name'
			}, {
				name : 'studentId',
				displayName : 'Id',
			} , {
				name : 'studentAge',
				displayName : 'Age',
			} , {
				name : 'studentCourse',
				displayName : 'Course Enrolled',
			} ];
			$scope.gridStudentInfo.enableGridMenu = true;
		}

	}
}());