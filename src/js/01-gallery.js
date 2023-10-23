// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const makeMarkupGallery = (galleryItems) => {
    const markup = galleryItems.map(({preview, description, original}) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join('')
    galleryRef.insertAdjacentHTML('beforeend', markup)
}

makeMarkupGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    
 });
