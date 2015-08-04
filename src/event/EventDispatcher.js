goog.provide("d.EventDispatcher");

goog.require("d");

/**
 * @constructor
 */
d.EventDispatcher = function() {
    /**
     * @type {Object.<string, Array<Function>>}
     */
    this.eventListeners = {};
};

/**
 * @param {string} eventType
 * @param {Function} callback
 */
d.EventDispatcher.prototype.on = function(eventType, callback) {
    if (this.eventListeners[eventType] === undefined) {
        this.eventListeners[eventType] = [];
    }
    this.eventListeners[eventType].push(callback);

    return this;
};

/**
 * @param {string} eventType
 * @param {Function} callback
 */
d.EventDispatcher.prototype.off = function(eventType, callback) {
    var listeners = this.eventListeners[eventType];
    if (listeners !== undefined) {
        var index = listeners.indexOf(callback);
        if (index >= 0) {
            listeners.splice(index, 1);
        }
    }

    return this;
};

/**
 * @param {string} eventType
 */
d.EventDispatcher.prototype.hasEventListener = function(eventType) {
    return this.eventListeners[eventType] !== undefined && this.eventListeners[eventType].length > 0;
};

/**
 * @param {d.Event} event
 */
d.EventDispatcher.prototype.fire = function(event) {
    var self = this;
    var listeners = this.eventListeners[event.type];
    if (listeners !== undefined) {
        listeners.forEach(function(l) {
            l.call(self, event);
        });
    }

    return this;
};
