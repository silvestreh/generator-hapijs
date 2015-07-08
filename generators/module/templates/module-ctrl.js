/**
 * Controller which handles requests/responses relating to <%= name %>
 *
 * @type {<%= name %>Dao|exports}
 */
var <%= daoName %> = require('./<%= name %>-dao'),
	Boom = require('boom');

/**
 * Creates a <%= name %>
 *
 * @param req
 * @param reply
 */
exports.create = function (req, reply) {
    <%= daoName %>.create(req.payload, function (err, data) {
        if (err) {
            return reply(Boom.wrap(err));
        }
        reply(data);
    });
};

/**
 * Gets all <%= pluralName %>
 *
 * @param req
 * @param reply
 */
exports.find = function (req, reply) {
    <%= daoName %>.find(function (err, data) {
        if (err) {
            return reply(Boom.wrap(err));
        }
        reply(data);
    });
};

/**
 * Get a specific <%= name %> by id
 *
 * @param req
 * @param reply
 */
exports.findById = function (req, reply) {
    <%= daoName %>.findById(req.params.id, function (err, data) {
        if (err) {
            return reply(Boom.wrap(err));
        }
        reply(data);
    });
};

/**
 * Update a specific <%= name %> by id
 *
 * @param req
 * @param reply
 */
exports.update = function (req, reply) {
    <%= daoName %>.update(req.params.id, req.payload, function (err, data) {
        if (err) {
            return reply(Boom.wrap(err));
        }
        reply(data);
    });
};

/**
 * Remove a specific <%= name %> by id
 *
 * @param req
 * @param reply
 */
exports.remove = function (req, reply) {
    <%= daoName %>.remove(req.params.id, function (err, data) {
        if (err) {
            return reply(Boom.wrap(err));
        }
        reply(data);
    });
};

/* Add new methods above */
