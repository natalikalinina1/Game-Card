(()=>{"use strict";var e=function(n,t){for(var a,l,c="",i="",r=["туз пики","туз черви","туз крести","туз бубны","король пики","король черви","король крести","король бубны","дама пики","дама черви","дама крести","дама бубны","валет пики","валет черви","валет крести","валет бубны","10 пики","10 бубны","9 пики","7 пики","6 пики","10 черви","9 черви","8 черви","7 черви","10 черви","6 черви","9 бубны","8 бубны","7 бубны","6 бубны","10 крести","9 крести","8 крести","7 крести","6 крести"],s=function(){a=Date.now(),l=setInterval((function(){var e=Math.floor((Date.now()-a)/1e3),n=Math.floor(e/60).toString().padStart(2,"0"),t=(e%60).toString().padStart(2,"0"),l="".concat(n,":").concat(t);document.querySelector(".game__time").innerHTML=l}),1e3)},o=function(){clearInterval(l)},u=0;u<t;u++){var d=r[Math.floor(Math.random()*r.length)];c+='\n      <div class="game-go__cards-item" data-index="'.concat(u,'">\n        <img src="./images/').concat(d,'.png" alt="').concat(d,'">\n        \n      </div>\n    '),i+='\n      <div class="game-go__cards-item" data-index="'.concat(u,'">\n        \n      </div>\n    '),r.splice(r.indexOf(d),1)}var v='\n      <div class="game__header">\n        <div class="game__time-box">\n          <div class="game__text-box">\n            <p class="game__text">min</p>\n            <p class="game__text">sek</p>\n          </div>\n          <div class="game__time"> </div>\n        </div>\n        <button class="buttonOver"> Начать заново </button>\n      </div>\n    ',m='\n    <div class="game-go">\n      '.concat(v,'\n      <div class="game-go__cards">\n        ').concat(i,"\n      </div>\n    </div>"),_='\n    <div class="game-go">\n      '.concat(v,'\n      <div class="game-go__cards">\n        ').concat(c,"\n      </div>\n    </div>");n.innerHTML=_,s(),setTimeout((function(){var a;n.innerHTML=m,null===(a=document.querySelector(".buttonOver"))||void 0===a||a.addEventListener("click",(function(){o(),document.querySelector(".game__time").innerHTML="00:00",s(),e(n,t)}));var l=document.querySelectorAll(".game-go__cards-item"),c=null,i=0;l.forEach((function(a){a.addEventListener("click",(function(a){var l,s=a.currentTarget,u=s.getAttribute("data-index"),d=r[Number(u)];if(s.innerHTML='\n            <img src="./images/'.concat(d,'.png" alt="').concat(d,'">\n          '),null==c)c=s;else{var v=c.getAttribute("data-index"),m=r[Number(v)];if(d[0]===m[0])if(c.removeEventListener("click",(function(){})),s.removeEventListener("click",(function(){})),++i==t/2){o();var _=null===(l=document.querySelector(".game__time"))||void 0===l?void 0:l.innerHTML,g='\n                  <div class="result">\n                    <div class="result-table">\n                      <img src="./images/win.png" alt=\'win\'>\n                      <h2 class="result__status"> Вы выиграли!</h2>\n                      <p class ="result__time-text">Затраченное время </p>\n                      <p class = "result__time">'.concat(_,'</p>\n                      <button class="result__button_again"> Начать заново </button>\n                    </div>\n                  </div>\n                ');n.innerHTML=g;var p=document.querySelector(".result__button_again");p?p.addEventListener("click",(function(){e(n,t)})):console.log("againButton is not found")}else setTimeout((function(){s.innerHTML="",c.innerHTML=""}),1e3)}}))}))}),2e3)},n=document.getElementById("game");!function(e){e.innerHTML='<div class="level__container">\n        <h2 class="level__text">Выбери сложность</h2>\n        <form class="level__form">\n            <div class="level__value-gap">\n                <label class="level__value">\n                    <input type="radio" name="level" value="1">\n                    <span>1</span>\n                </label>\n                <label class="level__value">\n                    <input type="radio" name="level" value="2">\n                    <span>2</span>\n                </label>\n                <label class="level__value">\n                    <input type="radio" name="level" value="3">\n                    <span>3</span>\n                </label>\n            </div>\n            <button disabled="true" class="start">Старт</button>\n        </form>\n    </div>'}(n);var t=document.querySelector(".level__form"),a=document.querySelector(".start");if(null!==t){t.addEventListener("submit",(function(t){t.preventDefault();var a=document.querySelector('input[name="level"]:checked').value;e(n,parseInt(a))})),t.addEventListener("input",(function(){null!==a&&(a.disabled=""===document.querySelector('input[name="level"]:checked').value)}));var l=0;null!==a&&a.addEventListener("click",(function(){1===(l=parseInt(document.querySelector('input[name="level"]:checked').value))?e(n,6):2===l?e(n,12):3===l&&e(n,16)}))}})();