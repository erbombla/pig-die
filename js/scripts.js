//back-end

function Player () {
  this.score = 0
  // this.sides = 6;
  // this.roll = roll;
  // this.tally = tally;
  // this.hold = hold;
  // this.total = total;
}
//
//
// submit function event (dieRoll){
//   d1
//   return Math.floor(Math.random() * 6) + 1);
// }
//
// ...prototype.diceRoll = function(rollDice) {
//   var d1 = Math.floor(Math.random() * 6) + 1);
//   if (d1 > 1) {
//     this.score += d1;
//     return this.score;
//   }
// }
Player.prototype.rollDie = function(){
  return Math.floor((Math.random() * 6) + 1);
}
//front-end

$(function(){
  $("#dieRoll").click(function(event){
    var newPlayer = new Player()
    event.preventDefault();

    newPlayer.turnScore = newPlayer.rollDie();ß

    $("#die1").text(newPlayer.rollDie());

    // rollDice.score = rollDice.diceRoll(rollDice);
  });

});

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
