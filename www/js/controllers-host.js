angular.module('host.controllers', [])

.controller('CreatePartyCtrl', function($scope, $location, PendingParties, User, CohostGroups) {
  $scope.party = {}
  var currentUser = User.get();
  // $scope.party.cohostGroup = CohostGroups.getCurrent();
  $scope.party.name = currentUser.facebookInfo.first_name + "'s Party";
  // $scope.party.date = new Date();
  // $scope.party.time = recentParty.time;
  // $scope.party.address = recentParty.address;
  // $scope.party.attendeeRange = '31-40';

  $scope.addParty = function(party) {
    var host = User.get();
    PendingParties.createParty(party, host);
  };
})

.controller('ViewPartiesCtrl', function($scope, PendingParties, User) {
	var currentUser = User.get();
  $scope.pendingparties = PendingParties.mine(currentUser);
  $scope.cohostparties = PendingParties.cohost(currentUser);
	// $scope.createdparties = CreatedParties.all();
  if (User.get()) $scope.user = currentUser.facebookInfo.first_name+"'s";
})

.controller('PendingPartyDetailsCtrl', function($scope, $stateParams, PendingParties) {
	$scope.pendingparties = PendingParties.get($stateParams.partyId);
})

// .controller('CreateCohostGroupCtrl', function($scope, $location, PendingParties, User, CohostGroups, FriendsOfUser) {
//   $scope.myCohostGroups = CohostGroups.all();
//   $scope.newCohostGroup = {};
//   $scope.cohostList = FriendsOfUser.all();

//   $scope.selectExistingCohostGroup = function(cohostGroup) {
//     CohostGroups.setCurrent(cohostGroup)
//     $location.path('/main/host/createparty2')
//   };

//   $scope.addCohostGroup = function(newCohostGroup) {
//     var newArray = [];
//     var newHost = User.get();
//     var groupName = newCohostGroup.name;
//     CohostGroups.addCohostGroup(groupName, newCohostGroup.cohosts, newHost);
//   };
// })

// .controller('FindEntouragesCtrl', function($scope, AcceptedEntourages, WaitingEntourages) {
//   $scope.acceptedentourages = AcceptedEntourages.all();
//   $scope.waitingentourages = WaitingEntourages.all();
// })

// .controller('AcceptedEntourageDetailCtrl', function($scope, $stateParams, MyEntourages) {
//   $scope.entourage = MyEntourages.get($stateParams.entourageId);
// })

// .controller('WaitingEntourageDetailCtrl', function($scope, $location, $stateParams, WaitingEntourages, AcceptedEntourages) {
//   $scope.entourage = WaitingEntourages.get($stateParams.entourageId);
//   $scope.acceptEntourage = function(entourage) {
//     $location.path('main/host/findentourages');
//     AcceptedEntourages.addToAccepted(entourage);
//     WaitingEntourages.removeAccepted(entourage);
//   }
// })

// .controller('CreatedPartyDetailsCtrl', function($scope, $stateParams, CreatedParties) {
// 	$scope.createdparties = CreatedParties.get($stateParams.partyId);
// })
;
