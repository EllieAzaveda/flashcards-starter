const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const prototypeQuestions = require('../src/data');

describe('Game', function() {

  let game;
  let round;
  let deck;
  let cards;

   beforeEach(() => {
     cards = prototypeQuestions.prototypeQuestions;
     deck = new Deck(game.cards);
     round = new Round(deck, game.cards);
     game = new Game();
   });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of the game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

})
