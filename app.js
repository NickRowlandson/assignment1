//Closure
(function () {

    angular.module('NickPortfolio', ['ngRoute', 
                                     'home', 
                                     'navbar', 
                                     'footer',
                                     'projects',
                                     'skills',
                                     'interests',
                                     'contact'])
        .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/home.template.html',
                controller: 'homeCtrl'
            })
            .when('/projects', {
                templateUrl: 'components/projects/projects.template.html',
                controller: 'projectsCtrl'
            })
            .when('/skills', {
                templateUrl: 'components/skills/skills.template.html',
                controller: 'skillsCtrl'
            })
            .when('/interests', {
                templateUrl: 'components/interests/interests.template.html',
                controller: 'interestsCtrl'
            })
            .when('/contact', {
                templateUrl: 'components/contact/contact.template.html',
                controller: 'contactCtrl'
            })
            .otherwise({
                templateUrl: 'views/404.html'
             });
    };

}());