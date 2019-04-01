var app = angular.module('codhab.controllers.information', []);
app.controller('InformationController', function($scope) { 
  $scope.device_id = window.localStorage.getItem('device_id');
  $scope.push_token = window.localStorage.getItem('push_token');
});
