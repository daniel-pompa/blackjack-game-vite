/**
 * Renders the hand of cards in the specified container
 * @param {Array<String>} hand - An array of card values
 * @param {HTMLElement} container - The container element to render the cards
 */
export const renderHand = (hand, container) => {
  // Clean up the container before rendering the cards
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Render each card in the hand
  hand.forEach(card => {
    const cardImage = document.createElement('img');
    cardImage.src = `/assets/cards/${card}.png`;
    cardImage.classList.add('card');
    container.appendChild(cardImage);
  });
};
