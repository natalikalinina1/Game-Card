export const renderTextLevel = (game:HTMLElement):void  => {
    const textLevelHtml = `<div class="level__container">
        <h2 class="level__text">Выбери </h2>
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
    </div>`;
    game.innerHTML = textLevelHtml;
};

