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
        
      
	
	$scope.login = function() {
	 
	 FB.init({
      appId: "250197515177945",
      nativeInterface: CDV.FB,
      useCachedDialogs: false,
  });

	 FB.getLoginStatus(function( response ) {
	    if ( response.status === "connected" ) {
	        console.log('already logged in');
	    } else {
	        FB.login(function(response){},{scope:'email'})
	    }
		});

	// 	FB.login(function(response) {
	// 		if (response.status === 'connected') {
	// 			alert('logged in');
	// 			console.log(response);
	// 		} else {
	// 			alert('not logged in');
	// 		}
	// 	},{ scope: "email" });
	};
})