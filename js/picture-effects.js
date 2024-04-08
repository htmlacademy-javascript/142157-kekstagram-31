const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const radioElements = document.querySelectorAll('.effects__radio');
const picture = document.querySelector('.img-upload__preview').firstElementChild;
const sliderContainer = document.querySelector('.img-upload__effect-level');

sliderContainer.classList.add('hidden');

const EFFECT_NAME = {
  chrome: 'chrome',
  sepia: 'sepia',
  marvin: 'marvin',
  phobos: 'phobos',
  heat: 'heat',
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const Effects = {
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
};

let valueCheked = '';

const setStylePicture = (valueFilter) => {
  let style = '';

  switch (valueCheked) {
    case EFFECT_NAME.chrome:
      style = picture.style.filter = `grayscale(${valueFilter})`;
      return style;
    case EFFECT_NAME.sepia:
      style = picture.style.filter = `sepia(${valueFilter})`;
      return style;
    case EFFECT_NAME.marvin:
      style = picture.style.filter = `invert(${valueFilter}%)`;
      return style;
    case EFFECT_NAME.phobos:
      style = picture.style.filter = `blur(${valueFilter}px)`;
      return style;
    case EFFECT_NAME.heat:
      style = picture.style.filter = `brightness(${valueFilter})`;
      return style;
    default:
      style = picture.style.removeProperty('filter');
      return style;
  }
};

const resetFilter = () => {
  sliderContainer.classList.add('hidden');
  picture.style.removeProperty('filter');
};

const getUpdateSliderOptions = (effect, sliderElementEffect) => {
  sliderElementEffect.noUiSlider.updateOptions(Effects[effect]);
};

const getValueRadioButton = (valueTarget) => (valueCheked = valueTarget);

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  setStylePicture(valueElement.value);
});

radioElements.forEach((radio) => {
  radio.addEventListener('click', (evt) => {
    if (evt.target.checked) {
      if (evt.target.value !== 'none') {
        sliderContainer.classList.remove('hidden');

        getValueRadioButton(evt.target.value);
        getUpdateSliderOptions(evt.target.value, sliderElement);
      } else {
        resetFilter();
      }
    } else {
      valueCheked = '';
    }
  });
});

export { resetFilter };
