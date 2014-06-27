var FBlogin = function(){
  FB.login(function(response){
    FB.api('/me', {
      fields: ['id', 'name', 'first_name', 'last_name', 'link', 'gender', 'locale', 'age_range', 'email', 'birthday', 'picture']
    }, function(response) {
      console.log(response);
      FBfriends()
    })},{scope: ['public_profile', 'email', 'user_friends', 'user_events']}
  );
};

var FBfriends = function() {
  FB.api('/me/friends', function(response) {
    if (response && !response.error) {
      console.log(response);
    }
  })
}
            
    