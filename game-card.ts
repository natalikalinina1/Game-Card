import { renderTextLevel } from './textWindowLevel';
import { renderstLevel } from './stLevel';
import './style.css';
import * as _ from "lodash";

const game: HTMLElement | null = document.getElementById('game');
const renderGame: () => void = () => {
    renderTextLevel(game!);
}

const handleSubmit: (event: Event) => void = (event) => {
    event.preventDefault();
    let level: string = (<HTMLInputElement>document.querySelector('input[name="level"]:checked')).value;
    renderstLevel(game, parseInt(level));
}
renderGame();
const formHelloLevel: HTMLFormElement | null = document.querySelector('.level__form');
const btnStart: HTMLInputElement | null = document.querySelector('.start');

if (formHelloLevel !== null) {
  formHelloLevel.addEventListener('submit', handleSubmit);

  formHelloLevel.addEventListener('input', () => {
      if (btnStart !== null) {
        btnStart.disabled = (<HTMLInputElement>document.querySelector('input[name="level"]:checked')).value === ''
      }
  });

  let level: number = 0;
  if (btnStart !== null) {
      btnStart.addEventListener('click', () => {
          level = parseInt((<HTMLInputElement>document.querySelector('input[name="level"]:checked')).value);
          if (level === 1) {
              renderstLevel(game, 6);
          } else if (level === 2) {
              renderstLevel(game, 12);
          } else if (level === 3) {
              renderstLevel(game, 16);
          }
      });
  }
}