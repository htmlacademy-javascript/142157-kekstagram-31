import './gallery.js';
import { setUserFormSubmit, closeUploadForm } from './upload-form.js';
import './picture-effects.js';
import { renderThumbnails } from './thumbnails.js';
import { getData } from './api.js';
import { showCloseAlertGetData, debounce } from './utils.js';
import { showFilter, dataFiltering } from './filter.js';

const RERENDER_DELAY = 500;
const debounceRender = debounce(renderThumbnails, RERENDER_DELAY);

getData()
  .then((data) => {
    renderThumbnails(data);
    showFilter();
    dataFiltering(data, debounceRender);
  })
  .catch(() => {
    showCloseAlertGetData();
  });

setUserFormSubmit(closeUploadForm);
