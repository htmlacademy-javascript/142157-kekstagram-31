import './gallery.js';
// import './upload-form.js';
import { setUserFormSubmit, closeUploadForm } from './upload-form.js';
import './picture-effects.js';
import { renderThumbnails } from './thumbnails.js';
import { getData } from './api.js';
import { showCloseAlertGetData } from './utils.js';

getData()
  .then((data) => {
    renderThumbnails(data);
  })
  .catch(() => {
    showCloseAlertGetData();
  });

setUserFormSubmit(closeUploadForm);
