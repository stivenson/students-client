(function(){

  'use strict';

  angular.module('student.controllers', ['student.services']);


    function StudentListController(Student) {
      Student.query().$promise.then(function(r){
        this.students = r.list;
      }.bind(this));
    }

    angular.module('student.controllers').controller('StudentListController', StudentListController);

})();
