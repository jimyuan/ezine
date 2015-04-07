(function(){
  'use strict';
  var viewPath = "/views";
  angular.module('ProjectApp', [
    'ionic',
    'ProjectControllers',
    'ProjectDirectives',
    'ProjectResources',
    'ProjectServices',
    'ProjectFilters'
  ])
  .constant('$ionicLoadingConfig', {
    template: '<ion-spinner icon="lines" class="spinner-light"></ion-spinner>',
    duration: 1000
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('nav', {
        url: '/nav',
        controller: 'NavCtrl',
        templateUrl: viewPath + '/nav.html'
      })
      .state('zine', {
        url: '/zine',
        controller: 'ZineCtrl',
        templateUrl: viewPath + '/zine.html'
      })
      .state('iPad', {
        url: '/iPad',
        templateUrl: viewPath + '/iPad.html'
      })
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: viewPath + "/tabs.html"
      })
      .state('tabs.home', {
        url: '/home',
        views: {
          'home-tab': {
            templateUrl: viewPath + '/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('tabs.list', {
        url: '/list',
        views: {
          'home-tab': {
            templateUrl: viewPath + '/list.html'
          }
        }
      })
      .state('tabs.color', {
        url: '/color',
        views: {
          'color-tab': {
            templateUrl: viewPath + '/color.html',
            controller: 'ColorCtrl'
          }
        }
      })
      .state('tabs.icons', {
        url: '/icons',
        views: {
          'icons-tab': {
            templateUrl: viewPath + '/icons.html',
            controller: 'IconsCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/icons');
  });
  
})();