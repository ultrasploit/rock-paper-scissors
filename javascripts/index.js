// Service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(reg => {
            console.log('Service Worker registered:', reg.scope);
        })
        .catch(err => {
            console.error('Service Worker registration failed:', err);
            alert('Service worker registration failed! Offline features might not work.');
        });
}   else {
    alert('Service worker registration failed! Offline features might not work.');
}

// ----------

const humanMoveDisplayer = document.querySelector('.board .player.human .move');
const computerMoveDisplayer = document.querySelector('.board .player.computer .move');

const humanWins = document.querySelector('.board .player.human .wins');
const computerWins = document.querySelector('.board .player.computer .wins');

const resultElement = document.querySelector('.result');

const winsDisplay = document.querySelector('.display .wins span');
const tiesDisplay = document.querySelector('.display .ties span');
const loseDisplay = document.querySelector('.display .lose span');

const moves = ['rock', 'paper', 'scissor'];
const emojis = {
    rock: '👊',
    paper: '🖐️',
    scissor: '✌️'
};

let wins = 0;
let lose = 0;
let draw = 0;

function play(move) {
    if (!moves.includes(move)) {
        console.error(`Invalid move: "${move}". Valid moves are: ${moves.join(', ')}`);
        return;
    }

    const human_move = move;
    const computer_move = moves[Math.floor(Math.random() * moves.length)];

    let result;

    if (computer_move === human_move) {
        result = 'tie';
        draw++;

    }   else if (human_move === 'rock' && computer_move == 'scissor') {
        result = 'win';
        wins++;

    }   else if (human_move === 'scissor' && computer_move == 'paper') {
        result = 'win';
        wins++;

    }   else if (human_move === 'paper' && computer_move == 'rock') {
        result = 'win';
        wins++;

    }   else if (computer_move === 'rock' && human_move == 'scissor') {
        result = 'lose';
        lose++;

    }   else if (computer_move === 'scissor' && human_move == 'paper') {
        result = 'lose';
        lose++;

    }   else if (computer_move === 'paper' && human_move == 'rock') {
        result = 'lose';
        lose++;

    }   else {
        console.log('else');
    }

    if (humanMoveDisplayer) humanMoveDisplayer.textContent = emojis[human_move];
    if (computerMoveDisplayer) computerMoveDisplayer.textContent = emojis[computer_move];

    if (humanWins) humanWins.innerText = `${wins}`;
    if (computerWins) computerWins.innerText = `${lose}`;

    if (winsDisplay) winsDisplay.innerText = `${wins}`;
    if (tiesDisplay) tiesDisplay.innerText = `${draw}`;
    if (loseDisplay) loseDisplay.innerText = `${lose}`;

    if (result) {
        resultElement.innerText = result !== 'tie' ? `You ${result}` : result;
        resultElement.setAttribute('result', result);
    }
}

function reset() {
    wins = 0;
    lose = 0;
    draw = 0;

    humanMoveDisplayer.innerText = '';
    computerMoveDisplayer.innerText = '';
    if (humanWins) humanWins.innerText = `${wins}`;
    if (computerWins) computerWins.innerText = `${lose}`;

    if (winsDisplay) winsDisplay.innerText = `${wins}`;
    if (tiesDisplay) tiesDisplay.innerText = `${draw}`;
    if (loseDisplay) loseDisplay.innerText = `${lose}`;

    resultElement.setAttribute('result', '');
    resultElement.innerText = '';
}