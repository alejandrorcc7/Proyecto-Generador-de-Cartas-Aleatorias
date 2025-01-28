window.onload = function() {
  let cardNumber = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suit = ["Spades", "Diamonds", "Clubs", "Hearts"];
  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomSuitNumber = Math.floor(Math.random() * suit.length);
  let finalSuit = suit[randomSuitNumber];

  document.getElementById("cardContent").innerHTML =
    cardNumber[randomCardNumber];
  document.getElementById("cardUni").className = "";
  document.getElementById("cardUni").classList.add("card");
  document.getElementById("cardUni").classList.add(getSuiteClass(finalSuit));
};

function getSuiteClass(suit) {
  switch (suit) {
    case "Diamonds":
      return "suit-diamonds";
    case "Spades":
      return "suit-spades";
    case "Hearts":
      return "suit-hearts";
    case "Clubs":
      return "suit-clubs";
  }
}
