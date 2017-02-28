(function(){

  'use strict';

  angular.module('student.services',['ngResource']);

  function Student($resource, BaseUrl) {
    return $resource(BaseUrl + '/students/:id', { id: '@_id'},{'query':  {method:'GET', isArray:false}});
  }

angular
  .module('student.services')
  .constant('BaseUrl', 'http://localhost:3010')
  .factory('Student', Student);

})();
