angular.module('host.services', [])

.factory('CohostGroups', function($rootScope, $location) {
  var cohostGroupRef = new Firebase('https://host-entourage.firebaseio.com/cohostgroups')
  var cohostGroups;
  var currentCohostGroup = {};
  cohostGroupRef.once('value', function(snapshot) {
    cohostGroups = snapshot.val();
  })

  cohostGroupRef.on('value', function(snapshot) {
    cohostGroups = snapshot.val();
  })

  return {
    all: function() {
      return cohostGroups;
    },
    get: function(cohostGroupId) {
      return cohostGroup[cohostGroupId]
    },
    addCohostGroup: function(groupName, newCohosts, newHost) {
      var newCohostGroup = cohostGroupRef.push();
      // currentCohostGroup.name = groupName;
      newCohostGroup.set({'id': newCohostGroup.name(), 'name': groupName, 'cohosts': newCohosts, 'host': newHost.facebookInfo.id}, function() {
        newCohostGroup.once('value', function(snapshot) {
          currentCohostGroup = snapshot.val(); 
        })
      // Add loading animation.  SetTimout implemented to give firebase time to set currentCohostGroup.
        window.setTimeout(
          function(){
            $rootScope.$apply(function(){
              $location.path('/main/host/createparty2'); 
            })
          }, 
        1000)
      })
    },
    setCurrent: function(currentGroup) {
      currentCohostGroup = currentGroup;
    },
    getCurrent: function() {
      return currentCohostGroup;
    }
  };
})

.factory('PendingParties', function($rootScope, $location) {
  var currentUserId;
  var partyRef = new Firebase('https://host-entourage.firebaseio.com/parties/');
  // var cohostGroupRef = new Firebase('https://host-entourage.firebaseio.com/cohostgroups');
  var allparties;
  partyRef.on('value', function(snapshot) {
    allparties = snapshot.val();
  })

  return {
    all: function() {
      return allparties;
    },
    mine: function(user) {
      var myParties = {};
      for (key in user.partiesWhereHost) {
        myParties[user.partiesWhereHost[key]] = allparties[user.partiesWhereHost[key]];
      }  
      return myParties;
    },
    cohost: function(user) {
      var cohostParties = {};
      for (key in user.partiesWhereCohost) {
        myParties[user.partiesWhereCohost[key]] = allparties[user.partiesWhereCohost[key]];
      }

      return cohostParties;
    },
    get: function(partyId) {
      return allparties[partyId];
    },
    createParty: function(party, host) {
      console.log(party);
      var newParty = partyRef.push();
      party['imgUrl'] = 'http://dyersoundworks.com/wp-content/uploads/2014/05/photodune-2755655-party-time-m.jpg' //should this be host picture?
      newParty.set({'partyID': newParty.name(), 'host': host.facebookInfo.id, 'partyDetails': party}, function(){
        $rootScope.$apply(function(){
          $location.path("/main/host/viewparties")  
        });
      })

      //Adds party reference to current cohost model
      // var cohostGroupRef = new Firebase('https://host-entourage.firebaseio.com/cohostgroups');
      // var currentCohostGroupRef = cohostGroupRef.child(party.cohostGroup.id)
      // var partyInfo = currentCohostGroupRef.child('hostedParties');
      // partyInfo.push(newParty.name());

      //Adds party reference to user model
      var userRef = new Firebase('https://host-entourage.firebaseio.com/users');
      var currentUserRef = userRef.child(host.facebookInfo.id)
      partyInfo = currentUserRef.child('partiesWhereHost');
      partyInfo.push(newParty.name());      

      //Adds party reference to each cohost user model
      // for (key in party.cohostGroup.cohosts) {
      //   var currentCohostRef = userRef.child(party.cohostGroup.cohosts[key].facebookInfo.id);
      //   partyInfo = currentCohostRef.child('partiesWhereCohost');
      //   partyInfo.push(newParty.name());  
      // }
    }
  }
})

.factory('AcceptedEntourages', function() {
  // Might use a resource here that returns a JSON array
  var entourages = [
    { id: 0, name: 'Zoe Brigade', numMembers: 4, partyToJoin: 'Party I Created a Week Ago',
      captain: { name: 'Zoe Diamond-Liebeskind', imgUrl: 'zoe.jpg', facebook: 'https://www.facebook.com/zoe.diamondliebeskind'},
      members: [
        { id: 0, name: 'Danielle Diamond', imgUrl: 'daniellediamond.jpg', facebook: 'fb://danielle.deanne'},
        { id: 1, name: 'Derek Gillaspy', imgUrl: 'derekgillaspy.jpg', facebook: 'fb://'},
        { id: 2, name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'fb://profile/9505194'}
      ]
    },
    { id: 1, name: 'We wanna Party', numMembers: 3, partyToJoin: 'Party I Created a Week Ago',
      captain: { name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'},
      members: [
        { id: 0, name: 'Danielle Diamond', imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.deanne'},
        { id: 3, name: 'Zoe Diamond-Liebeskind', imgUrl: 'zoe.jpg', facebook: 'https://www.facebook.com/zoe.diamondliebeskind'}
      ]
    },
    { id: 2, name: 'Dan and Zoe', numMembers: 2, partyToJoin: 'Party I Created a Week Ago',
      captain: { name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'},
      members: [
        { id: 0, name: 'Zoe Diamond-Liebeskind', imgUrl: 'zoe.jpg', facebook: 'https://www.facebook.com/zoe.diamondliebeskind'}
      ]
  },
    { id: 3, name: 'Buck Wants to Have Fun', numMembers: 3, partyToJoin: 'Party I Created a Week Ago',
      captain: { name: 'Buck Wallander', imgUrl: 'buckwallander.jpg', facebook: 'https://www.facebook.com/buck.wallander'},
      members: [
        { id: 0, name: 'Danielle Diamond', imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.deanne'},
        { id: 3, name: 'Zoe Diamond-Liebeskind', imgUrl: 'zoe.jpg', facebook: 'https://www.facebook.com/zoe.diamondliebeskind'}
      ]
  }
  ];

  return {
    all: function() {
      return entourages;
    },
    get: function(entourageId) {
      return entourages[entourageId];
    },
    addToAccepted: function(entourageId) {
      entourages.push(entourageId);
    }
  }
})

.factory('WaitingEntourages', function() {
  var entourages = [
    { id: 0, name: 'Beccas Entourage', numMembers: 3, partyToJoin: 'Party I Created a Week Ago',
      captain: { name: 'Becca Liebeskind', imgUrl: 'beccaliebeskind.jpg', facebook: 'https://www.facebook.com/rebecca.liebeskind'},
      members: [
        { id: 0, name: 'Danielle Diamond', imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.deanne'},
        { id: 2, name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'}
      ]
    },
    { id: 1, name: 'Lauren Wants to Join!', numMembers: 2, partyToJoin: 'Party I Created a Week Ago',
      captain: { name: 'Lauren Everitt', imgUrl: 'laureneveritt.jpg', facebook: 'https://www.facebook.com/lauren.everitt'},
      members: [
        { id: 0, name: 'Buck Wallander', imgUrl: 'buckwallander.jpg', facebook: 'https://www.facebook.com/buck.wallander'},
      ]
    }
  ];

  return {
    all: function() {
      return entourages;
    },
    get: function(entourageId) {
      // Simple index lookup
      return entourages[entourageId];
    },
    removeAccepted: function(entourageObject) {
      var uniqueId = entourageObject.id;
      console.log(uniqueId);
      entourages.shift(); //Need to fix - this is not a legit way to do this
    }
  }
})

;