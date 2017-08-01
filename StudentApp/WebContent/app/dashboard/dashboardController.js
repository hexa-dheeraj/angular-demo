(function() {
	"use strict";

	// Register Controller
	angular.module('StudentApp').controller('DashboardController',
			[ '$scope', '$state', 'DashboardInfoService', dashboardController ]);

	/**
	 * DashboardController
	 * @param $scope Scope
	 * @param DashboardInfoService
	 * @return void
	 */
	function dashboardController($scope, $state, dashboardInfoService) {
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
				gridStudentInfo : {},
			    addStudent : addStudent,
			    deleteStudent : deleteStudent,
			    updateStudent : updateStudent
			});

			getStudentInfo();
			initStudentInfoGrid();
		}

		function getStudentInfo() {
			if(dashboardInfoService.studentsInfoList.length == 0) {
				dashboardInfoService.getStudentInfo().success(
						function(dataFromServer) {
							$scope.studentList = dashboardInfoService.studentsInfoList;
							$scope.gridStudentInfo.data = dashboardInfoService.studentsInfoList;
							console.log(dataFromServer);
						}).error(function(dataFromServer, status, headers, config) {
					console.log(dataFromServer);
				});
			} else {
				$scope.studentList = dashboardInfoService.studentsInfoList;
				$scope.gridStudentInfo.data = dashboardInfoService.studentsInfoList;
			}
			
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
			}  , {
				name : 'actions',
				displayName : 'Actions',
				cellTemplate: '<div class="ui-grid-cell-contents"> <span class="gridAction glyphicon glyphicon-trash" ng-click="grid.appScope.deleteStudent(row.entity)"></span> <span class="gridAction glyphicon glyphicon-edit" ng-click="grid.appScope.updateStudent(row.entity)"></span></div>'
			} ];
			$scope.gridStudentInfo.enableGridMenu = true;
		}
		
		function addStudent() {
			dashboardInfoService.selectedStudent = null;
			$state.go('UPDATE STUDENT');
		}
		
		function deleteStudent(student) {
			_.remove(dashboardInfoService.studentsInfoList, {
				studentId: student.studentId
			});
		}
		
		function updateStudent(student) {
			dashboardInfoService.setSelectedStudent(student);
			$state.go('UPDATE STUDENT');
		}

	}
}());