'use strict';
// Make sure to include the `ui.router` module as a dependency
var myApp = angular.module('phonegapFunApp', ['ui.router', 'angularCordovaWrapper', 'onsen.directives' , 'ngAnimate'])
    .run(
    [        '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ui-sref-active="active }"> will set the <li> // to active whenever
            // 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }]);

myApp.config( [ '$stateProvider', '$urlRouterProvider' , function (stateRouter , urlRouter) {
     // For any unmatched url, redirect to /state1
     urlRouter.otherwise("/");
     //
     // Now set up the states
     stateRouter
     .state('home', {
         url: "/",
         templateUrl: 'views/main.html',
         controller: 'MainCtrl'
     })
     .state('orgs', {
         url : "/organizations",
         templateUrl : 'views/organizations.html',
         controller : 'OrgsCtrl'
     });
}]);


