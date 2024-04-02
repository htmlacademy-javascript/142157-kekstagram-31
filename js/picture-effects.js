const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const radioElements = document.querySelectorAll('.effects__radio');
const picture = document.querySelector('.img-upload__preview').firstElementChild;
const sliderContainer = document.querySelector('.img-upload__effect-level');

sliderContainer.classList.add('hidden');

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
  if (valueCheked === 'chrome') {
    style = picture.style.filter = `grayscale(${valueFilter})`;

  } else if (valueCheked === 'sepia') {
    style = picture.style.filter = `sepia(${valueFilter})`;

  } else if (valueCheked === 'marvin') {
    style = picture.style.filter = `invert(${valueFilter}%)`;

  } else if (valueCheked === 'phobos') {
    style = picture.style.filter = `blur(${valueFilter}px)`;

  } else if (valueCheked === 'heat') {
    style = picture.style.filter = `brightness(${valueFilter})`;

  } else {
    style = picture.style.removeProperty('filter');
  }
  return style;
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
