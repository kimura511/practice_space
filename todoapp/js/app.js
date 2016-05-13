angular.module('App', ['LocationBar'])
.controller('MainController', ['$scope', function ($scope) {
  $scope.todos = [];

  $scope.newTitle = '';

  $scope.addTodo = function () {
    $scope.todos.push({
      title: $scope.newTitle,
      done: false
    });

    $scope.newTitle = '';
  };
  $scope.filter = {
    done: { done: true },      // 完了のみ
    remaining: { done: false } // 未了のみ
  };
  
  // 現在のフィルタの状態モデル
  $scope.currentFilter = null;
  
  // フィルタリング条件を変更するメソッド
  $scope.changeFilter = function (filter) {
    $scope.currentFilter = filter;
  };
}]);