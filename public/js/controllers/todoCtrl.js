TodoApp.controller('TodoAppController', function($scope) {
  $scope.todoList = [];
  $scope.todoTask;

  $scope.addTodo = function() {
    if($scope.todoTask)
    $scope.todoList.push({text: $scope.todoTask});
    $scope.todoTask = "";
  };
});
