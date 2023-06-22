import { windowGameEnd } from './game-end';

    export const renderstLevel = (game: HTMLElement, level: number): void => {
      interface Card {
        value: string | undefined;
        condition: HTMLElement | null;
      }
      const arrCards: string[] = [];
      let rank: string | undefined;
      let suit: string | undefined;
    
      const getImageTag = (rank: string, suit: string): string => {
        return `<img data-value="${rank} ${suit}" class="game__card" src="images/${rank} ${suit}.png" alt="${rank} ${suit}">`;
      };
    let card;
      const getUniqueCard = (): string => {
        do {
          rank = ["6", "7", "8", "9", "10", "валет", "король", "дама", "туз"][Math.floor(Math.random() * 9)];
          suit = [ "пики", "черви", "бубны","крести", ][Math.floor(Math.random() * 4)];
          card = getImageTag(rank, suit);
        } while (arrCards.includes(card));
        return card;
      };
    
      for (let i = 0; i < level / 2; i++) {
        const card = getUniqueCard();
        arrCards.push(card);
        let index = Math.floor(Math.random() * level) + 1;
        let AvailableSlot = false;
    
        while (!AvailableSlot) {
          if (!arrCards[index]) {
            arrCards[index] = card;
            AvailableSlot = true;
          } else if (index === level) {
            index = 1;
          } else {
            index++;
          }
        }
      }
   // game.innerHTML = arrCards.join("");
  const timer = (deadline: number) => {
    let time = deadline;
    const interval = setInterval(() => {
      time -= 1;
      const renderstLevelHtml =  `
			<div class="go-game">
				<div class="header-game">
					<div class="header-game-timer">
						<div class="timer__text">
							<div class="timer__text-min">min</div>
							<div class="timer__text-sec">sec</div>
						</div>
						<div class="timer__group">
							<div class="timer__minutes">00</div>
							<div class="timer__seconds">${time < 10 ? "0" + time : time}</div>
						</div>
					</div>
					<div class="game-button">
						<button class="button-over"> Начать заново </button>
					</div>
				</div>
				<div class="game-card">
					${arrCards.map((card) => card).join("")}
				</div>
			</div>
			`;
      game.innerHTML = renderstLevelHtml;
      // Обработчик кнопки "Начать заново"/*
      const btnButtonOver  = document.querySelector(".button-over");
      btnButtonOver?.addEventListener("click", () => {
        renderstLevel(game,level);
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      //Закрываем карты
      const cards = document.querySelectorAll(".game__card");
      cards.forEach((card) => {
        card.setAttribute("src", "images/рубашка.jpg");
      });
      //Запуск таймера
      const sec = document.querySelector(".timer__seconds") as HTMLElement;
      const min = document.querySelector(".timer__minutes") as HTMLElement;
      let second = "00";
      let minute = "00";
      setInterval(() => {
        second = (Number(sec.innerHTML) + 1).toString().padStart(2, "0");
        if (Number(second) < 60) {
          sec.innerHTML = second;
        } else {
          minute = (Number(min.innerHTML) + 1).toString().padStart(2, "0");
          min.innerHTML = minute;
          sec.innerHTML = "00";
        }
      }, 1000);

      const firstCard: Card = {
        value: "",
        condition: null,
      };
      const secondCard: Card = {
        value: "",
        condition: null,
      };
      let statusUser: boolean;
      const isWinner = () => {
        const cards: HTMLElement[] = Array.from(
          document.querySelectorAll(".game__card")
        );
        for (const card of cards) {
          if (card.dataset.status !== "open") {
            return false;
          }
        }
        return true;
      };
      const  pairsOfCards = (firstCard: Card, secondCard: Card) => {
        if (firstCard.value !== secondCard.value) {
          statusUser = false;
          windowGameEnd(game, statusUser, minute, second);
        } else {
          firstCard.condition?.setAttribute("data-status", "open");
          secondCard.condition?.setAttribute("data-status", "open");
          if (isWinner()) {
            statusUser = true;
            windowGameEnd(game, statusUser, minute, second);
          } else {
            firstCard.value = "";
            firstCard.condition = null;
            secondCard.value = "";
            secondCard.condition = null;
          }
        }
      };
      cards.forEach((card) => {
        card.addEventListener("click", () => {
           const htmlCard = card as HTMLElement;
          if (htmlCard.dataset.status !== "open") {
            htmlCard.setAttribute(
              "src",`images/${htmlCard.dataset.value}.png`
            );
            if (!firstCard.value) {
        
              firstCard.value = htmlCard.dataset.value!;
              firstCard.condition = htmlCard;
            } else {
             
              secondCard.value = htmlCard.dataset.value!;
              secondCard.condition = htmlCard;
              pairsOfCards(firstCard, secondCard);
            }
          }
      
        });
      });
    }, deadline * 1000);
  };
  timer(6);
};

