// Variables globales
const suits = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jota', 'Reina', 'Rey', 'As'];
const cards = [];
let playerCards = [];
let dealerCards = [];
let playerScore = 0;
let dealerScore = 0;
let gameOver = false;

// Función para crear una baraja
function createDeck() {
  for (let suit of suits) {
    for (let value of values) {
      cards.push({ suit, value });
    }
  }
}

// Función para mezclar la baraja
function shuffleDeck() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

// Función para repartir cartas
function deal() {
  if (!gameOver) {
    const playerCard = cards.pop();
    playerCards.push(playerCard);
    const dealerCard = cards.pop();
    dealerCards.push(dealerCard);
    updateScores();
    updateCards();
    checkBlackjack();
  }
}

// Función para pedir carta
function hit() {
  if (!gameOver) {
    const playerCard = cards.pop();
    playerCards.push(playerCard);
    updateScores();
    updateCards();
    checkBust();
  }
}

// Función para plantarse
function stand() {
  if (!gameOver) {
    while (dealerScore < 17) {
      const dealerCard = cards.pop();
      dealerCards.push(dealerCard);
      updateScores();
      updateCards();
    }
    checkResult();
  }
}

// Función para actualizar las puntuaciones
function updateScores() {
  playerScore = calculateScore(playerCards);
  dealerScore = calculateScore(dealerCards);
  document.getElementById('player-score').textContent = `Puntuación: ${playerScore}`;
  document.getElementById('dealer-score').textContent = `Puntuación: ${dealerScore}`;
}

// Función para calcular la puntuación de una mano
function calculateScore(hand) {
  let score = 0;
  let hasAce = false;
  for (let card of hand) {
    score += getValue(card.value);
    if (card.value === 'As') {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    score += 10;
  }
  return score;
}

// Función para obtener el valor numérico de una carta
function getValue(cardValue) {
  if (cardValue === 'Jota' || cardValue === 'Reina' || cardValue === 'Rey') {
    return 10;
  } else if (cardValue === 'As') {
    return 1;
  } else {
    return parseInt(cardValue);
  }
}

// Función para actualizar las cartas en la interfaz
function updateCards() {
  const playerCardsDiv = document.getElementById('player-cards');
  const dealerCardsDiv = document.getElementById('dealer-cards');
  playerCardsDiv.innerHTML = '';
  dealerCardsDiv.innerHTML = '';

  for (let card of playerCards) {
    const cardDiv = document.createElement('div');
    cardDiv.textContent = `${card.value} de ${card.suit}`;
    playerCardsDiv.appendChild(cardDiv);
  }

  for (let card of dealerCards) {
    const cardDiv = document.createElement('div');
    cardDiv.textContent = `${card.value} de ${card.suit}`;
    dealerCardsDiv.appendChild(cardDiv);
  }
}

// Función para verificar si es Blackjack
function checkBlackjack() {
  if (playerScore === 21 && dealerScore === 21) {
    document.getElementById('message').textContent = '¡Es un empate (Blackjack)!';
    gameOver = true;
  } else if (playerScore === 21) {
    document.getElementById('message').textContent = '¡Ganaste con Blackjack!';
    gameOver = true;
  } else if (dealerScore === 21) {
    document.getElementById('message').textContent = 'El Repartidor gana con Blackjack.';
    gameOver = true;
  }
}

// Función para verificar si se pasa de 21 (Bust)
function checkBust() {
  if (playerScore > 21) {
    document.getElementById('message').textContent = '¡Te has pasado de 21! El Repartidor gana.';
    gameOver = true;
  }
}

// Función para verificar el resultado
function checkResult() {
  if (dealerScore > 21 || playerScore > dealerScore) {
    document.getElementById('message').textContent = '¡Ganaste!';
  } else if (dealerScore > playerScore) {
    document.getElementById('message').textContent = 'El Repartidor gana.';
  } else {
    document.getElementById('message').textContent = '¡Es un empate!';
  }
  gameOver = true;
}

// Event listeners
document.getElementById('deal-button').addEventListener('click', deal);
document.getElementById('hit-button').addEventListener('click', hit);
document.getElementById('stand-button').addEventListener('click', stand);

// Inicialización
createDeck();
shuffleDeck();
deal();
