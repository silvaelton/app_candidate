var app = angular.module('codhab.controllers.iframe', []);
app.controller('IframeController', function ($scope, $stateParams) {
  $scope.iframe_url = AppEnv.base_iframe_url + $stateParams.url
  $scope.iframe_url = $scope.iframe_url.replace('_', '/')

});
