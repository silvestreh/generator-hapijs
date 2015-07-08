# generator-hapijs-mongoose

A simple Yeoman generator for Hapi.js + Mongoose + Handlebars applications. Forked from Tom Caflisch's marvelous [generator-hapijs-mongoose](https://github.com/toymachiner62/generator-hapijs-mongoose/).

## Getting Started

#### Installation

To install generator-hapijs-mongoose from npm, run:

    $ npm install -g generator-hapijs-mongoose

#### Usage

##### Main
Scaffolds out a hapijs project.

    $ yo hapijs [project-name]

##### Module
Scaffolds out a module to an existing hapijs project

    $ yo hapijs:module [module-name]

##### Endpoint
Scaffolds out a new endpoint for an existing module

    $ yo hapijs:endpoint  

#### Generated Directory Structure

This hapijs generator assumes that you want your project structure to look like this:

    project-root/
        views/
            view.html
            partials/
                partial-view.html
        public/
        modules/
            module/
                module-ctrl.js
                module-dao.js
                module-model.js
                module-routes.js
                module-test.js
        database.js
        server.js

## Contributing

To run tests:

    $ npm test

To install your local version of this package rather than the NPM published version, fork it and then:

    $ git clone <your forked repo>
    $ cd generator-hapijs-mongoose
    $ npm link
