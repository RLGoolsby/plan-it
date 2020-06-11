var app = angular.module("plants", ["ngRoute", , 'angularCSS']);
 console.log("working");

app.config(function($routeProvider){
  console.log("and now");
  $routeProvider.
    .when("/",{
      templateUrl: "home.html"
    })
    .when("/conditions",{
      templateUrl: "views/conditions.html",
      css: 'views/styles.css',
      controller: "conditionsController"
    })
    .when("/local-nurseries",{
      templateUrl: "views/local-nurseries.html",
      css: 'views/styles.css'
    })
    .otherwise({
      redirectTo: "/"
    });
});
console.log("and again");


// First Controller //
app.controller('conditionsController', function ($scope) ){
// app.controller('conditionsController', ['$scope', function($scope) {
  $scope.data = {
   lightOptions: [
     {id: 1, name: 'Full Sun'},
     {id: 2, name: 'Part Sun'},
     {id: 3, name: 'Part Shade'},
     {id: 4, name: 'Shade'}
   ],

   heightOptions: [
     {id: 1, name: "3 feet" },
     {id: 1, name: "6 feet" },
     {id: 1, name: "9 feet"},
     {id: 1, name: "12 feet"},
     {id: 1, name: "15 feet"},
     {id: 1, name: "20 feet"},
     {id: 1, name: "25 feet"}
   ],

  widthOptions:[
    {id: 1, name: "3 feet" },
    {id: 1, name: "6 feet" },
    {id: 1, name: "9 feet" },
    {id: 1, name: "12 feet" },
    {id: 1, name: "15 feet" },
    {id: 1, name: "20 feet" },
    {id: 1, name: "25 feet" }
  ],

  zoneOptions: [
    {id: 1,  name: "mountains" },
    {id: 2,  name: "piedmont" },
    {id: 3,  name: "coastal" }
  ]
  };
});



var app = angular.module('plants', []);
app.controller('conditionsController', function($scope, $http) {
  $http.get("plant.json").then(function (response) {
      $scope.myData = response.data.items;
  });
});
