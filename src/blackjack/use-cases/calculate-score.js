import { getCardValue } from './';

/**
 * Check if a card is an Ace
 * @param {string} card - A card value
 * @returns {boolean} - True if the card is an Ace, false otherwise
 */
const isAce = card => {
  return card.startsWith('A');
};

/**
 * Calculate total score based on the hand of cards provided
 * @param {Array<string>} hand - An array of cards
 * @returns {Number} - Total score calculated from the hand
 */
export const calculateHandScore = hand => {
  let totalScore = 0;
  let numberOfAces = 0;
  // Calculate total score and count Aces
  hand.forEach(card => {
    if (isAce(card)) numberOfAces++;
    totalScore += getCardValue(card);
  });
  // Adjust score for Aces
  for (let i = 0; i < numberOfAces; i++) {
    if (totalScore > 21) totalScore -= 10; // If adding 11 would exceed 21, use Ace as 1
  }
  return totalScore;
};
