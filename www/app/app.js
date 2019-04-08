// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('codhab', [
'ionic',
'ngSanitize',
'ngCordova',
'codhab.controllers.app',
'codhab.controllers.home',
'codhab.controllers.information',
'codhab.controllers.iframe',
'codhab.controllers.disconnect'
])


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
      StatusBar.overlaysWebView(false);
    }
    
    if(angular.element(document.querySelector("body")).hasClass("keyboard-open")) {
      angular.element(document.querySelector("div.tab-nav.tabs").remove());
    }

    var notificationOpenedCallback = function(jsonData) {
      // alert("Notification opened:\n" + JSON.stringify(jsonData));
      // console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    window.plugins.OneSignal
      .startInit("f8691fb0-e0c9-4d6a-b927-c795b65727c5")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();

    window.plugins.OneSignal.getIds(function(ids) {
      window.localStorage['device_id'] = ids.userId;
      window.localStorage['push_token'] = ids.pushToken;
    });

  });

});

app.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  $stateProvider
		.state('home', {
			url: "/home",
      templateUrl: "app/views/home/index.html",
      controller: 'HomeController'
    })
    .state('information', {
      url: '/information',
      templateUrl: 'app/views/information/index.html',
      controller: 'InformationController'
    })
    .state('iframe', {
      url: '/iframe/:url',
      cache: false,
      templateUrl: 'app/views/iframe/index.html',
      controller: 'IframeController'
    })
    .state('disconnect', {
      url: '/disconnect',
      templateUrl: 'app/views/disconnect/index.html',
      controller: 'DisconnectController'
    })

  $urlRouterProvider.otherwise('/home');
});

app.config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://localhost:8001/**',
    'http://localhost:3001/**',
    'http://10.36.26.90:3001/**',
    'http://app.codhab.df.gov.br/**'
  ]);
});
