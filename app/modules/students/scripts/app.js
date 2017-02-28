(function(){
  'use strict';

  /**
  * Config of modules
  **/

  angular.module('student',['ngRoute','student.controllers']);

  function config($locationProvider, $routeProvider,$httpProvider,$qProvider) {

    $locationProvider.html5Mode(true);
    $qProvider.errorOnUnhandledRejections(false);
    $routeProvider
      .when('/',{
        templateUrl: 'modules/students/views/student-list.html',
        controller: 'StudentListController',
        controllerAs: 'studentlist'
      });
  }

  angular
    .module('student')
    .config(config);

})();
