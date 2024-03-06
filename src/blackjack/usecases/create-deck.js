/**
 * Creates a deck of cards using the provided suits and specials
 * @param {Array<String>} suits - The array of suits to use in the deck
 * @param {Array<String>} specials - The array of special card names to use
 * @returns {Array<String>} - The shuffled deck of cards
 */
export const createDeck = (suits, specials) => {
  let deck = [];
  suits.forEach(suit => {
    specials.forEach(special => {
      deck.push(`${special}${suit}`);
    });
    for (let i = 2; i <= 10; i++) {
      deck.push(`${i}${suit}`);
    }
  });
  return shuffle(deck);
};

/**
 * Shuffles the elements in an array using the Fisher-Yates algorithm
 * @param {Array<String>} deck - The array to be shuffled
 * @returns {Array<String>} - The shuffled array
 */
const shuffle = deck => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};
