Parse.initialize(
  "x656evtbE3fCHZGtX0uuUTdDqrFleFKWCzsMqLMl", "Dyb57XkI6FONljsju5hNNeLDA8sc0rAAVEZl7f9F"
);

var TestObject = Parse.Object.extend("TestObject");

var user = new Parse.User();
user.set("username", "whatever");
user.set("password", "somepassword");
user.set("email", "somethingsick@example.com");
  
// other fields can be set just like with Parse.Object
user.set("phone", "650-555-0000");
  
user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});