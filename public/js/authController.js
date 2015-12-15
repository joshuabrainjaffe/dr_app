app.controller('authController', function($http,$location) {

  this.$http = $http;

  var self = this;
  self.chars = [];

  this.user  = {username:'',password:''};
  this.alert = '';

  this.login = function(user){
      $http.post('/auth/login', user).
          success(function(data) {
              $scope.loggeduser = data;
              $location.path('/user');
          }).
          error(function() {
              $scope.alert = 'Login failed'
          });

  };

  this.signup = function(user){
      $http.post('/auth/signup', user).
          success(function(data) {
              $scope.alert = data.alert;
           }).
          error(function() {
              $scope.alert = 'Registration failed'
          });

  };

  this.userinfo = function() {
      $http.get('/auth/currentuser').
          success(function (data) {
              $scope.loggeduser = data;
          }).
          error(function () {
              $location.path('/signin');
          });
  }

  this.logout = function(){
      $http.get('/auth/logout')
          .success(function() {
              $scope.loggeduser = {};
              $location.path('/signin');

          })
          .error(function() {
              $scope.alert = 'Logout failed'
          });
  };
}) //close userauth controller
