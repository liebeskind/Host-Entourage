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

.controller('LoginCtrl', function($scope, $location, User) {
	if (User.get(0)) $scope.user = User.get(0);
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