const MAX_COUNT = 10;
const filterContainer = document.querySelector('.img-filters');
const formFilter = filterContainer.querySelector('.img-filters__form');
const defaultFilterButton = formFilter.querySelector('#filter-default');
const randomFilterButton = formFilter.querySelector('#filter-random');
const discussedFilterButton = formFilter.querySelector('#filter-discussed');

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

const dataFiltering = (data, renderFunction) => {
  formFilter.addEventListener('click', (evt) => {
    const activeButton = formFilter.querySelector(`.${CLASSFILTER.active}`);
    const targetButton = evt.target;

    activeButton.classList.remove(`${CLASSFILTER.active}`);
    targetButton.classList.add(`${CLASSFILTER.active}`);

    switch (targetButton) {
      case activeButton:
        return;
      case randomFilterButton: {
        const filterRandom = data.toSorted(SORTFUNC.random).slice(0, MAX_COUNT);
        return renderFunction(filterRandom);
      }
      case discussedFilterButton: {
        const filterCount = data.toSorted(SORTFUNC.discussed);
        return renderFunction(filterCount);
      }
      case defaultFilterButton:
        return renderFunction(data);
      default:
        throw new Error('Условия не выполнены, проверьте сравниваемые цели функции');
    }
  });
};

export { showFilter, dataFiltering };
