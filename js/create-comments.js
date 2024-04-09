const COUNT_STEP = 5;
let currentCount = 0;
let comments = [];

const bigPictureContainer = document.querySelector('.big-picture__preview');
const bigPictureShownComments = bigPictureContainer.querySelector('.social__comment-shown-count');
const bigPictureCommentLoaderButton = bigPictureContainer.querySelector('.comments-loader');
const bigPictureCommentsList = bigPictureContainer.querySelector('.social__comments');
const commentsContainer = document.querySelector('.social__comments');

const createComments = () => {
  const fragment = document.createDocumentFragment();
  const data = comments.slice(currentCount, currentCount + COUNT_STEP);
  const renderCommentsCount = data.length + currentCount;

  data.forEach(({ avatar, name, message }) => {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');

    const itemString = `<img
                          class="social__picture"
                          src="${avatar}"
                          alt="${name}"
                          width="35"
                          height="35">
                        <p class="social__text">${message}</p>`;

    comment.insertAdjacentHTML('beforeend', itemString);
    fragment.append(comment);
  });

  commentsContainer.append(fragment);
  bigPictureShownComments.textContent = renderCommentsCount;

  bigPictureCommentLoaderButton.addEventListener('click', createComments);

  if (renderCommentsCount >= comments.length) {
    bigPictureCommentLoaderButton.classList.add('hidden');
    bigPictureCommentLoaderButton.removeEventListener('click', createComments);
  }
  currentCount += COUNT_STEP;
};

const clearComments = () => {
  currentCount = 0;
  bigPictureCommentLoaderButton.classList.remove('hidden');
  bigPictureCommentsList.innerHTML = '';
};

const renderComments = (array) => {
  bigPictureCommentsList.innerHTML = '';
  comments = array;
  createComments();
};


export { createComments, clearComments, renderComments };
