angular.module('DRApp').controller('loginController',
  ['$http', '$location', 'AuthService',
  function ($http, $location, AuthService) {

    this.$http = $http;

    var self = this;

    console.log(AuthService.getUserStatus());

    this.login = function () {

      // initial values
      this.error = false;
      this.disabled = true;

      // call login from service
      AuthService.login(this.loginForm.username, this.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/');
          this.disabled = false;
          this.loginForm = {};
        })
        // handle error
        .catch(function () {
          this.error = true;
          this.errorMessage = "Invalid username and/or password";
          this.disabled = false;
          this.loginForm = {};
        });

    };

}]);

angular.module('DRApp').controller('logoutController',
  ['$http', '$location', 'AuthService',
  function ($http, $location, AuthService) {

    this.$http = $http;

    var self = this;

    this.logout = function () {

      console.log(AuthService.getUserStatus());

      // call logout from service
      AuthService.logout()
        .then(function () {
          $location.path('/login');
        });

    };

}]);

angular.module('DRApp').controller('registerController',
  ['$http', '$location', 'AuthService',
  function ($http, $location, AuthService) {

    this.$http = $http;

    var self = this;

    console.log(AuthService.getUserStatus());

    this.register = function () {

      // initial values
      this.error = false;
      this.disabled = true;

      // call register from service
      AuthService.register(this.registerForm.username, this.registerForm.password)
        // handle success
        .then(function () {
          $location.path('/login');
          this.disabled = false;
          this.registerForm = {};
        })
        // handle error
        .catch(function () {
          this.error = true;
          this.errorMessage = "Something went wrong!";
          this.disabled = false;
          this.registerForm = {};
        });

    };

}]);
