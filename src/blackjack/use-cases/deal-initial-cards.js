import { calculateHandScore, dealerTurn, determineWinner, renderHand } from './';

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
 * @param {HTMLButtonElement} drawCardButton - HTML button for drawing a card
 * @param {HTMLButtonElement} standButton - HTML button for standing
 */
export const dealInitialCards = (
  deck,
  playerHand,
  playerScore,
  dealerHand,
  dealerScore,
  cardsContainerHTML,
  playerScoreHTML,
  dealerScoreHTML,
  drawCardButton,
  standButton
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
  if (playerScore === 21 && dealerScore === 21) {
    drawCardButton.disabled = true;
    standButton.disabled = true;
    determineWinner(playerScore, dealerScore);
    return;
  }
  if (playerScore === 21) {
    drawCardButton.disabled = true;
    standButton.disabled = true;
    setTimeout(
      () =>
        dealerTurn(
          deck,
          dealerHand,
          cardsContainerHTML[1],
          dealerScoreHTML,
          dealerScore,
          playerScore
        ),
      1000
    );
  }
};
