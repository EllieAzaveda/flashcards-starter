const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/round');

describe('Round', function() {
  let round;
  let deck;

  beforeEach(() => {
    const card1 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck, card1);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should have a deck', () => {
    expect(round.deck).to.be.a('object');
  });

  it('should have a current card', () => {
    expect(round.currentCard).to.be.a('object');
  });

  it('should return current card', () => {
    expect(round.returnCurrentCard()).to.equal(round.currentCard);
  });

// Pretty sure this is wrong
  it('should instantiate a new turn', () => {
    expect(new Turn()).to.be.an.instanceof(Turn);
  });

  it('should increase turn count each time it\'s invoked', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn('bears');
    round.takeTurn('beets');
    round.takeTurn('Battlestar Galactica');

    expect(round.turns).to.equal(3);
  });

// Fix this when you can focus!
  it('should push card id into incorrectGuesses array when guess is incorrect', () => {
    card = new Card(1, 'What is Ellie\'s favorite food?', ['sushi', 'beans', 'tomato pie'], 'sushi');
    turn = new Turn('sushi', card);
    deck = new Deck(card);
    round = new Round(deck, card);

    round.takeTurn('sushi');

    console.log(round.incorrectGuesses);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it.skip('should tell user if guess is incorrect', () => {

  });

  it.skip('should tell user if guess is correct', () => {

  });

  it.skip('should be able to calculate percentage of correct answers', () => {
    round.turns = 4;
    round.incorrectGuesses = 1;

    round.calculatePercentCorrect();
    console.log(round.calculatePercentCorrect());

    expect(round.calculatePercentCorrect()).to.equal(75);
  });

})
