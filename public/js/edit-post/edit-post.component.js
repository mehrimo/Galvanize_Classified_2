(function() {
  "use strict";
  angular.module('app')
    .component('editPost', {
      templateUrl: 'js/edit-post/edit-post.template.html',
      controller: postController
    });

    postController.$inject = ["$http", "$state", "$stateParams"];
    function postController($http, $state, $stateParams) {
      const vm = this;
      vm.editPost = editPost

      vm.selectedPost = $stateParams.selectedPost;
      vm.$onInit = function() {
      };

      function editPost() {
        console.log(vm.selectedPost.id);
        $http.patch(`/classifieds/${vm.selectedPost.id}`, vm.selectedPost).then((result) => {
          console.log(result);
          $state.go("home");
        })
      };
    }
}());
