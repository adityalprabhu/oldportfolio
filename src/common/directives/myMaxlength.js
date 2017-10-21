app.directive('myMaxlength', function() {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            var maxlength = Number(attrs.myMaxlength);
            function fromUser(text) {
                if (text.length > maxlength) {
                    var transformedInput = text.substring(0, maxlength);
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                    return transformedInput;
                }
                return text;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});


/*
(function () {
    'use strict';
    app.controller('MyController', function($scope) {
        $scope.textareaText = "";
    });

    app.directive('myMaxlength', ['$compile', '$log', function($compile, $log) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                attrs.$set("ngTrim", "false");
                var maxlength = parseInt(attrs.myMaxlength, 10);
                ctrl.$parsers.push(function (value) {
                    $log.info("In parser function value = [" + value + "].");
                    if (value.length > maxlength)
                    {
                        $log.info("The value [" + value + "] is too long!");
                        value = value.substr(0, maxlength);
                        ctrl.$setViewValue(value);
                        ctrl.$render();
                        $log.info("The value is now truncated as [" + value + "].");
                    }
                    return value;
                });
            }
        };
    }]);
})();
*/
