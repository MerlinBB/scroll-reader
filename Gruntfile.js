module.exports = function(grunt) {

    grunt.initConfig({

        // Concat definitions
        concat: {
            dist: {
                src: ["src/jquery.scroll-reader.js"],
                dest: "dist/jquery.scroll-reader.js"
            }
        },

        // Lint definitions
        jshint: {
            files: ["src/jquery.scroll-reader.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },

        // Minify definitions
        uglify: {
            my_target: {
                src: ["dist/jquery.scroll-reader.js"],
                dest: "dist/jquery.scroll-reader.min.js"
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["jshint", "concat", "uglify"]);

};
