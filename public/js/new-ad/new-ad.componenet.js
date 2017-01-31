(function() {
  "use strict";
  angular.module('app')
    .component('newA', {
      templateUrl: 'js/new-ad/new-ad.template.html',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, $stateParams) {
      const vm = this;

      vm.addPost = function() {
        $http.post('/classifieds', vm.newPost).then((result) => {
          console.log(result);
          $state.go("home");
        });
      };
    }
}());
