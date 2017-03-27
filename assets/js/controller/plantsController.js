
var app = angular.module('plants', [ ]);

// controller for the plant names on plants.html//
app.controller('plantsController', function($scope){
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
