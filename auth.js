
        var myName = prompt("Enter Your Name")

        function sendMessage(){
            var message = document.getElementById('message').value;

            firebase.database().ref("message").push().set({
                "sender":myName,
                "message": message
            })


            return false;
        }
        firebase.database().ref("message").orderByChild('message').on("child_added",function(snapshot){


            
            var html = "";
            html +="<li>";
                html += snapshot.val().sender + ": " + snapshot.val().message;
            html += "</li>";
            
            document.getElementById("messages").innerHTML += html;
            console.log(html)


        });