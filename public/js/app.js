var app = angular.module('DRApp', ['ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/signin', {
        templateUrl: '/partials/signin.html',
        controller: 'authController'
      }).
      when('/signup', {
        templateUrl: '/partials/signup.html',
        controller: 'authController'
      }).
      when('/user', {
        templateUrl: '/partials/userinfo.html',
        controller: 'authController'
      }).
      otherwise({
        redirectTo: '/signup'
      });
  }
]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CUSTOM ANGULAR FILTERS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});

app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});
