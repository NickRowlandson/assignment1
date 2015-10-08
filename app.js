//Closure
(function () {

    angular.module('NickPortfolio', ['ngRoute', 
                                     'home', 
                                     'navbar', 
                                     'footer',
                                     'about',
                                     'skills',
                                     'interests',
                                     'contact'])
        .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'components/home/home.template.html',
                controller: 'homeCtrl'
            })
            .when('/about', {
                templateUrl: 'components/about/about.template.html',
                controller: 'aboutCtrl'
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
                controller: 'homeCtrl'
            })
            .otherwise({
                templateUrl: 'views/404.html'
             });
    };

}());