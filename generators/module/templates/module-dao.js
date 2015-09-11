/**
 * Dao layer which actually gets <%= name %> from the datastore
 *
 * @type {exports}
 */
var <%= capitalizedName %> = require('./<%= name %>-model');

/**
 * Creates a <%= name %>
 *
 * @param payload - The data to be used to create a <%= name %>
 * @param callback
 */
exports.create = function (payload, callback) {
	var new<%= capitalizedName %> = new <%= capitalizedName %>();

	// new<%= capitalizedName %>.someProperty = payload.someProperty;

    new<%= capitalizedName %>.save(function (error, result) {
		return callback(error, result);
    });
};

/**
 * Get's all <%= pluralName %>
 *
 * @param callback
 */
exports.find = function (callback) {
	<%= capitalizedName %>.find(function (error, results) {
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
	<%= capitalizedName %>.findById(id, function (error, result) {
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
	<%= capitalizedName %>.findById(id, function (error, result) {
		// result.someProperty = payload.someProperty;

	    result.save(function (error, updated<%= capitalizedName %>) {
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
	<%= capitalizedName %>.findById(id, function (error, result) {
		result.remove();
		return callback(error, { success: true });
	});
};

/* Add new methods above */
