var config = {
  apiKey: "AIzaSyBiQCsDUjJilrvweoED7m46QqwzKHnTUno",
  authDomain: "bootcamp-f7917.firebaseapp.com",
  databaseURL: "https://bootcamp-f7917.firebaseio.com",
  projectId: "bootcamp-f7917",
  storageBucket: "",
  messagingSenderId: "769832395610",
  appId: "1:769832395610:web:654fe91e37a4b1cb"
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

  console.log(name, role, start, rate);

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


