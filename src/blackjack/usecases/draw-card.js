/**
 * Draws a card from the deck
 * @param {Array<String>} deck - The deck of cards
 * @returns {String} The card drawn from the deck
 * @throws {Error} If the deck is empty
 */
export const drawCard = deck => {
  if (deck.length === 0) {
    throw new Error('No hay cartas en la baraja');
  }
  return deck.pop();
};
