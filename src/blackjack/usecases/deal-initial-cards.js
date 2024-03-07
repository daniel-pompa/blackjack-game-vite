import { calculateHandScore } from './calculate-score';
import { renderHand } from './render-card-images';

/**
 * Deals initial cards to the player and dealer, calculates their scores
 * @param {Array<String>} deck - The deck of cards
 * @param {Array<String>} playerHand - The player's hand
 * @param {Number} playerScore - The player's score
 * @param {Array<String>} dealerHand - The dealer's hand
 * @param {Number} dealerScore - The dealer's score
 * @param {HTMLElement[]} cardsContainerHTML - Array of HTML elements to render cards
 * @param {HTMLElement} playerScoreHTML - HTML element to render player score
 * @param {HTMLElement} dealerScoreHTML - HTML element to render dealer score
 */
export const dealInitialCards = (
  deck,
  playerHand,
  playerScore,
  dealerHand,
  dealerScore,
  cardsContainerHTML,
  playerScoreHTML,
  dealerScoreHTML
) => {
  // Deal 2 cards to the player and the dealer
  for (let i = 0; i < 2; i++) {
    playerHand.push(deck.pop());
    dealerHand.push(deck.pop());
  }
  // Calculate player and dealer score
  playerScore = calculateHandScore(playerHand);
  dealerScore = calculateHandScore(dealerHand);
  // Render player and dealer hands and scores in the DOM
  renderHand(playerHand, cardsContainerHTML[0]);
  renderHand(dealerHand, cardsContainerHTML[1]);
  playerScoreHTML.innerText = playerScore;
  dealerScoreHTML.innerText = dealerScore;
  if (playerScore === 21) {
    console.log('¡Blackjack!');
    // TODO Disable the buttons for actions and take the dealer's turn
  }
};
