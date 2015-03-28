TodoApp.controller('TodoAppController', function($scope) {
  $scope.todoList = [];
  $scope.todoTask;

  $scope.addTodo = function() {
    if($scope.todoTask)
    $scope.todoList.push({text: $scope.todoTask, done: false});
    $scope.todoTask = "";
  };

  $scope.toggleDone = function() {
    $scope.todoList[0].done = $scope.todoList[0].done === false ? true: false;
  };
});
