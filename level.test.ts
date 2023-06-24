import { expect, test } from '@jest/globals';

import { renderTextLevel } from './textWindowLevel';

describe('Тестирование функции renderTextLevel', () => {
  let game: HTMLElement;
  beforeEach(() => {
  
    game = document.createElement('div');
  });

  test('Функция должна вернуть undefined', () => {
    
    expect(renderTextLevel(game)).toBeUndefined();
  });

  test('Функция должна добавить HTML в переданный элемент', () => {
   
    renderTextLevel(game);
    
    // Проверяем, что элемент game содержит ранее определенный HTML
    expect(game.innerHTML).toEqual(`<div class="level__container">
        <h2 class="level__text">Выбери сложность</h2>
        <form class="level__form">
            <div class="level__value-gap">
                <label class="level__value">
                    <input type="radio" name="level" value="1">
                    <span>1</span>
                </label>
                <label class="level__value">
                    <input type="radio" name="level" value="2">
                    <span>2</span>
                </label>
                <label class="level__value">
                    <input type="radio" name="level" value="3">
                    <span>3</span>
                </label>
            </div>
            <button disabled="true" class="start">Старт</button>
        </form>
    </div>`);
  });
});
