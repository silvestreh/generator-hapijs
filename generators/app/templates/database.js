var mongoose = require('mongoose'),
    config = require('./config.json'),
    db = mongoose.connection;

if (!config.database.host || !config.database.dbName) {
    throw new Error('Invalid configuration');
}

var dbURI = (config.database.user && config.database.password) ? config.database.user + ':' + config.database.password + '@' + config.database.host : config.database.host,
    dbURI = (config.database.port) ? dbURI + ':' + config.database.port + '/' + config.database.dbName : dbURI + '/' + config.database.dbName;

db.on('connecting', () => console.log('Connecting to Database…'));
db.on('connected', () => console.log('Connected to Database'));
db.on('disconnected', () => console.log('Disconnected from Database'));
db.on('error', (error) => {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

exports.connect = (database) => {
    var db = database || dbURI;

    if (mongoose.connection.readyState === 0) {
        mongoose.connect('mongodb://' + db, (error) => {
            if (error) {
                throw new Error(error);
            }
        });
    }
};

exports.disconnect = () => {
    if (mongoose.connection.readyState === 1) mongoose.disconnect();
};
