import { createDeck } from './usecases/create-deck';

//* Global variables
let deck = [];
const suits = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

deck = createDeck(suits, specials);

console.log(deck);
