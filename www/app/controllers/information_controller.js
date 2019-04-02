var app = angular.module('codhab.controllers.information', []);

app.controller('InformationController', function($scope, $state) { 
  $scope.device_id  = window.localStorage.getItem('device_id');
  $scope.push_token = window.localStorage.getItem('push_token');
  $scope.env        = AppEnv.env
  $scope.version    = AppEnv.version

  $scope.go_to_home = function () { 
    $state.go("home");
  }

});
