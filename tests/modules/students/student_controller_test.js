'use strict';

describe('Modulo students', function () {

    beforeEach(function () {
        module('student');
    });

    describe('Student service', function () {

        it('Show list of students', inject(function ($controller,Student) {
            $controller('StudentListController', {'Student': Student});
            expect($controller).toBeDefined();
            expect(Student);
        }));

    });
});