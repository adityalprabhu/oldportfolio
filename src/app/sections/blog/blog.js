/**
 * Created by prabhadi on 04-Dec-15.
 */
app.controller('blogCtrl', ['$scope', function($scope) {
    $('#n4').addClass("current");
    $('#n1, #n2, #n3 , #n5').removeClass("current");


$scope.showFull = false;

    $scope.accordion = 0;
    $scope.showPost1 = false;

    $scope.toggleAccordion = function(accNo){
           if($scope.accordion == accNo){
               var idName = 'accordion' + accNo;
               console.log(idName);
               var myEl = angular.element( document.getElementsByName( idName ) );
               console.log(myEl);
               myEl.addClass('glyphicon-chevron-right');
               myEl.removeClass('glyphicon-chevron-down');
               $scope.accordion = 0;
           }else{
               $scope.accordion = accNo;
               var idName = 'accordion' + accNo;
               var myEl = angular.element( document.getElementsByName( idName ) );
               myEl.addClass('glyphicon-chevron-down');
               myEl.removeClass('glyphicon-chevron-right');

           }

    };
}]);