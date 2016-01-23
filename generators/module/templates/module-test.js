/**
 * Unit tests for all the <%= name %> endpoints
 *
 * @type {exports}
 */

const Lab = require('lab');
const Code = require('code');
const server = require('../../server');
const lab = exports.lab = Lab.script();

lab.experiment('<%= name %> module', () => {

    lab.test('should create a <%= name %>', (done) => {
        var options = {
            method: 'POST',
            url: '/api/<%= pluralName %>',
            payload: {
                // TODO: Add some validations
            }
        };

        server.inject(options, (response) => {
            Code.expect(response.statusCode).to.equal(200);
            done();
        });
    });

    lab.test('should fetch all <%= pluralName %>', (done) => {
        var options = {
            method: 'GET',
            url: '/api/<%= pluralName %>'
        };

        server.inject(options, (response) => {
            Code.expect(response.statusCode).to.equal(200);
            done();
        });
    });

    lab.test('should update a <%= name %>', (done) => {
        var options = {
            method: 'PUT',
            url: '/api/<%= pluralName %>/507f1f77bcf86cd799439011',
            payload: {
                // TODO: Add some validations
            }
        };

        server.inject(options, (response) => {
            Code.expect(response.statusCode).to.equal(200);
            done();
        });
    });

    lab.test('should delete a <%= name %>', (done) => {
        var options = {
            method: 'DELETE',
            url: '/api/<%= pluralName %>/507f1f77bcf86cd799439011'
        };

        server.inject(options, (response) => {
            Code.expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
