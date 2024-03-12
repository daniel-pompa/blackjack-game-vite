/**
 * Extracts the numerical value from a card string
 * @param {String} card - The card string containing the value and suit
 * @returns {Number} - The numerical value of the card
 */
export const getCardValue = card => {
  const value = card.slice(0, -1);
  return isNaN(value) ? (value === 'A' ? 11 : 10) : Number(value);
};
