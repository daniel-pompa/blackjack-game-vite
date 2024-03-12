/**
 * Displays a message with a delay using the alert function
 * @param {String} message - The message to display
 * @param {Number} delay - The delay in milliseconds before displaying the message
 */
const showMessageWithDelay = (message, delay) => {
  setTimeout(() => {
    alert(message);
  }, delay);
};

/**
 * Determines the winner based on player and dealer scores and displays the result
 * @param {Number} playerScore - The score of the player
 * @param {Number} dealerScore - The score of the dealer
 */
export const determineWinner = (playerScore, dealerScore) => {
  if (playerScore > 21) {
    showMessageWithDelay('El jugador se ha pasado de 21. La banca gana.', 500);
  } else if (dealerScore > 21) {
    showMessageWithDelay('La banca se ha pasado de 21. El jugador gana.', 500);
  } else if (playerScore > dealerScore) {
    showMessageWithDelay('¡El jugador gana!', 500);
  } else if (dealerScore > playerScore) {
    showMessageWithDelay('¡La banca gana!', 500);
  } else {
    showMessageWithDelay('¡Es un empate!', 500);
  }
};
