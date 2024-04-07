const TIME_OUT = 5000;
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

const errTemplateSendForm = document.querySelector('#error').content.querySelector('.error');
const showAlert = () => {
  const errArea = errTemplateSendForm.cloneNode(true);
  document.body.append(errArea);
};

const closeAlert = () => {
  const errContainer = document.querySelector('.error');
  errContainer.remove();
};

const errTemplateGetData = document.querySelector('#data-error').content.querySelector('.data-error');
const showCloseAlertTypeImg = (errMessage) => {
  const errArea = errTemplateGetData.cloneNode(true);
  if (errMessage) {
    errArea.querySelector('.data-error__title').textContent = errMessage;
  }
  document.body.append(errArea);
  setTimeout(() => {
    errArea.remove();
  }, TIME_OUT);
};

const showCloseAlertGetData = () => {
  showCloseAlertTypeImg();
};

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const showSuccess = () => {
  const successArea = successTemplate.cloneNode(true);
  document.body.append(successArea);
};

const closeSuccess = () => {
  const successContainer = document.querySelector('.success');
  successContainer.remove();
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

export {
  getRandomInteger,
  getRandomArrayElement,
  createIdGenerator,
  isEscapeKey,
  showAlert,
  closeAlert,
  showCloseAlertGetData,
  showSuccess,
  closeSuccess,
  debounce,
  throttle,
  showCloseAlertTypeImg
};
