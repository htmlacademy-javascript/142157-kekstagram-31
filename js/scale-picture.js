const SCALE_STEP_VALUE = 25;
const SCALE_STEP_PICTURE = 0.25;
const DEFAULT_VALUE = 100;
const MIN_VALUE = 25;
const SCALE_DEFAULT_PICTURE = 1;

const form = document.querySelector('.img-upload__form');
const scaleField = form.querySelector('.scale');
const scaleControl = form.querySelector('.scale__control--value');
const picture = form.querySelector('.img-upload__preview').firstElementChild;
const smallerButton = scaleField.querySelector('.scale__control--smaller');
const biggerButton = scaleField.querySelector('.scale__control--bigger');

let currentValueScale = DEFAULT_VALUE;
let currentScalePicture = SCALE_DEFAULT_PICTURE;

const setPictureScale = (evt) => {
  if (evt.target === smallerButton && currentValueScale <= DEFAULT_VALUE && currentValueScale !== MIN_VALUE) {
    currentValueScale -= SCALE_STEP_VALUE;
    scaleControl.value = `${currentValueScale}%`;
    currentScalePicture -= SCALE_STEP_PICTURE;
    picture.style.transform = `scale(${currentScalePicture})`;
  }

  if (evt.target === biggerButton && currentValueScale >= MIN_VALUE && currentValueScale < DEFAULT_VALUE) {
    currentValueScale += SCALE_STEP_VALUE;
    scaleControl.value = `${currentValueScale}%`;
    currentScalePicture += SCALE_STEP_PICTURE;
    picture.style.transform = `scale(${currentScalePicture})`;
  }
};

const resetValueScaleAll = () => {
  currentValueScale = DEFAULT_VALUE;
  scaleControl.value = `${currentValueScale}%`;
  picture.style.removeProperty('transform');
};

export { setPictureScale, scaleField, resetValueScaleAll };
