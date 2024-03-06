import { createDeck } from './usecases/create-deck';
import { dealInitialCards } from './usecases/deal-initial-cards';

//* Global variables
let deck = []; // Initialize an empty array to hold the deck of cards
const suits = ['C', 'D', 'H', 'S']; // Define an array of card suits
const specials = ['A', 'J', 'Q', 'K']; // Define an array of special card values
let playerHand = []; // Initialize an empty array to hold player's hand
let dealerHand = []; // Initialize an empty array to hold dealer's hand
let playerScore = 0; // Initialize player's score to 0
let dealerScore = 0; // Initialize dealer's score to 0

// Initializes the game by creating a deck, and dealing initial cards to player and dealer
const initializeGame = () => {
  deck = createDeck(suits, specials);
  dealInitialCards(deck, playerHand, playerScore, dealerHand, dealerScore);
};

initializeGame();
