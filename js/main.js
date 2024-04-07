import './gallery.js';
import { setUserFormSubmit, closeUploadForm } from './upload-form.js';
import './picture-effects.js';
import { renderThumbnails } from './thumbnails.js';
import { getData } from './api.js';
import { showCloseAlertGetData, debounce } from './utils.js';
import { showFilter, setClick } from './filter.js';

const RERENDER_DELAY = 500;

getData()
  .then((data) => {
    renderThumbnails(data);
    showFilter();
    debounce(setClick(data, renderThumbnails), RERENDER_DELAY);
  })
  .catch(() => {
    showCloseAlertGetData();
  });

setUserFormSubmit(closeUploadForm);
