//Closure
(function () {

    angular.module('NickPortfolio', ['ngRoute', 'home', 'navbar'])
        .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/home.template.html',
                controller: 'homeCtrl'
            })
            .otherwise({
                redirectTo: '/404'
             });
    };

}());