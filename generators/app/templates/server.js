/**
 * Hapi.js server.
 *
 * @type {exports}
 */

var Hapi = require('hapi'),
    modules = require('./modules'),
    Path = require('path'),
    server = new Hapi.Server();

server.connection({
    port: 3000,
    routes: {
        json: {
            space: 4
        }
    }
});

/**
 * The hapijs plugins that we want to use and their configs
 */
// TODO: Implement ability to add plugins via generator
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
 * Setup the server with plugins
 */
server.register(plugins, function (err) {
    if (err) {
        throw err;
    }

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
    for (var route in modules) {
        server.route(modules[route]);
    }

    if (!module.parent) {
        server.start(function () {
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
