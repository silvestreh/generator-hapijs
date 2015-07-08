/**
 * All the endpoints for anything related to <%= name %>
 *
 * @type {exports}
 */
var Joi = require('joi'),
    <%= controllerName %> = require('./<%= name %>-ctrl');
Joi.objectId = require('joi-objectid');

module.exports = function () {
    return [
        {
            method: 'POST',
            path: '/<%= pluralName %>',
            config: {
                description: 'Creates a <%= name %>',
                handler: <%= controllerName %>.create,
                validate: {
                    payload: {
                        // TODO: Add some validations
                    }
                }
            }
        },
        {
            method: 'GET',
            path: '/<%= pluralName %>',
            config: {
                description: 'Fetches all <%= pluralName %>',
                handler: <%= controllerName %>.find
            }
        },
        {
            method: 'GET',
            path: '/<%= pluralName %>/{id}',
            config: {
                description: 'Fetches a <%= name %> by id',
                handler: <%= controllerName %>.findById,
                validate: {
                    params: {
                        id: Joi.objectId().required()
                    }
                }
            }
        },
        {
            method: 'PUT',
            path: '/<%= pluralName %>/{id}',
            config: {
                description: 'Updates a <%= name %> for a specific id',
                handler: <%= controllerName %>.update,
                validate: {
                    params: {
                        id: Joi.objectId().required()
                    },
                    payload: {
                        // TODO: Add some validations
                    }
                }
            }
        },
        {
            method: 'DELETE',
            path: '/<%= pluralName %>/{id}',
            config: {
                description: 'Remove a <%= name %> for a specific id',
                handler: <%= controllerName %>.remove,
                validate: {
                    params: {
                        id: Joi.objectId().required()
                    }
                }
            }
        }
        /* Add new methods above */
    ];
}();
