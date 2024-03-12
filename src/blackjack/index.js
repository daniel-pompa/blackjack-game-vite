import {
  calculateHandScore,
  createDeck,
  dealInitialCards,
  dealerTurn,
  determineWinner,
  drawCard,
  renderHand,
} from './use-cases';

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
const standButton = document.querySelector('#stand-button');
const newGameButton = document.querySelector('#new-game-button');
const cardsContainerHTML = document.querySelectorAll('.cards-container');
const [playerScoreHTML, dealerScoreHTML] = document.querySelectorAll('span');

// Initializes the game by creating a deck, and dealing initial cards to player and dealer
const initializeGame = () => {
  resetGame();
  deck = createDeck(suits, specials);
  dealInitialCards(
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
  );
};

//* Event listeners
// Event listener for when the draw card button is clicked
drawCardButton.addEventListener('click', () => {
  const card = drawCard(deck);
  playerHand.push(card);
  playerScore = calculateHandScore(playerHand);
  renderHand(playerHand, cardsContainerHTML[0]);
  playerScoreHTML.innerText = playerScore;
  if (playerScore > 21) {
    drawCardButton.disabled = true;
    standButton.disabled = true;
    determineWinner(playerScore, dealerScore);
  } else if (playerScore === 21) {
    drawCardButton.disabled = true;
    standButton.disabled = true;
    dealerTurn(
      deck,
      dealerHand,
      cardsContainerHTML[1],
      dealerScoreHTML,
      dealerScore,
      playerScore
    );
  }
});

// Event listener for when the stand button is clicked
standButton.addEventListener('click', () => {
  drawCardButton.disabled = true;
  standButton.disabled = true;
  playerScore = calculateHandScore(playerHand);
  dealerScore = calculateHandScore(dealerHand);
  if (dealerScore > playerScore || (playerScore === dealerScore && dealerScore >= 17)) {
    determineWinner(playerScore, dealerScore);
  } else {
    dealerTurn(
      deck,
      dealerHand,
      cardsContainerHTML[1],
      dealerScoreHTML,
      dealerScore,
      playerScore
    );
  }
});

// Event listener for when the new game button is clicked
newGameButton.addEventListener('click', initializeGame);

// Reset the game state
const resetGame = () => {
  deck = [];
  playerHand = [];
  dealerHand = [];
  playerScore = 0;
  dealerScore = 0;
  playerScoreHTML.innerText = playerScore;
  dealerScoreHTML.innerText = dealerScore;
  cardsContainerHTML.forEach(container => (container.innerHTML = ''));
  drawCardButton.disabled = false;
  standButton.disabled = false;
};

initializeGame();
