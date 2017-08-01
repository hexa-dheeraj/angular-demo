/**
     * Global StudentApp Module
     */

(function () {
    "use strict";
    angular.module("StudentApp", [
        'ui.router',
        'ui.grid',
        'ui.grid.resizeColumns',
        'ui.grid.autoResize'
        ]).config(function($stateProvider,$httpProvider,$compileProvider,$provide) {
            
        $stateProvider.state('DASHBOARD', {
            url : '/dashboard',
            templateUrl : 'app/dashboard/dashboard.html'
        });
    })
}());