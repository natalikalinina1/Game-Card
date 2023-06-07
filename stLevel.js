
export const renderstLevel = (game, level) => {
    const stLevelHtml = `<div class="level__container">
        <h2 class="level__text"> Сложность: ${level} !</h2>
    </div>`;

    game.innerHTML = stLevelHtml;

   
    // Поле с открытыми картами появляется на 3 секунды , затем карты закрываются
    setTimeout(() => {
        game.innerHTML = ` ${openCards}`;
        setTimeout(() => {
          game.innerHTML = ` ${closedCards}`;
        }, 3000);
      }, 1200);
    }
    
    const gameHeader = `
      <div class="game__header">
        <div class="game__time-box">
          <div class="game__text-box">
            <p class="game__text">min</p>
            <p class="game__text">sek</p>
          </div>
          <div class="game__time"> </div>
        </div>
        <button class="buttonOver"> Начать заново </button>
      </div>
    `;

    const closedCards = `
      <div class="game-go">
        ${gameHeader}
        <div class="game-go__cards">
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        <div class="game-go__cards-item"></div>
        </div>
    `;

    const openCards = `<div class="game-go">
<div class="game-go__cards">
<div class="game-go__cards-item"><img src="./img/cards/туз пики.png" alt="туз пики"></div>
<div class="game-go__cards-item"><img src="./img/cards/король пики.png" alt="король пики"></div>
<div class="game-go__cards-item"><img src="./img/cards/дама пики.png" alt="дама пики"></div>
<div class="game-go__cards-item"><img src="./img/cards/валет пики.png" alt="валет пики"></div>
<div class="game-go__cards-item"><img src="./img/cards/10 пики.png" alt="10 пики"></div>
<div class="game-go__cards-item"><img src="./img/cards/9 пики.png" alt="9 пики"></div>
<div class="game-go__cards-item"><img src="./img/cards/8 пики.png" alt="8 пики"></div>
<div class="game-go__cards-item"><img src="./img/cards/7 пики.png" alt="7 пики"></div>
<div class="game-go__cards-item"><img src="./img/cards/6 пики.png" alt="6 пики"></div>
<div class="game-go__cards-item"><img src="./img/cards/туз черви.png" alt="туз черви"></div>
<div class="game-go__cards-item"><img src="./img/cards/король черви.png" alt="король черви"></div>
<div class="game-go__cards-item"><img src="./img/cards/дама черви.png" alt="дама черви"></div>
<div class="game-go__cards-item"><img src="./img/cards/валет черви.png" alt="валет черви"></div>
<div class="game-go__cards-item"><img src="./img/cards/10 черви.png" alt="10 черви"></div>
<div class="game-go__cards-item"><img src="./img/cards/9 черви.png" alt="9 черви"></div>
<div class="game-go__cards-item"><img src="./img/cards/8 черви.png" alt="8 черви"></div>
<div class="game-go__cards-item"><img src="./img/cards/7 черви.png" alt="7 черви"></div>
<div class="game-go__cards-item"><img src="./img/cards/6 черви.png" alt="6 черви"></div>
<div class="game-go__cards-item"><img src="./img/cards/туз бубны.png" alt="туз бубны"></div>
<div class="game-go__cards-item"><img src="./img/cards/король бубны.png" alt="король бубны"></div>
<div class="game-go__cards-item"><img src="./img/cards/дама бубны.png" alt="дама бубны"></div>
<div class="game-go__cards-item"><img src="./img/cards/валет бубны.png" alt="валет бубны"></div>
<div class="game-go__cards-item"><img src="./img/cards/10 бубны.png" alt="10 бубны"></div>
<div class="game-go__cards-item"><img src="./img/cards/9 бубны.png" alt="9 бубны"></div>
<div class="game-go__cards-item"><img src="./img/cards/8 бубны.png" alt="8 бубны"></div>
<div class="game-go__cards-item"><img src="./img/cards/7 бубны.png" alt="7 бубны"></div>
<div class="game-go__cards-item"><img src="./img/cards/6 бубны.png" alt="6 бубны"></div>
<div class="game-go__cards-item"><img src="./img/cards/туз крести.png" alt="туз крести"></div>
<div class="game-go__cards-item"><img src="./img/cards/король крести.png" alt="король крести"></div>
<div class="game-go__cards-item"><img src="./img/cards/дама крести.png" alt="дама крести"></div>
<div class="game-go__cards-item"><img src="./img/cards/валет крести.png" alt="валет крести"></div>
<div class="game-go__cards-item"><img src="./img/cards/10 крести.png" alt="10 крести"></div>
<div class="game-go__cards-item"><img src="./img/cards/9 крести.png" alt="9 крести"></div>
<div class="game-go__cards-item"><img src="./img/cards/8 крести.png" alt="8 крести"></div>
<div class="game-go__cards-item"><img src="./img/cards/7 крести.png" alt="7 крести"></div>
<div class="game-go__cards-item"><img src="./img/cards/6 крести.png" alt="6 крести"></div>
</div>
</div>`;

       // Запускаем таймер как только карты перевернулись
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
      