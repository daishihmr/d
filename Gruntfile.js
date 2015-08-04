var fs = require("fs");

module.exports = function(grunt) {
    grunt.loadNpmTasks("grunt-closure-compiler");
    grunt.loadNpmTasks("grunt-contrib-concat");
    
    var src = [];
    var scan = function(path) {
        var stats = fs.statSync(path);
        if (stats.isFile()) {
            src.push(path);
        } else {
            fs.readdirSync(path).forEach(function(c) {
                scan(path + "/" + c);
            });
        }
    };
    scan("./src");
    
    var testMenu = [
        "mainloop"
    ];
    
    var compileTasks = testMenu.reduce(function(before, current) {
        before[current] = {
            closurePath: "./tools/google-closure-compiler",
            js: src.concat(["test/" + current + ".js"]),
            jsOutputFile: "test/build/" + current + ".bundle.js",
            maxBuffer: 500,
            options: {
                compilation_level: "ADVANCED_OPTIMIZATIONS",
                warning_level: "VERBOSE",
            },
        };
        return before;
    }, {});

    grunt.initConfig({
        "closure-compiler": compileTasks,
    });
    
    grunt.registerTask("default", ["closure-compiler"]);
};
