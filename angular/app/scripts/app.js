'use strict';

angular.module('phonegapFunApp', [ 'ngRoute', 'angularCordovaWrapper' ,  'kendo.directives'])
  .config(function ($routeProvider , $locationProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/organizations', {
          templateUrl: 'views/organizations.html',
          controller: 'OrgsCtrl'
      })
      .when('/main', {
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
          })
      .otherwise({
        redirectTo: '/'
      });
  });

function OrgsCtrl($scope, $location ) {
    $scope.list = [
        "Determine project scope",
        "Define preliminary resources",
        "Conduct needs analysis",
        "Draft preliminary specifications",
        "Develop delivery timeline",
        "Obtain approvals to proceed",
        "Secure reuired resources",
        "Develop functional specifications",
        "Develop prototype",
        "Review functional specifications",
        "Identify design parameters",
        "Assign development staff"
    ];
    $scope.collection = [
        { id:1 , name: "Determine project scope", description: 'descript', text:'text' },
        {id:2 , name: "Define preliminary resources"},
        {    id:3 , name: "Conduct needs analysis"},
        {   id:4 , name:  "Draft preliminary specifications"},
        {   id:5 , name: "Develop delivery timeline"},
        {   id:6 , name:  "Obtain approvals to proceed"},
        {   id:7 , name: "Secure reuired resources"},
        {   id:8 , name: "Develop functional specifications"},
        {   id:9 , name: "Develop prototype"},
        {           id:10 , name: "Review functional specifications"},
        {   id:11 , name: "Identify design parameters"},
        {   id:12 , name: "Assign development staff"}
    ];
    $scope.dataset = new kendo.data.DataSource({ data: $scope.collection });

    $scope.clicker=function( what){
        console.log( what, $scope );
    };
    $scope.doRoute=function( what ) {
        console.log( what, $scope );
        $location.path (what ).replace();
    };
    console.log ( 'Orgs initialised');
}

// this will get screwed up by uglify need to use
//someModule.controller('MyController', ['$scope', 'dep1', 'dep2', function($scope,
// doesn't seem to work at all!
function MainCtrl( $scope, $location ) {
    $scope.doRoute=function( what ) {
        $location.path = what;
    };
    $scope.listViewClick=function( what ) {
        console.log('clicked',what);
    };
    console.log ( 'Main initialised');
}