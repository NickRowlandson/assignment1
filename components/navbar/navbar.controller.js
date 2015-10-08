(function () {

    angular.module('navbar', [])
        .controller('navCtrl', NavController)
        .directive('navbar', NavDirective);

    NavController.$inject = ['$scope'];

    function NavController() {

    };

    function NavDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/navbar/navbar.template.html',
            controller: 'navCtrl'
        };
    };

}());