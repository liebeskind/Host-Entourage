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
  var user;
  var isLoggedIn;

  var chatRef = new Firebase('https://host-entourage.firebaseio.com');
  var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
    if (error) {
      console.log(error);
    } else if (user) {
      $rootScope.$apply(function(){
        $location.path('/main/login/loginchoice'); 
      });
      getUserInfo()
      isLoggedIn = true;
      console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
    } else {
      console.log('Not logged in');
    }
  });

  var getUserInfo = function(){
    facebookConnectPlugin.api('/me', {
      // access_token: token,
      // fields: ['id', 'name', 'first_name', 'last_name', 'link', 'gender', 'locale', 'age_range', 'email', 'birthday', 'picture']
    }, function(response) {
      console.log(response);
      var userRef = new Firebase('https://host-entourage.firebaseio.com/users');
      //Create new user if User ID (Facebook ID) hasn't already been used
      var currentUserRef = userRef.child(response.id)
      
      //Set user to current user and update user info whenever there is a change in database
      currentUserRef.on('value', function(snapshot) {
        user = snapshot.val()
      })
      
      //Reset facebookInfo of user ID.  Doing this on every login to make sure user info is current.
      var facebookInfo = currentUserRef.child('facebookInfo');
      facebookInfo.set(response);
    })
  }

  return {
    isLoggedIn: function() { return isLoggedIn; },
    login: function() {
      if (!isLoggedIn) {
        facebookConnectPlugin.login( ['email, public_profile'], function(response){
          auth.login('facebook', {
            access_token: response.authResponse.accessToken,
            preferRedirect: true,
            rememberMe: true,
            scope: 'email,public_profile'
          });  
        }, function(error){console.log(error)})
      } else {
        $location.path('/main/login/loginchoice')
      }
    },
    logout: function() {
      facebookConnectPlugin.logout(function(){
        auth.logout();  
        $location.path('/main/login/logmein')
        isLoggedIn = false;
      }, function(error) {
        console.log('Error With Logout');
        $location.path('/main/login/loginchoice');
      });
      
    },
    get: function() {
      return user;
    }
  }
})