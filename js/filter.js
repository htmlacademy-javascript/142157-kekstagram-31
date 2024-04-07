const MAX_COUNT = 10;
const filterContainer = document.querySelector('.img-filters');
const formFilter = filterContainer.querySelector('.img-filters__form');
const defaultFilterButton = formFilter.querySelector('#filter-default');
const randomFilterButton = formFilter.querySelector('#filter-random');
const discussedFilterButton = formFilter.querySelector('#filter-discussed');
const pictureContainer = document.querySelector('.pictures');

const SORTFUNC = {
  random: () => 0.5 - Math.random(),
  discussed: (a, b) => b.comments.length - a.comments.length
};

const CLASSFILTER = {
  inactive: 'img-filters--inactive',
  active: 'img-filters__button--active'
};

const showFilter = () => {
  filterContainer.classList.remove(`${CLASSFILTER.inactive}`);
};

const clearPicture = () => {
  const array = pictureContainer.querySelectorAll('.picture');
  for (let i = 0; i < array.length; i++) {
    array[i].remove();
  }
};

const setClick = (data, renderFunction) => {
  formFilter.addEventListener('click', (evt) => {
    const activeButton = formFilter.querySelector(`.${CLASSFILTER.active}`);
    const targetButton = evt.target;

    if (targetButton === activeButton) {
      return;
    }

    if (targetButton === randomFilterButton) {
      const result = data.toSorted(SORTFUNC.random).slice(0, MAX_COUNT);
      clearPicture();
      renderFunction(result);
    }

    if (targetButton === defaultFilterButton) {
      clearPicture();
      renderFunction(data);
    }

    if (targetButton === discussedFilterButton) {
      const result = data.toSorted(SORTFUNC.discussed);
      clearPicture();
      renderFunction(result);
    }

    activeButton.classList.toggle(`${CLASSFILTER.active}`);
    targetButton.classList.toggle(`${CLASSFILTER.active}`);
  });
};

export { showFilter, setClick };
