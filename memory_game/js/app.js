

var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];

var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}


var flipCard = function (cardID) {
    console.log("user flipped " + cardID);
    cardsInPlay.push(cardID);
    checkForMatch();
    //cards[cardID].push()
    // if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    // alert("You found a match!");
    // } else {
    // alert("Sorry, try again");
    // }
}

flipCard(cards[0]);
flipCard(cards[2]);
console.log(cardsInPlay)





// cardsInPlay.push(cards[0]);
// cardsInPlay.push(cards[1]);
// console.log("User Flipped " + cardOne + " and " + cardTwo);

// if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
//     alert("You found a match!");
// } else {
//     alert("Sorry, try again");
// }