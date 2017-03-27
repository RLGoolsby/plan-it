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
     {id: 1, name: "25 feet"},
     {id: 1, name: "Unlimited Height"}
   ],

  widthOptions:[
    {id: 1, name: "3 feet" },
    {id: 1, name: "6 feet" },
    {id: 1, name: "9 feet"},
    {id: 1, name: "12 feet"},
    {id: 1, name: "15 feet"},
    {id: 1, name: "20 feet"},
    {id: 1, name: "25 feet"},
    {id: 1, name: "Unlimited Height"}
  ],

  zoneOptions: [
    {id: 1, zone: "6b", name: "mountains" },
    {id: 2, zone: "7a-7b", name: "piedmont" },
    {id: 3, zone: "7b-8a", name: "coastal"}
  ]
  };
}]);
