
import { renderTextLevel } from "./textWindowLevel.js";
import { renderstLevel} from "./stLevel.js";
const game = document.getElementById('game')
const renderGame = () => {
	renderTextLevel(game);
};

const handleSubmit = (event) => {
    event.preventDefault();
    let level = document.querySelector('input[name="level"]:checked').value;
    renderstLevel(game, level);
};

renderGame();

const formHelloLevel = document.querySelector('.level__form');
const btnStart = document.querySelector(".start");

formHelloLevel.addEventListener('submit', handleSubmit);

formHelloLevel.addEventListener("input", () => {
    btnStart.disabled = document.querySelector('input[name="level"]:checked').value === ""
});


btnStart.addEventListener('click', () => {
    level = document.querySelector('input[name="level"]:checked').value;
    if (level === "1") {
        renderstLevel(game);
    } else if (level === "2") {
        renderstLevel(game);
    } else if (level === "3") {
        renderstLevel(game);
    }
});


