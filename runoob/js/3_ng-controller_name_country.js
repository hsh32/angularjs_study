var app = angular.module('MyApp', []);
app.controller('MyController',function($scope){
    $scope.names = [
        {name:'k','country':'China'}, // 'name' ---> 写成name就好了.相当于一个属性.
        {'name':'S','country':'China'},
        {'name':'I','country':'Canada'},
        
    ]
});