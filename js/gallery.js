import { isEscapeKey } from './utils.js';
import { createBigPicture } from './big-picture.js';
import { clearComments } from './create-comments.js';
import { likeClickHandler } from './likes.js';

const bigPicture = document.querySelector('.big-picture');
const closeBigPictureButton = bigPicture.querySelector('.big-picture__cancel');
const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailsPictureList = thumbnailsContainer.querySelectorAll('.picture__img');
const bigPictureLike = bigPicture.querySelector('.likes-count');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeBigPictureModal();
  }
};

const getIndexTarget = (element) => [...thumbnailsPictureList].indexOf(element);

const openBigPictureModal = (index) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  createBigPicture(getIndexTarget(index));
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureLike.addEventListener('click', likeClickHandler);
};

thumbnailsContainer.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    openBigPictureModal(evt.target);
  }
});

const closeBigPictureModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  bigPictureLike.removeEventListener('click', likeClickHandler);
  clearComments();
};

closeBigPictureButton.addEventListener('click', () => {
  closeBigPictureModal();
});
