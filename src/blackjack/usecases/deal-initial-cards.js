import { calculateHandScore } from './calculate-score';

/**
 * Deals initial cards to the player and dealer, calculates their scores
 * @param {Array<String>} deck - The deck of cards
 * @param {Array<String>} playerHand - The player's hand
 * @param {Number} playerScore - The player's score
 * @param {Array<String>} dealerHand - The dealer's hand
 * @param {Number} dealerScore - The dealer's score
 */
export const dealInitialCards = (
  deck,
  playerHand,
  playerScore,
  dealerHand,
  dealerScore
) => {
  // Deal 2 cards to the player and the dealer
  for (let i = 0; i < 2; i++) {
    playerHand.push(deck.pop());
    dealerHand.push(deck.pop());
  }
  // Calculate player and dealer score
  playerScore = calculateHandScore(playerHand);
  dealerScore = calculateHandScore(dealerHand);
  // TODO render player and dealer hands and scores in the DOM
  console.log('Mano del jugador:', playerHand);
  console.log('Puntuación del jugador:', playerScore);
  console.log('Mano del crupier:', dealerHand);
  console.log('Puntuación del crupier:', dealerScore);
  if (playerScore === 21) {
    console.log('¡Blackjack!');
    // TODO disable the buttons for actions and take the dealer's turn
  }
};
