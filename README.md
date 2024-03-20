# Blackjack Game

Rules of the game

Two cards are dealt to each player, with the dealer being the last to play. Players can draw cards whenever they want, as long as they don't go over 21, which means they will have lost the hand. They can stand at any time they want, although they usually stand when they get a number close to 21.

Numerical values of the cards

- Each card numbered 2 to 10 (2, 3, 4, 5, 6, 7, 8, 9, 10) will have a value identical to its numerical value.

- The figures (Jacks, Queens and Kings) are all worth 10 points.

- Aces can be worth either 1 or 11 points, depending on what is most convenient for a particular hand.

For example, an Ace and a Jack are equivalent to an automatic Blackjack.

## Description

This is a Blackjack game implemented using Vite, HTML, CSS, JavaScript, and Bootstrap.

The game simulates a casino environment where you can play Blackjack against the computer. Test your luck and see if you can beat the dealer!

## Features

- **Classic gameplay:** Play the classic Blackjack game against the computer.
- **Responsive design:** The game is built with Bootstrap, ensuring compatibility with various screen sizes and devices.
- **Simple interface:** Intuitive controls and clear instructions make it easy for players.
- **Win/Lose feedback:** Receive instant feedback on your actions, such as winning or losing a hand.

## Project structure

```bash
├───📁 public/
│   └───📁 assets/
│       ├───📁 cards/
│       ├───📁 css/
│       └───📁 images/
├───📁 src/
│   └───📁 blackjack/
│       ├───📁 use-cases/
│       └───📄 index.js
├───📄 index.html
├───📄 LICENSE
├───📄 main.js
├───📄 package-lock.json
├───📄 package.json
├───📄 README.md
└───📄 style.css
```

## Technologies used

[<img src="/public/assets/images/vite.svg" width="40" height="40" alt="Vite" />](https://vitejs.dev/)
[<img src="/public/assets/images/html.svg" width="40" height="40" alt="HTML5" />](https://developer.mozilla.org/en-US/docs/Web/HTML)
[<img src="/public/assets/images/css.svg" width="40" height="40" alt="CSS3" />](https://developer.mozilla.org/en-US/docs/Web/CSS)
[<img src="/public/assets/images/bootstrap.svg" width="38" height="40" alt="Bootstrap" />](https://getbootstrap.com/)
[<img src="/public/assets/images/javascript.svg" width="38" height="40" alt="JavaScript" />](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Requirements

Before running the game, make sure you have it installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/) or any other editor we like.

[![Node.js](https://img.shields.io/badge/node-v18.14.1-green)](https://nodejs.org/es) [![NPM](https://img.shields.io/badge/npm-v9.3.1-red)](https://www.npmjs.com/)

## Installation

1. Clone this repository on your local machine using the following command:

```bash
git clone https://github.com/daniel-pompa/blackjack-game-vite.git
```

2. Navigate to the project directory:

```bash
cd blackjack-game-vite
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your web browser and navigate to `http://localhost:5173/` to play the game.

## How to play

1. **Make your moves:** Click "Draw card" to draw another card or "Stand" to keep your current hand.
2. **Dealer's turn:** Once you've chosen to stand, the dealer will reveal their hand and draw cards until they reach 17 or bust.
3. **Outcome:** If your hand beats the dealer's without going over 21, you win! Otherwise, the dealer wins.

## Demo

You can try the game here: [Blackjack](https://blackjack-21.netlify.app/)

## Contributing

Contributions are always welcome!

If you have any suggestions, bug reports, or contributions you would like to make, please feel free to open an issue or create a pull request.

Please follow these steps:

1. Fork the repository.

2. Create your feature branch:

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```bash
git commit -am 'add some feature'
```

4. Push to the branch:

```bash
git push origin feature/your-feature-name
```

5. Submit a pull request.

I will do my best to review your changes as soon as possible.

## Author

This game was developed by Daniel Pompa Pareja.

Enjoy playing! 🃏🎲

## License

This project is licensed under the MIT License.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
