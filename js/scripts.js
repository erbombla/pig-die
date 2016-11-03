//ass-end

function Player (totalScore, tally) {
  this.totalscore = totalScore;
  this.tally = tally;
}
  Player.prototype.rollDie = function() {
    var rollDie = Math.floor((Math.random() * 6) + 1);
    return rollDie
    this.tally = rollDie + this.tally
  };
  // Player.prototype.Tally = function() {
  // }

var playerOne = Player(0, 0)
var playerTwo = Player(0, 0)

//front-end

$(function(){
  $("#roll-button").click(function(event) {
    event.preventDefault();
    var newPlayer = new Player();
    var rollResult = newPlayer.rollDie();
    $("#die").text(rollResult);
// console.log(this.tally);
//   $("#tally").text(this.tally); {
//     var newPlayer = new Player();
//     var tallyResult = this.tally.rollDie();
//       }

    // $("#hold-button").submit(function(event) {
    // event.preventDefault();
    //var depositTally = parseInt($("#tally").val());
    // Player.rollDie(playerOne, tallyResult);
    //     $("#score1").text(playerOne.tally);
    //
    //     $("#tally").val("");
  });
  function blinker() {
  $('.blink').fadeOut(500);
  $('.blink').fadeIn(500);
}
  setInterval(blinker, 1000);

});
    //
  // $("#hold-button1").click(function(event){
  //   var newPlayer = new Player()
  //   $("#hold1").text(newPlayer.rollDie());
  //
    // rollDice.score = rollDice.diceRoll(rollDice);



    // score = new scoreBoard(score);
      //     $("#score").text(score.balance);
// var dice = myRoll
//   Math.floor(Math.random()1 * 6) + 1);
//   this.sides = 6;
//   this.roll = roll;
//   this.tally = tally;
//   this.hold = hold;
//   this.total = total;
//   }
// //(function roll(Math.floor(Math.random() * 6) + 1) {
// return roll;
// }
// }
// Dice.prototype.diceRoller = function() {
//   var dice = Math.floor(Math.random() * 6) + 1;
//   var

// var d1 = Math.floor(Math.random() * 6) + 1;
// var die1 = document.getElementById("die1");
// var status = document.getElementById("status");
// var diceTotal = d1;
// // die1.innerHTML = d1;
// status.innerHTML = "You rolled "+diceTotal+".";
// if (d1 === 1) {
//   status1.innerHTML += " Next player's turn!";
// }
// Player.prototype.scoreManinpulation = function(d1) {
//
//
//       if(d1 > 1) {
//         this.score += d1;
//         return this.score;
//       }
//
  // if(d1 <= 1 ) {
  //   this.balance -= 0;
  // }
// $(function(){
//   $("#dieRoll").click(function(event){
//     // score = new scoreBoard(score);
//     //     $("#score").text(score.balance);
//     event.preventDefault();
// var tally = ("#hold").add(function(d1 + d1);

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
