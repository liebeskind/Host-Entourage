angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.mainCtrl = {};
  $scope.leftButtonTap = function () {
      $ionicSideMenuDelegate.toggleLeft($scope.$childHead); // not working
    }
})

.controller('CreatePartyCtrl', function($scope, $location, PendingParties) {
  var recentParty = PendingParties.get(0)
  $scope.party = {}
  $scope.party.time = recentParty.time;
  $scope.party.address = recentParty.address;

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
  }

  $scope.addParty = function(party) {
    console.log(party);
    PendingParties.createParty(party);
    $location.path("/main/host/viewparties")
  }

})

.controller('CreateEntourageCtrl', function($scope) {
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
    $location.path('host/findentourages');
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
