(function () {
    'use strict';

    /**
     * @name DashboardInfoService
     * @description Service for Dashboard Controls
     */


    angular.module('StudentApp')
    .factory('DashboardInfoService', dashboardInfoService);

    dashboardInfoService.$inject = ['$rootScope','$http','$state','$interval'];

    /* @ngInject */
    function dashboardInfoService($rootScope, $http, $state, $interval) {
        var service = {
        	studentsInfoList : new Array(),
            getStudentInfo : getStudentInfo,
            selectedStudent : null,
            setSelectedStudent : setSelectedStudent,
            getSelectedStudent : getSelectedStudent
        };
        
        /**
         * To get Students information
         */
        function getStudentInfo() {           
            return $http({
                method : 'GET',
                url : "assets/json/StudentInfo.json",
            }).success(function(dataFromServer, status, headers, config) {
            	service.studentsInfoList = dataFromServer;
			});
        }
        
        function setSelectedStudent(student) {
        	service.selectedStudent = student;
        }
        
        function getSelectedStudent(student) {
        	return service.selectedStudent;
        }
        
        return service;
    }

}());