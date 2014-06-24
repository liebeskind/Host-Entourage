angular.module('entourage.services', [])

.factory('PendingEntourages', function() {
  var pendingentourages = [
    { id: 0, name: "Daniel's Entourage", expires: '6/26/14', 
      entourageMembers: [
        {name: 'Danielle Diamond', accepted: true}, 
        {name: 'Derek Gillaspy', accepted: false}, 
        {name: 'Rayna Roumie', accepted: true}
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
      pendingentourages.push({id: pendingentourages.length, entourageMembers: newEntourage});
    },
    createEntourage: function(entourage) {
      for (prop in entourage) {
        pendingentourages[pendingentourages.length-1][prop] = entourage[prop]; 
      }
    }
  }
});