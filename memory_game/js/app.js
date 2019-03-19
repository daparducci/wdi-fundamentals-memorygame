

var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];


cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[1]);
console.log("User Flipped " + cardOne + " and " + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
    alert("Sorry, try again");
}