const checkStringLenght = (string, length) => string.length <= length;

checkStringLenght('проверяемая строка', 20); // true
checkStringLenght('проверяемая строка', 10); // false
// console.log(checkStringLenght('проверяемая строка', 20));
// console.log(checkStringLenght('проверяемая строка', 10));

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
// console.log(isPalindrome('ДовОд'));
// console.log(isPalindrome('Кекс'));
// console.log(isPalindrome('Лёша на полке клопа нашёл '));

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
// console.log(getNumber('2023 год'));
// console.log(getNumber('ECMAScript 2022'));
// console.log(getNumber('1 кефир, 0.5 батона'));
// console.log(getNumber('а я томат'));
// console.log(getNumber(2023));
// console.log(getNumber(-1));
// console.log(getNumber(1.5));


const checkTimeMeet = (beginWorkDay, endWorkDay, startMeet, durationMeet) => {
  const MINUTES_IN_HOUR = 60;
  const calcTimeInMinutes = (time) => {
    const arrayTime = time.split(':');
    return parseInt(arrayTime[0], 10) * MINUTES_IN_HOUR + parseInt(arrayTime[1], 10);
  };

  beginWorkDay = calcTimeInMinutes(beginWorkDay);
  endWorkDay = calcTimeInMinutes(endWorkDay);
  startMeet = calcTimeInMinutes(startMeet);
  const timeMeeting = startMeet + durationMeet;

  return startMeet >= beginWorkDay && timeMeeting <= endWorkDay;
};

checkTimeMeet('8:0', '10:0', '8:0', 120);
// console.log(checkTimeMeet('8:0', '10:0', '8:0', 120));     // true
// console.log(checkTimeMeet('08:00', '17:30', '14:00', 90)); // true
// console.log(checkTimeMeet('08:00', '14:30', '14:00', 90)); // false
// console.log(checkTimeMeet('14:00', '17:30', '08:0', 90));  // false
// console.log(checkTimeMeet('8:00', '17:30', '08:00', 900)); // false
