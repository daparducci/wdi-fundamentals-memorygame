// function createBoard () {
//     for (i=0; i<cards.length; i++)
// }

var cards = [
    {
        rank: "Queen",
        suit: "Hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "Queen",
        suit: "Diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "King",
        suit: "Hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "Queen",
        suit: "Diamonds",
        cardImage: "images/king-of-diamonds.png"
    }

];
var cardsInPlay = [];

var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}


var flipCard = function (cardId) {
    console.log("user flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    checkForMatch();
    //cards[cardID].push()
    // if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    // alert("You found a match!");
    // } else {
    // alert("Sorry, try again");
    // }liv
}

// flipCard(cards[0]);
 flipCard(2);






// cardsInPlay.push(cards[0]);
// cardsInPlay.push(cards[1]);
// console.log("User Flipped " + cardOne + " and " + cardTwo);

// if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
//     alert("You found a match!");
// } else {
//     alert("Sorry, try again");
// }