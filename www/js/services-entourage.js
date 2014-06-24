angular.module('entourage.services', [])

.factory('PendingEntourages', function() {
  var pendingentourages = [
    { id: 0, name: "Daniel's Entourage", date: '6/26/14', 
      captain: {name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'},
      members: [
        {id: 0, name: 'Danielle Diamond', accepted: true, imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.diamond'}, 
        {id: 1, name: 'Derek Gillaspy', accepted: false, imgUrl: 'derekgillaspy.jpg', facebook: 'https://www.facebook.com/derek.gillaspy'}, 
        {id: 2, name: 'Rayna Roumie', accepted: true, imgUrl: 'raynaroumie.jpg', facebook: 'https://www.facebook.com/rayna.roumie'}
      ]
    },
    { id: 1, name: "My Awesome Entourage", date: '6/27/14', 
      captain: {name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'},
      members: [
        {id: 0, name: 'Danielle Diamond', accepted: true, imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.diamond'}, 
        {id: 1, name: 'Derek Gillaspy', accepted: false, imgUrl: 'derekgillaspy.jpg', facebook: 'https://www.facebook.com/derek.gillaspy'}, 
        {id: 2, name: 'Rayna Roumie', accepted: true, imgUrl: 'raynaroumie.jpg', facebook: 'https://www.facebook.com/rayna.roumie'}
      ]
    }
  ];

  return {
    all: function() {
      return pendingentourages;
    },
    get: function(entourageId) {
      return pendingentourages[entourageId];
    },
    addNewEntourage: function(newEntourage) {
      pendingentourages.push({ id: pendingentourages.length, members: newEntourage, 
      	captain: { name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'}
      });
    },
    createEntourage: function(entourage) {
      for (prop in entourage) {
        pendingentourages[pendingentourages.length-1][prop] = entourage[prop]; 
      }
    }
  }
})

.factory('PendingEntourages', function() {
  var pendingentourages = [
    { id: 0, name: "Daniel's Entourage", date: '6/26/14', 
      captain: {name: 'Daniel Liebeskind', imgUrl: 'danliebeskind.jpg', facebook: 'https://www.facebook.com/daniel.liebeskind'},
      members: [
        {id: 0, name: 'Danielle Diamond', accepted: true, imgUrl: 'daniellediamond.jpg', facebook: 'https://www.facebook.com/danielle.diamond'}, 
        {id: 1, name: 'Derek Gillaspy', accepted: false, imgUrl: 'derekgillaspy.jpg', facebook: 'https://www.facebook.com/derek.gillaspy'}, 
        {id: 2, name: 'Rayna Roumie', accepted: true, imgUrl: 'raynaroumie.jpg', facebook: 'https://www.facebook.com/rayna.roumie'}
      ]
    }
  ]
})