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
    this.rounds = 0;
  }

  start() {
    this.rounds++;

    const cardInfo = prototypeQuestions.map((info) => {
       let card = new Card(info.id, info.question, info.answers, info.correctAnswer);
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
