/**
 * Main entry point for the library.
 */
var WeakSubscriber = function() {

  /**
   * @type {WeakMap} _weakMap
   * @private
   */
  this._weakMap = new WeakMap();

  /**
   * @type {Map} _subscribers
   * @private
   */
  this._subscribers = new Map();

};

/**
 * @method on
 * @param {String} eventId
 * @public
 */
WeakSubscriber.prototype.on = function(eventId) {

  var self = this;

  return {
    then: function(callback) {
      if (!self._weakMap.has(callback)) {
        self._weakMap.set(callback);
        self._subscribers.set(callback, callback);
      }
    }
  };
};

/**
 * @method trigger
 * @param {String} eventId
 * @param {Object} data
 * @public
 */
WeakSubscriber.prototype.trigger = function(eventId, data) {
  this._subscribers.forEach(function(callback) {
    callback();
  });
};

// Expose the module, it will be singleton instance
module.exports = new WeakSubscriber();
