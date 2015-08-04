goog.provide("d.Event");

goog.require("d");

/**
 * @constructor
 * @param {string} type
 */
d.Event = function(type) {
    /** 
     * @type {string}
     */
    this.type = type;
    
    /**
     * @type {d.Application}
     */
    this.app = null;
    
};
