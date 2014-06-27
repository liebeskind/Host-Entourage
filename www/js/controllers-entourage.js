angular.module('entourage.controllers', [])

.controller('CreateEntourageCtrl', function($scope, $location, MyEntourages, User) {
  // var recent = MyEntourages.get(0)
  $scope.entourage = {}
  if (User.get(0) != undefined) $scope.entourage.name = User.get(0).first_name + "'s Entourage";
  
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
    var newCaptain = User.get(0);
    MyEntourages.addNewEntourage(newEntourage, newCaptain);
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

.controller('ViewMembersPendingCtrl', function($scope, $location, $stateParams, MyEntourages) {
  $scope.entourage = MyEntourages.get($stateParams.entourageId);
  $scope.findParties = function(entourage) {
  	$location.path('/main/entourage/findparties');
  }
})

.controller('ViewMembersLockedCtrl', function($scope, $location, $filter, $stateParams, MyEntourages) {
  //membersLocked-detail.html
  $scope.entourage = MyEntourages.get($stateParams.entourageId);
  $scope.findPartiesView = function(entourage) {
    MyEntourages.selectEntourage($scope.entourage);
    $location.path('/main/entourage/findparties');
  }
})

.controller('ViewMemberOfEntourageCtrl', function($scope, $location, $stateParams, MemberEntourages) {
	$scope.entourage = MemberEntourages.get($stateParams.entourageId);
})

.controller('FindPartiesCtrl', function($scope, $location, $stateParams, MyEntourages, PartySearchResults) {
  //tab-findParties.html
  $scope.partyFilter;
  $scope.searchparty = {};
  $scope.searchparty.entourage = MyEntourages.selectEntourage();
  $scope.searchparty.date = $scope.searchparty.entourage.date;
  console.log($scope.searchparty.entourage.date);
  $scope.myentourages = MyEntourages.all();
	$scope.findParties = function(party) {
		$location.path('main/entourage/partysearchresults');
    $scope.partyFilter = party;
	} 

  //partySearchResults.html
  $scope.partyresults = PartySearchResults.all();
  $scope.party = PartySearchResults.get($stateParams.partyId);
  
  //partySearchResults-detail.html
  $scope.applyToParty = function(entourage) {
    MyEntourages.applyToParty(entourage, $scope.party);
    $location.path('main/entourage/partysearchresults');
  }
})