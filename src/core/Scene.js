goog.provide("d.Scene");

goog.require("d");
goog.require("d.Element");

/**
 * @constructor
 * @extends {d.Element}
 */
d.Scene = function() {
    d.Element.call(this);
    
    /**
     * @type {d.Application}
     */
    this.app = null;
};

d.Scene.prototype = Object.create(d.Element.prototype);
