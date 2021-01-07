import './styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import apiService from './apiService';
import photoCardTemplates from '../templates/photo-card.hbs';

// import galleryTemplates from '../templates/gallery.hbs';
// import searchFormTemplates from '../templates/search-form.hbs';

const refs = {
  photoCardConteiner: document.querySelector('.photo-card'),
  searchForm: document.querySelector('#search-form'),
  loadMoreButton: document.querySelector('.js-button'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.loadMoreButton.classList.add('is-hidden');
  if (apiService.query === '') {
    return;
  }
  refs.photoCardConteiner.innerHTML = '';
  form.reset();
  apiService.resetPage();
  apiService.fetchImages().then(apdateArticlesMurkup);
  refs.loadMoreButton.classList.remove('is-hidden');
});

function apdateArticlesMurkup(hits) {
  const markup = photoCardTemplates(hits);
  refs.photoCardConteiner.insertAdjacentHTML('beforeend', markup);
}

refs.loadMoreButton.addEventListener('click', () => {
  apiService.fetchImages().then(apdateArticlesMurkup);
  window.scrollTo({
    top: 100,
    behavior: 'smooth',
  });
});
