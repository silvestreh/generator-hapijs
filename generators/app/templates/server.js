/**
 * Hapi.js server.
 *
 * @type {exports}
 */
 'use strict';

var Hapi = require('hapi'),
    modules = require('./modules'),
    Path = require('path'),
    database = require('./database'),
    server = new Hapi.Server();

server.connection({
    port: process.env.PORT || 3000,
    routes: {
        json: {
            space: 4
        }
    }
});

/**
 * The hapijs plugins that we want to use and their configs
 */
var plugins = [
    {
        register: require('good'),
        options: {
            reporters: [{
                reporter: require('good-console'),
                events: {
                    response: '*',
                    log: '*'
                }
            }]
        }
    },
    { register: require('inert') },
    { register: require('vision') }
    /* { register: require('some-other-plugin') } */
];

/**
 * Setup Views
 */
server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'views'),
    partialsPath: Path.join(__dirname, 'views/partials')
});

/**
 * Server static files from /public
 */
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
});

/**
 * Add all the modules within the modules folder
 */
for (let route in modules) {
    server.route(modules[route]);
}

/**
 * Setup the server with plugins
 */
server.register(plugins, (err) => {
    if (err) throw err;

    if (!module.parent) {
        server.start(() => {
            database.connect();
            console.log('Hapi server started @', server.info.uri);
        });
    }

});

/**
 * Expose the server's methods when used as a require statement
 *
 * @type {exports.server}
 */
module.exports = server;
