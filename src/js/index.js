const EMOJI = ["🥔", "🍒", "🥑", "🌽", "🥕", "🍇", "🍉", "🍌", "🥭", "🍍"];
const emoji = EMOJI.concat(EMOJI);

//функция перемешивает изначальный масив получает первые восемь элементов создает пары и снова перемешивает их
function shuffle(emoji) {
  const shaffleEmoji = emoji.sort(() => Math.random(emoji) - 0.5);
  const receivingEmoji = shaffleEmoji.slice(0, 8);
  const rezalt = [...receivingEmoji, ...receivingEmoji].sort(
    () => Math.random([...receivingEmoji, ...receivingEmoji]) - 0,
    5
  );
  return rezalt;
}

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
//отрисовывает карточки наполняя результатом функции shuffle(emoji)
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

//функция переворота карточек
function flippCards() {
  const contentCards = [];

  const cards = SELECTORS.board.children;

  [...cards].forEach((element) => {

    element.addEventListener("click", (event) => {

      element.classList.add("flipped");

      contentCards.push(event.target.nextSibling.nextSibling?.innerHTML);

      for(let i = 0; i < contentCards.length; i++) {

        let eventRemove = document.querySelectorAll('.flipped'); 

        if(contentCards.length > 2 && contentCards[i] !== contentCards[i + 1]) {

          eventRemove[0].classList.remove('flipped')

          eventRemove[1].classList.remove('flipped')
        }
        STATE.totalFlipp + 2

      }
    });
  });
}

//масив с содержимым карт

function flipBackCards() {}

flippCards();
