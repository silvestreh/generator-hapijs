/**
 * All the endpoints for anything related to <%= name %>
 *
 * @type {exports}
 */
var Joi = require('joi'),
    <%= controllerName %> = require('./<%= name %>-ctrl');
    Joi.objectId = require('joi-objectid')(Joi);

module.exports = () => {
    return [
        {
            method: 'POST',
            path: '/<%= pluralName %>',
            handler: <%= controllerName %>.create,
            config: {
                description: 'Creates a <%= name %>',
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
            handler: <%= controllerName %>.find,
            config: {
                description: 'Fetches all <%= pluralName %>',
            }
        },
        {
            method: 'GET',
            path: '/<%= pluralName %>/{id}',
            handler: <%= controllerName %>.findById,
            config: {
                description: 'Fetches a <%= name %> by id',
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
            handler: <%= controllerName %>.update,
            config: {
                description: 'Updates a <%= name %> for a specific id',
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
            handler: <%= controllerName %>.remove,
            config: {
                description: 'Remove a <%= name %> for a specific id',
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
