var config = {
  apiKey: "AIzaSyCNnK2Ov2B25tpBRbjGXxabroetentzhLk",
  authDomain: "group-timesheet-e38f8.firebaseapp.com",
  databaseURL: "https://group-timesheet-e38f8.firebaseio.com",
  projectId: "group-timesheet-e38f8",
  storageBucket: "",
  messagingSenderId: "23194750837",
  appId: "1:23194750837:web:f4e659b3140573c7"
};

firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = ""
var start = "";
var rate = "";

$("#add-user").on("click", function (event) {
  event.preventDefault();

        name = $("#name").val().trim();
        role = $("#role").val().trim();
        start = $("#startDate").val().trim();
        rate = $("#rate").val().trim();

  database.ref().push({
    name: name,
    role: role,
    start: start,
    rate: rate,
  });


})

database.ref().on("child_added", function (snapshot) {

  var sv = snapshot.val();
  console.log(sv.name);
  console.log(sv.role);
  console.log(sv.start);
  console.log(sv.months);

})


