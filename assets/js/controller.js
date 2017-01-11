(function(){
var app = angular.module('info', [ ]);

app.controller('InfoController', function(){
  this.id=plants;
});

var plants = [{
  botanicalName: "Iris siberia",
  commonName: 'Siberian Iris',
  description: "...",
  wishList: true;
},
{
  botanicalName: "Crptomeria globosa nana",
  commonName: 'Dwarf Japanese Cedar',
  description: "...",
  wishList: true;
}
]
})();
