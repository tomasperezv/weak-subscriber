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
   * @type {Array} _subscribers
   * @private
   */
  this._subscribers = [];

};

/**
 * @method on
 * @param {String} eventId
 * @return {Promise}
 * @public
 */
WeakSubscriber.prototype.on = function(eventId) {

  var subscriberPromise = new Promise(function(resolve) {
  });

  return subscriberPromise;
};

/**
 * @method trigger
 * @param {String} eventId
 * @param {Object} data
 * @public
 */
WeakSubscriber.prototype.trigger = function(eventId, data) {
};

// Expose the module, it will be singleton instance
module.exports = new WeakSubscriber();
