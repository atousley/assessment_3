//myApp.controller('TaskController', ['$scope', 'TaskFactory', function($scope, TaskFactory) {
//    $scope.taskFactory = TaskFactory;
//
//    $scope.task = '';
//    $scope.completed = false;
//
//    $scope.addTask = function() {
//        var taskSent = {
//            task: $scope.task,
//            completed: false
//        };
//
//        console.log('clicked', taskSent);
//        $scope.task = '';
//        $scope.taskFactory.sendTask(taskSent);
//    }
//
//
//
//
//}]);