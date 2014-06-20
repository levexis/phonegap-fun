'use strict';

var myApp = angular.module('phonegapFunApp');

myApp.controller('MainCtrl', [ '$scope', '$location', function ($scope , $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log ( 'Main initialised',$scope,$location);
  } ]);

myApp.service('todos', function(){
    //return $cachedResource('api/todos', {})
    this.collection = [
        { id:1 , name: "Determine project scope", description: 'descript', text:'text' },
        {id:2 , name: "Define preliminary resources"},
        {    id:3 , name: "Conduct needs analysis"},
        {   id:4 , name:  "Draft preliminary specifications"},
        {   id:5 , name: "Develop delivery timeline"},
        {   id:6 , name:  "Obtain approvals to proceed"},
        {   id:7 , name: "Secure reuired resources"},
        {   id:8 , name: "Develop functional specifications"},
        {   id:9 , name: "Develop prototype"},
        {   id:10 , name: "Review functional specifications"},
        {   id:11 , name: "Identify design parameters"},
        {   id:12 , name: "Assign development staff"}
    ];
});

myApp.service('todo', ['todos', function(todos) {
    //return $cachedResource('api/todos', {})
    this.collection = todos.collection;
}]);

myApp.factory('todoFactory', ['$cachedResource' , function($cachedResource) {
   return new $cachedResource('todos','api/todos/:todoId', { id:'@id' });
}]);


myApp.controller('OrgsCtrl', [ '$scope', 'todo','todoFactory',function ($scope ,todos , todoFactory) {
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
    $scope.collection = todos.collection;
    var todo = todoFactory.query( function (todos) {
        console.log('todos',todos);
        $scope.collection = todos;
    });

    console.log ( 'Orgs initialised',$scope);
}]);


myApp.controller( 'ListCtrl', [ '$scope', function (scope ) {
        scope.clicker = function ( what ) {
            console.log(what, scope);
            scope.$state.go('home');
    }
}] );
