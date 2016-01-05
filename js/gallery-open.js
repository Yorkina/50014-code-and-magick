/* global Gallery: true*/
'use strict';

(function() {

  var gallery = new Gallery();
  var photos = document.querySelectorAll('.photogallery-image');

  Array.prototype.forEach.call(photos, function(item) {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();
      gallery.show();
    });
  });

})();
