angular.module('account.services', [])

.factory('Hosted', function() {
  var hosted = [
    { id: 0, name: 'Top Of The Hill June Party', attendees: 53, address: '1902 Leavenworth, San Francisco, CA', type: 'Party', theme: 'British', imgUrl: 'russianhillalcatraz.jpg' },
    { id: 1, name: 'Fort Mason Party', attendees: 36, address: 'Fort Mason, San Francisco, CA', type: 'Barbeque', theme: 'Cowboy', imgUrl: 'ftmason.jpg' },
    { id: 2, name: 'Top Of The Hill May Party', attendees: 23, address: '1902 Leavenworth, San Francisco, CA', type: 'Party', theme: 'British', imgUrl: 'russianhillalcatraz.jpg' },
    { id: 3, name: 'Top Of The Hill April Party', attendees: 34, address: '1902 Leavenworth, San Francisco, CA', type: 'Party', theme: 'British', imgUrl: 'russianhillalcatraz.jpg' },
    { id: 4, name: 'Top Of The Hill March Party', attendees: 52, address: '1902 Leavenworth, San Francisco, CA', type: 'Party', theme: 'British', imgUrl: 'russianhillalcatraz.jpg' },
    { id: 5, name: 'Top Of The Hill Feb Party', attendees: 41, address: '1902 Leavenworth, San Francisco, CA', type: 'Party', theme: 'British', imgUrl: 'russianhillalcatraz.jpg' },
    { id: 6, name: 'Top Of The Hill Jan Party', attendees: 37, address: '1902 Leavenworth, San Francisco, CA', type: 'Party', theme: 'British', imgUrl: 'russianhillalcatraz.jpg' }
  ];

  return {
    all: function() {
      return hosted;
    },
    get: function(hostId) {
      return hosted[hostId];
    }
  }
})

.factory('Attended', function() {
  var attended = [
    { id: 0, name: 'Crazy St. Pattys Day Shindig', attendees: 53, address: 'Somewhereville USA', type: 'Party', theme: 'St. Pattys', imgUrl: 'stPattys.jpg'  },
    { id: 1, name: 'Epic Warehouse Party', attendees: 203, address: 'San Francisco, CA', type: 'Rave', theme: 'Costumed', imgUrl: 'warehouseparty.jpg'  }
  ];

  return {
    all: function() {
      return attended;
    },
    get: function(attendeeId) {
      return attended[attendeeId];
    }
  }
})

.factory('User', function($rootScope, $location) {
  var user = user || {};

  //Firebase authentication callback system.  Callback fires whenever a change to user.
  var chatRef = new Firebase('https://host-entourage.firebaseio.com');
  var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
    if (error) {
      console.log(error);
    } else if (user) {
      //user authenticated with Firebase
      getUserPicture()
      console.log('User ID: ' + user.uid + 'authenticated with ' + user.provider);
      $rootScope.$apply(function(){
        $location.path('/main/login/loginchoice'); 
      });
    } else {
      //user is logged out
      console.log('Not logged in');
      $rootScope.$apply(function(){
        $location.path('/main/login/logmein'); 
      });
    }
  });

  var facebookLogin = function(){
    facebookConnectPlugin.login( ['email'], function(response){
      //Firebase authentication
      auth.login('facebook', {
        access_token: response.authResponse.accessToken,
        preferRedirect: true, // prevents popup
        rememberMe: true
        // scope: 'email,public_profile'
      });  
    }
    , function(error){console.log(error)}
    )
  }

  var facebookLogout = function(){
    facebookConnectPlugin.getLoginStatus(function(ret){
      if (ret === 'connected') {
        facebookConnectPlugin.logout(function(){
          auth.logout();
        }, function(error) {
          console.log('Error With Logout');
          // $location.path('/main/login/loginchoice');
        });
      } else {
        $location.path('/main/login/logmein')
      }   
    })      
  }

  var getUserPicture = function(){
    facebookConnectPlugin.api('/me/picture', {
    }, function(response) {
      getUserInfo(response);
    })
  }

  var getUserInfo = function(picture){
    facebookConnectPlugin.api('/me', {
      // access_token: token,
      // fields: ['id', 'name', 'first_name', 'last_name', 'link', 'gender', 'locale', 'age_range', 'email', 'birthday', 'picture']
    }, function(response) {
      console.log(response);
      response.picture = picture;
      user.facebookInfo = user.facebookInfo || response;
      
      //Create new user if User ID (Facebook ID) hasn't already been used
      var userRef = new Firebase('https://host-entourage.firebaseio.com/users');
      var currentUserRef = userRef.child(response.id)
      
      //Reset facebookInfo of user ID.  Doing this on every login to make sure user info is current.
      var facebookInfo = currentUserRef.child('facebookInfo');
      facebookInfo.set(response);

      //Update user info whenever there is a change in database
      currentUserRef.on('value', function(snapshot) {
        user = snapshot.val()
      })
    })
  }

  return {
    isLoggedIn: function() { return isLoggedIn; },
    login: function() {
      facebookLogin();
    },
    logout: function() {
      facebookLogout();
    },
    get: function() {
      return user;
    }
  }
})