var app = angular.module("plantInfo", ["ngRoute"]);
 console.log("working");
app.config(function($routeProvider){
  console.log("and now");
  $routeProvider
    .when("/plants",{
      templateUrl: "views/plants.html"

    })
    .when("/resources",{
      templateUrl: "views/resources.html"

    })
    .when("/resume",{
      templateUrl: "views/resume.html"
    })
    .otherwise({
      redirectTo: "/home"

    });

});
console.log("and again");
