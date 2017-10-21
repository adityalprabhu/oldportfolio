angular.module('app.directvie.datePicker',[])
    .directive('datePicker', function() {
        return {
            restrict: 'EA',
            templateUrl: 'src/common/directiveTemplates/datePicker.html',
            controller: 'datePickerCtrl'

        };
    });