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

const NUMBER_OF_POSTS = 25;

// Получение случайного целого числа в заданном диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получение случайного значения из не пустого массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Создание объекта комментария
const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

// Создаем новый массив с комментариями
const createArrayComments = () => new Array(getRandomInteger(0, 30)).fill(null).map((_element, index) => createComment(index));

// Создание объекта поста
const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createArrayComments(),
});

// Создаём массив постов
const arrayPosts = new Array(NUMBER_OF_POSTS).fill(null).map((_element, index) => createPost(index + 1));
// eslint-disable-next-line no-console
console.log(arrayPosts);
