'use strict';
(function() {
  angular.module('app')
    .component('home', {
      templateUrl: 'js/home/home.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"]

    function controller($http, $state, $stateParams) {
      const vm = this;
      vm.newPost = {};
      vm.sortCriteria = "-date";
      vm.deletePost = deletePost
      vm.editPost = editPost
      vm.newPost = newPost
      vm.updateSort = updateSort


      vm.$onInit = function() {
        refreshPosts();
      };


      function deletePost(id) {
        $http.delete(`/classifieds/${id}`)
        .then((result) => {
          console.log(result);
          refreshPosts();
        });
      }

      function editPost(thisPost) {
        $state.go("editPost", {
          selectedPost: thisPost
        })
      }

      function newPost() {
        $state.go("newPost");
      }

      function updateSort(criteria) {
        vm.sortCriteria = criteria;
      }

      function refreshPosts() {
        $http.get('/classifieds')
        .then((result) => {
          console.log(result.data);
          vm.posts = result.data;
        });
      }
    }

}());
