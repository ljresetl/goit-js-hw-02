


function getElementWidth(content, padding, border) {
  // Видаляємо 'px' та конвертуємо значення в числа
  let contentWidth = parseFloat(content);
  let paddingWidth = parseFloat(padding) * 2;
  let borderWidth = parseFloat(border) * 2;

  // Оскільки box-sizing: border-box, всі значення входять у підсумкову ширину
  return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
