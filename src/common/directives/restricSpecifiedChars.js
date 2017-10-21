/**
 * Created by sraksh on 11/25/2014.
 */
var restricSpecifiedChars = angular.module( 'common.directives.restricSpecifiedChars',
    []
);

/**
 * @ngDoc directive
 * @name common.directives.restricSpecifiedChars *
 * @description Restricts specified characters
 */
restricSpecifiedChars.directive('restricSpecifiedChars', function ($parse) {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) {
                return;
            }
            attrs.$set("ngTrim", "false");
            var restrictChars = attrs.restricSpecifiedChars;
            ngModel.$parsers.unshift(function (inputValue) {
                console.log('inside ngModel character', inputValue);
                var inputChar = inputValue.split('').filter(function (s) {
                    return (isValid(s,restrictChars));
                }).join('');

                console.log('Input Char = ',inputChar);
                ngModel.$viewValue = inputChar ;
                ngModel.$render();
                return inputChar;
            });
        }
    };

    function isValid(charVal, restrictChars)
    {
        var matches = [];

        angular.forEach(restrictChars, function(value, key){
            if(charVal === value) {
                matches.push(charVal);
            }
        }, matches);

        if(matches.length !== 0){
            return false;
        }

        return true;
    }
});