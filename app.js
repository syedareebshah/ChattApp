function Fb_Login(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user.displayName)
        window.location = "second.html"        
      }).catch(function(error) {
        console.log(error.message)
      });
      
      
}
        

        


