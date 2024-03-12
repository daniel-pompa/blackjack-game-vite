import Swal from 'sweetalert2';

/**
 * Displays a message using SweetAlert after a certain delay
 * @param {String} text - The text of the message to be displayed
 * @param {String} icon - The icon to display next to the message. Example: 'success', 'error', 'warning', 'info'
 * @param {Number} delay - The delay in milliseconds before displaying the message
 */
const showMessageWithDelay = (text, icon, delay) => {
  setTimeout(() => {
    Swal.fire({ text, icon });
  }, delay);
};

/**
 * Determines the winner based on player and dealer scores and displays the result
 * @param {Number} playerScore - The score of the player
 * @param {Number} dealerScore - The score of the dealer
 */
export const determineWinner = (playerScore, dealerScore) => {
  if (playerScore > 21) {
    showMessageWithDelay('El jugador se ha pasado de 21. La banca gana.', 'error', 500);
  } else if (dealerScore > 21) {
    showMessageWithDelay('La banca se ha pasado de 21. El jugador gana.', 'success', 500);
  } else if (playerScore > dealerScore) {
    showMessageWithDelay('¡El jugador gana!', 'success', 500);
  } else if (dealerScore > playerScore) {
    showMessageWithDelay('¡La banca gana!', 'error', 500);
  } else {
    showMessageWithDelay('¡Es un empate!', 'info', 500);
  }
};
