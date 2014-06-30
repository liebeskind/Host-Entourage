angular.module('account.controllers', [])

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.mainCtrl = {};
  $scope.leftButtonTap = function () {
    $ionicSideMenuDelegate.toggleLeft($scope.$childHead);
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

.controller('ProfileCtrl', function($scope) {
})