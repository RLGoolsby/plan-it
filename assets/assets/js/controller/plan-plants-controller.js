
var app = angular.module('plantInfo', [ ]);

// controller for the plant names on plants.html//
app.controller('planPlantsController', function($scope){
  // $scope.botanicalName =
  this.name=plants;
  console.log ('plants working');

});


var plants = [{
  botanicalName: "Iris siberia",
  commonName: 'Siberian Iris',
  image:[],
  wishList: true
},
{
  botanicalName: "Crptomeria globosa nana",
  commonName: 'Dwarf Japanese Cedar',
  image:[],
  wishList: true
}
];
