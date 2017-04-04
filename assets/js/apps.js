var app = angular.module("plants", ["ngRoute"]);
 console.log("working");
app.config(function($routeProvider){
  console.log("and now");
  $routeProvider
    .when("/plants",{
      templateUrl: "views/plants.html"

    })
    .when("/conditions",{
      templateUrl: "views/conditions.html"
    })
    .when("/local-nurseries",{
      templateUrl: "views/local-nurseries.html"

    })
    .otherwise({
      redirectTo: "/home"

    });

});
console.log("and again");


// First Controller //
app.controller('conditionsController', ['$scope', function($scope) {
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
}]);
