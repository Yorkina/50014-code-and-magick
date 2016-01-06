'use strict';

(function() {
  /**
   * Список констант кодов нажатых клавиш для обработки
   * клавиатурных событий.
   * @enum {number}
   */
  var Key = {
    'ESC': 27,
    'LEFT': 37,
    'RIGHT': 39
  };
  /**
   * @constructor
   */
  function Gallery() {
    //поиск контейнеров
    this.galleryContainer = document.querySelector('.overlay-gallery');

    //поиск элементов в контейнерах
    this._closeButton = this.galleryContainer.querySelector('.overlay-gallery-close');
    this._turnRight = this.galleryContainer.querySelector('.overlay-gallery-control-right');
    this._turnLeft = this.galleryContainer.querySelector('.overlay-gallery-control-left');

    //привязываем контекст
    this._onCloseClick = this._onCloseClick.bind(this);
    this._onDocumentKeyDown = this._onDocumentKeyDown.bind(this);
    this.show = this.show.bind(this);
    this._onRightClick = this._onRightClick.bind(this);
    this._onLeftClick = this._onLeftClick.bind(this);

    this._currentNumber = this.galleryContainer.querySelector('.preview-number-current');
    this._totalNumber = this.galleryContainer.querySelector('.preview-number-total');
  }

  /**
   * @param {Array.<Object>} photos
   */
  Gallery.prototype.setPictures = function(photos) {
    this.photos = photos;
    this._totalNumber.innerHTML = photos.length;
  };

  /**
   * @param {number} index
   */
  Gallery.prototype.setCurrentPictures = function(index) {
    this._currentIndex = index;
    this._currentNumber.innerText = this._currentIndex + 1;

    /**
     * @type {Image}
     */
    var newPhoto = new Image();
    newPhoto.src = this.photos[index].src;

    var preview = document.querySelector('.overlay-gallery-preview');
    var currentPhoto = preview.querySelector('img');
    if (currentPhoto) {
      preview.removeChild(currentPhoto);
    }
    preview.appendChild(newPhoto);
  };

  /**
   * @param {MouseEvent} evt
   */
  Gallery.prototype.show = function(evt) {
    evt.preventDefault();
    this.galleryContainer.classList.remove('invisible');
    this._closeButton.addEventListener('click', this._onCloseClick);
    this._turnLeft.addEventListener('click', this._onLeftClick);
    this._turnRight.addEventListener('click', this._onRightClick);
    document.body.addEventListener('keydown', this._onDocumentKeyDown);
  };

  Gallery.prototype.hide = function() {
    this.galleryContainer.classList.add('invisible');
    this._closeButton.removeEventListener('click', this._onCloseClick);
    document.body.removeEventListener('keydown', this._onDocumentKeyDown);
    this._turnLeft.removeEventListener('click', this._onLeftClick);
    this._turnRight.removeEventListener('click', this._onRightClick);
  };

  /** @private */
  Gallery.prototype._onCloseClick = function() {
    this.hide();
  };

  /** @private */
  Gallery.prototype._onLeftClick = function() {
    if (this._currentIndex > 0) {
      this.setCurrentPictures(this._currentIndex - 1);
    }
  };

  /** @private */
  Gallery.prototype._onRightClick = function() {
    if (this._currentIndex < this.photos.length - 1) {
      this.setCurrentPictures(this._currentIndex + 1);
    }
  };

  /**
   * @param {KeyboardsEvent} evt
   * @private
   */
  Gallery.prototype._onDocumentKeyDown = function(evt) {
    switch (evt.keyCode) {
      case Key.ESC:
        this.hide();
        break;

      case Key.LEFT:
        this._onLeftClick();
        break;

      case Key.RIGHT:
        this._onRightClick();
        break;
    }
  };

  window.Gallery = Gallery;
})();
