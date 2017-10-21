/**
 * Created by prabhadi on 01-Jun-15.
 */
angular.module('app.directvie.datePickers',[])
    .directive('datePicker2', function() {
        return {
            restrict: 'E',
            templateUrl: 'src/common/directiveTemplates/datePicker2.html',
            controller: 'datePickerCtrl'
        };
    });