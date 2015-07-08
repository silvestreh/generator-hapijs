/**
 * Dao layer which actually gets <%= name %> from the datastore
 *
 * @type {exports}
 */
var database = require('../../database'),
	<%= capitalizedName %> = require('./<%= name %>-model');

/**
 * Creates a <%= name %>
 *
 * @param payload - The data to be used to create a <%= name %>
 * @param callback
 */
exports.create = function (payload, callback) {
	database.connect();
	var new<%= capitalizedName %> = new <%= capitalizedName %>();

	// new<%= capitalizedName %>.someProperty = payload.someProperty;

    new<%= capitalizedName %>.save(function (error, result) {
		database.disconnect();
		return callback(error, result);
    });
};

/**
 * Get's all <%= pluralName %>
 *
 * @param callback
 */
exports.find = function (callback) {
	database.connect();
	<%= capitalizedName %>.find(function (error, results) {
		database.disconnect();
		return callback(error, results);
	});
};

/**
 * Get's a specific <%= name %> by the id
 *
 * @param id  - The id of the <%= name %> to get
 * @param callback
 */
exports.findById = function (id, callback) {
	database.connect();
	<%= capitalizedName %>.findById(id, function (error, result) {
		database.disconnect();
		return callback(error, result);
	});
};

/**
 * Updates a specific <%= name %>
 *
 * @param id      - The id of the <%= name %> to be updated
 * @param payload - The data to be updated
 * @param callback
 */
exports.update = function (id, payload, callback) {
	database.connect();
	<%= capitalizedName %>.findById(id, function (error, result) {
		// result.someProperty = payload.someProperty;

	    result.save(function (error, updated<%= capitalizedName %>) {
			database.disconnect();
			return callback(error, updated<%= capitalizedName %>);
	    });
	});
};

/**
 * Remove a specific <%= name %>
 *
 * @param id      - The id of the <%= name %> to be deleted
 * @param callback
 */
exports.remove = function (id, callback) {
	database.connect();
	<%= capitalizedName %>.findById(id, function (error, result) {
		result.remove();
		database.disconnect();
		return callback(error, { success: true });
	});
};

/* Add new methods above */
