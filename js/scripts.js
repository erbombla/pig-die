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
function scoreBoard(player1Score ) {
  // this.playerScore = ;
  this.player1Score = 0
}

scoreBoard.prototype.scoreManinpulation = function(d1) {
  var d1 = Math.floor(Math.random() * 6) + 1;
    if(d1 > 1) {
      this.player1Score += d1;
      return this.player1Score;
    }
//console.log(scoreBoard);
  // if(d1 <= 1 ) {
  //   this.balance -= 0;
  // }
}

debugger;

$(function(){
  $("#dieRoll").click(function(event){
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1;
    var player1Score;
    var initScore;
    die1.innerHTML = d1;
    status.innerHTML = "You rolled "+diceTotal+".";
    // if (d1 === 1) {
    //   status1.innerHTML += " Next player's turn!";
    // }
    event.preventDefault();

player1Score = new scoreBoard(player1Score, initScore);
    $("#score").text(player1Score.balance);
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
