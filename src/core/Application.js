goog.provide("d.Application");

goog.require("d");

/**
 * @constructor
 */
d.Application = function() {

    /**
     *
     */
    this.fps = 60;
    
    /**
     *
     */
    this.frame = 0;
    
    /**
     * @type {d.Scene}
     */
    this.currentScene = new d.Scene();

};

/**
 * @param {d.Scene} scene
 */
d.Application.prototype.replaceScene = function(scene) {
    scene.app = this;
    this.currentScene = scene;

    return this;
};

/**
 * 
 */
d.Application.prototype.run = function() {
    var self = this;

    var before = 0;
    var after = 0;
    var loop = function() {

        before = Date.now();

        self._mainLoop();

        after = Date.now();

        setTimeout(loop, 1000 / self.fps - (after - before));
    };
    loop();

    return this;
};

/**
 *
 */
d.Application.prototype._mainLoop = function() {
    this._update();
    this._render();
};

/**
 *
 */
d.Application.prototype._update = function() {
    this.update();
    updater(this.currentScene, this);
    this.frame += 1;
};

/**
 *
 */
d.Application.prototype.update = function() {};

/**
 *
 */
d.Application.prototype._render = function() {};

/**
 * @param {d.Element} element
 * @param {d.Application} app
 */
var updater = function(element, app) {
    if (element.hasEventListener("enterframe")) {
        var ev = new d.Event("enterframe");
        ev.app = app;
        element.fire(ev);
    }

    element.update(app);
    element.children.forEach(function(c) {
        updater(c, app);
    });
};
