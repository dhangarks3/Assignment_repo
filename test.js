const { expect } = require("chai");
var fs = require("fs");
var chai = require("chai").expect;
var path = require("path");
const teamRcb = require("./player-list.json");
var count = 0;
var count2 = 0;

console.log(
  "*** Vaidating whether RCB team has at least one Wicket-Keeper and only four forgein players ***"
);
console.log("");

for (var j = 0; j < teamRcb.player.length; j++) {
  var playerRole = teamRcb.player[j].role;
  var playerCountry = teamRcb.player[j].country;
  var playerName = teamRcb.player[j].name;

  if (playerRole.includes("Wicket-keeper")) {
    console.log("Wicket-Keeper: " + playerName);
    count++;
  }
  if (playerCountry != "India") {
    count2++;
  }
}

if (count > 0) {
  console.log("1] Team has at least one wicket-Keeper");
} else {
  console.log("1] Team does not have wicket-keeper");
}

if (count2 == 4) {
  console.log("2] Team has only 4 foreign players");
} else {
  console.log("2] Team has more than or less than 4 players");
}

/*Execution Steps:-
1] npm i 
After taking pull in VS code first run command npm i to install the required node modules 
2] node test.js
Then to execute the code run node test.js command. 
*/
