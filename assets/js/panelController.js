(function(){
var app = angular.module('info', [ ]);

// controller for nav-tabs: Descriptions and Specifications on plants.html//
app.controller('PanelController', function(){
  this.tab = 1;
 console.log ("panel working");

  this.selectTab = function(setTab) {
     this.tab = setTab;
     console.log ('setTab working');
   };
   this.isSelected = function(checkTab){
   return this.tab === checkTab;
   console.log ('checkTab working');
});
})();