'use strict';
/* global Photo: true, Gallery: true */

(function() {
  var images = document.querySelectorAll('.photogallery-image img');

  /**
   * @returns {Array.<Object>}
   */
  function getPhotos() {
    var photos = Array.prototype.map.call(images, function(item) {
      var newPhoto = new Photo(item.src);
      return newPhoto;
    });
    return photos;
  }

  /**
   * @type {Gallery}
   */
  var gallery = new Gallery();
  gallery.setPictures(getPhotos());

  Array.prototype.forEach.call(images, function(element, index) {

    element.addEventListener('click', function() {
      gallery.setCurrentPictures(index);
    });

    element.addEventListener('click', gallery.show);
  });
})();
