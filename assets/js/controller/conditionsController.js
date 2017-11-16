// var app = angular.module('plants', []);
// app.controller('conditionsController', function($scope, $http) {
//   $http.get("plant.json").then(function (response) {
//       $scope.myData = response.data.items;
//   });
// });

var app = angular.module('plants', []);
app.controller('conditionsController', ["$scope", function($scope){
  $scope.trees = [{
    Common name: Redbud,
    Botanical name: Cercis candensis,
    img:"",
    description: "Native to the Southeastern United States"
  },
  Common name: Dogwood,
  Botanical name: ,
  img:"",
  description: "Native to the Southeastern United States"
  ];
}]);
