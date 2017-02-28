(function(){

  'use strict';

  /**
  * Controllers of students
  **/

  angular.module('student.controllers', ['student.services']);

    // List Student resource
    function StudentListController(Student) {
      this.currentDetail = false;
        Student.query().$promise.then(function(r){
          this.students = r.list;
        }.bind(this));

        this.changeDetail = function(id){
          this.currentDetail = (id == this.currentDetail ? false : id);
        };

        this.average = function(grades){
          var average=parseFloat(0.0);
          for(var grade in grades){
            average += parseFloat(grades[grade]);
          }
          return parseFloat(average/grades.length).toFixed(2).toString().replace(".", ",");
        };
    }

    angular.module('student.controllers').controller('StudentListController', StudentListController);

})();
