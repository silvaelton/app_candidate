var app = angular.module('codhab.controllers.iframe', []);
app.controller('IframeController', function ($scope, $stateParams, $state) {
  $scope.device_id  = window.localStorage.getItem('device_id');
  $scope.push_token = window.localStorage.getItem('push_token');

  $scope.iframe_url = AppEnv.base_iframe_url + $stateParams.url 
  $scope.iframe_url = $scope.iframe_url.replace('_', '/')
  $scope.iframe_url = $scope.iframe_url + '?user_id=' + $scope.device_id + '&push_id=' + $scope.push_token
  
  $scope.$on('$ionicView.enter', function () {
    if (!navigator.onLine) {
      $state.go("disconnect");
    }
  })
  
});
