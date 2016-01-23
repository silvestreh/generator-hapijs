/**
 * Dao layer which actually gets <%= name %> from the datastore
 *
 * @type {exports}
 */
const <%= capitalizedName %> = require('./<%= name %>-model');

/**
 * Creates a <%= name %>
 *
 * @param payload - The data to be used to create a <%= name %>
 * @param callback
 */
exports.create = (payload, callback) => {
	var new<%= capitalizedName %> = new <%= capitalizedName %>();

	// new<%= capitalizedName %>.someProperty = payload.someProperty;

    new<%= capitalizedName %>.save((error, result) => {
		return callback(error, result);
    });
};

/**
 * Get's all <%= pluralName %>
 *
 * @param callback
 */
exports.find = (callback) => {
	<%= capitalizedName %>.find((error, results) => {
		return callback(error, results);
	});
};

/**
 * Get's a specific <%= name %> by the id
 *
 * @param id  - The id of the <%= name %> to get
 * @param callback
 */
exports.findById = (id, callback) => {
	<%= capitalizedName %>.findById(id, (error, result) => {
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
exports.update = (id, payload, callback) => {
	<%= capitalizedName %>.findById(id, (error, result) => {
		// result.someProperty = payload.someProperty;

	    result.save((error, updated<%= capitalizedName %>) => {
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
exports.remove = (id, callback) => {
	<%= capitalizedName %>.findById(id, (error, result) => {
		result.remove();
		return callback(error, { success: true });
	});
};

/* Add new methods above */
