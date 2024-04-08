import { isEscapeKey, showAlert, closeAlert, showSuccess, closeSuccess, showCloseAlertTypeImg } from './utils.js';
import { validateHashtags, getErrorText } from './validate-form.js';
import { setPictureScale, scaleField, resetValueScaleAll } from './scale-picture.js';
import { resetFilter } from './picture-effects.js';
import { sendData } from './api.js';

const MAX_COMMENT_LENGTH = 140;
const FILE_TYPES = ['image/png', 'image/jpeg', 'image/gif'];

const uploadForm = document.querySelector('.img-upload__form');
const modalForm = uploadForm.querySelector('.img-upload__overlay');
const closeModalFormButton = uploadForm.querySelector('.img-upload__cancel');
const loaderButton = uploadForm.querySelector('.img-upload__input');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const previewImg = uploadForm.querySelector('.img-upload__preview');
const previewThumbnailsList = uploadForm.querySelectorAll('.effects__preview');
const commentArea = uploadForm.querySelector('.text__description');
const submitButton = uploadForm.querySelector('.img-upload__submit');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

// eslint-disable-next-line no-use-before-define
const oncloseModalFormButton = () => closeUploadForm();

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === hashtagsInput || document.activeElement === commentInput) {
      evt.stopPropagation();
    } else if (document.querySelector('.error')) {
      closeAlert();
    } else {
      // eslint-disable-next-line no-use-before-define
      closeUploadForm();
    }
  }
};

const onDocumentKeydownSuccess = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccess();
    document.removeEventListener('keydown', onDocumentKeydownSuccess);
  }
};

const submitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const blockSubmitButton = (text) => {
  submitButton.disabled = true;
  submitButton.textContent = text;
};

const unblockSubmitButton = (text) => {
  submitButton.disabled = false;
  submitButton.textContent = text;
};

const openUploadForm = () => {
  document.body.classList.add('modal-open');
  modalForm.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
  scaleField.addEventListener('click', setPictureScale);
  closeModalFormButton.addEventListener('click', oncloseModalFormButton);
};

loaderButton.addEventListener('change', () => {
  const file = loaderButton.files[0];
  const img = previewImg.firstElementChild;
  const fileType = file.type;
  const matches = FILE_TYPES.includes(fileType);

  if (matches) {
    const url = URL.createObjectURL(file);
    img.src = url;
    previewThumbnailsList.forEach((thumbnail) => {
      thumbnail.style.backgroundImage = `url("${url}")`;
    });
    openUploadForm();
  } else {
    return showCloseAlertTypeImg('Неверный тип файла. Подходящие png, jpeg, gif');
  }
});

const closeUploadForm = () => {
  document.body.classList.remove('modal-open');
  modalForm.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
  scaleField.removeEventListener('click', setPictureScale);
  closeModalFormButton.removeEventListener('click', oncloseModalFormButton);
  loaderButton.value = '';
  uploadForm.reset();
  pristine.reset();
  resetValueScaleAll();
  resetFilter();
};

const validateCommentArea = (value) => value.length <= MAX_COMMENT_LENGTH;

pristine.addValidator(hashtagsInput, validateHashtags, getErrorText);
pristine.addValidator(commentArea, validateCommentArea, `Длинна комментария не более ${MAX_COMMENT_LENGTH} символов`);

const setUserFormSubmit = (onSucces) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValidate = pristine.validate();
    if (isValidate) {
      blockSubmitButton(submitButtonText.SENDING);
      sendData(new FormData(evt.target))
        .then(onSucces)
        .then(showSuccess)
        .then(() => {
          document.addEventListener('keydown', onDocumentKeydownSuccess);
        })
        .catch(() => showAlert())
        .finally(() => {
          unblockSubmitButton(submitButtonText.IDLE);
        });
    }
  });
};

document.body.addEventListener('click', (evt) => {
  if (evt.target === document.querySelector('.error') || evt.target === document.querySelector('.error__button')) {
    closeAlert();
  }
  if (evt.target === document.querySelector('.success') || evt.target === document.querySelector('.success__button')) {
    closeSuccess();
  }
});

export { setUserFormSubmit, closeUploadForm };
