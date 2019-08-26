var app = angular.module('MyApp', []);
app.controller('MyController',function($scope){
    $scope.firstname = 'Xu';
    $scope.lastname = 'Zhangbing';
    $scope.fullname = function(){
        return $scope.firstname + $scope.lastname
    }
});