/**
 * Unit tests for all the <%= name %> endpoints
 *
 * @type {exports}
 */

var Lab = require('lab'),
    Code = require('code'),
    server = require('../../server'),
    lab = exports.lab = Lab.script();

/**
 * All the tests related to tasks
 */
lab.experiment('Creating <%= name %>', () => {
    lab.test('should be successful', (done) => {
        var options = {
            method: 'POST',
            url: '/<%= pluralName %>',
            payload: {

            }
        };

        server.inject(options, (response) => {
            Code.expect(response.statusCode).to.equal(200);
            done();
        });
    });
});

lab.experiment('Fetching <%= pluralName %>', () => {
    lab.test('should be successful', (done) => {
        var options = {
            method: 'GET',
            url: '/<%= pluralName %>'
        };

        server.inject(options, (response) => {
            Code.expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
