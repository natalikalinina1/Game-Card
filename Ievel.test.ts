import { expect,describe,it } from '@jest/globals';
import { renderstLevel } from './stLevel';

describe('renderstLevel function', () => {
    it('should render a game with the correct number of cards for the chosen level', () => {
        const game = document.createElement('div')
        renderstLevel(game, 1);

        let openCards = game.querySelectorAll('.game-go__cards-item img');
        let closedCards = game.querySelectorAll('.game-go__cards-item:not(:has(img))');
        expect(openCards.length).toBe(0);
        expect(closedCards.length).toBe(6);

        renderstLevel(game, 2);
        openCards = game.querySelectorAll('.game-go__cards-item img');
        closedCards = game.querySelectorAll('.game-go__cards-item:not(:has(img))');
        expect(openCards.length).toBe(0);
        expect(closedCards.length).toBe(12);
        renderstLevel(game, 3)
        openCards = game.querySelectorAll('.game-go__cards-item img')
        closedCards = game.querySelectorAll(
            '.game-go__cards-item:not(:has(img))'
        )
        expect(openCards.length).toBe(0)
        expect(closedCards.length).toBe(16)
    })
})


