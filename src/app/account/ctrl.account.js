(function() {
  'use strict';

  angular
    .module('arAdmin')
    .controller('AccountController', AccountController);

  /** @ngInject */
  function AccountController ($state, $mdSidenav, Auth, CurrentAuth) {

    var vm = this;
    vm.me = CurrentAuth;
    vm.data = $state.current.data;

    /*
     * Functions
     */

    vm.logout = function () {
      // log the user out
      Auth.$unauth();

      // then do something
      $state.go('login');
    }

    vm.toggleSidenav = function () {
      $mdSidenav('settings').toggle();
    }

  }

})();
