import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './utils.js';

// Описание фотографий
const DESCRIPTIONS = [
  'Слово - не воробей. Вообще ничто не воробей, кроме самого воробья.',
  'Если тебе где-то не рады в рваных носках, то и в целых туда идти не стоит.',
  'Многие жалуются на свою внешность, но на мозги не жалуется никто.',
  'Сила – не в бабках. Ведь бабки – уже старые.',
  'Из проведённых 64-х боёв у меня 64 победы. Все бои были с тенью.',
  'Взял нож - режь, взял дошик - ешь.',
  'Я живу, как карта ляжет. Ты живёшь, как мамка скажет.',
  'Если заблудился в лесу, иди домой.',
  'В жизни всегда есть две дороги: одна — первая, а другая — вторая.',
  'Делай, как надо. Как не надо, не делай.',
  'Работа — это не волк. Работа — ворк. А волк — это ходить.',
  'Не будьте эгоистами, в первую очередь думайте о себе!'
];

// Комментарии к фотографии
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Имена авторов комментариев
const NAMES = [
  'Мама Чолли',
  'Аугусто Пиночет',
  'Юрий Гагарин',
  'Элли',
  'Сашка',
  'Зоя',
  'Олеся'
];

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
