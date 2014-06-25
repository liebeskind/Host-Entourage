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

.controller('ViewEntouragesCtrl', function($scope, $location, MyEntourages, MemberEntourages) {
	$scope.myentourages = MyEntourages.all();
	$scope.memberentourages = MemberEntourages.all()
})

.controller('ViewMembersLockedCtrl', function($scope, $location, $stateParams, MyEntourages) {
  $scope.entourage = MyEntourages.get($stateParams.entourageId);
  $scope.findParties = function(entourage) {
  	$location.path('/main/entourage/findparties');
  }
})

.controller('ViewMembersPendingCtrl', function($scope, $location, $stateParams, MyEntourages) {
  $scope.entourage = MyEntourages.get($stateParams.entourageId);
  $scope.findParties = function(entourage) {
  	$location.path('/main/entourage/findparties');
  }
})

.controller('MemberOfEntourageCtrl', function($scope, $location, $stateParams, MemberEntourages) {
	$scope.entourage = MemberEntourages.get($stateParams.entourageId);
})

.controller('FindPartiesCtrl', function($scope, $location, MyEntourages, MemberEntourages) {
	$scope.myentourages = MyEntourages.all();
	$scope.findParties = function(party) {
		console.log("Finding parties with "+ party);
	} 

})