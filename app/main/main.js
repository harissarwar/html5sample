'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ds.clock',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/dashboard');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.dashboard', {
        url: '/dashboard',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/dashboard.html',
            controller: 'DashboardCtrl as ctrl'
          }
        }
      })
      .state('main.settings', {
        url: '/settings',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/settings.html',
            controller: 'SettingsCtrl as ctrl'
          }
        }
      });
});
