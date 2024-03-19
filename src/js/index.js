const EMOJI = ["🥔", "🍒", "🥑", "🌽", "🥕", "🍇", "🍉", "🍌"];
const emoji = EMOJI.concat(EMOJI);

function shuffle(emoji) {
  return emoji.sort(() => Math.random(emoji) - 0.5);
}

// "🥭", "🍍"];

/**
 * @property {number} moves - количество шагов
 * @property {number} time - время после старта
 * @property {boolean} start - состояние игры
 * @property {number} flipp - количество перевернутых карточек
 * @property {number} totalFlipp - количество всех перевернутых карточек
 */
const STATE = {
  moves: 0,
  time: 0,
  start: false,
  flipp: 0,
  totalFlipp: 0,
};

/**
 * @property {HTMLDivElement} boardContainer - Контейнер игрового поля.
 * @property {HTMLDivElement} board - Основное содержимое поля (4x4).
 * @property {HTMLDivElement} moves - Контрол для учета шагов.
 * @property {HTMLDivElement} timer - Контрол для учета времени.
 * @property {HTMLButtonElement} start - Кнопка для старта игры.
 */
const SELECTORS = {
  boardContainer: document.querySelector(".board-container"),
  board: document.querySelector(".board"),
  moves: document.querySelector(".moves"),
  timer: document.querySelector(".timer"),
  start: document.querySelector("button"),
};

Render();

function Render() {
  const shuffleEmoji = shuffle(emoji);

  shuffleEmoji.forEach((element) => {
    SELECTORS.board.innerHTML += `<div class="card">
        <div class="card-front"></div>
        <div class="card-back">${element}</div>
        </div>
        `;
  });
}

function flippCards() {
  const cards = SELECTORS.board.children;
  [...cards].forEach((element) => {
    element.addEventListener("click", () => {
     element.classList.add('flipped')
    });
  });
}

function flipBackCards() {
    
}

flippCards();
