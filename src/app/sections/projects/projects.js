app.controller('projectCtrl', ['$scope','$parse','$location','$anchorScroll', function($scope, $parse, $location, $anchorScroll) {
  $('#n2').addClass("current");
  $('#n1, #n3 , #n4, #n5').removeClass("current");
alert("sdsds");

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

  $(document).ready(onDocumentReady);

  function onDocumentReady()
  {
  }

  /*  $scope.slides = [
      {
        image: '../../assets/images/projects/project1/img1.png'
      },
      {
        image: '../../assets/images/projects/project1/img2.png'
      },
      {
        image: '../../assets/images/projects/project1/img3.jpg'
      },
      {
        image: '../../assets/images/projects/project1/img4.png'
      }
    ];*/
}]);