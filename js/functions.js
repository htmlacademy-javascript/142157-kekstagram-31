const checkStringLenght = (string, length) => string.length <= length;

checkStringLenght('проверяемая строка', 20); // true
checkStringLenght('проверяемая строка', 10); // false

const isPalindrome = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  let invertedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    invertedString += normalizedString[i];
  }
  return normalizedString === invertedString;
};

isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false
isPalindrome('Лёша на полке клопа нашёл '); // true

const getNumber = (symbols) => {
  const symbolsString = symbols.toString();
  let resultNumber = '';
  for (let i = 0; i < symbolsString.length; i++) {
    const element = parseInt(symbolsString[i], 10);
    if (!Number.isNaN(element)) {
      resultNumber += element;
    }
  }
  return parseInt(resultNumber, 10);
};

getNumber('2023 год'); // 2023
getNumber('ECMAScript 2022'); // 2022
getNumber('1 кефир, 0.5 батона'); // 105
getNumber('а я томат'); // NaN
getNumber(2023); // 2023
getNumber(-1); // 1
getNumber(1.5); // 15
