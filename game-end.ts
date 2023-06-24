export const windowGameEnd = (
    game: HTMLElement,
    statusUser: boolean,
    minute: string,
    second: string
) => { 
const windowGameEndHtml = `
    <div class="game-end">
      <div class="game-end-table">
        <img class="game-end__header" src="/images/${statusUser ? "win" : "loss"}.png" alt=${
          statusUser ? "win" : "loss"}>
        <h1 class="game-end__header">Вы ${statusUser ? "выиграли" : "проиграли"}!</h1>
        <p class="game-end__text">Затраченное время:</p>
        <p class="time-end">
          ${minute.padStart(2, "0")}:${second.padStart(2, "0")} </p>
        <button class="button-over" type="submit">Играть снова</button>
      </div>
    </div>`;
  game.innerHTML = windowGameEndHtml;
  const btnButtonOver = document.querySelector(".button-over");
  btnButtonOver?.addEventListener("click", () => {
    location.reload();
  });
};