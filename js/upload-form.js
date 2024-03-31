import { isEscapeKey } from './utils.js';
import { pristine } from './validate-form.js';

const uploadForm = document.querySelector('.img-upload__form');
const modalForm = uploadForm.querySelector('.img-upload__overlay');
const closeModalFormButton = uploadForm.querySelector('.img-upload__cancel');
const loaderButton = uploadForm.querySelector('.img-upload__input');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const previewImg = uploadForm.querySelector('.img-upload__preview');
const previewThumbnailsList = uploadForm.querySelectorAll('.effects__preview');

// eslint-disable-next-line no-use-before-define
const oncloseModalFormButton = () => closeUploadForm();

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement === hashtagsInput || document.activeElement === commentInput) {
      evt.stopPropagation();
    } else {
      uploadForm.reset();
      // eslint-disable-next-line no-use-before-define
      closeUploadForm();
    }
  }
};

const openUploadForm = () => {
  document.body.classList.add('modal-open');
  modalForm.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
  closeModalFormButton.addEventListener('click', oncloseModalFormButton);
};

loaderButton.addEventListener('change', () => {
  const file = loaderButton.files[0];
  const img = previewImg.firstElementChild;

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    const url = reader.result;
    img.src = url;

    previewThumbnailsList.forEach((thumbnail) => {
      thumbnail.style.backgroundImage = `url("${url}")`;
    });
    openUploadForm();
  });
  reader.readAsDataURL(file);
});

const closeUploadForm = () => {
  document.body.classList.remove('modal-open');
  modalForm.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
  closeModalFormButton.removeEventListener('click', oncloseModalFormButton);
  loaderButton.value = '';
  uploadForm.reset();
  pristine.reset();
};
