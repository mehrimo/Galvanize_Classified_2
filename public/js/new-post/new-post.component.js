(function() {
  "use strict";
  angular.module('app')
    .component('newPost', {
      templateUrl: '/js/new-post/new-post.template.html',
      controller: newPostController
    });

    newPostController.$inject = ["$http", "$state", "$stateParams"];
    function newPostController($http, $state, $stateParams) {
      const vm = this;
      vm.addPost = addPost

      function addPost() {
        $http.post('/classifieds', vm.newPost)
        .then((result) => {
          console.log(result);
          $state.go("home");
        });
      };
    }
}());
