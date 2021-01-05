import './styles.css';
import '../node_modules/material-design-icons/iconfont/material-icons.css';
import count from './count.json';
// import galleryTemplates from '../templates/gallery.hbs';
import photoCardTemplates from '../templates/photo-card.hbs';
// import searchFormTemplates from '../templates/search-form.hbs';

const refs = {
  photoCardConteiner: document.querySelector('.photo-card'),
};

// const galery = galleryTemplates();
const photoCard = photoCardTemplates(count);
// const searchForm = searchFormTemplates();

refs.photoCardConteiner.insertAdjacentHTML('beforeend', photoCard);
