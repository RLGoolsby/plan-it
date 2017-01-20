
var app = angular.module('plantInfo');


//controller for the form = selectConditions on index.html
app.controller('planIndexController', function($http){
  var controller = this;
  $http({method: 'Get', url: '/plants'}).success(function(data){
    controller.notes = data;
  });
  // this.select={};

  //   this.addSelect = function(conditions) {
  //    conditions.selects.push(this.select);
  //    this.select = {};// clears out selections //
  //  };

// });
// var app = angular.module("info", []);
//
// app.controller('selectController', function($scope){
//     $scope.filterCondition={
//         operator: 'sun'
//     }
//
//     $scope.operators = [
//         {value: 'sun', displayName: 'equals'},
//         {value: 'shade', displayName: 'not equal'},
//         {value: "bo", displayName: "both"}
//      ]
//    })
