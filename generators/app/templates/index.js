'use strict';

/**
 * This file just loads all the *-routes.js files in any /modules/<subdir>.
 *
 * @type {exports}
 */
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

fs.readdirSync(__dirname).forEach((dir) => {
    var currentDir;
    var stat;

	if (dir === 'index.js')	{
        return;
    }

	currentDir = path.join(__dirname, dir);
    stat = fs.statSync(currentDir);

	if (stat && stat.isDirectory()) {
		fs.readdirSync(currentDir).forEach((file) => {
			if (file.indexOf('-routes.js') > 0) {
				let mod = {};
				mod[path.basename(file, '.js')] = require(path.join(currentDir, file));
				_.extend(module.exports, mod);
			}
		});
	}
});
