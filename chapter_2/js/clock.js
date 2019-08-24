var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$timeout){
    var updateClock  =  function(){
        $scope.clock = new Date();
        $timeout(function(){
            updateClock();
        },1000);
    };
    updateClock();
});

