describe('TodoAppController', function() {

  beforeEach(module('TodoApp'));
  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('TodoAppController', {
      $scope: scope
    });
  }));

  it('should initialise the todo task as undefined', function() {
    expect(scope.todoTask).toBeUndefined();
  });

  it('should show add a todo', function() {
    scope.todoTask = 'testing... 1, 2, 3'; 
    scope.addTodo();
    expect(scope.todoList[0].text).toEqual('testing... 1, 2, 3');
  });

  it('should be able to store more than one todo in a list', function() {
    scope.todoTask = 'testing... 1, 2, 3';
    scope.addTodo();
    scope.todoTask = 'the code is... 0451'; 
    scope.addTodo();
    expect(scope.todoList.length).toEqual(2);
  });

  it('should initialise a todo as a task to complete', function() {
    scope.todoTask = "i haz todo dis";
    scope.addTodo();
    expect(scope.todoList[0].done).toEqual(false);
  });

  it('should toggle between done and false', function() {
    scope.todoTask = "much todo so procrastidoge";
    scope.addTodo();
    scope.toggleDone(0);
    expect(scope.todoList[0].done).toEqual(true);
  });

  it('should be able to clear the completed todos', function() {
    scope.todoTask = 'testing... 1, 2, 3';
    scope.addTodo();
    scope.todoTask = 'the code is... 0451'; 
    scope.addTodo();
    scope.todoTask = "much todo so procrastidoge";
    scope.addTodo();
    scope.toggleDone(2);
    scope.todoTask = "i haz todo dis";
    scope.addTodo();
    scope.toggleDone(3);
    scope.clearDone();
    expect(scope.todoList[2]).toEqual(undefined);
    expect(scope.todoList[3]).toEqual(undefined);
  });

  it('should be able to clear all todos', function() {
    scope.todoTask = 'testing... 1, 2, 3';
    scope.addTodo();
    scope.todoTask = 'the code is... 0451'; 
    scope.addTodo();
    scope.todoTask = "much todo so procrastidoge";
    scope.addTodo();
    scope.toggleDone(2);
    scope.todoTask = "i haz todo dis";
    scope.addTodo();
    scope.toggleDone(3);
    scope.clearAll();
    expect(scope.todoList).toEqual([]);
  });
});
