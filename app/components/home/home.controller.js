(function(){
    
    angular.module('home', [])
     .controller('homeCtrl', HomeController);
    
    HomeController.$inject = ['$scope'];
    
    function HomeController($scope){
        $scope.test = function (){
            return "Banana";
        };
    };
    
}());
