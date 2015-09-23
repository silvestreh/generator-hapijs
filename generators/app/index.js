'use strict';

var path = require('path'),
    yeoman = require('yeoman-generator'),
    yosay = require('yosay');


var HapiGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../../package.json');

        this.on('end', function () {
            this.log(yosay('All done. Now cd into your new project and run npm install.'));
        });
    },

    promptTask: function () {
        // If a module name was passed in to the generator use it, else prompt the user for the module name
        if (this.arguments[0]) {
            this.name = this.arguments[0];
        } else {
            var done = this.async();
            this.prompt({
                type: 'input',
                name: 'name',
                message: 'What do you want to call this project?',
                default: this.name
            }, function (answers) {
                this.name = answers.name;
                done();
            }.bind(this));
        }
    },

    files: function () {
        this.mkdir(this.name);
        this.copy('bower.json', this.name + '/bower.json');
        this.copy('package.json', this.name + '/package.json');
        this.copy('README.md', this.name + '/README.md');
        this.copy('server.js', this.name + path.resolve('/server.js'));
        this.copy('database.js', this.name + path.resolve('/database.js'));
        this.copy('config.json', this.name + path.resolve('/config.json'));
        this.mkdir(this.name + '/modules');
        this.mkdir(this.name + '/views');
        this.mkdir(this.name + '/views/partials');
        this.mkdir(this.name + '/public');
        this.copy('index.js', this.name + path.resolve('/modules/index.js'));
    },

    projectfiles: function () {
        this.copy('jshintrc', this.name + '/.jshintrc');
    }
});

module.exports = HapiGenerator;
