var sportsOne = ["Ultimate", "Ballet", "Curling", "Ice Skating"];
// classic for loop
/* for (let i=0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
} */
// simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Ultimate") {
        console.log(tempSport + " <-- my favourite sport!");
    }
    else {
        console.log(tempSport);
    }
}
