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
            getStudentInfo : getStudentInfo
        };
        
        /**
         * To get Students information
         */
        function getStudentInfo() {           
            return $http({
                method : 'GET',
                url : "assets/json/StudentInfo.json",
            });
        }
        
        return service;
    }

}());