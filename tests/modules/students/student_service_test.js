'use strict';

describe('Modulo students', function () {

    beforeEach(function () {
        module('student');
    });

    describe('Student service', function () {

        var studentsService;

        beforeEach(function () {
            inject(['Student,$httpBackend', function (service,$httpBackend) {
                    studentsService = service;
                }
            ]);
        });

        it('Get list all students', function () {

            studentsService.query().$promise.then(function(r){
              var students = r.list;
              expect(students).toBeDefined();
              expect(students.length).toBe(4);
            }.bind(this));

        });
    });
});