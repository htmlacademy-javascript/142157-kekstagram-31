const MAX_HASHTAGS_LENGTH = 5;

const ERROR_TEXT = {
  doble: 'Хэштеги дублируются',
  maxtag: 'Не более 5 хэштегов',
  firstchar: 'Хэштег должен начинаться с символа #',
  elementary: 'Хэштег не должен состоять только из # и содеражть спец.символы. Длина хэштега не более 20 символов',
  char: '#',
};

const form = document.querySelector('.img-upload__form');
const hashtags = form.querySelector('.text__hashtags');

let errorMessage = '';

const getErrorText = () => errorMessage;

const validateHashtags = (value) => {
  errorMessage = '';
  const reHashtag = /^#[a-zа-яё0-9]{1,19}$/;
  const hashtagsArray = hashtags.value.toLowerCase().trim().split(' ').filter(Boolean);

  if (value === '') {
    return true;
  }

  if (hashtagsArray.length !== new Set(hashtagsArray).size) {
    errorMessage = ERROR_TEXT.doble;
    return false;
  }

  if (hashtagsArray.length > MAX_HASHTAGS_LENGTH) {
    errorMessage = ERROR_TEXT.maxtag;
    return false;
  }

  const result = hashtagsArray.every((element) => {
    if (element[0] !== ERROR_TEXT.char) {
      errorMessage = ERROR_TEXT.firstchar;

    } else if (!reHashtag.test(element)) {
      errorMessage = ERROR_TEXT.elementary;

    } else {
      return true;
    }
  });
  return result;
};

export { validateHashtags, getErrorText };
