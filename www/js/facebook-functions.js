var FBlogin = function(){
  FB.login(function(response){
    FB.api('/v1.0/me', {
      fields: ['id', 'name', 'first_name', 'last_name', 'link', 'gender', 'locale', 'age_range', 'email', 'birthday', 'picture']
    }, function(response) {
      FBfriends();
      console.log(response);
    })},{scope: ['public_profile', 'email', 'user_friends', 'user_events']}
  );
};

var FBfriends = function() { // With v2 of Facebook's Api, this now only returns friends that already use the app.
  FB.api('/v1.0/me/friends', {
    fields: ['id', 'name', 'first_name', 'last_name', 'link', 'gender', 'locale', 'age_range', 'email', 'birthday', 'picture']
    }, function(response) {
      console.log(response);
    }
  )
}
            
    