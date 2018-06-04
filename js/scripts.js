$(document).ready(function() {
  var suits = ["clubs", "hearts", "spades", "diamonds"];
  var ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

  var addSuits = [];
  var cards = [];
  suits.forEach(function(suit){
      ranks.forEach(function(card) {
        cards.push(card + " of " + suit);
        $("#deck").append("<h1>" + card + " of " + suit + "</h1>");
      });
  });
});
