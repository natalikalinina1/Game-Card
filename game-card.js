/* при клике на окошко , происходит обводка выбранного окна*/ 
let numbers = document.querySelectorAll('.number'); // находим все 3 окошка с цифрами
 currentBox = null; // переменная для хранения текущего выбранного окошка

numbers.forEach(function(box) { // добавляем обработчик клика для каждого окошка с цифрой
  box.addEventListener('click', function() {
    if (currentBox) { // если уже есть выбранное окошко, то удаляем стили с него
      currentBox.style.border = 'none';
      currentBox.style.fontWeight = 'normal';
      currentBox.style.color = '#0080C1';
    }
    currentBox = this; // записываем текущее выбранное окошко в переменную
    currentBox.style.border = '3px solid #004980'; // добавляем стиль обводки жирным голубым цветом
    currentBox.style.fontWeight = 'bold'; // делаем цифру жирной
    currentBox.style.color = '#004980'; // меняем цвет цифры на голубой
  });
});
