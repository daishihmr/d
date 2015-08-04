goog.provide("d.Element");

goog.require("d");
goog.require("d.EventDispatcher");

/**
 * @constructor
 * @extends {d.EventDispatcher}
 */
d.Element = function() {
    d.EventDispatcher.call(this);
    
    /**
     * @type {Array.<d.Element>}
     */
    this.children = [];
};
d.Element.prototype = Object.create(d.EventDispatcher.prototype);

/**
 * @param {d.Application} app
 */
d.Element.prototype.update = function(app) {};
