/**
 * Creates a deck of cards based on the provided suits and special cards
 *
 * @param {Array<String>} suits - An array of suits for the deck
 * @param {Array<String>} specials - An array of special cards for the deck
 * @returns {Array<String>} - A shuffled deck of cards
 * @throws {Error} - If suits or specials are not provided, or if they are not arrays
 */
export const createDeck = (suits, specials) => {
  // Validate input suits and specials cards
  if (!suits || suits.length === 0) {
    throw new Error('Debe proporcionar los palos de la baraja');
  }
  if (!specials || specials.length === 0) {
    throw new Error('Debe proporcionar las cartas especiales de la baraja');
  }
  if (!Array.isArray(suits) || !Array.isArray(specials)) {
    throw new Error('Los palos y las cartas especiales de la baraja deben ser arrays');
  }
  // Create a new deck of cards
  let deck = [];
  suits.forEach(suit => {
    specials.forEach(special => {
      deck.push(`${special}${suit}`);
    });
    for (let i = 2; i <= 10; i++) {
      deck.push(`${i}${suit}`);
    }
  });
  // Shuffle the deck before returning
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
