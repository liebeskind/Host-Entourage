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

.controller('ProfileCtrl', function($scope, User) {
	$scope.login = function() {
	  FB.getLoginStatus(function( response ) {
	    if ( response.status === "connected" ) {
	        console.log('already logged in');
	    } else {
	        FB.login(function(response){
	        	FB.api('/me', {
	        		fields: ['id', 'name', 'first_name', 'last_name', 'link', 'gender', 'locale', 'age_range', 'email', 'birthday', 'picture']
	        	}, function(response) {
	        		User.addUser(response)
	        		FB.api('/me/friends', function(response) {
	        			if (response && !response.error) {
	        				console.log(response);
	        			}
	        		})
	        	})
	        },{scope: ['email', 'user_friends', 'user_events']})
	    }
		});
	};

	$scope.logout = function() {
		FB.logout(function( response ) {
	    console.log( "logged out" );
	  });
	};
})