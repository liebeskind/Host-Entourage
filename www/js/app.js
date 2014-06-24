// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('main', {
      url: "/main",
      abstract: true,
      templateUrl: "templates/menu.html"
    })    

    .state('main.host', {
      url: "/host",
      abstract: true,
      views: {
        'menu-content': {
          templateUrl: "templates/host.html"  
        }
      }
    })

    .state('main.entourage', {
      url: "/entourage",
      abstract: true,
      views: {
        'menu-content': {
          templateUrl: "templates/entourage.html"  
        }
      }
    })

    // Each tab has its own nav history stack:

    .state('main.entourage.createentourage', {
      url: '/createentourage',
      views: {
        'tab-createentourage': {
          templateUrl: 'templates/tab-createentourage.html',
          controller: 'CreateEntourageCtrl'
        }
      }
    })

    .state('main.host.createparty2', {
      url: '/createparty2',
      views: {
        'tab-createparty': {
          templateUrl: 'templates/createparty2.html',
          controller: 'CreatePartyCtrl'
        }
      }
    })

    .state('main.host.createparty', {
      url: '/createparty',
      views: {
        'tab-createparty': {
          templateUrl: 'templates/tab-createparty.html',
          controller: 'CreatePartyCtrl'
        }
      }
    })

    .state('main.host.findentourages', {
      url: '/findentourages',
      views: {
        'tab-findentourages': {
          templateUrl: 'templates/tab-findentourages.html',
          controller: 'FindEntouragesCtrl'
        }
      }
    })

    .state('main.host.acceptedentourage-detail', {
      url: '/acceptedentourage/:entourageId',
      views: {
        'tab-findentourages': {
          templateUrl: 'templates/acceptedentourage-detail.html',
          controller: 'AcceptedEntourageDetailCtrl'
        }
      }
    })

    .state('main.host.waitingentourage-detail', {
      url: '/waitingentourage/:entourageId',
      views: {
        'tab-findentourages': {
          templateUrl: 'templates/waitingentourage-detail.html',
          controller: 'WaitingEntourageDetailCtrl'
        }
      }
    })

    .state('main.host.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

    .state('main.host.party-detail', {
      url: '/party/:hostId',
      views: {
        'tab-account': {
          templateUrl: 'templates/party-detail.html',
          controller: 'PartyCtrl'
        }
      }
    })

    .state('main.host.attended-party-detail', {
      url: '/attendedparty/:attendeeId',
      views: {
        'tab-account': {
          templateUrl: 'templates/attended-party-detail.html',
          controller: 'AttendedPartyCtrl'
        }
      }
    }) 

    .state('main.host.createdparty-detail', {
      url: '/createdparty/:partyId',
      views: {
        'tab-viewparties': {
          templateUrl: 'templates/createdparty-detail.html',
          controller: 'CreatedPartyDetailsCtrl'
        }
      }
    })

    .state('main.host.pendingparty-detail', {
      url: '/pendingparty/:partyId',
      views: {
        'tab-viewparties': {
          templateUrl: 'templates/pendingparty-detail.html',
          controller: 'PendingPartyDetailsCtrl'
        }
      }
    })   

    .state('main.host.viewparties', {
      url: '/viewparties',
      views: {
        'tab-viewparties': {
          templateUrl: 'templates/tab-viewparties.html',
          controller: 'ViewPartiesCtrl'
        }
      }
    })    

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('main/host/account');
});

