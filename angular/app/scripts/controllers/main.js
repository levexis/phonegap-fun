'use strict';

angular.module('phonegapFunApp')
  .controller('MainCtrl', [ '$scope', '$location', function ($scope , $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log ( 'Main initialised',$scope,$location);
  } ]);

angular.module('phonegapFunApp')
    .controller('OrgsCtrl', [ '$scope', function ($scope) {
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

    console.log ( 'Orgs initialised',$scope);
}]);

angular.module('phonegapFunApp')
    .controller( 'ListCtrl', [ '$scope', function (scope ) {
        scope.clicker = function ( what ) {
            console.log(what, scope);
            scope.$state.go('home');
    }
}] );
