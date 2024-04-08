const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

let bigPictureData = '';

const clearPicture = () => {
  const array = thumbnailsContainer.querySelectorAll('.picture');
  array.forEach((element) => element.remove());
};

const renderThumbnails = (postsData) => {
  const fragment = document.createDocumentFragment();

  postsData.forEach(({ id, url, description, likes, comments }) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);
    thumbnail.dataset.id = id;

    const picture = thumbnail.querySelector('.picture__img');
    picture.src = url;
    picture.alt = description;

    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    fragment.append(thumbnail);
  });

  bigPictureData = postsData;
  clearPicture();
  thumbnailsContainer.append(fragment);
};

export { renderThumbnails, bigPictureData };
