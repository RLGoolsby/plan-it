var landing = angular.module("info", ["ngRoute"]);
 console.log("working");
landing.config(function($routeProvider){
  console.log("and now");
  $routeProvider
    .when("/plant-id",{
      templateUrl: "views/plant-id.html"

    })
    // .when("/projects",{
    //   templateUrl: "views/projects.html"
    //
    // })
    // .when("/resume",{
    //   templateUrl: "views/resume.html"
    // })
    .otherwise({
      redirectTo: "/home"

    });

});
console.log("and again");
