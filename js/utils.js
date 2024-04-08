const TIME_OUT = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const errTemplateSendForm = document.querySelector('#error').content.querySelector('.error');
const closeAlert = () => {
  const errContainer = document.querySelector('.error');
  errContainer.remove();
};

const showAlert = () => {
  const errArea = errTemplateSendForm.cloneNode(true);
  const errButton = errArea.querySelector('.error__button');
  document.body.append(errArea);
  errArea.addEventListener('click', (evt) => {
    if (evt.target === errArea || evt.target === errButton) {
      closeAlert();
    }
  });
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

const closeSuccess = () => {
  const successContainer = document.querySelector('.success');
  successContainer.remove();
};

const showSuccess = () => {
  const successArea = successTemplate.cloneNode(true);
  const successButton = successArea.querySelector('.success__button');
  document.body.append(successArea);
  successArea.addEventListener('click', (evt) => {
    if (evt.target === successArea || evt.target === successButton) {
      closeSuccess();
    }
  });
};

// const closeSuccess = () => {
//   const successContainer = document.querySelector('.success');
//   successContainer.remove();
// };

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
