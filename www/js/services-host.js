angular.module('host.services', [])

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

.factory('PendingParties', function() {
  var partyRef = new Firebase('https://host-entourage.firebaseio.com/parties');
  var cohostGroupRef = new Firebase('https://host-entourage.firebaseio.com/cohostgroups');
  var allparties;
  partyRef.on('value', function(snapshot) {
    allparties = snapshot.val();
  })
  
  var pendingparties = [
    { id: 0, name: 'Sick Upcoming Party', date: '6/18/14', time: '8:15 PM', attendeeRange: '20-40', address: '1902 Leavenworth, SF', type: 'Party', theme: 'Dance Party', imgUrl: 'sickparty.jpg', 
      host: {name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'},
      cohosts: [
        { id: 0, name: 'Danielle Diamond', accepted: true, imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.deanne'},
        { id: 1, name: 'Buck Wallander', accepted: true, imgUrl: 'buckwallander.jpg', facebook: 'https://www.facebook.com/buck.wallander'}, 
        { id: 2, name: 'Derek Gillaspy', accepted: false, imgUrl: 'derekgillaspy.jpg', facebook: 'fb://'}, 
        { id: 3, name: 'Rayna Roumie', accepted: true, imgUrl: 'raynaroumie.jpg', facebook: 'https://www.facebook.com/rayna.roumie'}
      ]
    }
  ];

// can select existing cohost group or create new cohost group.  If select cohost group, have to pick date for that entourage to occur.

  return {
    all: function() {
      return pendingparties;
    },
    get: function(partyId) {
      return pendingparties[partyId];
    },
    createParty: function(party) {
      var newParty = partyRef.push();
      party['imgUrl'] = 'http://dyersoundworks.com/wp-content/uploads/2014/05/photodune-2755655-party-time-m.jpg' //should this be host picture?
      newParty.set({'cohostGroup': party.cohostGroup.id,'partyID': newParty.name(), 'partyDetails': party})

      //Adds party reference to current cohost model
      var cohostRef = new Firebase('https://host-entourage.firebaseio.com/cohostgroups');
      var currentCohostRef = cohostRef.child(party.cohostGroup.id)
      var partyInfo = currentCohostRef.child('hostedParties');
      partyInfo.push(newParty.name());

      //Adds party reference to user model
      var userRef = new Firebase('https://host-entourage.firebaseio.com/users');
      var currentUserRef = userRef.child(party.cohostGroup.host)
      partyInfo = currentUserRef.child('partiesWhereHost');
      partyInfo.push(newParty.name());      

    }
  }
})

//should get rid of this and combine with PendingParties.  Then create a filter that only shows where all accepted = true

.factory('CreatedParties', function() {
  var createdparties = [
    { id: 0, name: 'Party I Created a Week Ago', date: '6/28/14', time: '8:15 PM', attendeeRange: '20-40', address: '1902 Leavenworth, SF', type: 'Party', theme: 'Dance Party', imgUrl: 'sickparty.jpg',
      host: {name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'},
      cohosts: [
        { id: 0, name: 'Danielle Diamond', accepted: true, imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.deanne'},
        { id: 1, name: 'Buck Wallander', accepted: true, imgUrl: 'buckwallander.jpg', facebook: 'https://www.facebook.com/buck.wallander'}, 
        { id: 2, name: 'Derek Gillaspy', accepted: true, imgUrl: 'derekgillaspy.jpg', facebook: 'fb://'}, 
        { id: 3, name: 'Rayna Roumie', accepted: true, imgUrl: 'raynaroumie.jpg', facebook: 'https://www.facebook.com/rayna.roumie'}
      ]
    }
  ];

  return {
    all: function() {
      return createdparties;
    },
    get: function(partyId) {
      return createdparties[partyId];
    }
  }
})

;