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
  var user = [];
  var isLoggedIn = false;

  // Load auth token from somewhere, like localStorage.  Need to add 'token' to local storage on login
  isLoggedIn = window.localStorage['token'] != null 

  $rootScope.$on('user.logout', function() {
    isLoggedIn = false;
    // redir to login page
    $rootScope.$apply( function(){$location.path('/main/login/logmein'); } );
    console.log('logged out!')
  });

  $rootScope.$on('user.login', function() {
    isLoggedIn = true;
    $rootScope.$apply( function(){$location.path('/main/login/loginchoice'); } );
    console.log( "You are now logged in")
  })

  var getUserInfo = function() {
    FB.api('/v1.0/me', {
      access_token: facebookToken,
      fields: ['id', 'name', 'first_name', 'last_name', 'link', 'gender', 'locale', 'age_range', 'email', 'birthday', 'picture']
    }, function(response) {
      user.push(response);
      console.log(response);
      $rootScope.$broadcast('user.login');
    })
  }

  return {
    isLoggedIn: function() { return isLoggedIn; },
    login: function() {
      auth.login('facebook', {
        rememberMe: true,
        scope: 'email,public_profile'
      });
      getUserInfo();

      // Parse.FacebookUtils.logIn('public_profile', {
      //   success: function(user) {
      //     if (!user.existed()) {
      //       alert("User signed up and logged in through Facebook!");
      //       // getUserInfo();
      //     } else {
      //       alert("User logged in through Facebook!");
      //       // getUserInfo();
      //     }
      //   },
      //   error: function(user, error) {
      //     alert("User cancelled the Facebook login or did not fully authorize.");
      //   }
      // });
    },
    logout: function() {
      auth.logout();
      $rootScope.$broadcast('user.logout');
      // Parse.User.logOut()
      // FB.logout(function() {
      //   $rootScope.$broadcast('user.logout');
      // });
    },
    get: function(userId) {
      return user[userId];
    }
  }
})