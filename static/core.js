var djangoTodo = angular.module('djangoTodo', []);

function mainController($scope, $http) {

    $scope.readTodos = function() {
        $http.get('/api/todos/')
            .success(function(data) {
                $scope.formData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.createTodo = function() {
        $http.post('/api/todos/', $scope.formData)
            .success(function(data) {
                console.log(data);
                $scope.readTodos();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id + '/')
            .success(function(data) {
                console.log(data);
                $scope.readTodos();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.readTodos();

}
