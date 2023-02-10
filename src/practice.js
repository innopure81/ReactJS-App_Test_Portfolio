// const isEven = (dice) => {
//   if ( dice % 2 ) {  
//     return false;
//   } 
//   return true; 
// }
function isEven(dice){
    return (dice % 2)? false : true
}
const MAX = 6;
const dice = Math.floor(Math.random() * MAX + 1);
console.log(`You need to roll an odd number to win:\n
    You roll the dice... It is showing ${dice} ${(dice > 1) ? 'pips' : 'pip'}! -- ${isEven(dice) ? 'Even pips!' : 'Odd pips!'}`);
//
function canVote(age) {
  return (age >= 18) ? true: false;
}
console.log(`Voting Right: ${canVote(15)}`);
//

const lightswitch = {
  switchState: "on",
  flipSwitch() {
      if (this.switchState === "on") {
          this.switchState = "off";
      } else {
          this.switchState = "on";
      }
  }
};
lightswitch.flipSwitch();
lightswitch;
// lightswitch.flipSwitch = function() {
//   (this.switchState === "on") ? this.switchState = "off" : this.switchState = "on";
// };
