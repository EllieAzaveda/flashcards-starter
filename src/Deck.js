class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  addCard(card) {
    this.cards.push(card);
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
