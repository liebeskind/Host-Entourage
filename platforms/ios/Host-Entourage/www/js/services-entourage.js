angular.module('entourage.services', [])

.factory('MyEntourages', function() {
  var myentourages = [
    { id: 0, name: "Daniel's Entourage", date: '6/26/14', locked: false,
      captain: {name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'},
      members: [
        {id: 0, name: 'Danielle Diamond', accepted: true, imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.diamond'}, 
        {id: 1, name: 'Derek Gillaspy', accepted: false, imgUrl: 'derekgillaspy.jpg', facebook: 'https://www.facebook.com/derek.gillaspy'}, 
        {id: 2, name: 'Rayna Roumie', accepted: true, imgUrl: 'raynaroumie.jpg', facebook: 'https://www.facebook.com/rayna.roumie'}
      ],
      parties: [
      ]
    },
    { id: 1, name: "My Awesome Entourage", date: '6/27/14', locked: true, 
      captain: {name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'},
      members: [
        {id: 0, name: 'Danielle Diamond', accepted: true, imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.diamond'}, 
        {id: 1, name: 'Derek Gillaspy', accepted: false, imgUrl: 'derekgillaspy.jpg', facebook: 'https://www.facebook.com/derek.gillaspy'}, 
        {id: 2, name: 'Rayna Roumie', accepted: true, imgUrl: 'raynaroumie.jpg', facebook: 'https://www.facebook.com/rayna.roumie'}
      ],
      parties: [
      ]
    }
  ];

  var selectedEntourage = {}

  return {
    all: function() {
      return myentourages;
    },
    get: function(entourageId) {
      return myentourages[entourageId];
    },
    addNewEntourage: function(newEntourage) {
      myentourages.push({ id: myentourages.length, members: newEntourage, 
      	captain: { name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'}
      });
    },
    createEntourage: function(entourage) {
      for (prop in entourage) {
        myentourages[myentourages.length-1][prop] = entourage[prop]; 
      }
    },
    applyToParty: function(entourage, party) {
      myentourages[0].parties.push(party); //Need to select correct entourage.  Need to push in partyId instead.
    },
    selectEntourage: function(entourage) {
      selectedEntourage = entourage || selectedEntourage;
      return selectedEntourage;
    }
  }
})

.factory('MemberEntourages', function() {
  var memberentourages = [
    { id: 0, name: "Derek's Entourage", date: '6/26/14', locked: false,
      captain: {name: 'Derek Gillaspy', imgUrl: 'derekgillaspy.jpg', facebook: 'https://www.facebook.com/derek.gillaspy'},
      members: [
        {id: 0, name: 'Daniel Liebeskind', accepted: true, imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'}, 
        {id: 1, name: 'Derek Gillaspy', accepted: false, imgUrl: 'derekgillaspy.jpg', facebook: 'https://www.facebook.com/derek.gillaspy'}, 
        {id: 2, name: 'Rayna Roumie', accepted: true, imgUrl: 'raynaroumie.jpg', facebook: 'https://www.facebook.com/rayna.roumie'}
      ]
    },
    { id: 1, name: "Danielle's Entourage", date: '6/27/14', locked: true, 
      captain: {name: 'Danielle Diamond', imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.diamond'},
      members: [
        {id: 0, name: 'Daniel Liebeskind', accepted: true, imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'}, 
        {id: 1, name: 'Derek Gillaspy', accepted: false, imgUrl: 'derekgillaspy.jpg', facebook: 'https://www.facebook.com/derek.gillaspy'}, 
        {id: 2, name: 'Rayna Roumie', accepted: true, imgUrl: 'raynaroumie.jpg', facebook: 'https://www.facebook.com/rayna.roumie'}
      ]
    }
  ];

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
  var parties = [
    { id: 0, name: 'Sick Upcoming Party', date: '6/26/14', time: '8:15 PM', attendeeRange: '20-40', address: '1902 Leavenworth, SF', type: 'Party', theme: 'Dance Party', imgUrl: 'sickparty.jpg', 
      host: {name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'},
      cohosts: [
        { id: 0, name: 'Danielle Diamond', accepted: true, imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.deanne'},
        { id: 1, name: 'Buck Wallander', accepted: true, imgUrl: 'buckwallander.jpg', facebook: 'https://www.facebook.com/buck.wallander'}, 
        { id: 2, name: 'Derek Gillaspy', accepted: false, imgUrl: 'derekgillaspy.jpg', facebook: 'fb://'}, 
        { id: 3, name: 'Rayna Roumie', accepted: true, imgUrl: 'raynaroumie.jpg', facebook: 'https://www.facebook.com/rayna.roumie'}
      ]
    },
    { id: 1, name: 'Party I Created a Week Ago', date: '6/27/14', time: '8:15 PM', attendeeRange: '20-40', address: '1902 Leavenworth, SF', type: 'Party', theme: 'Dance Party', imgUrl: 'sickparty.jpg',
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
      return parties;
    },
    get: function(partyId) {
      return parties[partyId];
    }
  }
})