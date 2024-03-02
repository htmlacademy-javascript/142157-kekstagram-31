import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './utils.js';
import { DESCRIPTIONS, MESSAGES, NAMES } from './data.js';

// Колличественные значения для генерации данных
const NUMBER_OF_POSTS = 25;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MIN_QUANTITY_COMMENTS = 0;
const MAX_QUANTITY_COMMENTS = 30;
const MIN_QUANTITY_LIKES = 15;
const MAX_QUANTITY_LIKES = 200;

// Создаем ID
const createCommentId = createIdGenerator();
const createPostId = createIdGenerator();
const createUrlPhotoId = createIdGenerator();

// Создание объекта комментария
const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${ getRandomInteger(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

// Создаем новый массив с комментариями
const createArrayComments = () => Array.from({ length: getRandomInteger(MIN_QUANTITY_COMMENTS, MAX_QUANTITY_COMMENTS) }, createComment);

// Создание объекта поста
const createPost = () => ({
  id: createPostId(),
  url: `photos/${ createUrlPhotoId() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_QUANTITY_LIKES, MAX_QUANTITY_LIKES),
  comments: createArrayComments(),
});

// Создаём массив постов
const createArrayPosts = () => Array.from({ length: NUMBER_OF_POSTS }, createPost);

export { createArrayPosts };
