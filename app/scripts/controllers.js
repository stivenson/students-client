(function(){

  'use strict';

  angular.module('student.controllers', ['student.services']);


    function StudentListController(Student) {
      this.currentDetail = false;
        Student.query().$promise.then(function(r){
          this.students = r.list;
        }.bind(this));

        this.changeDetail = function(id){
          this.currentDetail = (id == this.currentDetail ? false : id);
        };
    }


    angular.module('student.controllers').controller('StudentListController', StudentListController);

})();
