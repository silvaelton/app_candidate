var app = angular.module('codhab.controllers.disconnect', []);
app.controller('DisconnectController', function ($scope, $state) {

  $scope.go_to_home = function () {
    $state.go("home");
  }

});
