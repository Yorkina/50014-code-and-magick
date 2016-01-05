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
    this.photoContainer = document.querySelector('.photogallery');

    //поиск элементов в контейнерах
    this._closeButton = this.galleryContainer.querySelector('.overlay-gallery-close');
    this._turnRight = this.galleryContainer.querySelector('.overlay-gallery-control-right');
    this._turnLeft = this.galleryContainer.querySelector('.overlay-gallery-control-left');

    //привязываем контекст
    this._onCloseClick = this._onCloseClick.bind(this);
    this._onDocumentKeyDown = this._onDocumentKeyDown.bind(this);
  }
  /** @override */
  Gallery.prototype.show = function() {
    this.galleryContainer.classList.remove('invisible');
    this._closeButton.addEventListener('click', this._onCloseClick);
    this._turnLeft.addEventListener('click', this._onLeftClick);
    this._turnRight.addEventListener('click', this._onRightClick);
    document.body.addEventListener('keydown', this._onDocumentKeyDown);
  };
  /** @override */
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
    console.log('click LEFT');
  };

  /** @private */
  Gallery.prototype._onRightClick = function() {
    console.log('click RIGHT');
  };

  /**
   * @param {Event}
   * @private
   */
  Gallery.prototype._onDocumentKeyDown = function(evt) {
    switch (evt.keyCode) {
      case Key.ESC:
        this.hide();
        break;

      case Key.LEFT:
        console.log('work LEFT');
        break;

      case Key.RIGHT:
        console.log('work RIGHT');
        break;
    }
  };

  window.Gallery = Gallery;
})();
