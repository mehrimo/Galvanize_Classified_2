(function() {
  "use strict";
  angular.module('app')
    .component('editAd', {
      templateUrl: 'js/edit-ad/edit-ad.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, $stateParams) {
      const vm = this;
      vm.selectedPost = $stateParams.selectedPost;
      vm.$onInit = function() {
      };

      vm.editAd = function() {
        console.log(vm.selectedPost.id);
        $http.patch(`/classifieds/${vm.selectedPost.id}`, vm.selectedPost).then((result) => {
          console.log(result);
          $state.go("home");
        })
      };
    }
}());
