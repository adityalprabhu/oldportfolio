/**
 * Created by prabhadi on 26-Feb-16.
 */

app.controller('projectCtrl', ['$scope','$parse','$location','$anchorScroll', function($scope, $parse, $location, $anchorScroll) {
    $('#n2').addClass("current");
    $('#n1, #n3 , #n4, #n5').removeClass("current");

    $scope.preloadFunc = function() {
        $scope.myInterval = 3000;
        for(var j=1; j<7;j++) {

            var the_string = 'slides' +j;
            var model = $parse(the_string);
            model.assign($scope, []);


            for (var i = 1; i < 5; i++) {
                var imageName = 'assets/images/projects/project' + j + '/img' + i + '.png';
                var image = {image: imageName};

                $scope[the_string].push(image);
            }
        }
    };



    $scope.goToTop =function() {

        $location.hash('wrapper');

        $anchorScroll();
    };

    $scope.goToProject =function(projectNo) {
        $location.hash('pContainer' + projectNo);

        $anchorScroll();
    };

    window.onpaint = $scope.preloadFunc();

}]);

/**
 * Created by prabhadi on 26-Feb-16.
 */
app.controller('resumeCtrl', ['$scope', function($scope) {

    $('#n3').addClass("current");
    $('#n1, #n2 , #n4, #n5').removeClass("current");

    $scope.accordion = 0;
    $scope.showAccordion = true;
	var idName, myE1;
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
                if(accNo == i) {
                    $scope.accordion = accNo;
                    idName = 'accordion' + i;
                    myEl = angular.element( document.getElementsByName( idName ) );
                    myEl.addClass('glyphicon-chevron-down');
                    myEl.removeClass('glyphicon-chevron-right');
                    continue;
                }
                else{
                    idName = 'accordion' + i;
                    myEl = angular.element( document.getElementsByName( idName ) );
                    myEl.addClass('glyphicon-chevron-right');
                    myEl.removeClass('glyphicon-chevron-down');
                }

            }


        }

    };
}]);
