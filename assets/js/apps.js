var app = angular.module("plantInfo", ["ngRoute"]);
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
