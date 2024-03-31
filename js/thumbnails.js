import { createArrayPosts } from './create-posts.js';

const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const postsData = createArrayPosts();

const renderThumbnails = () => {
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

  return thumbnailsContainer.append(fragment);
};

export { renderThumbnails, postsData };
