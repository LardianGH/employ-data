var config = {
    apiKey: "AIzaSyDQKbPg7RJ8-EZY8ncKG9FNtCqgx7Mw5Cs",
    authDomain: "project-yore-d8dc1.firebaseapp.com",
    databaseURL: "https://project-yore-d8dc1.firebaseio.com",
    projectId: "project-yore-d8dc1",
    storageBucket: "",
    messagingSenderId: "38663053147",
    appId: "1:38663053147:web:94eb7c21c5c5f228"
  };

  firebase.initializeApp(config);

    var database = firebase.database();

    var name = "";
    var role = ""
    var start = "";
    var months = "";
    var rate = "";
    var total = "";

    $("#add-user").on("click", function(event) {
        event.preventDefault();

        name = $("#name-input").val().trim();
        role = $("#name-input").val().trim();
        start = $("#name-input").val().trim();
        rate = $("#name-input").val().trim();

        database.ref().push({
            name: name,
            role: role,
            start: start,
            rate: rate,
          });


    })

    database.ref().on("child_added", function(snapshot) {

        var sv = snapshot.val();

      
        console.log(sv.name);
        console.log(sv.role);
        console.log(sv.start);
        console.log(sv.months);

    })


