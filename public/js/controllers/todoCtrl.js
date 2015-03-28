TodoApp.controller('TodoAppController', function($scope) {
  $scope.todoList = [];
  $scope.todoTask;

  $scope.addTodo = function(text) {
    $scope.todoTask = text;
    $scope.todoList.push($scope.todoTask);
  };
});
