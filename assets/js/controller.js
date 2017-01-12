(function(){
var app = angular.module('info', [ ]);


// controller for the plant names //
app.controller('InfoController', function(){
  this.id=plants;
  console.log ('info working');
});

var plants = [{
  botanicalName: "Iris siberia",
  commonName: 'Siberian Iris',
  image:
  wishList: true;
},
{
  botanicalName: "Crptomeria globosa nana",
  commonName: 'Dwarf Japanese Cedar',
  image:
  wishList: true;
}
]

// controller for nav-tabs: Descriptions and Specifications //
app.controller('PanelController', function(){
  this.tab = 1;
 console.log ("panel working");

  this.selectTab = function(setTab) {
     this.tab = setTab;
   };
});







 })();
