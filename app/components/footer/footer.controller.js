(function () {

    angular.module('footer', [])
        .controller('footerCtrl', FooterController)
        .directive('footer', FooterDirective);

    FooterController.$inject = ['$scope'];

    function FooterController() {

    };

    function FooterDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/footer/footer.template.html',
            controller: 'footerCtrl'
        };
    };

}());