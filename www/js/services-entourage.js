angular.module('entourage.services', [])

.factory('MyEntourages', function($rootScope, $location, $firebase) {
  var entourageRef = new Firebase('https://host-entourage.firebaseio.com/entourages')
  var partyRef = new Firebase('https://host-entourage.firebaseio.com/parties')
  var entourages = {};
  var currentEntourage = currentEntourage || {};
  // entourageRef.once('value', function(snapshot) {
  //   entourages = snapshot.val();
  // })

  entourageRef.on('value', function(snapshot) {
    entourages = snapshot.val();
  })

  // entourages = $firebase(entourageRef).$asObject();

  return {
    all: function() {
      return entourages;
    },
    mine: function(user) {
      var myEntourages = {};
      for (key in user.entouragesWhereCaptain) {
        myEntourages[user.entouragesWhereCaptain[key]] = entourages[user.entouragesWhereCaptain[key]];
      };
      return myEntourages;
    },
    member: function(user) {
      var memberEntourages = {};
      for (key in user.entouragesWhereMember) {
        memberEntourages[user.entouragesWhereMember[key]] = entourages[user.entouragesWhereMember[key]];
      }

      return memberEntourages;
    },
    get: function(entourageId) {
      return entourages[entourageId]
    },
    addEntourage: function(entourageName, members, newCaptain) {
      var newEntourage = entourageRef.push();
      newEntourage.set({'id': newEntourage.name(), 'name': entourageName, 'members': members, 'captain': newCaptain}, function() {

        var entourageInfo;

        //adds current entourage to Captain's user model
        var userRef = new Firebase('https://host-entourage.firebaseio.com/users');
        var currentUserRef = userRef.child(newCaptain.facebookInfo.id)
        entourageInfo = currentUserRef.child('entouragesWhereCaptain');
        entourageInfo.push(newEntourage.name());   

        //adds current entourage to each member's user model
        for (key in members) {
          var currentMemberRef = userRef.child(members[key].facebookInfo.id);
          entourageInfo = currentMemberRef.child('entouragesWhereMember');
          entourageInfo.push(newEntourage.name());  
        } 

        // Add loading animation.  SetTimout implemented to give firebase time to set currentEntourage.
        window.setTimeout(
          function(){
            $rootScope.$apply(function(){
              $location.path('/main/entourage/viewentourages'); 
            })
          }, 
        1000)
      })
    },
    setCurrent: function(currentGroup, date) {
      currentEntourage = currentGroup;
      currentEntourage.date = date;
    },
    getCurrent: function() {
      return currentEntourage;
    },
    applyToParty: function(entourage, party) {
      var partyId = party.partyID;
      partyRef.child(partyId).child('entouragesApplied').push(entourage);
      entourageRef.child(entourage.id).child('partiesAppliedTo').push(party);
    }
  };
})

.factory('MemberEntourages', function() {
  var memberentourages = {};

  return {
    all: function() {
      return memberentourages;
    },
    get: function(entourageId) {
      return memberentourages[entourageId];
    }
  }
})

.factory('PartySearchResults', function() {
  var parties = {};

  var partiesRef = new Firebase('https://host-entourage.firebaseio.com/parties')
  partiesRef.once('value', function(snapshot) {
    parties = snapshot.val();
  })

  partiesRef.on('value', function(snapshot) {
    parties = snapshot.val();
  })

  return {
    all: function() {
      return parties;
    },
    get: function(partyId) {
      return parties[partyId];
    }
  }
})