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

  $scope.clearDone = function() {
    $scope.todoList.forEach(function(todo) {
      if(todo.done === true) {        
        $scope.todoList.splice($scope.todoList.indexOf(todo));
      };
    });
  };

  $scope.clearAll = function() {
    $scope.todoList = []
  };
});
