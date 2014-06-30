angular.module('host.controllers', [])

.controller('CreatePartyCtrl', function($scope, $location, PendingParties) {
  var recentParty = PendingParties.get(0)
  $scope.party = {}
  $scope.party.time = recentParty.time;
  $scope.party.address = recentParty.address;
  $scope.party.attendeeRange = '31-40';

  $scope.addCohosts = function(people) {
    var newArray = [];
    var newCohosts = [{}];
    for (var prop in people) {
      newArray.push(prop)
    };

    for (var i = 0; i < newArray.length; i++) {
      newCohosts[i] = {name: newArray[i], accepted: false};
    };
    $location.path('/main/host/createparty2');
    PendingParties.addCohosts(newCohosts);
  };

  $scope.addParty = function(party) {
    PendingParties.createParty(party);
    $location.path("/main/host/viewparties")
  };
})

.controller('CreateEntourageCtrl', function($scope) {
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
    $location.path('main/host/findentourages');
    AcceptedEntourages.addToAccepted(entourage);
    WaitingEntourages.removeAccepted(entourage);
  }
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