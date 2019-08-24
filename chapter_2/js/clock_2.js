var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function(){
        $scope.clock.now = new Date();
    };
    setInterval(function(){
        $scope.$apply(updateClock);
    },1000);
    updateClock();
});

