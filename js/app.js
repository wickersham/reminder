
    function startTime() {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
  //      var s=today.getSeconds();
        m = checkTime(m);
//        s = checkTime(s);
        document.getElementById('clock').innerHTML = h+":"+m  //+":"+s;
        var t = setTimeout(function(){startTime()},10000);
    }

    function checkTime(i) {
        if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
//                  just the clock





var app = angular.module("ngremind", []);

app.controller("todoController", function($scope) {
$scope.reminders=[];
$scope.description=""; 
 $scope.addTodo = function() {
    var reminder = {
        description: $scope.description,
        minutes: $scope.howlong,
           
    };

     $scope.reminders.push(reminder);
 };
    

    
    $scope.removeTodo = function(index) {
        $scope.reminders.splice(index, 1)
    }; 
    
}); 
  

//       http://codepen.io/anon/pen/mJyQez
//
//});