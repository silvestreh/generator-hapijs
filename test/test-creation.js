/*global describe, beforeEach, it */
'use strict';
var path = require('path'),
    helpers = require('yeoman-generator').test;

describe('hapi generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('japi:app', [
                '../../generators/app'
            ], ['test-app']);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        this.timeout(10000);
        var expected = [
            // add files you expect to exist here.
            'test-app/bower.json',
            'test-app/package.json',
            'test-app/server.js',
            'test-app/database.js',
            'test-app/README.md',
            'test-app/modules',
            'test-app/public',
            'test-app/views',
            'test-app/views/partials',
            'test-app/modules/index.js'
        ];

        // helpers.mockPrompt(this.app, {
        //  'someOption': true
        //});
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});
