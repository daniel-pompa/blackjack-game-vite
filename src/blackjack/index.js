import { calculateHandScore } from './usecases/calculate-score';
import { createDeck } from './usecases/create-deck';
import { dealInitialCards } from './usecases/deal-initial-cards';
import { drawCard } from './usecases/draw-card';

//* Constants
const suits = ['C', 'D', 'H', 'S']; // Define an array of card suits
const specials = ['A', 'J', 'Q', 'K']; // Define an array of special card values

//* Global variables
let deck = []; // Initialize an empty array to hold the deck of cards
let playerHand = []; // Initialize an empty array to hold player's hand
let dealerHand = []; // Initialize an empty array to hold dealer's hand
let playerScore = 0; // Initialize player's score to 0
let dealerScore = 0; // Initialize dealer's score to 0

//* HTML references
const drawCardButton = document.querySelector('#draw-card-button');

// Initializes the game by creating a deck, and dealing initial cards to player and dealer
const initializeGame = () => {
  deck = createDeck(suits, specials);
  dealInitialCards(deck, playerHand, playerScore, dealerHand, dealerScore);
};

//* Event listeners
// Event listener for draw card button
drawCardButton.addEventListener('click', () => {
  const card = drawCard(deck);
  playerHand.push(card);
  playerScore = calculateHandScore(playerHand);
  // TODO render player hand and score in the DOM
  console.log('Mano del jugador:', playerHand);
  console.log('Puntuación del jugador:', playerScore);
  // Check if the player has gone over 21 or has reached 21
  if (playerScore > 21 || playerScore === 21) {
    // TODO disable the buttons for actions
    console.log('Botones deshabilitados');
    if (playerScore > 21) {
      console.log('El jugador se ha pasado de 21. La banca gana.');
    } else {
      // TODO take the dealer's turn
      console.log('Turno de la banca');
    }
  }
});

initializeGame();
