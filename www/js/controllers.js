angular.module('starter.controllers', [])

.controller('CreatePartyCtrl', function($scope, PendingParties, $location) {
  $scope.addCohosts = function(people) {
    var newArray = [];
    var newCohosts = [{}];
    for (var prop in people) {
      newArray.push(prop)
    };

    for (var i = 0; i < newArray.length; i++) {
      newCohosts[i] = {name: newArray[i], accepted: false};
    };
    $location.path('/tab/createparty2');
    PendingParties.addCohosts(newCohosts);
  }

  $scope.addParty = function(party) {
    PendingParties.createParty(party);
    $location.path("/tab/viewparties")
  }

})

.controller('SideMenusSimpleCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
 	}
 })

.controller('FindEntouragesCtrl', function($scope, AcceptedEntourages, WaitingEntourages) {
  $scope.acceptedentourages = AcceptedEntourages.all();
  $scope.waitingentourages = WaitingEntourages.all();
})

.controller('AcceptedEntourageDetailCtrl', function($scope, $stateParams, AcceptedEntourages) {
  $scope.entourage = AcceptedEntourages.get($stateParams.entourageId);
})

.controller('WaitingEntourageDetailCtrl', function($scope, $location, $stateParams, WaitingEntourages, AcceptedEntourages) {
  $scope.entourage = WaitingEntourages.get($stateParams.entourageId);
  $scope.acceptEntourage = function(entourage) {
    console.log(entourage);
    $location.path('tab/findentourages');
    AcceptedEntourages.addToAccepted(entourage);
    WaitingEntourages.removeAccepted(entourage);
  }
})

.controller('AccountCtrl', function($scope, Hosted, Attended) {
	$scope.hosted = Hosted.all();
	$scope.attended = Attended.all();
})

.controller('PartyCtrl', function($scope, $stateParams, Hosted) {
  $scope.party = Hosted.get($stateParams.hostId);
})

.controller('AttendedPartyCtrl', function($scope, $stateParams, Attended) {
  $scope.attendedparty = Attended.get($stateParams.attendeeId);
})

.controller('ViewPartiesCtrl', function($scope, PendingParties, CreatedParties) {
	$scope.pendingparties = PendingParties.all();
	$scope.createdparties = CreatedParties.all();
})

.controller('PendingPartyDetailsCtrl', function($scope, $stateParams, PendingParties) {
	$scope.pendingparties = PendingParties.get($stateParams.partyId);
})

.controller('CreatedPartyDetailsCtrl', function($scope, $stateParams, CreatedParties) {
	$scope.createdparties = CreatedParties.get($stateParams.partyId);
})
;
