/**
 * Created by prabhadi on 21-Apr-15.
 */
app.directive('autoSubmitForm', ['$timeout','$localStorage','$q', function($timeout,$localStorage,$q) {
    return {
        replace: true,
        scope: {},
        template: '<form action="{{formData.redirectUrl}}" method="{{formData.redirectMethod}}">'+
        '<div ng-repeat="(key,val) in formData.redirectData">'+
        '<input type="hidden" name="{{key}}" value="{{val}}" />'+
        '</div>'+
        '</form>',
        link: function($scope, element, $attrs) {
            $scope.$on($attrs['event'], function(event, data) {
                $scope.formData = data;
                console.log('redirecting now!');
                $timeout(function() {
                    console.log(element[0]);
                    element[0].submit();
                })
            });
        }
    }
}]);