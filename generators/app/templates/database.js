var mongoose = require('mongoose'),
    db = mongoose.connection;

var config = {
    user: null,         // User name (leave empty if you don't use authentication)
    pwd: null,          // User password (again, empty if you don't use authentication)
    host: '127.0.0.1',  // Database server
    port: 27017,        // Default Mongo port
    name: 'dbName'      // Database name
};

if (!config.host || !config.name) {
    throw new Error('Invalid configuration');
}

var dbURI = (config.user && config.pwd) ? config.user + ':' + config.pwd + '@' + config.host : config.host,
    dbURI = (config.port) ? dbURI + ':' + config.port + '/' + config.name : dbURI + '/' + config.name;

db.on('connecting', function () {
    console.log('Connecting to Database…');
});

db.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('connected', function () {
    console.log('Connected to Database');
});

db.on('disconnected', function () {
    console.log('Disconnected from Database');
});

exports.connect = function (database) {
    var db = database || dbURI;

    if (mongoose.connection.readyState === 0) {
        mongoose.connect('mongodb://' + db, function (error) {
            if (error) {
                throw new Error(error);
            }
        });
    }
};

exports.disconnect = function () {
    if (mongoose.connection.readyState === 1) mongoose.disconnect();
};
