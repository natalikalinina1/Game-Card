
import { renderTextLevel } from "./textWindowLevel.js";
import { renderstLevel} from "./stLevel.js";
const game = document.getElementById('game')
const renderGame = () => {
	renderTextLevel(game);
};

renderGame();
const btnStart = document.querySelector(".start");
const formHelloLevel = document.querySelector(".level__container");
formHelloLevel.addEventListener("input", () => {
    if (document.querySelector('input[name="level"]:checked').value === "") {
        btnStart.disabled = true;
    } else {
        btnStart.disabled = false;
    }
});

export let level = "";
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


