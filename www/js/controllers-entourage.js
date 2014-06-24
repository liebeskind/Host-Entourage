angular.module('entourage.controllers', [])

.controller('CreateEntourageCtrl', function($scope, $location, MyEntourages) {
  var recent = MyEntourages.get(0)
  $scope.entourage = {}
  $scope.entourage.name = recent.name;
  
  $scope.addEntourageMembers = function(people) {
    var newArray = [];
    var newEntourage = [{}];
    for (var prop in people) {
      newArray.push(prop)
    };

    for (var i = 0; i < newArray.length; i++) {
      newEntourage[i] = {name: newArray[i], accepted: false};
    };
    $location.path('/main/entourage/createentourage2');
    MyEntourages.addNewEntourage(newEntourage);
  };

  $scope.addEntourage = function(entourage) {
    MyEntourages.createEntourage(entourage);
    $location.path("/main/entourage/viewentourages")
  };
})

.controller('ViewEntouragesCtrl', function($scope, $location, MyEntourages) {
	$scope.myentourages = MyEntourages.all();
})