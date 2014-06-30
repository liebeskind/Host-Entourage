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
	// $scope.userName = User.get(0).first_name;
	$scope.login = function() {
	  var results;
	  FB.getLoginStatus(function( response ) {
	    if ( response.status === "connected" ) {
	        console.log('already logged in');
	        $location.path('/main/host/createparty')
	    } else {
	      FB.login(function(response){
			    FB.api('/v1.0/me', {
			      fields: ['id', 'name', 'first_name', 'last_name', 'link', 'gender', 'locale', 'age_range', 'email', 'birthday', 'picture']
			    }, function(response) {
			      // FBfriends();
			      User.addUser(response);
			    })},{scope: ['public_profile', 'email']}
			  );  
	    }
		});
		$location.path('/main/host/createparty')
	};

	$scope.logout = function() {
		FB.logout(function( response ) {
	    console.log( "logged out" );
	  });
	};
})