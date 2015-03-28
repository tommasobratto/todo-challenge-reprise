TodoApp.controller('TodoAppController', function($scope) {
  $scope.todoList = [];
  $scope.todoTask;

  $scope.addTodo = function() {
    if($scope.todoTask)
    $scope.todoList.push({text: $scope.todoTask, done: false});
    $scope.todoTask = "";
  };

  $scope.toggleDone = function($index) {
    $scope.todoList[$index].done = $scope.todoList[$index].done === false ? true: false;
  };
});
