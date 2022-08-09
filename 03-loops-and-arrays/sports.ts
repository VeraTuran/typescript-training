let sportsOne: string[] = ["Ultimate", "Ballet", "Curling", "Ice Skating"];

// classic for loop
/* for (let i=0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
} */

// simplified for loop
for (let tempSport of sportsOne) {
  if (tempSport == "Ultimate") {
    console.log(tempSport + " <-- my favourite sport!");
  } else {
    console.log(tempSport);
  }
}
