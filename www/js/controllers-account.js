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

.controller('AttendedPartyCtrl', function($scope, $location, $stateParams, Attended) {
  $scope.attendedparty = Attended.get($stateParams.attendeeId);
})

.controller('ProfileCtrl', function($scope, $location, User) {
	$scope.logout = function() {
		User.logout();
	};
})

.controller('LoginCtrl', function($scope, $location, User, CohostGroups, FriendsOfUser) {
	//CohostGroups and FriendsOfUser injected so that they ping Firebase before the data is necessary.
	if (User.get()) $scope.user = User.get();
	$scope.login = function() {
		User.login();
	};

	$scope.goHost = function() {
		$location.path('/main/host/createparty')
	};

	$scope.goEntourage = function() {
		$location.path('/main/entourage/createentourage')
	};

	$scope.logout = function() {
		User.logout();
	};

})