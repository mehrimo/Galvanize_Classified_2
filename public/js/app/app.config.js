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
          name: "newPost",
          parent: "app",
          url: "/new-post",
          component: "newPost"
        })
        $stateProvider
        .state({
          name: "editPost",
          parent: "app",
          url: "/edit-post",
          component: "editPost",
          params: {
            selectedPost: {}
          }
        });
    }
})();
