
var app = angular.module('info', [ ]);

// controller for the plant names on plants.html//
app.controller('plantsController', ['$http', '$scope', '$location',
    function($http, $scope, $location){
  this.name=plants;
  console.log ('plants working');

    }
]);

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
