// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('host-entourage', ['ionic', 
  'host.controllers', 'general.controllers', 'entourage.controllers', 'account.controllers', 
  'host.services', 'general.services', 'entourage.services', 'account.services', 'checklist-model'])

.run(function($ionicPlatform, $rootScope, $state, User) {
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
          templateUrl: "templates/host/host.html"  
        }
      }
    })

    .state('main.entourage', {
      url: "/entourage",
      abstract: true,
      views: {
        'menu-content': {
          templateUrl: "templates/entourage/entourage.html"  
        }
      }
    })
    
    .state('main.account', {
      url: "/account",
      abstract: true,
      views: {
        'menu-content': {
          templateUrl: "templates/account/account.html"  
        }
      }
    })

    .state('main.login', {
      url: "/login",
      abstract: true,
      views: {
        'menu-content': {
          templateUrl: "templates/login/login.html"  
        }
      }
    })
/*****************************************/
//Login

.state('main.login.logmein', {
      url: "/logmein",
      views: {
        'tab-login': {
          templateUrl: "templates/login/tab-login.html",
          controller: 'LoginCtrl'
        }
      }
    })

.state('main.login.login-choice', {
      url: "/loginchoice",
      views: {
        'tab-login': {
          templateUrl: "templates/login/login-choice.html",
          controller: 'LoginCtrl'
        }
      }
    })


/*****************************************/
//Account States
    .state('main.account.pastparties', {
      url: '/pastparties',
      views: {
        'tab-pastParties': {
          templateUrl: 'templates/account/tab-pastParties.html',
          controller: 'AccountCtrl'
        }
      }
    })

    .state('main.account.party-detail', {
      url: '/party/:hostId',
      views: {
        'tab-pastParties': {
          templateUrl: 'templates/account/party-detail.html',
          controller: 'PartyCtrl'
        }
      }
    })

    .state('main.account.attended-party-detail', {
      url: '/attendedparty/:attendeeId',
      views: {
        'tab-pastParties': {
          templateUrl: 'templates/account/attended-party-detail.html',
          controller: 'AttendedPartyCtrl'
        }
      }
    }) 

    .state('main.account.myprofile', {
      url: '/myprofile',
      views: {
        'tab-myProfile': {
          templateUrl: 'templates/account/tab-myProfile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('main.account.pastentourages', {
      url: '/pastentourages',
      views: {
        'tab-pastEntourages': {
          templateUrl: 'templates/account/tab-pastEntourages.html',
          controller: 'AccountCtrl'
        }
      }
    })

/*****************************************/
//Entourage States
    .state('main.entourage.createentourage', {
      url: '/createentourage',
      views: {
        'tab-createentourage': {
          templateUrl: 'templates/entourage/tab-createentourage.html',
          controller: 'CreateEntourageCtrl'
        }
      }
    })

    .state('main.entourage.findParties', {
      url: '/findparties',
      views: {
        'tab-findParties': {
          templateUrl: 'templates/entourage/tab-findParties.html',
          controller: 'FindPartiesCtrl'
        }
      }
    })

    .state('main.entourage.partySearchResults', {
      url: '/partysearchresults',
      views: {
        'tab-findParties': {
          templateUrl: 'templates/entourage/partySearchResults.html',
          controller: 'FindPartiesCtrl'
        }
      }
    })

    .state('main.entourage.partySearchResults-detail', {
      url: '/partysearchresults/:partyId',
      views: {
        'tab-findParties': {
          templateUrl: 'templates/entourage/partySearchResults-detail.html',
          controller: 'FindPartiesCtrl'
        }
      }
    })

    .state('main.entourage.viewEntourages', {
      url: '/viewentourages',
      views: {
        'tab-viewEntourages': {
          templateUrl: 'templates/entourage/tab-viewEntourages.html',
          controller: 'ViewEntouragesCtrl'
        }
      }
    })

    .state('main.entourage.memberslocked', {
      url: '/memberslocked/:entourageId',
      views: {
        'tab-viewEntourages': {
          templateUrl: 'templates/entourage/membersLocked-detail.html',
          controller: 'ViewMembersLockedCtrl'
        }
      }
    })

    .state('main.entourage.memberentourages', {
      url: '/memberofentourage/:entourageId',
      views: {
        'tab-viewEntourages': {
          templateUrl: 'templates/entourage/memberOfEntourage-detail.html',
          controller: 'ViewMemberOfEntourageCtrl'
        }
      }
    })

/*****************************************/
//HOST States
    .state('main.host.createparty', {
      url: '/createparty',
      views: {
        'tab-createparty': {
          templateUrl: 'templates/host/tab-createparty.html',
          controller: 'CreateCohostGroupCtrl'
        }
      }
    })

    .state('main.host.createparty2', {
      url: '/createparty2',
      views: {
        'tab-createparty': {
          templateUrl: 'templates/host/createparty2.html',
          controller: 'CreatePartyCtrl'
        }
      }
    })

    .state('main.host.viewparties', {
      url: '/viewparties',
      views: {
        'tab-viewparties': {
          templateUrl: 'templates/host/tab-viewparties.html',
          controller: 'ViewPartiesCtrl'
        }
      }
    })    

    .state('main.host.pendingparty-detail', {
      url: '/pendingparty/:partyId',
      views: {
        'tab-viewparties': {
          templateUrl: 'templates/host/pendingparty-detail.html',
          controller: 'PendingPartyDetailsCtrl'
        }
      }
    })   

    .state('main.host.createdparty-detail', {
      url: '/createdparty/:partyId',
      views: {
        'tab-viewparties': {
          templateUrl: 'templates/host/createdparty-detail.html',
          controller: 'CreatedPartyDetailsCtrl'
        }
      }
    })

    // .state('main.entourage.createentourage2', {
    //   url: '/createentourage2',
    //   views: {
    //     'tab-createentourage': {
    //       templateUrl: 'templates/entourage/createentourage2.html',
    //       controller: 'CreateEntourageCtrl'
    //     }
    //   }
    // })

    // .state('main.entourage.memberspending', {
    //   url: '/memberspending/:entourageId',
    //   views: {
    //     'tab-viewEntourages': {
    //       templateUrl: 'templates/entourage/membersPending-detail.html',
    //       controller: 'ViewMembersPendingCtrl'
    //     }
    //   }
    // })

    // .state('main.host.findentourages', {
    //   url: '/findentourages',
    //   views: {
    //     'tab-findentourages': {
    //       templateUrl: 'templates/host/tab-findentourages.html',
    //       controller: 'FindEntouragesCtrl'
    //     }
    //   }
    // })

    // .state('main.host.waitingentourage-detail', {
    //   url: '/waitingentourage/:entourageId',
    //   views: {
    //     'tab-findentourages': {
    //       templateUrl: 'templates/host/waitingentourage-detail.html',
    //       controller: 'WaitingEntourageDetailCtrl'
    //     }
    //   }
    // })

    // .state('main.host.acceptedentourage-detail', {
    //   url: '/acceptedentourage/:entourageId',
    //   views: {
    //     'tab-findentourages': {
    //       templateUrl: 'templates/host/acceptedentourage-detail.html',
    //       controller: 'AcceptedEntourageDetailCtrl'
    //     }
    //   }
    // })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('main/login/logmein');
});

