(function(){

  'use strict';

  /**
  * Services of students
  **/

  angular.module('student.services',['ngResource']);

  /*
  * Generate crud operations about students (RESTFUL)
  */
  function Student($resource, BaseUrl) {
    return $resource(BaseUrl + '/students/:id', { id: '@_id'},{'query':  {method:'GET', isArray:false}});
  }

angular
  .module('student.services')
  .constant('BaseUrl', 'http://localhost:3010') 
  //.constant('BaseUrl', 'https://students-api.herokuapp.com') // for production (Heroku)
  .factory('Student', Student);

})();
