angular.module('starter.controllers', [])

.controller('CreatePartyCtrl', function($scope) {
})

.controller('CreateParty2Ctrl', function($scope) {
})

.controller('FindEntouragesCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('EntourageDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
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
