import { bigPictureData } from './thumbnails.js';
import { renderComments } from './create-comments.js';

const bigPicturePreview = document.querySelector('.big-picture__preview');
const bigPictureImg = bigPicturePreview.querySelector('img');
const bigPictureLikes = bigPicturePreview.querySelector('.likes-count');
const bigPictureTotalComments = bigPicturePreview.querySelector('.social__comment-total-count');
const socialCaption = bigPicturePreview.querySelector('.social__caption');

const createBigPicture = (index) => {

  const element = bigPictureData.find((object) => object.id === Number(index));
  bigPictureImg.src = element.url;
  bigPictureImg.alt = element.description;
  socialCaption.textContent = element.description;
  bigPictureLikes.textContent = element.likes;
  bigPictureTotalComments.textContent = element.comments.length;

  const elementComments = element.comments;
  renderComments(elementComments);
};

export { createBigPicture };
