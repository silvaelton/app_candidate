var app = angular.module('codhab.controllers.home', []);
app.controller('HomeController', function($scope, $state, $ionicPlatform) {
  $scope.go_to_iframe = function(path) {
    $state.go("iframe", {url: path})
  }

  $scope.go_to_info = function() {
    $state.go("information");
  }

  window.addEventListener('message', function(e) {
    if(e.data == 'back') {
      $state.go("home");
    }
  });

});
