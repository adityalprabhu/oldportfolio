/**
 * Created by prabhadi on 04-Dec-15.
 */
app.controller('resumeCtrl', ['$scope', function($scope) {

    $('#n3').addClass("current");
    $('#n1, #n2 , #n4, #n5').removeClass("current");

    $scope.accordion = 0;
    $scope.showAccordion = true;

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
            for(var i=1; i<9;i++){
                //$scope.accordion = i;
                if(accNo == i) {
                    $scope.accordion = accNo;
                    var idName = 'accordion' + i;
                    var myEl = angular.element( document.getElementsByName( idName ) );
                    myEl.addClass('glyphicon-chevron-down');
                    myEl.removeClass('glyphicon-chevron-right');
                    continue;
                }
                else{
                    var idName = 'accordion' + i;
                    var myEl = angular.element( document.getElementsByName( idName ) );
                    myEl.addClass('glyphicon-chevron-right');
                    myEl.removeClass('glyphicon-chevron-down');
                }

            }


        }

    };
}]);