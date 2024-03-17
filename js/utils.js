// Получение случайного целого числа в заданном диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получение случайного значения из не пустого массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Генератор ID
const createIdGenerator = () => {
  let counterId = 0;
  return function () {
    counterId++;
    return counterId;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInteger, getRandomArrayElement, createIdGenerator, isEscapeKey };
