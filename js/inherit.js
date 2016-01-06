'use strict';

(function() {
  /**
   * @param {Function} Child
   * @param {Function} Parent
   */
  function inherit(Child, Parent) {
    var EmptyConstructor = function() {};
    EmptyConstructor.prototype = Parent.prototype;
    Child.prototype = new EmptyConstructor();
  }

  window.inherit = inherit;
})();
