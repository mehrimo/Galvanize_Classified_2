(function() {
  'use strict';

  angular.module('app')
    .config(config)

    config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
        .state({
          name: "app",
          abstract: true,
          component: "app"
        })
      $stateProvider
        .state({
          name: "home",
          parent: "app",
          url: "/",
          component: "home"
        })
      $stateProvider
        .state({
          name: "newAd",
          parent: "app",
          url: "/new-ad",
          component: "newAd"
        })
        $stateProvider
        .state({
          name: "editAd",
          parent: "app",
          url: "/edit-ad",
          component: "editAd",
          params: {
            selectedPost: {}
          }
        });
    }
})();
