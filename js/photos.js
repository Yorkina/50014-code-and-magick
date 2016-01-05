'use strict';
/* global Photo: true, Gallery: true */

(function() {

  var photosContainer = document.querySelector('.photogallery');
  var photosElements = photosContainer.querySelectorAll('.photogallery-image img');

  /**
   * @returns {Array.<Object>}
   */
  function getPhotos() {
    var photos = Array.prototype.map.call(photosElements, function(item) {
      var newPhoto = new Photo(item.src);
      return (newPhoto);
    });
    return photos;
  }

  var gallery = new Gallery();
  gallery.setPictures(getPhotos());

  Array.prototype.forEach.call(photosElements, function(item, index) {

    item.addEventListener('click', function() {
      gallery.setCurrentPictures(index);
    });

    item.addEventListener('click', gallery.show);
  });
})();

