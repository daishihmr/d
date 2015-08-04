window.onload = function() {
    var app = new d.Application();
    
    /** @override */
    app.update = function() {
        if (this.frame == 100) {
            console.log("100!");
        }
    };
    
    app.replaceScene(new MainScene());
    
    app.run();
    
    console.log(app.currentScene);
};

/**
 * @constructor
 * @extends {d.Scene}
 */
var MainScene = function() {
    d.Scene.call(this);
    
    this.on("enterframe", function(e) {
        if (e.app.frame == 103) {
            console.log("103!!!");
        }
    });
};
MainScene.prototype = Object.create(d.Scene.prototype);

/** @override */
MainScene.prototype.update = function(app) {
    if (app.frame == 102) {
        console.log("102!!");
    }
    if (this.app.frame == 102) {
        console.log("102!!");
    }
};
