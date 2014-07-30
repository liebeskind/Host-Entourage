angular.module('entourage.controllers', [])

.controller('CreateEntourageCtrl', function($scope, $location, MyEntourages, User, FriendsOfUser) {
  $scope.myEntourages = MyEntourages.all();
  $scope.newEntourage = {};
  $scope.memberList = FriendsOfUser.all();
  $scope.entourage = MyEntourages.getCurrent();

  $scope.selectExistingEntourage = function(entourage) {
    MyEntourages.setCurrent(entourage)
    $location.path('/main/entourage/createentourage2')
  };

  $scope.addEntourage = function(newEntourage, date) {
    var newArray = [];
    var newCaptain = User.get();
    var entourageName = newEntourage.name;
    console.log(newEntourage);
    MyEntourages.addEntourage(entourageName, newEntourage.members, newCaptain, date);
  };
})

.controller('ViewEntouragesCtrl', function($scope, $location, MyEntourages, MemberEntourages, User) {
	$scope.myentourages = MyEntourages.all();
	$scope.memberentourages = MemberEntourages.all()
  if (User.get()) $scope.user = User.get().facebookInfo.first_name + "'s"
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