angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('AcceptedEntourages', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var entourages = [
    { id: 0, name: 'Zoe Diamond-Liebeskind', numMembers: 4, imgUrl: 'zoe.jpg', facebook: 'https://www.facebook.com/zoe.diamondliebeskind',
      members: [
        { id: 0, name: 'Danielle Diamond', imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.deanne'},
        { id: 1, name: 'Derek Gillaspy', imgUrl: 'derekgillaspy.jpg', facebook: 'https://www.facebook.com/Derekewingg'},
        { id: 2, name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'fb://profile/9505194'}
      ]
    },
    { id: 1, name: 'Guy', numMembers: 3, imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind',
      members: [
        { id: 0, name: 'Danielle Diamond', imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.deanne'},
        { id: 3, name: 'Zoe Diamond-Liebeskind', imgUrl: 'zoe.jpg', facebook: 'https://www.facebook.com/zoe.diamondliebeskind'}

      ]
    },
    { id: 2, name: 'Frederique', numMembers: 2, imgUrl: 'frederica.jpg'},
    { id: 3, name: 'Buck Wallander', numMembers: 4, imgUrl: 'buckwallander.jpg'}
  ];

  return {
    all: function() {
      return entourages;
    },
    get: function(entourageId) {
      // Simple index lookup
      return entourages[entourageId];
    }
  }
})

.factory('WaitingEntourages', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var entourages = [
    { id: 0, name: 'Becca Liebeskind', numMembers: 3, imgUrl: 'beccaliebeskind.jpg', facebook: 'https://www.facebook.com/rebecca.liebeskind' ,
      members: [
        { id: 0, name: 'Danielle Diamond', imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.deanne'},
        { id: 2, name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'}
      ]
    },
    { id: 1, name: 'Lauren Everitt', numMembers: 3, imgUrl: 'laureneveritt.jpg' }
  ];

  return {
    all: function() {
      return entourages;
    },
    get: function(entourageId) {
      // Simple index lookup
      return entourages[entourageId];
    }
  }
})

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

.factory('PendingParties', function() {
  var pendingparties = [
    { id: 0, name: 'Sick Upcoming Party', date: '6/18/14', time: '8:15PM', attendeeRange: '20-40', address: '1902 Leavenworth, SF', type: 'Party', theme: 'Dance Party', imgUrl: 'sickparty.jpg'  }
  ];

  return {
    all: function() {
      return pendingparties;
    },
    get: function(partyId) {
      return pendingparties[partyId];
    }
  }
})

.factory('CreatedParties', function() {
  var createdparties = [
    { id: 0, name: 'Party I Created a Week Ago', date: '6/28/14', time: '8:15PM', attendeeRange: '20-40', address: '1902 Leavenworth, SF', type: 'Party', theme: 'Dance Party', imgUrl: 'sickparty.jpg'  }
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