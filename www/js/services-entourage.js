angular.module('entourage.services', [])

.factory('MyEntourages', function($rootScope, $location) {
  var entourageRef = new Firebase('https://host-entourage.firebaseio.com/entourages')
  var entourages;
  var currentEntourage = {};
  entourageRef.once('value', function(snapshot) {
    entourages = snapshot.val();
  })

  entourageRef.on('value', function(snapshot) {
    entourages = snapshot.val();
  })

  return {
    all: function() {
      return entourages;
    },
    get: function(entourageId) {
      return entourage[entourageId]
    },
    addEntourage: function(entourageName, members, newCaptain, date) {
      var newEntourage = entourageRef.push();
      newEntourage.set({'id': newEntourage.name(), 'name': entourageName, 'members': members, 'captain': newCaptain.facebookInfo.id, 'date': date}, function() {
        newEntourage.once('value', function(snapshot) {
          currentEntourage = snapshot.val(); 
        })
      // Add loading animation.  SetTimout implemented to give firebase time to set currentEntourage.
        window.setTimeout(
          function(){
            $rootScope.$apply(function(){
              $location.path('/main/entourage/findparties'); 
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
    }
  };
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