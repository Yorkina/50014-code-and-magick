'use strict';

(function() {
  /**
   * @constructor
   */
  var Photo = function(src) {
    this.src = src;
  };

  Photo.prototype.getSrc = function() {
    return this.src;
  };

  window.Photo = Photo;
})();
