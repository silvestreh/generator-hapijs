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
exports.create = (req, reply) => {
    <%= daoName %>.create(req.payload, (err, data) => {
        if (err) return reply(Boom.wrap(err));
        reply(data);
    });
};

/**
 * Gets all <%= pluralName %>
 *
 * @param req
 * @param reply
 */
exports.find = (req, reply) => {
    <%= daoName %>.find((err, data) => {
        if (err) return reply(Boom.wrap(err));
        reply(data);
    });
};

/**
 * Get a specific <%= name %> by id
 *
 * @param req
 * @param reply
 */
exports.findById = (req, reply) => {
    <%= daoName %>.findById(req.params.id, (err, data) => {
        if (err) return reply(Boom.wrap(err));
        reply(data);
    });
};

/**
 * Update a specific <%= name %> by id
 *
 * @param req
 * @param reply
 */
exports.update = (req, reply) => {
    <%= daoName %>.update(req.params.id, req.payload, (err, data) => {
        if (err) return reply(Boom.wrap(err));
        reply(data);
    });
};

/**
 * Remove a specific <%= name %> by id
 *
 * @param req
 * @param reply
 */
exports.remove = (req, reply) => {
    <%= daoName %>.remove(req.params.id, (err, data) => {
        if (err) return reply(Boom.wrap(err));
        reply(data);
    });
};

/* Add new methods above */
