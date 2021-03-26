const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    const cardInfo = prototypeQuestions.map(card => {
       card = new Card(card.id, card.question, card.answers, card.correctAnswer);
       return card;
     });

    const deck = new Deck(cardInfo);

    this.currentRound = new Round(deck);

    this.printMessage(deck);
    this.printQuestion(this.currentRound);
  }


  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}


module.exports = Game;
