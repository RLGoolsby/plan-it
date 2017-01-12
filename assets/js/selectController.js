(function(){
var app = angular.module('info', [ ]);


//controller for the form = selectConditions on index.html //
app.controller('selectConditions', function(){
  this.select={};

    this.addSelect = function(conditions) {
     conditions.selects.push(this.select);
     this.select = {};// clears out selections //
   };
});


 })();
