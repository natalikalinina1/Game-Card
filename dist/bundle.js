(()=>{"use strict";const e=(e,n)=>{let t="",a="";const l=["туз пики","туз черви","туз крести","туз бубны","король пики","король черви","король крести","король бубны","дама пики","дама черви","дама крести","дама бубны","валет пики","валет черви","валет крести","валет бубны","10 пики","10 бубны","9 пики","7 пики","6 пики","10 черви","9 черви","8 черви","7 черви","10 черви","6 черви","9 бубны","8 бубны","7 бубны","6 бубны","10 крести","9 крести","8 крести","7 крести","6 крести"];let s,i;const c=()=>{s=Date.now(),i=setInterval((()=>{const e=Math.floor((Date.now()-s)/1e3),n=Math.floor(e/60).toString().padStart(2,"0"),t=(e%60).toString().padStart(2,"0");document.querySelector(".game__time").innerHTML=`${n}:${t}`}),1e3)},r=()=>{clearInterval(i)};for(let e=0;e<n;e++){const n=l[Math.floor(Math.random()*l.length)];t+=`\n      <div class="game-go__cards-item" data-index="${e}">\n        <img src="./images/${n}.png" alt="${n}">\n        \n      </div>\n    `,a+=`\n      <div class="game-go__cards-item" data-index="${e}">\n        \n      </div>\n    `,l.splice(l.indexOf(n),1)}const d='\n      <div class="game__header">\n        <div class="game__time-box">\n          <div class="game__text-box">\n            <p class="game__text">min</p>\n            <p class="game__text">sek</p>\n          </div>\n          <div class="game__time"> </div>\n        </div>\n        <button class="buttonOver"> Начать заново </button>\n      </div>\n    ',o=`\n    <div class="game-go">\n      ${d}\n      <div class="game-go__cards">\n        ${a}\n      </div>\n    </div>`,v=`\n    <div class="game-go">\n      ${d}\n      <div class="game-go__cards">\n        ${t}\n      </div>\n    </div>`;e.innerHTML=v,c(),document.querySelector(".buttonOver").addEventListener("click",(()=>{r(),document.querySelector(".game__time").innerHTML="00:00",c(),e.innerHTML=v})),setTimeout((()=>{e.innerHTML=o;const t=document.querySelectorAll(".game-go__cards-item");let a=null,s=0;t.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget,i=t.getAttribute("data-index"),c=l[i];if(t.innerHTML=`\n          <img src="./images/${c}.png" alt="${c}">\n      \n        `,null===a)a=t;else{const e=a.getAttribute("data-index"),i=l[e];c.charAt(0)===i.charAt(0)?(a.removeEventListener("click",(()=>{})),t.removeEventListener("click",(()=>{})),a=null,s++,s===n/2&&(r(),alert("Поздравляем! Вы выиграли!"))):setTimeout((()=>{a.innerHTML="\n              ",t.innerHTML="",a=null}),1e3)}}))}))}),3e3)},n=document.getElementById("game");(e=>{e.innerHTML='<div class="level__container">\n        <h2 class="level__text">Выбери сложность</h2>\n        <form class="level__form">\n            <div class="level__value-gap">\n                <label class="level__value">\n                    <input type="radio" name="level" value="1">\n                    <span>1</span>\n                </label>\n                <label class="level__value">\n                    <input type="radio" name="level" value="2">\n                    <span>2</span>\n                </label>\n                <label class="level__value">\n                    <input type="radio" name="level" value="3">\n                    <span>3</span>\n                </label>\n            </div>\n            <button disabled="true" class="start">Старт</button>\n        </form>\n    </div>'})(n);const t=document.querySelector(".level__form"),a=document.querySelector(".start");t.addEventListener("submit",(t=>{t.preventDefault();let a=document.querySelector('input[name="level"]:checked').value;e(n,parseInt(a))})),t.addEventListener("input",(()=>{a.disabled=""===document.querySelector('input[name="level"]:checked').value}));let l=0;a.addEventListener("click",(()=>{l=document.querySelector('input[name="level"]:checked').value,"1"===l?e(n,6):"2"===l?e(n,12):"3"===l&&e(n,16)}))})();