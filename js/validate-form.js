const MAX_HASHTAGS_LENGTH = 5;
const REHASHTAG = /^#[a-zа-яё0-9]{1,19}$/;

const ERROR_CHECK = {
  doble: 'Хэштеги дублируются',
  maxtag: 'Не более 5 хэштегов',
  firstchar: 'Хэштег должен начинаться с символа #',
  elementary: 'Хэштег не должен состоять только из # и содеражть спец.символы. Длина хэштега не более 20 символов',
  lattice: '#',
  emptyString: '',
};

const form = document.querySelector('.img-upload__form');
const hashtags = form.querySelector('.text__hashtags');

let errorMessage = '';

const getErrorText = () => errorMessage;

const validateHashtags = (value) => {
  errorMessage = '';
  const hashtagsArray = hashtags.value.toLowerCase().trim().split(' ').filter(Boolean);

  if (value === ERROR_CHECK.emptyString) {
    return true;
  }

  if (hashtagsArray.length !== new Set(hashtagsArray).size) {
    errorMessage = ERROR_CHECK.doble;
    return false;
  }

  if (hashtagsArray.length > MAX_HASHTAGS_LENGTH) {
    errorMessage = ERROR_CHECK.maxtag;
    return false;
  }

  const result = hashtagsArray.every((element) => {
    if (element[0] !== ERROR_CHECK.lattice) {
      errorMessage = ERROR_CHECK.firstchar;

    } else if (!REHASHTAG.test(element)) {
      errorMessage = ERROR_CHECK.elementary;

    } else {
      return true;
    }
  });
  return result;
};

export { validateHashtags, getErrorText };
