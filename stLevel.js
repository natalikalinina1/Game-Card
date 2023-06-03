
import {level} from "./game-card.js";
export const renderstLevel = (game) => {
    const stLevelHtml = `<div class=" level__container">
    <h2 class="level__text"> Сложность: ${level} !</h2> </div>`;

    game.innerHTML = stLevelHtml;

    setTimeout(() => {
        game.innerHTML = `${gameHeader} <div class="game__cards">
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             <div class="game__cards-item"></div>
             </div>`
    }, 1200);

}
const gameHeader =
    ` <div class="game__header">
    <div class="game__time-box">
    <div class="game__text-box">
        <p class="game__text">min</p>
        <p class="game__text">sek</p>
    </div>
    <div class="game__time"> </div>
    </div>
 <button class="buttonOver"> Начать заново </button>
    </div>`; 

const gameClosedCards = `
    <div class="game1">
    ${gameHeader}
    <div class="game__cards">
    </div>
    </div>`;
game.innerHTML = gameClosedCards;

        // Запускаем таймер
        let time = 0;
        let gameTimer = setInterval(() => {
            time++;

            const minutes = Math.floor(time / 60).toString().padStart(2, '0');
            const seconds = (time % 60).toString().padStart(2, '0');

            const gameTimerElement = document.querySelector('.game__time');
            gameTimerElement.textContent = `${minutes}.${seconds}`;
       
        //пока просто обнуляем таймер по кнопке-Начать заново
        const buttonOver = document.querySelector('.buttonOver');
        buttonOver.addEventListener('click', () => {
            time = 0;
            gameTimerElement.textContent = '00.00';
            clearInterval(gameTimer);
        })
    }, 1000);
      