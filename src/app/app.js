var app = angular.module('app', [
    "ui.router",
    'ui.bootstrap',
    'ngStorage'
    //  'autoSubmitForm'
    //'common.directives.autoSubmitForm',

]);

app.run(['$window', function ($window) {
    FastClick.attach(angular.element($window.document.body)[0]);
}]);

app.config(['$httpProvider',function($httpProvider){
    $httpProvider.interceptors.push('httpRequestInterceptor');
}]);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider


        .state('home', {
            url: '/',
            templateUrl: 'src/app/sections/home/home.html',
            controller: 'homeCtrl'
        })

        .state('projects', {
            url: '/projects',
            templateUrl: 'src/app/sections/projects/projects.html',
            controller: 'projectCtrl'
        })

        .state('resume', {
            url: '/resume',
            templateUrl: 'src/app/sections/resume/resume.html',
            controller: 'resumeCtrl'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'src/app/sections/contact/contact.html',
            controller: 'contactCtrl'
        })

        .state('blog', {
            url: '/blog',
            templateUrl: 'src/app/sections/blog/blog.html',
            controller: 'blogCtrl'
        })

}]);

