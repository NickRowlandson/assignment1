//Closure
(function () {

    angular.module('NickPortfolio', ['ngRoute', 'home'])
        .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/components/home/home.template.html',
                controller: 'homeCtrl'
            })
    };

}());