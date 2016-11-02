//back-end


// function diceRoller () {
//   var results ='';
//   var dice1 = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
// }

// //UI
// $(function(){
//   $("#dieRoll").click(function(event){
//     event.preventDefault();
// //var player1 = $("form#form1").val()
//
//
//
// var score =
//
//
//* 6) + 1;
//
//
//
//   });
// });
$(function(){
  $("#dieRoll").click(function(event){
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1;
    die1.innerHTML = d1;
    status.innerHTML = "You rolled "+diceTotal+".";
    // if (d1 === 1) {
    //   status1.innerHTML += " Next player's turn!";
    // }
    event.preventDefault();
  });
});

// //UI
// $(function(){
//
//   $("form#form1").submit(function(event) {
//     event.preventDefault();
//   });
//     $("form#form2").submit(function(event) {
//       event.preventDefault();
//     });
//   });
