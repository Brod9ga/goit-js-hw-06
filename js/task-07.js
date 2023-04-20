const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const defaultFontSize = 56;

// Устанавливаем изначальный размер текста
text.style.fontSize = `${defaultFontSize}px`;
fontSizeControl.value = defaultFontSize;

// Добавляем обработчик события input
fontSizeControl.addEventListener('input', event => {
  const fontSize = parseInt(event.target.value);
  text.style.fontSize = `${fontSize}px`;
});