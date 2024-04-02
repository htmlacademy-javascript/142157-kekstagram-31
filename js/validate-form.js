const MAX_HASHTAGS_LENGTH = 5;

const form = document.querySelector('.img-upload__form');
const hashtags = form.querySelector('.text__hashtags');

let errorMessage = '';

const getErrorText = () => errorMessage;

const validateHashtags = (value) => {
  errorMessage = '';
  const reSpaceCount = /\s{2,}/;
  const reHashtag = /^#[a-zа-яё0-9]{1,19}$/;
  const hashtagsArray = hashtags.value.toLowerCase().split(' ');

  if (value === '') {
    return true;
  }

  if (value.search(reSpaceCount) !== -1) {
    errorMessage = 'Для разделения хэштегов достаточно одного пробельного символа';
    return false;
  }

  if (hashtagsArray.length !== new Set(hashtagsArray).size) {
    errorMessage = 'Хэштеги дублируются';
    return false;
  }

  if (hashtagsArray.length > MAX_HASHTAGS_LENGTH) {
    errorMessage = 'Не более 5 хэштегов';
    return false;
  }

  const result = hashtagsArray.every((element) => {
    if (element[0] !== '#') {
      errorMessage = 'Хэштег должен начинаться с символа #';
    } else if (!reHashtag.test(element)) {
      errorMessage = 'Хэштег не должен состоять только из # и содеражть спец.символы. Длина хэштега не более 20 символов';
    } else {
      return true;
    }
  });
  return result;
};

export { validateHashtags, getErrorText };
