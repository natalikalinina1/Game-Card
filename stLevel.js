
export const renderstLevel = (game, cardsCount) => {
  let openCardsHtml = "";
  let closedCardsHtml = "";
  const cards = ["туз пики", "туз черви", "туз крести", "туз бубны",
  "король пики", "король черви", "король крести", "король бубны",
  "дама пики", "дама черви", "дама крести", "дама бубны",
  "валет пики", "валет черви", "валет крести", "валет бубны","10 пики","10 бубны", "9 пики","7 пики",
  "6 пики","10 черви","9 черви","8 черви","7 черви","10 черви","6 черви","9 бубны","8 бубны","7 бубны","6 бубны","10 крести","9 крести",
  "8 крести","7 крести","6 крести"];
  let startTime, interval;

  const startTimer = () => {
    startTime = Date.now();
    interval = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const min = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
      const sec = (elapsedTime % 60).toString().padStart(2, '0');
      document.querySelector('.game__time').innerHTML = `${min}:${sec}`;
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval);
  };

  const resetTimer = () => {
    stopTimer();
    document.querySelector('.game__time').innerHTML = '00:00';
    startTimer();
  };
  for (let i = 0; i < cardsCount; i++) {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    openCardsHtml += `
      <div class="game-go__cards-item" data-index="${i}">
        <img src="./images/${randomCard}.png" alt="${randomCard}">
        
      </div>
    `;
    closedCardsHtml += `
      <div class="game-go__cards-item" data-index="${i}">
        
      </div>
    `;
    cards.splice(cards.indexOf(randomCard), 1);
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
        ${closedCardsHtml}
      </div>
    </div>`;
  const openCards = `
    <div class="game-go">
      ${gameHeader}
      <div class="game-go__cards">
        ${openCardsHtml}
      </div>
    </div>`;
  game.innerHTML = openCards;
  startTimer();
  document.querySelector('.buttonOver').addEventListener('click', () => {
    resetTimer();
    game.innerHTML = openCards;
  });
  setTimeout(() => {
    game.innerHTML = closedCards;
    const cardElements = document.querySelectorAll('.game-go__cards-item');
    let previousCard = null; // переменная для хранения предыдущей открытой карты
    let matchedCardsCount = 0; // переменная для подсчета количества уже совпавших карт
    cardElements.forEach((card) => {
      card.addEventListener('click', (event) => {
        const clickedCard = event.currentTarget;
        const cardIndex = clickedCard.getAttribute('data-index');
        const selectedCard = cards[cardIndex];
        clickedCard.innerHTML = `
          <img src="./images/${selectedCard}.png" alt="${selectedCard}">
      
        `;
        if (previousCard === null) {
          previousCard = clickedCard; // если это первая открытая карта, сохраняем ее в переменную
        } else {
          const previousCardIndex = previousCard.getAttribute('data-index');
          const previousCardValue = cards[previousCardIndex];
          if (selectedCard.charAt(0) === previousCardValue.charAt(0)) { // если первая буква или число совпала с предыдущей, то удаляем обработчик клика и увеличиваем счетчик совпавших карт
            previousCard.removeEventListener('click', () => {});
            clickedCard.removeEventListener('click', () => {});
            previousCard = null;
            matchedCardsCount++;
            if (matchedCardsCount === cardsCount/2) { // если все карты совпали, то выводим сообщение о победе
              stopTimer();
              alert('Поздравляем! Вы выиграли!');
            }
              
            
          } else { // если буква или число не совпала, то закрываем обе открытые карты через некоторое время
            setTimeout(() => {
              previousCard.innerHTML = `
              `;
              clickedCard.innerHTML = ``;
              previousCard = null;
            }, 1000)
          }
        }
      });
    });
  }, 3000); 

}

