angular.module('App', ['LocationBar'])
.controller('MainController', ['$scope', '$filter', function ($scope, $filter) {
    .directive('mySelect', [function () {
    return function (scope, $el, attrs) {
      // scope - 現在の $scope オブジェクト
      // $el   - jqLite オブジェクト(jQuery ライクオブジェクト)
      //         jQuery 使用時なら jQuery オブジェクト
      // attrs - DOM 属性のハッシュ(属性名は正規化されている)
  
      scope.$watch(attrs.mySelect, function (val) {
        if (val) {
          $el[0].select();
        }
      });
    };
  }]);
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
  
  $scope.$watch('todos', function (todos) {
  // todos が増減したり各要素のプロパティが変更された時に実行される
  }, true);
  
   var where = $filter('filter'); // filter フィルタ関数の取得
  $scope.$watch('todos', function (todos) {
    var length = todos.length;

    $scope.allCount = length;                                   // 総件数モデル
    $scope.doneCount = where(todos, $scope.filter.done).length; // 完了件数モデル
    $scope.remainingCount = length - $scope.doneCount;          // 未了件数モデル
  }, true);
  var originalTitle;     // 編集前の要件
  $scope.editing = null; // 編集モードの ToDo モデルを表すモデル
  $scope.editTodo = function (todo) {
  originalTitle = todo.title;
  $scope.editing = todo;
  };
  $scope.doneEdit = function () {
  $scope.editing = null;
  };
  
  var originalTitle;     // 編集前の要件
  $scope.editing = null; // 編集モードの ToDo モデルを表すモデル
  $scope.editTodo = function (todo) {
  originalTitle = todo.title;
  $scope.editing = todo;
};
}]);


