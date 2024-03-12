import { calculateHandScore, determineWinner, renderHand } from './';

/**
 * Simulates the dealer's turn
 * @param {Array<String>} deck - The deck of cards
 * @param {Array<String>} dealerHand - The dealer's hand of cards
 * @param {HTMLElement} cardsContainerHTML - The HTML element to render the dealer's cards
 * @param {HTMLElement} dealerScoreHTML - The HTML element to display the dealer's score
 * @param {Number} dealerScore - The current score of the dealer's hand
 * @param {Number} minScore - The minimum score the dealer must achieve
 * @throws {Error} - If any of the required parameters is missing
 */
export const dealerTurn = (
  deck,
  dealerHand,
  cardsContainerHTML,
  dealerScoreHTML,
  dealerScore,
  minScore
) => {
  if (!deck) throw new Error('Se requiere el mazo de cartas');
  if (minScore === undefined) throw new Error('Se requiere la puntuación mínima');
  if (dealerScore === undefined) throw new Error('Se requiere la puntuación del crupier');
  if (!dealerHand) throw new Error('Se requiere la mano del crupier');
  if (!cardsContainerHTML) throw new Error('Se requiere el contenedor de las cartas');
  if (!dealerScoreHTML) throw new Error('Se requiere el contenedor de la puntuación del crupier');
  // Dealer draws cards until the minimum score is achieved
  do {
    const card = deck.pop();
    dealerHand.push(card);
    dealerScore = calculateHandScore(dealerHand);
    renderHand(dealerHand, cardsContainerHTML);
    dealerScoreHTML.innerText = dealerScore;
    // If the minimum score exceeds 21, stop drawing cards
    if (minScore > 21) break;
  } while (dealerScore < minScore && minScore <= 21);
  determineWinner(minScore, dealerScore);
};
